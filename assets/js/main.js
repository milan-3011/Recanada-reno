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
$(document).ready(function() {
  $("#header").load("/General/header.html", function() {
    timelinecodes(); 
    scrolltricodes(); 

    if ($(window).width() < 1110) {
      let hamburgers = $(".hamburger");

      hamburgers.each(function() {
        let tl = gsap.timeline({ paused: true });

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

        $(this).on("click", function() {
          $(this).toggleClass("openmenu");
          if ($(this).hasClass("openmenu")) {
            tl.play();  
          } else {
            tl.reverse();
          }
        });
      });
    }

    $("#footer").load("/General/footer.html", function() {
      locoScroll.update(); 
    });
  });

  scrollwithLoco();
});

function timelinecodes() {
  var tl = gsap.timeline();

  tl.from(".contact-info, #header", {
    y: -30,
    opacity: 0,
    duration: 1,
  })
  if($(".main-dia").length){
    tl.from(".sec-line h4", {
      y: 60,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
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
  
}

function scrolltricodes() {
  const isTab = window.innerWidth < 1110;

  gsap.to(".logo-name", {
    y: -100, 
    opacity: 0, 
    duration: 1, 
    ease: "ease-in-out", 
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page1", 
      scroller: "#main",
      start: "top -10%",
      end: "top 50%",
      scrub: 2, 
    }
  });

  const srvs = isTab ? "top 100%" : "top 70%";

  if($(".main-dia").length){
    gsap.from(".services h4, .services p ", {
      y: 100, 
      opacity: 0, 
      duration: 0.5, 
      ease: "ease-in-out", 
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".page3", 
        scroller: "#main",
        start: srvs,
        end: "top 50%",
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
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".page4", 
        scroller: "#main",
        start: "top 50%",
        end: "top 50%",
        scrub: 3, 
      }
    });

    const whyus = isTab ? "top 90%" : "top 60%";

    gsap.from(".why-us h4, .why-us p ", {
      y: 100, 
      opacity: 0, 
      duration: 0.5, 
      ease: "ease-in-out", 
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".page5", 
        scroller: "#main",
        start: whyus,
        end: "top 50%",
        scrub: 2, 
      }
    });
  }

  gsap.from(".que a h3", {
    scale: 1.3,
    opacity: 0, 
    duration: 2.5,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: ".page6", 
      scroller: "#main",
      start: "top 60%",
      end: "top 50%",
      scrub: 2,
    }
  });

  const queP = isTab ? "top 110%" : "top 60%";

  gsap.from(".que p", {
    y: 100, 
    opacity: 0, 
    duration: 0.5, 
    ease: "ease-in-out", 
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page6", 
      scroller: "#main",
      start: queP,
      scrub: 2,
    }
  });

  gsap.from(".ftr", {
    y: 100,
    opacity: 0, 
    duration: 0.5,
    ease: "ease-in-out",
    scrollTrigger: {
      trigger: ".ftr", 
      scroller: "#main",
      start: "top 100%",
      end: "top 90%",
      scrub: 2,
    }
  });
}

function contactform(){
  if($(".form").length){
    console.log("mil gya");
    const form = document.getElementById('form');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      result.innerHTML = "Please wait...";
      result.style.display = "block";  
        
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      })
      .then(async (response) => {
        let json = await response.json();
        if (response.status === 200) {
          result.innerHTML = "<p style='color: green; margin-top: 10px; font-size: 16px;'><i class='fa-regular fa-circle-check fa-2xl'></i> Your request was successfully submitted ! We will get in touch soon.</p>";
        } else {
          console.log(response);
          result.innerHTML = "<p style='color: red;'>There was an error. Please try again.</p>";
        }
      })
      .catch(error => {
        console.log(error);
        result.innerHTML = "<p style='color: red;'>Something went wrong!</p>";
      })
      .then(function() {
        form.reset();
        setTimeout(() => {
          result.style.display = "none";
        }, 3000);
      });
    });
  }
}
contactform();

