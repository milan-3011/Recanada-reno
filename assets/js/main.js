const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
  preloader.style.display ="none";
});


$(function() { 
  $("#footer").load("/general/footer.html");
});

$(document).ready(function() {
  $("#header").load("/general/header.html", function() {
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
  });
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
  if($(".about").length){
    const isTab = window.innerWidth < 1110;
    tl.from(".aboutImg img", {
      y: "100%",
      opacity: 0,
      duration: 0.5,
    })
    tl.from(".aboutImg h1", {
      y: "100%",
      opacity: 0,
      duration: 0.5,
    })
    if (isTab) {
      tl.from(".ourmission", {
        y: "100%",
        opacity: 0,
        duration: 0.5,
      });
      tl.from(".para h4, .para p, .mission-img", {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        stagger:0.3,
      });
    }
  }
  if($(".appDev").length){
    const isTab = window.innerWidth < 1110;
    tl.from(".appH1 h1, .small-para p", {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      stagger: 0.3
    })
    tl.from(".pngImage, .app-info ul li", {
      y: "-100%",
      opacity: 0,
      duration: 0.5, 
      stagger:0.3
    })
  }
  if($(".drop").length){
    tl.from(".drop h1", {
      x: "-100%",
      opacity: 0,
      duration: 0.5,
      stagger: 0.3
    })
    tl.from(".drop p", {
      x: "100%",
      opacity: 0,
      duration: 0.5,
      stagger: 0.3
    })
    tl.from(".hello, .forms", {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      stagger: 0.3
    })
    
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
        start: "top 30%", 
        end: "top 30%",
        scrub: 5,
      }
    });

    gsap.from(".images div:nth-child(n+4)", { 
      y: 100, 
      opacity: 0, 
      duration: 1, 
      ease: "ease-in-out", 
      stagger: 0.5, 
      scrollTrigger: {
        trigger: ".page3", 
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
        start: whyus,
        end: "top 50%",
        scrub: 2, 
      }
    });
  }

  if($(".about").length){
    
    if (!isTab){
      gsap.from(".ourmission", {
        y: "100%", 
        opacity: 0, 
        duration: 1, 
        ease: "ease-in-out", 
        scrollTrigger: {
          trigger: ".page2", 
          start: "top 50%",
          end: "top 50%",
          scrub: 3, 
        }
      });
      gsap.from(".para h4, .para p", {
        y: 100, 
        opacity: 0, 
        duration: 1, 
        ease: "ease-in-out", 
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".page2", 
          start: "top 50%",
          end: "top 50%",
          scrub: 3, 
        }
      });
      gsap.from(".mission-img", {
        x: 100, 
        opacity: 0, 
        duration: 1, 
        ease: "ease-in-out", 
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".page2", 
          start: "top 50%",
          end: "top 50%",
          scrub: 3, 
        }
      });
    }
    
    const vis = isTab ? "top 100%" : "top 50%";
    gsap.from(".vision", {
      x: "100%", 
      opacity: 0, 
      duration: 1, 
      ease: "ease-in-out", 
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".page3", 
        start: vis,
        end: "top 90%",
        scrub: 3, 
      }
    });
    const vis2 = isTab ? "top 90%" : "top 50%";
    gsap.from(".vision h1, .vision p", {
      y: "100%", 
      opacity: 0, 
      duration: 1, 
      ease: "ease-in-out", 
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".page3", 
        start: vis2,
        end: "top 90%",
        scrub: 3, 
      }
    });
    gsap.from(".team", {
      x: "-100%", 
      opacity: 0, 
      duration: 1, 
      ease: "ease-in-out", 
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".page4", 
        start: vis,
        end: "top 90%",
        scrub: 3, 
      }
    });
    gsap.from(".team h1, .team p", {
      y: "100%", 
      opacity: 0, 
      duration: 1, 
      ease: "ease-in-out", 
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".page4", 
        start: vis2,
        end: "top 90%",
        scrub: 3, 
      }
    });
    gsap.from(".promise", {
      x: "100%", 
      opacity: 0, 
      duration: 1, 
      ease: "ease-in-out", 
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".page5", 
        start: vis,
        end: "top 90%",
        scrub: 3, 
      }
    });
    gsap.from(".promise h1, .promise p", {
      y: "100%", 
      opacity: 0, 
      duration: 1, 
      ease: "ease-in-out", 
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".page5", 
        start: vis2,
        end: "top 90%",
        scrub: 3, 
      }
    });
  }

  // Services Page

  if($(".appDev").length){
    const solv = isTab ? "top 80%" : "top 50%";

    gsap.from(".solutions, .solutions h1, .solutions p", {
      y: 100, 
      opacity: 0, 
      duration: 0.5, 
      ease: "ease-in-out", 
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".page2", 
        start: solv,
        end: "top 50%",
      }
    });
  }


  

  if($(".que ").length){
    const queP = isTab ? "top 110%" : "top 60%";
    gsap.from(".que a h3", {
      scale: 1.3,
      opacity: 0, 
      duration: 2.5,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".page6",
        start: "top 60%",
        end: "top 50%",
        scrub: 2,
      }
    });
    gsap.from(".que p", {
      y: 100, 
      opacity: 0, 
      duration: 0.5, 
      ease: "ease-in-out", 
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".page6",
        start: queP,
        scrub: 2,
      }
    });
  }
  

}

function contactform(){
  if($(".drop").length){
  
    const form = document.getElementById('form');
    const result = document.getElementById('result');

    // form.addEventListener('submit', function(e) {
    //   e.preventDefault();
    //   const formData = new FormData(form);
    //   const object = Object.fromEntries(formData);
    //   const json = JSON.stringify(object);
    //   result.innerHTML = "Please wait...";
    //   result.style.display = "block";  
        
    //   fetch('https://api.web3forms.com/submit', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     },
    //     body: json
    //   })
    //   .then(async (response) => {
    //     let json = await response.json();
    //     if (response.status === 200) {
    //       result.innerHTML = "<p style='color: green; margin-top: 10px; font-size: 16px;'><i class='fa-regular fa-circle-check fa-2xl'></i> Your request was successfully submitted ! We will get in touch soon.</p>";
    //     } else {
    //       console.log(response);
    //       result.innerHTML = "<p style='color: red;'>There was an error. Please try again.</p>";
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     result.innerHTML = "<p style='color: red;'>Something went wrong!</p>";
    //   })
    //   .then(function() {
    //     form.reset();
    //     setTimeout(() => {
    //       result.style.display = "none";
    //     }, 3000);
    //   });
    // });
  }
}
contactform();

document.addEventListener('DOMContentLoaded', function() {
  if($(".drop").length){
    const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
        initialCountry: "ca",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        showSelectedDialCode: true,
    });

    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        const phoneNumber = phoneInput.getNumber(); 
        const dialCode = phoneInput.getSelectedCountryData().dialCode; 
        data.phone = `+${dialCode} ${phoneNumber.replace(`+${dialCode}`, '')}`;

        console.log(data);

        document.getElementById('result').innerText = 'Form submitted! Check the console for data.';
    });
  }
});
