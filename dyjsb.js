
let ocr = $ocr.create();

douyin()

function stop() {
    threads.shutDownAll();
    console.log("脚本停止运行");
    exit();
}
// 请求和捕获屏幕截图
function requestAndCaptureScreen() {
    sleep(500); // 等待屏幕内容更新
    let img = captureScreen(); // 直接获取截图
    if (!img) {
        toastLog("截图失败");
        return null;
    }
    return img;
}




function douyin() { //主函数
    while (true) {
        toastLog('清理后台');
        clean_background();
        sleep(2000);
        toastLog('启动抖音极速版');
        start_dyjsb();
        sleep(1000);

        let time1 = random(15000, 20000);
        toastLog('等待 ' + (time1 / 1000).toFixed(2) + ' 秒');
        sleep(time1);

        toastLog('返回去除弹窗');
        shell("input keyevent 4", {
            adb: true
        });
        sleep(5000);
        toastLog('返回去除弹窗');
        shell("input keyevent 4", {
            adb: true
        });
        sleep(1000);
        ksp();
        sleep(1000);
        toastLog('清理后台');
        clean_background();
        sleep(2000);
        toastLog('启动抖音极速版');
        start_dyjsb();
        sleep(1000);

        let time2 = random(15000, 20000);
        toastLog('等待 ' + (time2 / 1000).toFixed(2) + ' 秒');
        sleep(time2);

        toastLog('返回去除弹窗');
        shell("input keyevent 4", {
            adb: true
        });
        sleep(5000);
        toastLog('返回去除弹窗');
        shell("input keyevent 4", {
            adb: true
        });
        sleep(1000);
        zhwz(["赚钱"]);
        sleep(30000);
        let yhzs = zhwz(["以后再说"]);
        if (yhzs === 'click') {
            toastLog("以后再说");
        }

        let time3 = random(15000, 20000);
        toastLog('等待 ' + (time3 / 1000).toFixed(2) + ' 秒');
        sleep(time3);
        toastLog('签到');
        sleep(1000);
        qd();

        let time4 = random(15000, 20000);
        toastLog('等待 ' + (time4 / 1000).toFixed(2) + ' 秒');
        sleep(time4);
        toastLog('开宝箱');
        sleep(1000);
        kbx();

        let time5 = random(15000, 20000);
        toastLog('等待 ' + (time5 / 1000).toFixed(2) + ' 秒');
        sleep(time5);
        toastLog('看广告');
        sleep(1000);
        kgg();

        let time6 = random(15000, 20000);
        toastLog('等待 ' + (time6 / 1000).toFixed(2) + ' 秒');
        sleep(time6);
        toastLog('去逛街');
        qgj();

        let time7 = random(15000, 20000);
        toastLog('等待 ' + (time7 / 1000).toFixed(2) + ' 秒');
        sleep(time7);
        qgj();
    }
}



function qd() { // 签到
    zhwz(["签到"]);
    sleep(random(5000, 8000));
    zhwz(["立即签到","签到奖励已翻倍","签到奖励"]);
    sleep(random(5000, 8000));

    let qd = zhwz(["看广告视频再赚"]);
    if (qd === 'click') {
        while (true) {
            sleep(random(60000, 80000)); // 等待60-80秒
            toastLog("返回");
            shell("input keyevent 4", { adb: true });
            sleep(random(7000, 10000));

            // 检查是否出现“进入小游戏”,如果出现进入养号
            let xyx = zhwz(["进入小游戏"]);
            if (xyx === 'click') {
                toastLog("进入小游戏");
                sleep(random(7000, 10000));
                zhwz(["允许"])
                sleep(random(30000, 40000));
                shell("input keyevent 4", { adb: true });
                sleep(random(7000, 10000));
                zhwz(["残忍离开"]);
                sleep(random(3000, 4000));
                shell("input keyevent 4", { adb: true });
                sleep(random(3000, 4000));
            }

            // 检查是否出现“领取奖励”
            let rewardCheck = zhwz(["领取奖励"]);
            if (rewardCheck === 'click') {
                toastLog("点击领取奖励");
                continue; // 找到领取奖励，继续循环
            }

            // 检查“评价并收下金币”
            let evaluationCheck = zhwz(["评价并收下金币"]);
            if (evaluationCheck === 'click') {
                toastLog("评价并收下金币");
                break; // 退出循环
            }
        }
    }
}




