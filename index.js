var contImg = document.querySelector('.contImg');
var liCont = document.querySelectorAll('.liCont');
var liCont = document.querySelectorAll('.liCont');
var imgLi = document.querySelector('.imgLi');
var len = liCont.length; 
window.num = 0;
window.last = liCont[0];
window.last.style.backgroundColor = "#00a1d6";
window.time = setInterval(turnpic,4000);
imgLi.addEventListener('click',function(ev) {  
   var target = ev.target;
   if( target != imgLi) {
      window.last.style.backgroundColor = "#fff";
      window.last = target;      
      target.style.backgroundColor = "#00a1d6";
      switch(target) {
         case liCont[0]:
           contImg.style.marginLeft = '0';
           window.num = 0;
           clearInterval(time);
           window.time = setInterval(turnpic,4000);
           for(var i = 0;i < len;i ++){
            if (i != num) {              
                 liCont[i].style.backgroundColor = "#fff";
            }
           }
         break;
         case liCont[1]:
           contImg.style.marginLeft = '-100%';
           window.num = 1;
           clearInterval(time);
           window.time = setInterval(turnpic,4000);
           for(var i = 0;i < len;i ++){
            if (i != num) {              
                 liCont[i].style.backgroundColor = "#fff";
            }
           }
         break;
         case liCont[2]:
           contImg.style.marginLeft = '-200%';
           window.num = 2;
           clearInterval(time);
           window.time = setInterval(turnpic,4000);
           for(var i = 0;i < len;i ++){
             if (i != num) {              
               liCont[i].style.backgroundColor = "#fff";
             }
           }
         break;
         case liCont[3]:
           contImg.style.marginLeft = '-300%';
           window.num = 3;
           clearInterval(time);
           window.time = setInterval(turnpic,4000);
           for(var i = 0;i < len;i ++){
             if (i != num) {              
               liCont[i].style.backgroundColor = "#fff";
             }
           }
         break;
         default:break;
      }           
   }   
})
function turnpic() {   
      if(window.num != len - 1) {
        window.num += 1;
        contImg.style.marginLeft = -window.num + '00%';
        liCont[window.num].style.backgroundColor = "#00a1d6";
        for(var i = 0;i < len;i ++){
          if (i != num) {              
               liCont[i].style.backgroundColor = "#fff";
          }
        }      
      }
      else {
        contImg.style.marginLeft = '0';
        liCont[0].style.backgroundColor = "#00a1d6";
        liCont[window.num].style.backgroundColor = "#fff";
        num = 0;
      }
}
function turndiv() {   
      if(window.sum != leng - 1) {
        window.sum += 1;
        divImg.style.marginLeft = -window.sum + '00%';
        blackDiv[window.sum].style.backgroundColor = "#f25d8e";
        blackDiv[window.sum].style.transition = "-webkit-transition: width ease-in 0.3s";
        blackDiv[window.sum].style.width = "30px";
        for(var i = 0;i < leng;i ++){
          if (i != sum) {              
               blackDiv[i].style.backgroundColor = "#fff";
               blackDiv[i].style.width = "13px";
          }
        }      
      }
      else {
        divImg.style.marginLeft = '0';
        blackDiv[0].style.backgroundColor = "#f25d8e";
        blackDiv[0].style.width = "30px";
        blackDiv[window.sum].style.backgroundColor = "#fff";
        blackDiv[window.sum].style.width = "13px";
        sum = 0;
      }
}
var divImg = document.querySelector('.divImg');
var blackDiv = document.querySelectorAll('.blackDiv');
var black = document.querySelector('.black');
var leng = blackDiv.length;
window.sum = 0;
window.hehe = setInterval(turndiv,4000);
blackDiv[0].style.backgroundColor = "#f25d8e";
blackDiv[0].style.width = "30px";
black.addEventListener('mouseover', function(ev) {
    var target = ev.target;
     switch(target) {
         case blackDiv[0]:
           divImg.style.marginLeft = '0';
           window.sum = 0;
           blackDiv[window.sum].style.width = "30px";
           blackDiv[window.sum].style.backgroundColor = "#f25d8e";
           clearInterval(hehe);
           window.hehe = setInterval(turndiv,4000);
           for(var i = 0;i < leng;i ++){
            if (i != sum) {              
                 blackDiv[i].style.backgroundColor = "#fff";
                 blackDiv[i].style.width = "13px";
            }
           }
         break;
         case blackDiv[1]:
           divImg.style.marginLeft = '-100%';
           window.sum = 1;
           blackDiv[window.sum].style.width = "30px";
           blackDiv[window.sum].style.backgroundColor = "#f25d8e";
           clearInterval(hehe);
           window.hehe = setInterval(turndiv,4000);
           for(var i = 0;i < leng;i ++){
            if (i != sum) {              
                 blackDiv[i].style.backgroundColor = "#fff";
                 blackDiv[i].style.width = "13px";
            }
           }
         break;
         case blackDiv[2]:
           divImg.style.marginLeft = '-200%';
           window.sum = 2;
           blackDiv[window.sum].style.width = "30px";
           blackDiv[window.sum].style.backgroundColor = "#f25d8e";
           clearInterval(hehe);
           window.hehe = setInterval(turndiv,4000);
           for(var i = 0;i < leng;i ++){
             if (i != sum) {              
               blackDiv[i].style.backgroundColor = "#fff";
               blackDiv[i].style.width = "13px";
             }
           }
         break;
         default:break;
      }  
})