        function changeLang(obj) {
            var lang = obj.value;
            var lib = new google.translate.TranslateService();
            lib.translatePage('zh-cn', lang, function () {});
        }

        var gtElInit = function gtElInit() {
            var lang = navigator.language||navigator.userLanguage;//常规浏览器语言和IE浏览器
            lang = lang.substr(0, 2);//截取lang前2位字符
            var lib = new google.translate.TranslateService();
            if(lang == "zh"){
                lang = "zh-cn"
            }else{
                lang = "en"
            }
            lib.translatePage('zh-cn', lang, function () {});
        }