import express from 'express'
import expressWs from 'express-ws'
import { Ollama } from 'ollama'
import path from 'path'
import {
  OLLAMA_MODEL,
  OLLAMA_URL
} from './config.mjs'

const ollama = new Ollama({
  host: OLLAMA_URL
})

const { app } = expressWs(express())

app.get('/', (req, res) => {
  res.sendFile(path.resolve(import.meta.dirname, './public/index.html'))
})

app.ws('/websocket', (ws, req) => {
  ws.on('message', async (msg: string) => {

    if (msg === 'cancel') {
      ollama.abort()
    }

    try {
      const response = await ollama.chat({
        model: OLLAMA_MODEL,
        stream : true,
        messages: [
          { role: 'user', content: '日本語は喋れますか？' },
          { role: 'assistant', content: 'はい、ここからの質問は日本語でお答えいたします。' },
          {
            role: 'user', content: msg,
          }
        ],
      })

      for await (const part of response) {
        ws.send(JSON.stringify({
          message: part.message.content,
          done: part.done
        }))
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.name)
      }
    }
  })
})

app.listen(80)