function ksp() { //看视频
    toastLog('看一会视频');
    let randomsp = random(25, 30);
    for (var i = 0; i < randomsp; i++) {
        toastLog("第" + (i + 1) + "/" + randomsp + "次滑动")
        var width = device.width;
        var height = device.height;
        var x = random(width * 0.48, width * 0.52);
        var y = random(height * 0.75, height * 0.9);
        var x2 = random(width * 0.48, width * 0.52);
        var y2 = random(height * 0.3, height * 0.4);
        var t = random(1000, 1500);

        shell(`input swipe ${x} ${y} ${x2} ${y2} ${t}`, {
            adb: true
        });
        toastLog("返回一次去除弹窗");
        sleep(1000);
        shell("input keyevent 4", {
            adb: true
        });
        let Time = random(10000, 15000);
        toastLog('等待 ' + (Time / 1000).toFixed(2) + ' 秒');
        sleep(Time);
        let mfzx = zhwz(["免费咨询", "查询学费", "点击查看", "查看价格",]);
        if (mfzx === 'click') {
            toastLog("点击免费咨询");
            let Time = random(7000, 10000);
            toastLog('等待 ' + (Time / 1000).toFixed(2) + ' 秒');
            sleep(Time);
            let randomsp = random(12, 15);
            for (var i = 0; i < randomsp; i++) {
                toastLog("第" + (i + 1) + "/" + randomsp + "次滑动")
                var width = device.width;
                var height = device.height;
                var x = random(width * 0.48, width * 0.52);
                var y = random(height * 0.75, height * 0.9);
                var x2 = random(width * 0.48, width * 0.52);
                var y2 = random(height * 0.3, height * 0.4);
                var t = random(1000, 1500);

                shell(`input swipe ${x} ${y} ${x2} ${y2} ${t}`, {
                    adb: true
                });
                sleep(3000);
            }
        }
    }
}



function kgg() { //看广告
    for (var j = 0; j < 10; j++) {
        let kgg = zhwz(["看广告赚金币"]);
        if (kgg === 'click') {
            while (true) {
                sleep(random(60000, 80000)); // 等待60-80秒
                toastLog("返回");
                shell("input keyevent 4", { adb: true });
                sleep(random(7000, 10000));

                // 检查是否出现“进入小游戏”,如果出现进入养号
                let xyx = zhwz(["进入小游戏"]);
                if (xyx === 'click') {
                    toastLog("进入小游戏");
                    sleep(random(7000, 10000));
                    zhwz(["允许"])
                    sleep(random(30000, 40000));
                    shell("input keyevent 4", { adb: true });
                    sleep(random(7000, 10000));
                    zhwz(["残忍离开"]);
                    sleep(random(3000, 4000));
                    shell("input keyevent 4", { adb: true });
                    sleep(random(3000, 4000));
                }

                // 检查是否出现“领取奖励”
                let rewardCheck = zhwz(["领取奖励"]);
                if (rewardCheck === 'click') {
                    toastLog("点击领取奖励");
                    continue; // 找到领取奖励，继续循环
                }

                // 检查“评价并收下金币”
                let evaluationCheck = zhwz(["评价并收下金币"]);
                if (evaluationCheck === 'click') {
                    toastLog("评价并收下金币");
                    break; // 退出循环
                }
            }
        }
    }
    // 获取屏幕分辨率
    var width = device.width;
    var height = device.height;

    // 如果没有找到文字，执行滑动操作
    var x = random(width * 0.48, width * 0.52);
    var y = random(height * 0.75, height * 0.9);
    var x2 = random(width * 0.48, width * 0.52);
    var y2 = random(height * 0.3, height * 0.4);
    var t = random(1000, 1500);

    shell(`input swipe ${x} ${y} ${x2} ${y2} ${t}`, {
        adb: true
    });
    sleep(3000);
}



