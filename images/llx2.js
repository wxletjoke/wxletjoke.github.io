if (self!=top) window.top.location.replace(self.location);
function $(_id){
    return document.getElementById(_id);
}
function scrollfun(ad,st){ 
            if(ad){
             if((st-$("box_ad").offsetTop)>=0){
                  $("box_ad").className="box_ad_fix";           
               }
               if((st-ad)<0){                   
                          $("box_ad").className="box_ad_nor";                
               }
             }                                                
                if($("leftOffsetTop").offsetTop>$("rightOffsetTop").offsetTop){
                    if(st+210>$("rightOffsetTop").offsetTop){
                        $("backtop").style.display = "";
                    }else{
                        $("backtop").style.display = "none";
                    }
                }
  
}