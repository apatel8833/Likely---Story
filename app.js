



gsap.to(".introtext>h1",{
    delay:1,
    opacity:1,

    onStrart: function () {
        $(".introtext>h1").textillate({
            in: {
                effect: 'fadeInUp',
                callback: function () {
                    $(".introtext>h1").textillate("out")

                },
            },
            out:{ effect: 'fadeOutUp' }

        });
    },
   

   
    
})


gsap.to("#intro",{
    delay:3,
    y:"-100vh",
    duration:.5,
    ease:Expo.easeInOut
})



document.querySelector("li:nth-child(2)").addEventListener("mouseover",function(){
    gsap.to(".dot1",{
        y:"-55",
        opacity:1
    })
})
document.querySelector("li:nth-child(2)").addEventListener("mouseout",function(){
    gsap.to(".dot1",{
        y:"0",
        opacity:0
    })
})
document.querySelector("li:nth-child(3)").addEventListener("mouseover",function(){
    gsap.to(".dot3",{
        y:"-55",
        opacity:1
    })
})
document.querySelector("li:nth-child(3)").addEventListener("mouseout",function(){
    gsap.to(".dot3",{
        y:"0",
        opacity:0
    })
})



gsap.to(".mg",{
    display:"none",
    delay:4,
    
})
gsap.to(".mg",{
    display:"initial",
    delay:5,
    
    
})
gsap.to(".mg",{
    display:"none",
    delay:8,
    
})
gsap.to(".mg",{
    display:"initial",
    delay:9,
    
    
})


gsap.to(".img1",{
    scrollTrigger:{
        scroll:"body",
        trigger:".img1",
        // markers:true,
        start:"top 60%",
        end:"bottom 50%",
        scrub:3
    },
    y:"50"
})
gsap.to(".mg",{
    scrollTrigger:{
        scroll:"body",
        trigger:".img1",
        // markers:true,
        start:"top 60%",
        end:"bottom 50%",
        scrub:3
    },
    y:"50"
})
gsap.to(".txt>h1",{
    scrollTrigger:{
        scroll:"body",
        trigger:".img1",
        // markers:true,
        start:"top 50%",
        end:"bottom 50%",
        scrub:3
    },
    y:"-40"
})

gsap.to(".smalltxt>h4",{
    scrollTrigger:{
        scroll:"body",
        trigger:".img1",
        // markers:true,
        start:"top 50%",
        end:"bottom 50%",
        scrub:3
    },
    y:"-40"
})

gsap.to(".img3",{
    scrollTrigger:{
        scroll:"body",
        trigger:".img3",
        // markers:true,
        start:"top 60%",
        end:"bottom 50%",
        scrub:3
    },
    rotate:10
})
gsap.to(".txt2>h1",{
    scrollTrigger:{
        scroll:"body",
        trigger:".img4",
        // markers:true,
        start:"top 20%",
        end:"bottom 50%",
        scrub:3
    },
    onStrart: function(){
        $('.txt2>h1').textillate({ in: { effect: 'fadeInUp' } });

    }
   
})

gsap.to(".txt2>h5",{
    scrollTrigger:{
        scroll:"body",
        trigger:".img3",
        // markers:true,
        start:"top 60%",
        end:"bottom 50%",
        scrub:3
    },
    rotate:10
})

gsap.to(".img4",{
    scrollTrigger:{
        scroll:"body",
        trigger:".img4",
        // markers:true,
        start:"top 60%",
        end:"bottom 50%",
        // scrub:3
    },
    width:"40%",
    duration:1
})




gsap.to(".img5",{
    scrollTrigger:{
        scroll:"body",
        trigger:".img5",
        // markers:true,
        start:"top 60%",
        end:"bottom 50%",
        // scrub:3
    },
    width:"40%",
    duration:1
})
gsap.to(".svg",{
    scrollTrigger:{
        scroll:"body",
        trigger:".img4",
        // markers:true,
        start:"top 60%",
        end:"bottom 50%",
        // scrub:3
    },
    width:"230",
    duration:.5
    
})

gsap.to(".svg3",{
    scrollTrigger:{
        scroll:"body",
        trigger:".txt4>h1:nth-child(2)",
        // markers:true,
        start:"top 60%",
        end:"bottom 50%",
        // scrub:3
    },
    width:"230",
    duration:.5
    
})


gsap.to(".img6",{
    scrollTrigger:{
        scroll:"body",
        trigger:".img6",
        // markers:true,
        start:"top 60%",
        end:"bottom 50%",
        // scrub:3
    },
    width:"40%",
    duration:1
})

gsap.to(".img7",{
    scrollTrigger:{
        scroll:"body",
        trigger:".img7",
        // markers:true,
        start:"top 60%",
        end:"bottom 50%",
        // scrub:3
    },
    width:"40%",
    duration:1
})

gsap.to(".img8",{
    y:"-40",
    repeat:-1,
    duration:4,
    yoyo:true
})
gsap.from(".img8",{
    y:"0",
})




document.querySelector("#sec").addEventListener("mousemove",function(e){
    setTimeout(function(){

        document.querySelector(".cur").style.left = `${e.x}px`
        document.querySelector(".cur").style.top = `${e.y}px`
    },100)

})



document.querySelector(".img4").addEventListener("mouseover",function(){
    document.querySelector(".cur").style.opacity = "1"
})

document.querySelector(".img4").addEventListener("mouseout",function(){
    document.querySelector(".cur").style.opacity = "0"
})

// document.querySelector(".img5").addEventListener("mouseover",function(){
//     document.querySelector(".cur").style.opacity = "1"
// })

// document.querySelector(".img5").addEventListener("mouseout",function(){
//     document.querySelector(".cur").style.opacity = "0"
// })








































































































// gsap.from(".page2img1", {

//     scrollTrigger: {
//       trigger: ".page2",
//       scroller: "body",
//       markers:true,
//       start: "top 10%",
//       end: "top 60%",
//       scrub:5
  
  
  
  
//     },
//     duration:.5,
//     width:"40vw",
    

// })
  






// var hero=document.querySelector(".hero-main");
// var blink=document.querySelector(".main-blinking")




// var flag=0;
// if(flag===0){
//     gsap.to(".main-blinking",{
//         display:"initial",
//         repeat:"-1",
//         delay:2
    
        
    
    
//     })
    
//     flag=1;

    
// }
// else{
//     gsap.from(".main-blinking",{
//         display:"none",
        
        
        
//     })
//     flag=0;
    
// }





// gsap.to(".hero-main", {

//     scrollTrigger: {
//       trigger: ".shap",
//       scroller: "body",
//       start: "top 10%",
//       end: "top 60%",
//       scrub:5
  
  
  
  
//     },
//     y:"5rem",

// })
  




// gsap.to(".shap", {

//     scrollTrigger: {
//       trigger: ".shap",
//       scroller: "body",
//       start: "top 10%",
//       end: "top 60%",
//       scrub:5
  
  
  
  
//     },
//     y:"-5rem",

// })
  



// gsap.to(".maincontent1 , .maincontent2", {

//     scrollTrigger: {
//       trigger: ".shap",
//       scroller: "body",
//       start: "top 10%",
//       end: "top 60%",
//       scrub:5
  
  
  
  
//     },
//     y:"-5rem",

// })


 


// gsap.from(".shap2",{
//     y:"-7rem",
//     y:"7rem",
//     x:"2rem",
//     x:"-2rem",
//     scale:.9,
//     duration:15,
//     ease:"linear",
//     repeat:-1,
//     yoyo:"true"
// })

