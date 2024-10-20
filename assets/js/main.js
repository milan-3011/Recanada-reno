function scrollwithLoco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smoothMobile: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0, 
        left: 0, 
        width: window.innerWidth, 
        height: window.innerHeight
      };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

scrollwithLoco();


function timelinecodes() {
  var tl = gsap.timeline();

  tl.from(".contact-info, #header",{
    y: -30,
    opacity: 0,
    duration: 1,
  } )
  tl.from(".sec-line h4", {
    y: 60,
    opacity: 0,
    duration: 0.5,
    stagger:0.3,
  })
  tl.from(".first-img", {
    x: 60,
    opacity: 0,
    duration: 0.5,
  })
  tl.from(".who-we-are, .who-we-are div", {
    y: 100, 
    opacity: 0, 
    duration: 1, 
    ease: "ease-in-out", 
    stagger: 0.3,

  });
}
timelinecodes();

function scrolltricodes(){
  const isTab = window.innerWidth < 1110;


  gsap.to(".logo-name", {
    y: -100, 
    opacity: 0, 
    duration: 1, 
    ease: "ease-in-out", 
    stagger:0.3,
    scrollTrigger: {
      trigger: ".page1", 
      scroller: "#main",
      start: "top -10%",
      end:"top 50%",
      scrub: 2, 
    }
  });

  const srvs = isTab ? "top 100%" : "top 70%";

  gsap.from(".services h4, .services p ", {
    y: 100, 
    opacity: 0, 
    duration: 0.5, 
    ease: "ease-in-out", 
    stagger:0.3,
    scrollTrigger: {
      trigger: ".page3", 
      scroller: "#main",
      start: srvs,
      end:"top 50%",
      scrub: 5, 
    }
  });

  gsap.from(".images div:nth-child(-n+3)", { 
    y: 100, 
    opacity: 0, 
    duration: 1, 
    ease: "ease-in-out", 
    stagger: 0.5, 
    scrollTrigger: {
      trigger: ".page3", 
      scroller: "#main",
      start: "top 30%", 
      end: "top 30%",
      scrub: 5,
    }
  });
  
  // Animate the bottom 3 images later
  gsap.from(".images div:nth-child(n+4)", { 
    y: 100, 
    opacity: 0, 
    duration: 1, 
    ease: "ease-in-out", 
    stagger: 0.5, 
    scrollTrigger: {
      trigger: ".page3", 
      scroller: "#main",
      start: "top -10%",
      end: "top 30%", 
      scrub: 5,
    }
  });

  gsap.from(".planing, .planing h1, .planing p ", {
    y: 100, 
    opacity: 0, 
    duration: 0.5, 
    ease: "ease-in-out", 
    stagger:0.3,
    scrollTrigger: {
      trigger: ".page4", 
      scroller: "#main",
      start: "top 50%",
      end:"top 50%",
      scrub: 3, 
    }
  });

  const whyus = isTab ? "top 90%" : "top 60%";

  gsap.from(".why-us h4, .why-us p ", {
    y: 100, 
    opacity: 0, 
    duration: 0.5, 
    ease: "ease-in-out", 
    stagger:0.3,
    scrollTrigger: {
      trigger: ".page5", 
      scroller: "#main",
      start: whyus,
      end:"top 50%",
      scrub: 2, 
    }
  });
  gsap.from(".que a h3", {
    scale:1.3,
    opacity: 0, 
    duration:2.5,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: ".page6", 
      scroller: "#main",
      start: "top 60%",
      end:"top 50%",
      scrub:2,
    }
  });
  const queP = isTab ? "top 110%" : "top 60%";

  gsap.from(".que p", {
    y: 100, 
    opacity: 0, 
    duration: 0.5, 
    ease: "ease-in-out", 
    stagger:0.3,
    scrollTrigger: {
      trigger: ".page6", 
      scroller: "#main",
      start: queP,
      scrub:2,
    }
  });
  gsap.from(".ftr", {
    y: 100,
    opacity: 0, 
    duration:0.5,
    ease: "ease-in-out",
    scrollTrigger: {
      trigger: ".ftr", 
      scroller: "#main",
      start: "top 100%",
      end:"top 90%",
      scrub:2,
    }
  });
 
  
}
scrolltricodes();

if (window.innerWidth < 1110) {
  let hamburgers = document.getElementsByClassName("hamburger");

  for (let i = 0; i < hamburgers.length; i++) {
      let hamburger = hamburgers[i];
      var tl = gsap.timeline({ paused: true });

      tl.to(".navbar-links", {
          right: 0,
          duration: 0.6,
          ease: "power2.inOut"
      })
      .from(".navbar-links li", {
          x: 150,
          duration: 0.3,
          stagger: 0.3,
          opacity: 0,
      });

      hamburger.addEventListener("click", function() {
          this.classList.toggle("openmenu");
          if (this.classList.contains("openmenu")) {
              tl.play();  
          } else {
              tl.reverse(); 
          }
      });
  }
}
