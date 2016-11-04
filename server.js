var express = require('express');
var app     = express();

// 3080番を指定
var port = process.env.PORT || 3080;

//========================================
// APIルートの作成
//========================================

// expressでAPIサーバを使うための準備
var router = express.Router();

router.use( function( req, res, next ) {
	next();
});

// http://localhost:3000/api/ へのアクセス。
router.get( '/', function(req, res) {
	res.json( { message: 'Successfully Posted a test message.' } );
});

// http://localhost:3000/api/value/任意の値 へのアクセス。
router.get( '/value/:val', function(req, res) {
	// :VAL で指定した値は req.params.VAL で取得できる。
	res.json( { message: 'Get value: ' + req.params.val, value: req.params.val } );
});

//========================================
// ルートの登録
//========================================

// 静的ページ用のルートを作成
// 例えば http://localhost:3080/sample.txt にアクセスすると public/sample.txt にアクセスする。 
// /で終わる場合、index.htmlを読み込むのがWebサーバーのデフォルト挙動として多いので、それにも対応している。
// 具体的には http://localhost:3080/ にアクセスすると public/index.html にアクセスする。
app.use( express.static( './public/' ) );
// /api以下のルートを登録。
// http://localhost:3080/api/... のアクセスはこちらになる。
app.use('/api', router);

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
