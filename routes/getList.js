var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    let start = req.query.start ? req.query.start : 0;
    let end = req.query.end ? req.query.end : 0;
    getDate(start, end, res)
});
router.post('/', (req, res) => {
    let start = req.body.start ? req.body.start : 0;
    let end = req.body.end ? req.body.end : 0;
    getDate(start, end, res);
});

getDate = (start, end, res) => {
    let data = [];
    let xingshi = [
        '郭山彤', '梁敦厦', '霍负浪', '虞信品', '马仁毅', '冯州龙', '简务帅', '黎丙赣', '谢尉争', '赵单',
        '孟航沛', '龚开梦', '黄蓝风', '易堃登', '蔡农仲', '高洪泉', '巫家昱', '赵道霄', '章学共', '乐武亮',
        '费宜鸿', '张津广', '梁胤鸣', '吕、聪', '蒋进如', '林豪谱', '孙剑佛', '魏成贯', '卫耿羿', '谢协湃',
        '岑刚飘', '吴资龙', '陈仓翼', '刘枝迟', '尤帅齐', '孙彩武', '陈莉汐', '程欢亭', '邬肖任', '尤政航',
        '颜东鑫', '欧有皆', '高季晨', '孙奎汝', '龚韶釜', '费汐家', '钱铮友', '沈锵良', '傅、利', '雷友水',
        '庄蒙少', '陈茗卓', '梁兴力', '欧谱班', '史霄灼', '柳庭沛', '宁儒熙', '吴越潇', '刘中舟', '曹讯波'
    ];
    data.length
    for (var index = 0; index < 389; index++) {
        data.push({
            id: index + 1,
            name: xingshi[Math.floor(Math.random() * 60)],
            age: Math.floor(Math.random() * 80),
            height: Math.floor(Math.random() * 140 + 40) + "cm",
        })
    };
    return res.send({
        success: true,
        data: data.slice(start, end),
        dataLength: data.length
    });
}

module.exports = router;