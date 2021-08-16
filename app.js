const express = require('express'),
	path = require('path'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	dotenv = require('dotenv'),
	bodyParser = require('body-parser'),
	multer = require('multer'),
	fs = require('fs');


dotenv.config();
const indexRouter = require('./routes'),
	userRouter = require('./routes/user');
const app = express();
app.set('port', process.env.PORT || 3000);
//pug 사용
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'pug');

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(session({
	resave: false,
	saveUninitialized: false,
	sevret: process.env.COOKIE_SECRET,
	cookie: {
		httpOnly: true,
		secure: false,
	},
	name: 'session-cookie',
}));

//라우터 설정
app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
	res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
	console.log(err)
	res.status(500).send(err.message);
});

try {
	fs.readdirSync('upload');
} catch (error) {
	console.error('upload 폴더가 없어서 생성합니다.');
	fs.mkdirSync('upload');
}

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, done) {
			done(null, 'upload/');
		},
		filename(req, file, done){
			const ext = path.extname(file.originalname);
			done(null, path.basename(file.originalname, ext) + Data.now() + ext);
		},
	}),
	limits: { fileSize: 5 * 1024 * 1024},
});

app.post('/upload', upload.array('image'), (req, res) => {
	console.log(req.file, req.body)
	res.send('ok');
})
app.post('/upload',
		upload.fields([{ name: 'image1'} , { name: 'image2'}]),
		(req, res) => {
			console.log(req.filesm, req.body);
			res.send('ok');
		},
	);


// 404 처리 미들웨어
app.use(function(req, res, next) {
  next(createError(404));
});

// 에러 핸들러
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
	console.log(app.get('port'), '에서 대기중');
});

module.exports = app;
