var uli = document.querySelectorAll('.uli');
var slip = document.querySelectorAll('.slip');
window.lastL = uli[0];
window.lastD = slip[0]
for(var i = 0, len = uli.length; i < len; i ++) {
	uli[i].addEventListener('click', function(i) {
		return function() {
			lastL.style.backgroundColor = '#282d30';
			lastD.style.display = 'none';
			slip[i].style.display = 'block';
			uli[i].style.backgroundColor = '#1d2125';
			lastL = uli[i];
			lastD = slip[i];
		}
	}(i))
}
var fourcircle = document.querySelectorAll('.fourcircle');
window.count = 0;

for(var i = 0,len = fourcircle.length; i < len; i ++) {
	fourcircle[i].addEventListener('click', function(i) {
		return function() {
			count = i;
			init(i);	
		}
	}(i))
}
var turnleft = document.querySelector('#turnleft');
var turnright = document.querySelector('#turnright');
turnleft.addEventListener('click', function() {
	var len = fourcircle.length;
	if (count) {
		count--
		fourcircle[count+1].style.backgroundImage = 'url(images/circle.png)';
		fourcircle[count+1].style.color = '#000';
		fourcircle[count].style.backgroundImage = 'url(images/red.png)';
		fourcircle[count].style.color = '#fff';
	}
	
})
turnright.addEventListener('click', function() {
	var len = fourcircle.length;
	if (count < len - 1) {
		count++;
		init(count);
	}
	
})

function init(index) {
	for(var i = 0; i < len;i ++) {
		if(i != index) {
			fourcircle[i].style.backgroundImage = 'url(images/circle.png)';
			fourcircle[i].style.color = '#000';
		} else {
			fourcircle[index].style.backgroundImage = 'url(images/red.png)';
			fourcircle[index].style.color = '#fff';
		}
	}
}
function insert(tValue) {  
   var t1 = tValue.lastIndexOf("\\");  
   var t2 = tValue.lastIndexOf("."); 
   var size = document.querySelector('.size'); 
   var f = document.querySelector('#file').files;
   var chooseName = document.querySelector('#chooseName');       
   if(t1 >= 0 && t1 < t2 && t1 < tValue.length){  
	   	var contname = tValue.substring(t1 + 1, t2);
	   	if (contname.length > 6) {
	   		chooseName.value = contname.substring(0,6) + '...';
	   	}   
      size.innerHTML = caculate(f[0].size);
   }  
}  
// function changeDate(date) {
// 	var datehh = document.querySelector('#datehh');
// 	var dt = date.replace(/\//g,"-"); 
// 	datehh.value = dt;
// }
function caculate(data) {
	var type = new Array('byte', 'K', 'M', 'G'),i = 0;
	while(data > 1024) {
		data = data / 1024;
		i++;
	}
	return data.toFixed(2) + type[i];
}

function insertA(tValue) {  
   var t1 = tValue.lastIndexOf("\\");  
   var t2 = tValue.lastIndexOf("."); 
   var size = document.querySelector('#sizeA'); 
   var f = document.querySelector('#fileA').files; 
   var chooseName = document.querySelector('#choosenameA');      
   if(t1 >= 0 && t1 < t2 && t1 < tValue.length){  
   	var contname = tValue.substring(t1 + 1, t2);
   	if (contname.length > 6) {
   		chooseName.value = contname.substring(0,6) + '...';
   	}   
    size.innerHTML = caculate(f[0].size);
   }  
}  
function insertB(tValue) {  
   var t1 = tValue.lastIndexOf("\\");  
   var t2 = tValue.lastIndexOf("."); 
   var size = document.querySelector('#sizeB'); 
   var f = document.querySelector('#fileB').files; 
   var chooseName = document.querySelector('#choosenameB');      
   if(t1 >= 0 && t1 < t2 && t1 < tValue.length){  
   	var contname = tValue.substring(t1 + 1, t2);
   	if (contname.length > 6) {
   		chooseName.value = contname.substring(0,6) + '...';
   	}   
    size.innerHTML = caculate(f[0].size);
   }  
}  
var onall = document.querySelectorAll('.onall');
var or = document.querySelectorAll('.or');
var programUl = document.querySelectorAll('.programUl');
for(var i = 0, len = onall.length; i < len; i++) {
	var arr = new Array([len]);
	for(var j = 0;j < len; j++) {
		arr[j] = 0;
	}
	onall[i].addEventListener('click', function(i) {
		return function() {
			try{
				var lenli = or[i].getElementsByTagName("ul").length;
				programUl[i].style.height = (lenli + 1)* 30 + 'px';
				onall[i].src = "images/down.png";
				or[i].style.display = "block";
				arr[i]++;
				if(arr[i] % 2 == 0)	{
					programUl[i].getElementsByTagName("div")[0].style.display = 'none';
					onall[i].src = "images/on.png";
					programUl[i].style.height = "30px";				
				}
			} catch(err) {
				onall[i].src = "images/down.png";
				arr[i]++;
				if(arr[i] % 2 == 0)	{
					onall[i].src = "images/on.png";
					programUl[i].style.height = "30px";				
				}
			}
			
		}
	}(i))	
}
