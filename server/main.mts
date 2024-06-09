import { Ollama } from 'ollama'
import {
  OLLAMA_MODEL,
  OLLAMA_URL
} from './config.mjs'

const ollama = new Ollama({
  host: OLLAMA_URL
})

const response = await ollama.chat({
  model: OLLAMA_MODEL,
  stream : true,
  messages: [
    { role: 'user', content: '日本語は喋れますか？' },
    { role: 'assistant', content: 'はい、ここからの質問は日本語でお答えいたします。' },
    { role: 'user', content: 'あなたのような小規模言語モデルはどのような場面での利用が適してますか？' }
  ],
})

for await ( const  part  of  response )  {
  process.stdout.write(part.message.content )
}
