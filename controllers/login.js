var md5 = require('md5');

exports.login = function(req, res) {
    const req_data = req.body;
    let pws = req_data.pws;
    let params = req_data.name;
    if (params != '红羊毛') {
        return res.send({ success: false, data: '用户名错误' });
    }
    if (pws != 'abc123456') {
        return res.send({ success: false, data: '密码错误' });
    }
    let token = md5((new Date()).getTime() + params + pws + '其他固定字符');
    return res.send({
        success: true,
        data: {
            name: '红羊毛',
            Age: '18',
            sex: '1',
            loginTime: new Date().getTime(),
            HeadImg: 'http://img.hellowbs.com/a1.jpg',
            Token: token
        }
    });
}