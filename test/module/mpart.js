//모듈에 관하여
var M = {
	v:'v',
	f:function() {
		console.log(this.v);
	}
}

module.exports = M;  // 다른 파일에서도 M 객체를 사용할 수 있게 해줌
