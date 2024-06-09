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
    {
      role: 'user', content: `
        あなたは小規模言語モデルですか？
        また小規模言語モデルは、データを自社内に保持したいことがある規制産業や部門にとって有効とありますが、それはなぜでしょうか？`
    }
  ],
})

for await ( const  part  of  response )  {
  process.stdout.write(part.message.content )
}
