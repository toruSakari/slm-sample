# slm-sample

## Run docker
````sh
docker-compose up -d
````

## Pull phi3 model in ollama_container
````sh
docker exec -it ollama_container
```` 

````sh
ollama pull phi3
````

## Run script in server_container
````sh
docker exec -it server_container
```` 

````sh
yarn start
````

Open the url below
[[http://localhost/](http://localhost/)]

## Example of answer

### Ask

````
あなたは小規模言語モデルですか？
また小規模言語モデルは、データを自社内に保持したいことがある規制産業や部門にとって有効とありますが、それはなぜでしょうか？
````

### Answer

````
 はい、私は小規模言語モデルの一例です。小規模言語モデルを利用することによって、以下の理由が考えられます：


1. **コスト効率**: 大規模なデータセットや高度な機能を必要とするモデルは運用コストに大きく影響します。小規模モデルは、必要最低限の機能を提供しながらコストが抑えられます。


2. **データプライバシー**: 特定のビジネスや秘密保持において、外部からのデータアクセスを避けることでデータのプライバシーが守られます。


3. **自社のコントロール**: 内部のデータベースに留めたモデルは、個人データや重要な情報をより保護しやすくなります。


4. **速度とパフォーマンス**: 小規模モデルは比較的即時に応答できるため、特に軽量化が求められるアプリケーションに適しています。
````
