
document.addEventListener('DOMContentLoaded', function(){
	
// ====== Change color ========///
// function burger_dark(){
// let burger = document.querySelector('.hamburger-menu');
// burger.style.color = null;
// }
// function burger_white(){
// let burger = document.querySelector('.hamburger-menu');
// burger.style.color = '#FFF';
// }
function buton_dark(){
  let top_navigation = document.querySelector('.top_navigation');
//   top_navigation.querySelector('.nav_but').classList.remove("nav_but_white");
}
function buton_white(){
  let top_navigation = document.querySelector('.top_navigation');
//   top_navigation.querySelector('.nav_but').classList.add("nav_but_white");
}
function logo_dark(){
  let top_navigation = document.querySelector('.top_navigation');
//   top_navigation.querySelector('.uptech_logo_dark').style.opacity = 1;
//   top_navigation.querySelector('.uptech_logo_white').style.opacity = 0;
}
function logo_white(){
  let top_navigation = document.querySelector('.top_navigation');
//   top_navigation.querySelector('.uptech_logo_dark').style.opacity = 0;
//   top_navigation.querySelector('.uptech_logo_white').style.opacity = 1;
}  
// function pagination (page, color){
//  	let pagination_left_fix = document.querySelector('.pagination_left_fix');
//  	pagination_left_fix.style.color = color;
//   pagination_left_fix.querySelector('.pagination_num_scroll').style.bottom = (page*20)+"px";
//  }

function lumen(color){
	let lum = null;
  if(color === "rgba(0, 0, 0, 0)"){
     lum = 255;
  }else{
     let str = color; 
     str = str.substring(4, str.length - 1); 
     var arrayOfStrings = str.split(", ");
     lum = Math.round((0.21*arrayOfStrings[0])+(0.72*arrayOfStrings[1]) + (0.07*arrayOfStrings[2]));         
  }
   return lum;
}

function text_color_change (bg_color){
	let lum = lumen(bg_color);
	if(lum > 240){return "rgb(34, 37, 42)";}else{return "rgb(255, 255, 255)";}
}

function navbar_change (text_color, bg_color){
	 let top_navigation = document.querySelector('.top_navigation');
   if(bg_color === "rgba(0, 0, 0, 0)"){
   	 top_navigation.style.backgroundColor = "rgb(255, 255, 255)";
   }else{
     top_navigation.style.backgroundColor = bg_color;
   }
  body.style.backgroundColor = bg_color;
 	let new_color_text = text_color_change (bg_color); 
  
  document.querySelectorAll('.top_nav_link').forEach(top_nav_link => {
  if(top_nav_link){
     if(window.screen.width >= 991){
       top_nav_link.style.color = text_color;
     }
  }
  let lum = lumen(bg_color);
  let color_nav_link_decor = null;
      if(lum > 240){
        color_nav_link_decor = "rgb(20 185 179)";
        //  logo_dark(); buton_dark();burger_dark();
      }else if(lum > 100){
        color_nav_link_decor = "rgb(0, 0, 0)"; 
        // logo_white(); buton_white();burger_white();
      }else if(lum < 100){
        color_nav_link_decor = "rgb(20 185 179)"; 
        // logo_white(); buton_white();burger_white();
      }
      if(top_nav_link.querySelector('.link_decor_wrap')){
       top_nav_link.querySelector('.link_decor_wrap').style.color = color_nav_link_decor;
      }
  });// ===== top_nav_link => forEach =====///
}// ===== navbar_change() ==== //

var body = document.body;
let color_mass = [];
let i = 0;
// console.log(color_mass);
  document.querySelectorAll('.section_color').forEach(section => {
    var color=window.getComputedStyle(section, null).getPropertyValue("background-color")
    // console.log(color);
    let obj = new Object();
    obj["name_class"] = section.className;
    obj["color"] = color;
    obj["id"] = i; 
    i++;
    section.style.backgroundColor = "rgb(0 0 0 / 0%)";
    color_mass.push(obj);
  });// ======= section_color => forEach ====== //

  let centerY = document.documentElement.clientHeight / 2;
  console.log(centerY);
  setInterval(window.addEventListener('scroll', function() {
   document.querySelectorAll('.section_color').forEach(section => {
   		let position_section = section.getBoundingClientRect().top;
      	let bg_color = color_mass.find(obj => obj.name_class === section.className).color;
        console.log(bg_color);
        let twxt_color = null;     
        console.log(position_section);
     if(position_section < centerY && position_section > 0){
          twxt_color = text_color_change (bg_color);
          navbar_change (twxt_color, bg_color);
        //   pagination (page, twxt_color);          
     }else if (position_section > -centerY && position_section < centerY){
          twxt_color = text_color_change (bg_color);
          navbar_change (twxt_color, bg_color);
        //   pagination (page, twxt_color);
      }
   });// ===== section_color => forEach ====== //
	})// == EventListener => scroll ===//
// ====== Cange color ========///
  
  ,0)
  
scrollBy(0, 1);
scrollBy(0, -1);



});// == DOMContentLoaded == //
