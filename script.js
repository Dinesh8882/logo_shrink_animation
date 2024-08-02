gsap.from(".middle-logo h1",{
    scale:6,
    y:300,
    x:60,
    scrollTrigger:{
        scroll:"body",
        trigger:".page1",
        // markers:true,
        start:"60% 50%",
        end:"60% 40%",
        scrub:4
    }
})