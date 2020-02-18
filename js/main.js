$(document).ready(function(){
   

//onClick event for Header --------------------------------------------
    $(".fa-bars").on("click", event =>
        event.target.title == "true"
        ? (event.target.title = false, $(".header-bottom").css({'height': '540px'}))
        : (event.target.title = true, $(".header-bottom").css({'height': '0'}))
    )

//onClick event for Footer --------------------------------------------
    $(".fa-plus").on("click", event =>{
        if(event.target.title == 0){
            $(event.target).removeClass("fa-plus").addClass("fa-minus");
            $("." + event.target.id).addClass("expand")
            event.target.title = 1;
        } else {
            $(event.target).removeClass("fa-minus").addClass("fa-plus");
            event.target.title = 0;
            $("." + event.target.id).removeClass("expand")
        }  
      });

// slider -------------------------------------------------------------
    //object of slide info.  Could be in a separate and imported or grabbed from an API
    const slideData = {
         0: {
            image: "images/bb-slideshow-example-1.jpg",
            capt: "Baby Dean - Wheaton, illinois",
            title: "Crib Bedding Sale",
            disc: "Save up to 50% off on select crib bedding now through Memorial Day!",
            primary: "Shop Crib Beding"         
        },
        1: {
            image: "images/bb-slideshow-example-2.png",
            capt: "",
            title: "Mobiles Forever",
            disc: "Until Tuesday all mobiles are on the move.  Get yours now before they run out!",
            primary: "Shop Mobiles"         
        },
        2: {
            image: "images/bb-slideshow-example-3.jpg",
            capt: "",
            title: "Simple Storage",
            disc: "Spring is coming! Get all your storage needs without breaking the bank.",
            primary: "Shop Storage"         
        }
    }
    
    let slideNumber = 1;
    
    //function to change the slide info.  
    //Could add animations and controls later
    slider = (number) => { 
            $("#slideImg").attr('src', slideData[number].image);
            $("figcaption").html(slideData[number].capt);
            $(".cta__title").html(slideData[number].title);
            $(".cta__description").html(slideData[number].disc);
            $(".slidePrimary").html(slideData[number].primary);     
      }
    
    //gets length of slider object.  Helps scale if more slides are added. 
    size = Object.keys(slideData).length
    
    //start the slider... will move to next slide every 5 seconds. 
    setInterval(function(){ 
        slider(slideNumber) 
        if(slideNumber + 1 == size) slideNumber = 0; 
        else slideNumber ++
    }, 5000);
       
});