(function(){

    'use strict';
    
    var atag = document.getElementById('qachat-atag');
    var iframe = document.createElement('iframe');
    var div =  document.createElement('div');
    var img = document.createElement('img');
    var i =0;

    //画像の style 
    atag.style.height = '160px';
    atag.style.width = '120px';
    atag.style.top = '-500px';
    atag.innerText = '';
    atag.appendChild(img);

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
            iframe.style.bottom = '0px';
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
       atag.style.display ='block';
       atag.style.position = 'fixed';
       atag.style.cursor = 'pointer';
       atag.style.opacity = 1;

    var speed = 1 ; // この値（ミリ秒）毎に画面が変わる
    var tt= -200 ;
    var stp= 1 ; // 1回移動量(Pixel)

    //document.getElementById("dot1").style.right = "10px";
    var ih = window.innerHeight;
       
    function move(t)  {
        atag.style.top = t + "px";
    }

    function disp() 
    {
        tt=tt+stp ;
        move(tt) ;
        atag.style.background = ''; 
        if(tt <= ih - 161)
        {
        setTimeout(() => {disp()}, speed);
        }
        else
        {
        img.src = imgA[1].src;
        atag.style.bottom= 0 + "px";
        atag.style.top= '';
        }
    }

    function resetAtag (){
        atag.style.top = '-500px';
        tt = -200;
        img.src = imgA[0].src;
        disp();
    }

    var settime = 1000;
    var imgA=[];
    imgA[0]=new Image();
    imgA[1]=new Image();

    //atag parameter
    if (atag.dataset.atagImg0) {
        imgA[0].src = "//cdn.microsoft365.jp/qachat/" + atag.dataset.atagImg0;  
    }
    if (atag.dataset.atagImg1) {
        imgA[1].src = "//cdn.microsoft365.jp/qachat/" + atag.dataset.atagImg1;  
    }
    if (atag.dataset.atagSettime) {
        settime = atag.dataset.atagSettime * 1000;
    }

    imgA[0].onload =
    function(){
        img.src = imgA[0].src;
        setTimeout(() => {
            disp()
        }, settime);
    }
    img.height = 160;
    img.width = 120;
    img.border = 0;
    img.style.margin = 0;
    img.style.padding = 0;

    //atag variable style
    if (!atag.dataset.atagZindex) {
	    atag.style.zIndex = 2147483645;
    } else {
        atag.style.zIndex = atag.dataset.atagZindex;
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
            div.style.bottom = '460px';
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
        atag.style.opacity = 0;
        setTimeout(function() {
           opacityIn(); 
        }, 0); 
        return false;
    };

    //X Click
    div.onclick = function() {
        atag.parentNode.removeChild(iframe);
        atag.parentNode.removeChild(div);
        atag.style.opacity = 1;
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