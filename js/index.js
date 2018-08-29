//menu icon hover effect
/*
menu.addEventListener("mouseover",function(e){
    menu.style.backgroundColor = "rgb(219, 36, 106)";
    menu.style.borderColor = "rgb(219, 36, 106)";
});*/


/* Open when someone clicks on the span element */
const ham = document.getElementsByClassName('ham_icon');
        function openNav() {
            TweenMax.to(ham , 0.2 , {rotation:"90_cw"});
            document.getElementById("myNav").style.width = "100%";
        }
        /* Close when someone clicks on the "x" symbol inside the overlay */
        function closeNav() {
            document.getElementById("myNav").style.width = "0%";  
            TweenMax.to(ham , 0.2, {rotation:"0_ccw",delay:"0.5"}); 
        }
        //------------------------------------------------------------//
        const scrollDot = document.getElementById('scroll_dot');
        TweenMax.to(scrollDot , 1 , {y:30,repeat:-1,autoAlpha:0});

        const scroll_down = document.querySelector("#scroll_down_button");
        const home = document.querySelector("#home_window");
        const about = document.querySelector("#about_window");

        scroll_down.addEventListener('click',function(e){
            TweenMax.to(window, 1.5 ,{scrollTo:'#about_window',ease:Power4.easeInOut});
        });
                
const y = screen.height;
home.style.height = y+"px";


const menu = document.getElementById('menu');
menu.addEventListener("mouseout",function(e){
menu.style.backgroundColor = "transparent";});
//effect ends-----------------------------------------

TweenLite.from(menu,2,{y:-400,ease:Power4.easeOut});
const img = document.getElementsByClassName("logo_image");
TweenLite.from(img,1,{y:700,ease:Power3.easeOut});

/***************** LOADER ********************/
        const loader = document.querySelectorAll("#dot");
        var tl = new TimelineMax({repeat:-1,onComplete:timelinefunction});
        tl.staggerFromTo(loader , 0.4 , {y:0,repeat:4,yoyo:true} , {y:-20,repeat:4,yoyo:true},0.1);
         
         function timelinefunction()
         {
             tl.staggerTo(loader, 0.4 , {autoAlpha:0} , 0.1);   
         }
         