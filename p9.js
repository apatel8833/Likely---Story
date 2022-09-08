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
gsap.to(".svg",{
   
    width:"180",
    duration:.5
    
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
document.querySelector("li:nth-child(2)").addEventListener("mouseover",function(){
    gsap.to(".dot1",{
        y:"-25",
        opacity:1
    })
})
document.querySelector("li:nth-child(2)").addEventListener("mouseout",function(){
    gsap.to(".dot1",{
        y:"0",
        opacity:0
    })
})

