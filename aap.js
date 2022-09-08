

document.querySelector("li:nth-child(3)").addEventListener("click",function(){
    gsap.to(".cir",{
        scale:1
        
    })
})



document.querySelector("li:nth-child(1)").addEventListener("mouseover",function(){
    gsap.to(".dot2",{
        y:"-25",
        opacity:1
    })
})
document.querySelector("li:nth-child(1)").addEventListener("mouseout",function(){
    gsap.to(".dot2",{
        y:"0",
        opacity:0
    })
})
document.querySelector("li:nth-child(3)").addEventListener("mouseover",function(){
    gsap.to(".dot3",{
        y:"-25",
        opacity:1
    })
})
document.querySelector("li:nth-child(3)").addEventListener("mouseout",function(){
    gsap.to(".dot3",{
        y:"0",
        opacity:0
    })
})





gsap.to(".first>h1:nth-child(1)",{
    x:"-100%",
    repeat:-1,
    duration:30,
    ease:"linear"
})
gsap.to(".first>h1:nth-child(2)",{
    x:"-100%",
    repeat:-1,
    duration:30,
    ease:"linear"
})

gsap.to(".sec>h1:nth-child(1)",{
    x:"100%",
    repeat:-1,
    duration:30,
    ease:"linear"
})
gsap.to(".sec>h1:nth-child(2)",{
    x:"100%",
    repeat:-1,
    duration:30,
    ease:"linear"
})

gsap.to(".third>h1:nth-child(1)",{
    x:"-100%",
    repeat:-1,
    duration:30,
    ease:"linear"
})
gsap.to(".third>h1:nth-child(2)",{
    x:"-100%",
    repeat:-1,
    duration:30,
    ease:"linear"
})
gsap.to(".fourth>h1:nth-child(1)",{
    x:"100%",
    repeat:-1,
    duration:30,
    ease:"linear"
})
gsap.to(".fourth>h1:nth-child(2)",{
    x:"100%",
    repeat:-1,
    duration:30,
    ease:"linear"
})

gsap.to(".fifth>h1:nth-child(1)",{
    x:"-100%",
    repeat:-1,
    duration:30,
    ease:"linear"
})
gsap.to(".fifth>h1:nth-child(2)",{
    x:"-100%",
    repeat:-1,
    duration:30,
    ease:"linear"
})
gsap.to(".sixth>h1:nth-child(1)",{
    x:"100%",
    repeat:-1,
    duration:30,
    ease:"linear"
})
gsap.to(".sixth>h1:nth-child(2)",{
    x:"100%",
    repeat:-1,
    duration:30,
    ease:"linear"
})




document.querySelector("body").addEventListener("mousemove",function(e){
    setTimeout(function(){

        document.querySelector(".cur").style.left = `${e.x}px`
        document.querySelector(".cur").style.top = `${e.y}px`
    },100)

})





document.querySelector(".first").addEventListener("mouseover",function(){
    document.querySelector(".first").style.opacity = "0"
    document.querySelector(".scroll").style.display = "initial"
    document.querySelector(".first1").style.opacity = "1"
    document.querySelector(".img1").style.opacity = "1"
    document.querySelector(".cur").style.display = "initial"

    





    
  
})
document.querySelector(".first").addEventListener("mouseout",function(){
    document.querySelector(".scroll").style.display = "none"
    document.querySelector(".first1").style.opacity = "0"
    document.querySelector(".first").style.opacity = "1"
    document.querySelector(".img1").style.opacity = "0"



    
  
})

document.querySelector(".first").addEventListener("mousemove",function(e){
    setTimeout(function(){

        document.querySelector(".img1").style.left = `${e.x}px`
        document.querySelector(".img1").style.top = `${e.y}px`
    },200)

})






document.querySelector(".sec").addEventListener("mouseover",function(){
    document.querySelector(".sec").style.opacity = "0"
    document.querySelector(".scroll2").style.display = "initial"
    document.querySelector(".sec1").style.opacity = "1"
    document.querySelector(".img2").style.opacity = "1"





    
  
})
document.querySelector(".sec").addEventListener("mouseout",function(){
    document.querySelector(".scroll2").style.display = "none"
    document.querySelector(".sec1").style.opacity = "0"
    document.querySelector(".sec").style.opacity = "1"
    document.querySelector(".img2").style.opacity = "0"



    
  
})

document.querySelector(".sec").addEventListener("mousemove",function(e){
    setTimeout(function(){

        document.querySelector(".img2").style.left = `${e.x}px`
        document.querySelector(".img2").style.top = `${e.y}px`
    },200)

})

