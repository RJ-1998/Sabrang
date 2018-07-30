//register now button hover effect
const reg= document.getElementsByClassName("register_text");

reg[0].addEventListener('mouseover',function(e){
    reg[0].style.backgroundColor = "rgb(219, 36, 106)";
});
reg[0].addEventListener('mouseout',function(e){
     reg[0].style.backgroundColor = "transparent"; 
});
//effect ends ----------------------------------------
//menu icon hover effect
const menu = document.getElementById('menu');
menu.addEventListener("mouseover",function(e){
    menu.style.backgroundColor = "rgb(219, 36, 106)";
    menu.style.borderColor = "rgb(219, 36, 106)";
});
menu.addEventListener("mouseout",function(e){
    menu.style.backgroundColor = "transparent";
});
//effect ends-----------------------------------------
//form validation begins

//other way to create a Regular Expression//
//var reg2 = new RegExp(/[a-z]/,'gi');//
//form validation ends ---------------------------------
//GSAP animations begins 
/*const icons = document.querySelectorAll('.icons_div i');
console.log(icons);
var tl = new TimelineLite();
    tl.staggerFrom(icons,0.4,{y:100},0.1);*/
    
    TweenLite.from(menu,2,{y:-400,ease:Power4.easeOut});
const img = document.getElementsByClassName("logo_image");
TweenLite.from(img,1,{y:700,ease:Power3.easeOut});

const circles = document.querySelectorAll("svg #circles circle");
var tl = new TimelineLite();
    tl.staggerFrom(circles,0.4,{x:100},0.1);

var current = circles[0];
Array.from(circles).forEach(function(dot){
    dot.addEventListener('click',function(e){
        var n;
        if(e.target==current){
            e.target.style.fill="white";
            n = e.target.attributes.id.value[1];
            showslide(n);
        }
        else if(e.target!=current){
              e.target.style.fill = "white";
               n = e.target.attributes.id.value[1];
              current.style.fill = "rgba(56, 54, 54, 0.397)"
              current=e.target;
              showslide(n);
        }
});
});

Array.from(circles).forEach(function(dot){
    dot.addEventListener('mouseover',function(e){
              var x = e.clientX;
              var y = e.clientY;
              var dotID = e.target.attributes.id.value;
              show(x,y,dotID);
    });
});

const getspan = document.getElementById('show');
function show(x,y,dotId){
    var xReal = x-95;
    var yReal = y-25;
    if(dotId=="c1"){
          
        getspan.style.visibility = "visible";
        getspan.innerHTML = "Home";
        getspan.style.top = yReal+"px";
        getspan.style.left = xReal+"px";}
        else if(dotId=="c2"){
             
            getspan.style.visibility = "visible";
            getspan.innerHTML = "About";
            getspan.style.top = yReal+"px";
            getspan.style.left = xReal+"px";}
            else if(dotId=="c3"){
                  
                var xc3 = xReal-30;
                getspan.style.visibility = "visible";
                getspan.innerHTML = "Schedule";
                getspan.style.top = yReal+"px";
                getspan.style.left = xc3+"px";}
                else if(dotId=="c4"){
                      
                    getspan.style.visibility = "visible";
                    getspan.innerHTML = "Events";
                    getspan.style.top = yReal+"px";
                    getspan.style.left = xReal+"px";}
                    else if(dotId=="c5"){
                        var xc5 = xReal-45;
                        var yc5 = yReal-15;
                          
                        getspan.style.visibility = "visible";
                        getspan.innerHTML = "Contact Us";
                        getspan.style.top = yc5+"px";
                        getspan.style.left = xc5+"px";}
                
}
Array.from(circles).forEach(function(dot){
    dot.addEventListener('mouseout',function(e){
            getspan.style.visibility = "hidden";
    });
});

const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
var currentslide = slide1;
var currentslidetext = "slide1";
//show slide function---------------------------------
function showslide(n){    
  var changeslide = "slide"+n;
  if(changeslide==currentslidetext){
      currentslide.style.display="inline-block";
    }
	else if(changeslide!=currentslidetext && changeslide=="slide1"){
      slide1.style.display="inline-block";
      currentslide.style.display="none";
      currentslide=slide1;
	  currentslidetext="slide1";
    }
    else if(changeslide!=currentslidetext && changeslide=="slide2"){
      slide2.style.display="inline-block";
      currentslide.style.display="none";
      currentslide=slide2;
	  currentslidetext="slide2";
    }
}
		/* Open when someone clicks on the span element */
        function openNav() {
            document.getElementById("myNav").style.width = "100%";
            
        }
        /* Close when someone clicks on the "x" symbol inside the overlay */
        function closeNav() {
            document.getElementById("myNav").style.width = "0%";
            
        }

        //------------------------------------------------------------//
        const scrollDot = document.getElementById('scroll_dot');
        TweenMax.to(scrollDot , 1 , {y:30,repeat:-1,autoAlpha:0});
        
        const li_array = document.querySelectorAll('ul li');

        Array.from(li_array).forEach(function(list){
           list.addEventListener('mouseover',function(el){
               el.target.style.boxShadow = "5px 5px 5px rgb(71,71,71)"
           });
        });
        console.log(li_array);