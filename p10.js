gsap.to(".mg4",{
    y:"-20",
    repeat:-1,
    duration:4,
    yoyo:true
})
gsap.from(".mg4",{
    y:"0",
   
})

gsap.to(".mg5",{
    display:"initial",
    delay:5,
})
gsap.from(".mg5",{
    display:"none",
    delay:6,
})
gsap.to(".mg5",{
    display:"initial",
    delay:9,
})
gsap.from(".mg5",{
    display:"none",
    delay:10,
})

gsap.to(".svg",{
    scrollTrigger:{
        scroll:"body",
        trigger:".txt4>h1:nth-child(2)",
        // markers:true,
        start:"top 40%",
        end:"bottom 50%",
        // scrub:3
    },
    width:"230",
    duration:.5
    
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


gsap.to(".mg1",{
    scrollTrigger:{
        scroll:"body",
        trigger:".mg1",
        // markers:true,
        start:"top 10%",
        end:"bottom 50%",
        scrub:4

    },
    y:"-50"
})

gsap.to(".mg5",{
    scrollTrigger:{
        scroll:"body",
        trigger:".mg1",
        // markers:true,
        start:"top 10%",
        end:"bottom 50%",
        scrub:4

    },
    y:"-50"
})

gsap.to(".mg2",{
    scrollTrigger:{
        scroll:"body",
        trigger:".mg2",
        // markers:true,
        start:"top 40%",
        end:"bottom 50%",
        scrub:4

    },
    rotate:15
    
})

gsap.to(".mg3",{
    scrollTrigger:{
        scroll:"body",
        trigger:".mg3",
        // markers:true,
        start:"top 40%",
        end:"bottom 50%",
        scrub:4

    },
    rotate:-15
    
})