gsap.to(".scroll>h5:nth-child(1)",{
    x:"-100%",
    duration:40,
    repeat:-1,
    ease:"linear"

})
gsap.to(".scroll>h5:nth-child(2)",{
    x:"-100%",
    duration:40,
    repeat:-1,
    ease:"linear"

})
document.querySelector(".third").addEventListener("mouseover",function(){
    document.querySelector(".third").style.opacity = "0"
    document.querySelector(".scroll3").style.display = "initial"
    document.querySelector(".third1").style.opacity = "1"
    document.querySelector(".img3").style.opacity = "1"





    
  
})
document.querySelector(".third").addEventListener("mouseout",function(){
    document.querySelector(".scroll3").style.display = "none"
    document.querySelector(".third1").style.opacity = "0"
    document.querySelector(".third").style.opacity = "1"
    document.querySelector(".img3").style.opacity = "0"



    
  
})

document.querySelector(".third").addEventListener("mousemove",function(e){
    setTimeout(function(){

        document.querySelector(".img3").style.left = `${e.x}px`
        document.querySelector(".img3").style.top = `${e.y}px`
    },200)

})

gsap.to(".scroll3>h5:nth-child(1)",{
    x:"-100%",
    duration:40,
    repeat:-1,
    ease:"linear"

})
gsap.to(".scroll3>h5:nth-child(2)",{
    x:"-100%",
    duration:40,
    repeat:-1,
    ease:"linear"

})

document.querySelector(".fourth").addEventListener("mouseover",function(){
    document.querySelector(".fourth").style.opacity = "0"
    document.querySelector(".scroll4").style.display = "initial"
    document.querySelector(".fourth1").style.opacity = "1"
    document.querySelector(".img4").style.opacity = "1"





    
  
})
document.querySelector(".fourth").addEventListener("mouseout",function(){
    document.querySelector(".scroll4").style.display = "none"
    document.querySelector(".fourth1").style.opacity = "0"
    document.querySelector(".fourth").style.opacity = "1"
    document.querySelector(".img4").style.opacity = "0"



    
  
})

document.querySelector(".fourth").addEventListener("mousemove",function(e){
    setTimeout(function(){

        document.querySelector(".img4").style.left = `${e.x}px`
        document.querySelector(".img4").style.top = `${e.y}px`
    },200)

})

gsap.to(".scroll4>h5:nth-child(1)",{
    x:"-100%",
    duration:40,
    repeat:-1,
    ease:"linear"

})
gsap.to(".scroll4>h5:nth-child(2)",{
    x:"-100%",
    duration:40,
    repeat:-1,
    ease:"linear"

})


document.querySelector(".fifth").addEventListener("mouseover",function(){
    document.querySelector(".fifth").style.opacity = "0"
    document.querySelector(".scroll5").style.display = "initial"
    document.querySelector(".fifth1").style.opacity = "1"
    document.querySelector(".img5").style.opacity = "1"





    
  
})
document.querySelector(".fifth").addEventListener("mouseout",function(){
    document.querySelector(".scroll5").style.display = "none"
    document.querySelector(".fifth1").style.opacity = "0"
    document.querySelector(".fifth").style.opacity = "1"
    document.querySelector(".img5").style.opacity = "0"



    
  
})

document.querySelector(".fifth").addEventListener("mousemove",function(e){
    setTimeout(function(){

        document.querySelector(".img5").style.left = `${e.x}px`
        document.querySelector(".img5").style.top = `${e.y}px`
    },200)

})

gsap.to(".scroll5>h5:nth-child(1)",{
    x:"-100%",
    duration:40,
    repeat:-1,
    ease:"linear"

})
gsap.to(".scroll5>h5:nth-child(2)",{
    x:"-100%",
    duration:40,
    repeat:-1,
    ease:"linear"

})


document.querySelector(".sixth").addEventListener("mouseover",function(){
    document.querySelector(".sixth").style.opacity = "0"
    document.querySelector(".scroll6").style.display = "initial"
    document.querySelector(".sixth1").style.opacity = "1"
    document.querySelector(".img6").style.opacity = "1"





    
  
})
document.querySelector(".sixth").addEventListener("mouseout",function(){
    document.querySelector(".scroll6").style.display = "none"
    document.querySelector(".sixth1").style.opacity = "0"
    document.querySelector(".sixth").style.opacity = "1"
    document.querySelector(".img6").style.opacity = "0"



    
  
})

document.querySelector(".sixth").addEventListener("mousemove",function(e){
    setTimeout(function(){

        document.querySelector(".img6").style.left = `${e.x}px`
        document.querySelector(".img6").style.top = `${e.y}px`
    },200)

})

gsap.to(".scroll6>h5:nth-child(1)",{
    x:"-100%",
    duration:40,
    repeat:-1,
    ease:"linear"

})
gsap.to(".scroll6>h5:nth-child(2)",{
    x:"-100%",
    duration:40,
    repeat:-1,
    ease:"linear"

})



gsap.to(".scroll2>h5:nth-child(1)",{
    x:"-100%",
    duration:40,
    repeat:-1,
    ease:"linear"

})
gsap.to(".scroll2>h5:nth-child(2)",{
    x:"-100%",
    duration:40,
    repeat:-1,
    ease:"linear"

})