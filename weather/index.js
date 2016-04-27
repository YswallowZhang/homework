;(function () {
            var url = 'http://openweathermap.org/data/2.5/forecast/daily?id=1814906&appid=b1b15e88fa797225412429c1c50c122a';
            var place = document.querySelector('.place');
            var bg = new Array("images/yin.png","images/cloud.png","images/sun.png","images/little-rain.png","images/middle-rain.png");
            var contain = document.querySelector('.contain');
            var left = document.querySelector('.left');
            var right = document.querySelector('.right');
            var xhr = new XMLHttpRequest();
            xhr.open('get', url, true);
            xhr.onload = function (e) {
                if (this.status === 200) {
                    callback(JSON.parse(this.responseText));
                }
            }
            xhr.send();

            function Datefn (myDate) {
               switch (myDate.getDay()) {
                      case 0:
                      return 'Sunday';
                      break;
                      case 1:
                      return 'Monday';
                      break;
                      case 2:
                      return 'Tuesday';
                      break;
                      case 3:
                      return 'Wednesday';
                      break;
                      case 4:
                      return 'Thursday';
                      break;
                      case 5:
                      return 'Friday';
                      break;
                      case 6:
                      return 'Saturday';
                      break;
                      default: break;
                     }
            }
            function bgcolor (data) {
               switch(data) {
                      default:break;
                      case 'Rain':
                      case 'Clouds':
                      return '-webkit-linear-gradient(top,#88a9ca,#bcd3e3)';
                      break;
                      case 'Clear':
                      return '-webkit-linear-gradient(top,#50b2fb,#a6d4f6)';
               }
            }
            function bgimg(data) {
              switch(data) {
                        default:break;
                        case 'light rain':
                          return 'url(' + bg[3] + ')';
                          break;
                        case 'moderate rain':
                            return  'url(' + bg[4] + ')';
                            break;
                        case 'clear sky':
                          return  'url(' + bg[2] + ')';
                          break;
                        case 'broken clouds':
                          return  'url(' + bg[1] + ')';
                          break;
               }
            }
            function Month(index) {
                switch(index) {
                      case 0 :return '(今天)';break;
                      case 1 :return '(明天)';break;
                      case 2 :return '(后天)';break;
                      default : return '';break;
                     }
            }
            function createDom () {
              // var li = document.createElement("li");
              // li.className = 'list';
              // contain.appendChild(li);
              // var div = document.createElement("div");
              // div.className = 'triangle';
              // li.appendChild(div);
              // var spanDate = document.createElement("span");
              // spanDate.className = 'date';
              // li.appendChild(spanDate);
              // var spanDay = document.createElement("span");
              // spanDay.className = 'day';
              // li.appendChild(spanDay);
              // var imgDiv = document.createElement("div");
              // imgDiv.className = "img";
              // li.appendChild(imgDiv);
              // var weather = document.createElement('p');
              // weather.className = "weather";
              // li.appendChild(weather);
              // var temp = document.createElement('p');
              // temp.className = "temp";
              // li.appendChild(temp);
              // var max = document.createElement('span');
              // max.className = "max";
              // temp.appendChild(max);
              // var min = document.createElement('span');
              // min.className = "min";
              // temp.appendChild(min);

              contain.innerHTML += "<li class = 'list'>" +  "<span class='date'></span>" + "<span class='day'></span>" +  "<div class='img'></div>" +  "<p class='weather'></p>" +  "<p class='temp'>"+ "<span class='max'></span>"+ "<span class='min'></span>"+ "</p>" + "</li>";
            }


            function callback (res) {
                place.innerHTML = res.city.name;
                res.list.forEach(function (item, index) { 
                if(index < 7) {                             
                  createDom ();
                     var date = document.querySelectorAll('.date');
                     var img= document.querySelectorAll('.img');            
                     var max = document.querySelectorAll('.max');
                     var min = document.querySelectorAll('.min');
                     var weather = document.querySelectorAll('.weather');
                     var day  = document.querySelectorAll('.day');
                     var myDate = new Date(item.dt * 1000); 
                     var month = myDate.toLocaleDateString();
                     var List = document.querySelectorAll('.list');

                     day[index].innerHTML = Datefn(myDate);
                     date[index].innerHTML = month + Month(index);

                     max[index].innerHTML = item.temp.max + '℃' + ' /';
                     min[index].innerHTML = item.temp.min + '℃';
                     weather[index].innerHTML = item.weather[0].main;

                     List[index].style.background = bgcolor(item.weather[0].main);

                     img[index].style.backgroundImage = bgimg(item.weather[0].description);

                }
                });
                // var list = document.querySelectorAll('.list');
                // var count = 0;
                // left.style.backgroundColor = '#fff';
                //    right.addEventListener('click', function() {                                    
                //   if (count < 2 ) {
                //     left.style.backgroundColor = '#ccc';   
                //     list[count].style.left = '-140px';                 
                //     list[count].style.position = 'absolute'; 
                //     count++;      
                //     // contain.style.marginLeft = - count * 140 + 'px';                         
                    
                //   } 
                //   if(count == 2) {
                //     right.style.backgroundColor = '#fff';
                //   }
                //   });
                //   left.addEventListener('click', function() {
                //   if(count > 0 && count <= 2) {
                //     count--;
                //     right.style.backgroundColor = '#ccc';                    
                //     list[count].style.left = '0px';
                //     list[count].style.position = 'relative';
                //     // contain.style.marginLeft = - count * 140 + 'px'; 
                                       
                //   } 
                //   if(count==0) {
                //     left.style.backgroundColor = '#fff';
                //   }  
                //   }); 
             


             
          }

          

  }());
