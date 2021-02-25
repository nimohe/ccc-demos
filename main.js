let demoName, currUrl;
const DEVICE_TYPE = {
    'pc': 'web-desktop',
    'mobile': 'web-mobile'
}
let project = {
    'timber-man': {
        'mobile': 'https://nimomoe.gitee.io/ccc-web-mobile-group//timber-man/web-mobile/index.html',
        'pc': 'https://nimomoe.gitee.io/ccc-web-mobile-group//timber-man/web-desktop/index.html'
    },
    'gold-miner':{
    	'mobile':'https://nimomoe.gitee.io/ccc-web-mobile-group/gold-miner/web-mobile/index.html',
    	'pc':'https://nimomoe.gitee.io/ccc-web-mobile-group/gold-miner/web-desktop/index.html'
    }
}

window.onload = function() {
    console.log('hi', document.location.href);
    if (document.location.href.indexOf('#') > -1) {
        // currUrl = document.location.href.split('#')[0];
        demoName = document.location.href.split('#')[1];
        let deviceType = checkDeviceTypeIsPC();
        let fullAdress = project[demoName][deviceType];
        // newLink = currUrl + '/' + demoName + '/'+deviceType+'/index.html';
        newLink = fullAdress;
        //http://localhost:8000/#timber-man
        console.log(newLink);
        // test = timber-man
        

        // console.log(navigator.userAgent);
        // 再检测一下 是否是 微信
        var wx = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;

        if (wx) {
            // console.log("是微信");
            newLink=project[demoName]['mobile'];
        } else {
            // console.log("不是微信");
        }

        document.location.href = newLink;
    }

}


function checkDeviceTypeIsPC() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        return 'mobile';
    } else {
        return 'pc';
    }
}