function kbx() { //开宝箱
    let bx = zhwz(["开宝箱得金币", "点击立得"]);
    if (bx === 'click') {
        sleep(random(7000, 10000));
        let kgg = zhwz(["看广告视频再赚"]);
        if (kgg === 'click') {
            while (true) {
                sleep(random(60000, 80000)); // 等待60-80秒
                toastLog("返回");
                shell("input keyevent 4", { adb: true });
                sleep(random(7000, 10000));

                // 检查是否出现“进入小游戏”,如果出现进入养号
                let xyx = zhwz(["进入小游戏"]);
                if (xyx === 'click') {
                    toastLog("进入小游戏");
                    sleep(random(7000, 10000));
                    zhwz(["允许"])
                    sleep(random(30000, 40000));
                    shell("input keyevent 4", { adb: true });
                    sleep(random(7000, 10000));
                    zhwz(["残忍离开"]);
                    sleep(random(3000, 4000));
                    shell("input keyevent 4", { adb: true });
                    sleep(random(3000, 4000));
                }

                // 检查是否出现“领取奖励”
                let rewardCheck = zhwz(["领取奖励"]);
                if (rewardCheck === 'click') {
                    toastLog("点击领取奖励");
                    continue; // 找到领取奖励，继续循环
                }

                // 检查“评价并收下金币”
                let evaluationCheck = zhwz(["评价并收下金币"]);
                if (evaluationCheck === 'click') {
                    toastLog("评价并收下金币");
                    break; // 退出循环
                }
            }
        }
    }
}



function qgj() { //去逛街
    let qgj = zhwz(["逛街赚钱"]);
    if (qgj === 'click') {
        // 获取屏幕分辨率
        let randomsp = random(25, 30);
        for (var j = 0; j < randomsp; j++) {
            toastLog("第 " + (j + 1)+"/"+randomsp+ " 次滑动");
            var width = device.width;
            var height = device.height;

            // 如果没有找到文字，执行滑动操作
            var x = random(width * 0.48, width * 0.52);
            var y = random(height * 0.75, height * 0.9);
            var x2 = random(width * 0.48, width * 0.52);
            var y2 = random(height * 0.3, height * 0.4);
            var t = random(1000, 1500);

            shell(`input swipe ${x} ${y} ${x2} ${y2} ${t}`, {
                adb: true
            });
            sleep(random(7000, 10000));
        }
        shell("input keyevent 4", { adb: true });
        sleep(random(3000, 5000));
        zhwz(["坚持退出"]);
        sleep(random(7000, 10000));
        zhwz(["评价并收下金币"]);
    }
}



function kzb() { //去直播间宝箱
    let kzb = zhwz(["去直播间宝箱"]);
    if (kzb === 'click') {
        sleep(random(20000, 30000));
        let randomsp = random(15, 20);
        for (var i = 0; i < randomsp; i++) {
            toastLog("第 " + (i + 1)+"/"+randomsp+" 次滑动");
            let ljb = zhwz(["领金币"]);
            if (ljb === 'click') {
                sleep(random(7000, 10000));
                let kbx = zhwz(["开宝箱"]);
                if (kbx === 'click') {
                    sleep(random(7000, 10000));
                    shell("input keyevent 4", { adb: true });
                }
                sleep(random(7000, 10000));
                shell("input keyevent 4", { adb: true });
            }
        }
        sleep(random(7000, 10000));
        shell("input keyevent 4", { adb: true });
    }
}


