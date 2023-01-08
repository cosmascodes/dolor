document.addEventListener("DOMContentLoaded", function() {
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
window.addEventListener('scroll', function() {
    let targets = document.querySelectorAll('.cont');
    targets.forEach(target=>{
        var color=  window.getComputedStyle(target, null).getPropertyValue("background-color")
        let obj = new Object();
        obj["name_class"] = target.className;
        obj["color"] = color;
        obj["id"] = i; 
        i++;
        target.style.backgroundColor = "rgb(0 0 0 / 0%)";
        color_mass.push(obj);
    })
    let bg_color = color_mass.find(obj => obj.name_class).color;
    let observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if (!entry.isIntersecting) {
                return                
            } else {
                console.log(bg_color);
            }
        })
        
    })

    
    
    targets.forEach(target=>{
    observer.observe(target)})
});// == EventListener => scroll ===//
 // ====== Cange color ========///
})