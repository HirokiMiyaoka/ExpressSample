# Expressのサンプル

Node.jsのExpressの簡易サンプル。

## 準備

このリポジトリをクローン後、ディレクトリに移動し、以下コマンドを実行。

```
npm i
```

これで必要モジュールがインストールされる。

## 実行

サーバーの実行は以下コマンド

```
npm run server
```

これでserver.jsをNode.jsに実行させることができる。
ポート番号は3080を使う。

## 大雑把な説明

### ファイル構造

* server.js
    * APIとWebサーバー本体
    * http://localhost:3080/api/... をAPIアクセスとして処理しそれ以外はpublic/にある静的なファイルを返す。
* package.json
    * Node.jsの設定ファイル。必要なジュールや実行コマンドが書いてあり、npmコマンド経由で実行可能
* public/
    * ここに静的にアクセス可能なファイルを置く。
    * http://localhost:3080/... にアクセスしたとき、public/... のファイルを読み取ろうとする。

## やってること

* サーバー側ではAPIだけでなくWebサーバーとしても稼働させ、HTMLページなどにアクセス可能なようにしておく。
* ブラウザ側ではボタンを押すとテキスト入力欄にあるデータをサーバーに送る。
    * 送り先は /api/echo/
* サーバー側では叩かれたAPIに対して処理を行う。
    * /api/ はメッセージを返す。
    * /api/echo/値 は与えられた値を含むメッセージを返す。
* APIの返ってきたブラウザ側では、値を出力する。
    * APIの返り値をJSONに変換して処理しやすいように変換した後、文字列に戻して出力する無駄仕様。
