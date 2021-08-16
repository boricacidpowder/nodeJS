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



app.use((req, res, next) =>{
	console.log('모든 요청에 다 실행됩니다.');
	next();
});

app.get('/', (req, res, next) =>{
	console.log('GET / 요청에만');
	next();
},(req, res)=>{
	throw new Error('에러는 에러처리 미들웨어로 갑니다.');
});



app.get('/',(req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
});


app.listen(app.get('port'), () => {
	console.log(app.get('port'), '에서 대기중');
});
