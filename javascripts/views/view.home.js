(function(i){"use strict";if(i.isFunction(i.fn.flipshow)){var e=i("#fcSlideshow");e.get(0)&&(e.flipshow(),setTimeout(function n(){e.data().flipshow._navigate(e.find("div.fc-right span:first"),"right"),setTimeout(n,3e3)},3e3))}if(i(".cloud").get(0)){var t=function(){i(".cloud").animate({top:"+=20px"},3e3,"linear",function(){i(".cloud").animate({top:"-=20px"},3e3,"linear",function(){t()})})};t()}i.isFunction(i.fn.nivoSlider)&&i("#nivoSlider").nivoSlider({effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3e3,startSlide:0,directionNav:!0,controlNav:!0,controlNavThumbs:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next",randomStart:!1})}).apply(this,[jQuery]);