/* *********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/



function sbwz(textArray) { // 识别并点击文字，不返回结果
    let img = requestAndCaptureScreen(); // 获取屏幕截图
    if (!img) {
        return;
    }
    const resultList = ocr.detect(img);
    img.recycle(); // 释放截图资源
    if (resultList && resultList.length > 0) {
        for (var i = 0; i < resultList.length; i++) {
            var o = resultList[i];
            var resultWorld = o.text;
            var position = o.bounds;
            for (var j = 0; j < textArray.length; j++) {
                var resRegExp = new RegExp(".*" + textArray[j] + ".*");
                var MatchingResults = resRegExp.test(resultWorld);

                if (MatchingResults) {
                    console.log(resultWorld);
                    console.log("识别到了：" + textArray[j]);
                    console.log(resRegExp + "的坐标为：");

                    var y = (position.bottom + position.top) / 2;
                    var x = (position.left + position.right) / 2;

                    console.log(x + "," + y);
                    shell(`input tap ${x} ${y}`, {
                        adb: true
                    });
                    toastLog("点击了目标文字：" + textArray[j] + "，坐标为：" + x + "," + y);

                    return; // 识别并点击后立即退出函数
                }
            }
        }
    }
}



function zhwz(textArray) {
    // 识别到最后的文字并点击
    let img = captureScreen();
    if (!img) {
        return 'null';
    }

    const resultList = ocr.detect(img);
    img.recycle(); // 释放截图资源
    let lastMatch = null; // 用于保存最后一个匹配的文本和坐标

    if (resultList && resultList.length > 0) {
        for (let i = 0; i < resultList.length; i++) {
            var o = resultList[i];
            var resultWorld = o.text;
            var position = o.bounds;

            for (let j = 0; j < textArray.length; j++) {
                var resRegExp = new RegExp(".*" + textArray[j] + ".*"); // 使用传入的text构建正则表达式
                var MatchingResults = resRegExp.test(resultWorld); // 测试文字是否匹配
                if (MatchingResults) {
                    console.log("识别到了: " + resultWorld);
                    lastMatch = {
                        x: (position.left + position.right) / 2,
                        y: (position.top + position.bottom) / 2
                    }; // 记录最后一个匹配的坐标
                }
            }
        }

        if (lastMatch) {
            // 如果找到了匹配的文本，则点击最后一个匹配的坐标
            console.log("最后匹配的文字坐标为：" + lastMatch.x + "," + lastMatch.y);
            shell(`input tap ${lastMatch.x} ${lastMatch.y}`, {
                adb: true
            });
            toastLog("找到了文字并点击了！");
            return 'click';
        }
    } else {
        console.log("没有识别到任何文字");
    }
    return 'null';
}



function sbfh(textArray) { // 识别返回
    let img = requestAndCaptureScreen(); // 获取屏幕截图
    if (!img) {
        return;
    }
    const resultList = ocr.detect(img);
    img.recycle(); // 释放截图资源
    if (resultList && resultList.length > 0) {
        for (var i = 0; i < resultList.length; i++) {
            var o = resultList[i];
            var resultWorld = o.text;
            for (var j = 0; j < textArray.length; j++) {
                var resRegExp = new RegExp(".*" + textArray[j] + ".*");
                var MatchingResults = resRegExp.test(resultWorld);

                if (MatchingResults) {
                    console.log("识别到了：" + textArray[j]);
                    shell("input keyevent 4", {
                        adb: true
                    });
                    return; // 识别并点击后立即退出函数
                }
            }
        }
    }
}



function sbmjg(textArray) { // 识别，不返回结果
    let img = requestAndCaptureScreen(); // 获取屏幕截图
    if (!img) {
        return;
    }

    const resultList = ocr.detect(img);
    img.recycle(); // 释放截图资源
    if (resultList && resultList.length > 0) {
        for (var i = 0; i < resultList.length; i++) {
            var o = resultList[i];
            var resultWorld = o.text;
            for (var j = 0; j < textArray.length; j++) {
                var resRegExp = new RegExp(".*" + textArray[j] + ".*");
                var MatchingResults = resRegExp.test(resultWorld);

                if (MatchingResults) {
                    console.log("识别到了：" + textArray[j]);
                    return; // 识别并点击后立即退出函数
                }
            }
        }
    }
}



function start_dyjsb() { // 启动抖音极速版
    sleep(1000);
    shell(" input keyevent 3", {
        adb: true
    });
    sleep(1000);
    shell("am start -n com.ss.android.ugc.aweme.lite/com.ss.android.ugc.aweme.main.MainActivity", {
        adb: true
    });
}



function clean_background() { // 清理后台
    var coordinates = [{
        x: device.width * 0.50,
        y: device.height * 0.84
    },
    {
        x: device.width * 0.50,
        y: device.height * 0.88
    },
    {
        x: device.width * 0.50,
        y: device.height * 0.93
    }];
    for (var i = 0; i < coordinates.length; i++) {
        shell("input keyevent 3", {
            adb: true
        });
        sleep(2000);
        shell("input keyevent 82", {
            adb: true
        });
        sleep(2000);
        var x = coordinates[i].x;
        var y = coordinates[i].y;
        shell(`input tap ${x} ${y}`, {
            adb: true
        });
        sleep(1500);
        shell("input keyevent 3", {
            adb: true
        });
        sleep(2000);
    }
}
