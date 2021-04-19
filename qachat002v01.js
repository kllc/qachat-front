
(function(){

    'use strict';
    
    var atag = document.getElementById('qachat-atag');
    var iframe = document.createElement('iframe');
    var div =  document.createElement('div');
    var i =0;

    //mobile phone variable
    if (window.matchMedia( "(max-width: 768px)" ).matches) {
        atag.dataset.ifrWidth = "60%";
        atag.dataset.ifrHeight = "100%";
        atag.dataset.ifrBottom = "0";
        atag.dataset.ifrLeft = "";
        atag.dataset.ifrRight = "0";
        atag.dataset.atagWidth = "50%";
        atag.dataset.atagRight = "10px";
        atag.dataset.atagBottom = "0";
        atag.dataset.divTop = "10px";
        atag.dataset.divLeft = "";
        atag.dataset.divRight = "10px";

        if (navigator.userAgent.indexOf('iPhone') > 0) {
            iframe.addEventListener('load', (function (element) {
                return function () {
                    element.contentWindow.document.addEventListener('focusin', 
                        function () {
                            //Iphoneのキーボードの高さが取れないので仕方なく
                            iframe.style.height ="60%";
                            //入力候補がでたときにボタンが隠れないように
                            iframe.style.paddingBottom = "20px";
                            //後ろのＡタグを消す
                            atag.style.opacity = 0;
                        }
                    );
                    element.contentWindow.document.addEventListener('focusout', 
                        function () {
                            iframe.style.height ="100%";
                            iframe.style.paddingBottom = "";
                            atag.style.opacity = 1;
                        }
                    );
                };
            })(iframe), false);
        }
    }
    if (window.matchMedia( "(max-width: 750px)" ).matches) {
        atag.dataset.ifrWidth = "100%";
    }

    //iframe style
    iframe.style.opacity = 0;
    iframe.style.backgroundColor = 'white';
    iframe.scrolling = 'yes';
    iframe.frameBorder = 0;
    iframe.marginWidth = 0;
    iframe.marginHeight = 0;
    iframe.id = 'qachat-iframe';
    iframe.style.position ='fixed';
    iframe.style.borderRadius = '3%';
    iframe.style.overflow = 'hidden';

    //iframe variable style
    if (!atag.dataset.ifrZindex) {
	    iframe.style.zIndex = 2147483646;
    } else {
        iframe.style.zIndex = atag.dataset.ifrZindex;
    }

    if (!atag.dataset.ifrWidth) {
        iframe.style.width = '400px';
    } else {
        iframe.style.width = atag.dataset.ifrWidth;
    }

    if (!atag.dataset.ifrHeight) {
        iframe.style.height = '460px';
    } else {
        iframe.style.height = atag.dataset.ifrHeight;
    }

    if (!atag.dataset.ifrBottom) {
        if (!atag.dataset.ifrTop) {
            iframe.style.bottom = '40px';
        } else {
            iframe.style.top = atag.dataset.ifrTop;
        }
    } else {
        iframe.style.bottom = atag.dataset.ifrBottom;
    }
   
    if (!atag.dataset.ifrRight) {
        if (!atag.dataset.ifrLeft) {
            iframe.style.right = '10px';
        } else {
            iframe.style.left = atag.dataset.ifrLeft;
        }
    } else {
        iframe.style.right = atag.dataset.ifrRight;
    }

    iframe.src = '//cdn.microsoft365.jp/qachat/';

    if (atag.dataset.ifrSrc) {
        iframe.src += atag.dataset.ifrSrc + '?v=001';        
    }

    if (atag.dataset.ifrBgcolor) {
        iframe.src += '&bgcolor=' + atag.dataset.ifrBgcolor;        
    }
   
    if (atag.dataset.ifrColor) {
        iframe.src += '&color=' + atag.dataset.ifrColor;        
    }

    if (atag.dataset.ifrKbkey) {
        iframe.src += '&kbkey=' + atag.dataset.ifrKbkey;  
    }

    if (atag.dataset.ifrAvatar) {
        iframe.src += '&avatar=' + atag.dataset.ifrAvatar;  
    }

    if (atag.dataset.ifrTitle) {
        iframe.src += '&title=' + atag.dataset.ifrTitle;
    }

    if (atag.dataset.ifrAd) {
        iframe.src += '&ad=' + atag.dataset.ifrAd;
    }

    //atag style
    atag.style.fontWeight ="bold";
    atag.style.display ='inline-block';
    atag.style.padding = '0.2em 0.5em';
    atag.style.textDecoration = 'none';
    atag.style.boxShadow = 'inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19)';
    atag.style.position = 'fixed';
    atag.style.cursor = 'pointer';
    atag.style.textAlign = 'center';
    atag.style.opacity = 1;
    atag.style.boxSizing = 'border-box';

    //atag variable style
    if (!atag.dataset.atagZindex) {
	    atag.style.zIndex = 2147483645;
    } else {
        atag.style.zIndex = atag.dataset.atagZindex;
    }

    if (atag.dataset.atagTitle) {
        atag.innerText = atag.dataset.atagTitle;
    }

    if (!atag.dataset.atagColor) {
        atag.style.color = '#FFF';
    } else {
        atag.style.color = atag.dataset.atagColor;
    }

    if (!atag.dataset.atagBgcolor) {
        atag.style.background = '#fd9535';
    } else {
        atag.style.background = atag.dataset.atagBgcolor;
    }

    if (!atag.dataset.atagHeight) {
        atag.style.height = '30px';
    } else {
        atag.style.height = atag.dataset.atagHeight;
    }

    if (!atag.dataset.atagWidth) {
        atag.style.width = '150px';
    } else {
        atag.style.width = atag.dataset.atagWidth;
    }

    if (!atag.dataset.atagTradius) {
        atag.style.borderTopRightRadius = '20px';
        atag.style.borderTopLeftRadius = '20px';
        } else {
        atag.style.borderTopRightRadius = atag.dataset.atagTradius;
        atag.style.borderTopLeftRadius = atag.dataset.atagTradius;
    }

    if (!atag.dataset.atagBradius) {
        } else {
        atag.style.borderBottomLeftRadius = atag.dataset.atagBradius;
        atag.style.borderBottomRightRadius = atag.dataset.atagBradius;
    }

    if (!atag.dataset.atagBottom) {
        if (!atag.dataset.atagTop) {
            atag.style.bottom = '0px';
        } else {
            atag.style.top = atag.dataset.atagTop;
        }
    } else {
        atag.style.bottom = atag.dataset.atagBottom;
    }

    if (!atag.dataset.atagRight) {
        if (!atag.dataset.atagLeft) {
            atag.style.right = '10px';
        } else {
            atag.style.left = atag.dataset.atagLeft;
        }
    } else {
        atag.style.right = atag.dataset.atagRight;
    }

    //div style
    div.style.opacity = 0;
    div.style.backgroundColor = 'rgba(0,0,0,0.5)';
    div.style.color = '#FFF';
    div.style.width = '30px';
    div.style.height = '30px';
    div.style.lineHeight = '30px';
    div.style.borderRadius = '5px';
    div.style.textAlign = 'center';
    div.style.marginLeft ='auto';
    div.style.boxSizing = 'border-box';
    div.style.cursor = 'pointer';
    div.style.border = '1px solid rgba(255,255,255,0.2)';
    div.style.fontFamily = '"Helvetica Neue", sans-serif';
    div.innerText = 'x';
    div.style.position = 'fixed';

    //div variable style
    if (!atag.dataset.divZindex) {
	    div.style.zIndex = 2147483647;
    } else {
        div.style.zIndex = atag.dataset.divZindex;
    }

    if (!atag.dataset.divBottom) {
        if (!atag.dataset.divTop) {
            div.style.bottom = '500px';
        } else {
            div.style.top = atag.dataset.divTop;
        }
    } else {
        div.style.bottom = atag.dataset.divBottom;
    }
   
    if (!atag.dataset.divRight) {
        if (!atag.dataset.divLeft) {
            div.style.right = '10px';
        } else {
            div.style.left = atag.dataset.divLeft;
        }
    } else {
        div.style.right = atag.dataset.divRight;
    }

    //Q Click
    atag.onclick = function() {    
        iframe.style.opacity = 0;
        div.style.opacity = 0;    
        atag.parentNode.appendChild(iframe);
        atag.parentNode.appendChild(div);
        setTimeout(function() {
           opacityIn(); 
        }, 0); 
        return false;
    };

    //X Click
    div.onclick = function() {
        atag.parentNode.removeChild(iframe);
        atag.parentNode.removeChild(div);
        return false;
    };

    //Opacity Loop
    function opacityIn () {
        if (i <= 50 ) {
            i++;
            iframe.style.opacity = i / 50;
            div.style.opacity = i / 100;
            setTimeout(function() {
                opacityIn()
            }, 5);
            return;
        }
        else
        {
            i= 0; 
            return;
        }
    };

})();