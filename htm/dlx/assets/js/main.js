/***************************************************
==================== JS INDEX ======================
****************************************************
01. Preloader
02. Mobile Menu
03. Mobile Menu Two
04. Smooth Scroll
05. Sidebar Toggle
06. Sticky Header
07. Data Js
08. Counter Js
09. Mouse Cursor
10. Progressbar js
11. Button Movement
12. Magnific Popup
13. Button Scroll Up
14. Brand Slider
15. Tools Slider
16. Case Study Slider
17. Team Slider
18. Reveal Box Image
19. Section Reveal
20. Splite Text Animation
21. BAnner Title Animation
22. Title Animation
23. Portfolio Animation
24. Magnific Wrap Js
25. Hover Image Show
26. Case Section Animation
27. Brand Slider
28. Fade Top Animation
29. Horizontal Slider
30. Fade Top Animation
31. Height Title
32. Vanila Tilt
33. Case Cursor
34. Team Cursor


****************************************************/

(function ($) {
    "use strict";
    var windowOn = $(window);

  /*======================================
	01.Preloader activation
	========================================*/
    // 01. PreLoader Js
	windowOn.on('load', function () {
		$("#preloader").fadeOut(500);
	});

    /*======================================
      02.Mobile Menu Js
      ========================================*/
      $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanExpand: ['<i class="fa-regular fa-angle-down"></i>'],
    });
    /*======================================
     03.Mobile Menu Two Js
      ========================================*/
      $("#mobile-menu-two").meanmenu({
        meanMenuContainer: ".mobile-menu-two",
        meanScreenWidth: "99999",
        meanExpand: ['<i class="fa-regular fa-angle-down"></i>'],
    });


    // 04. Smooth Scroll Js
	function smoothSctoll() {
		$('.title-top-content a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 0
				}, 100);
			}
		});
	}
	smoothSctoll();

    /*======================================
      05.Sidebar Toggle
    ========================================*/
    $(".bars_icon,.menu-button").on("click", function () {
        $(".offcanvas-info").addClass("info_open");
        $(".offcanvas_overlay").addClass("overlayopen");
    });

    $(".offcanvas-icon,.offcanvas_overlay").on("click", function () {
        $(".offcanvas-info").removeClass("info_open");
        $(".offcanvas_overlay").removeClass("overlayopen");
    });

    /*======================================
      Sidebar Toggle Two
    ========================================*/
    $(".menu-button").on("click", function () {
        $(".offcanvas-info-two").addClass("offcanvas_open");
    });

    $(".offcanvas-close").on("click", function () {
        $(".offcanvas-info-two").removeClass("offcanvas_open");
    });

    /*======================================
	06.Sticky Header Js
	========================================*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
		  $(".header-sticky").addClass("sticky");
		} else {
		  $(".header-sticky").removeClass("sticky");
		}
	});

    /*======================================
      07.Data js
      ========================================*/
    $("[data-background").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    // 08.Counter Js
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    /*-----------------------------------
        09. Mouse Cursor    
    -----------------------------------*/
    function mousecursor() {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            let n,
                i = 0,
                o = !1;
            (window.onmousemove = function (s) {
                o ||
                    (t.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (e.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (n = s.clientY),
                    (i = s.clientX);
            }),
                (e.style.visibility = "visible"),
                (t.style.visibility = "visible");
        }
    }
    $(function () {
        mousecursor();
    });

    /*=============================================
        10.ProgressBar Active            
    =============================================*/
    $('.progress-item').appear(function (e) {
        // Animated Prograssbar
        $(".progress--bar").each(function () {
            $(this)
            .find(".progress-fill")
            .animate(
                {
                    width: $(this).attr("data-percentage"),
                },
                2000
            );
            $(this)
            .find(".progress-number")
            .animate(
                { left: $(this).attr("data-percentage") },
                {
                    duration: 2000,
                    step: function (now, fx) {
                        var data = Math.round(now);
                        $(this)
                        .find(".percent")
                        .html(data + "%");
                    },
                }
            );
        });
    });

    // 11.btn-moveement Animation Start
    $(".btn-hover").on("mouseenter", function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find("span").css({
        top: y,
        left: x,
        });
    });

    $(".btn-hover").on("mouseout", function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find("span").css({
        top: y,
        left: x,
        });
    });

    const all_btns = gsap.utils.toArray(".btn-hover");
    if (all_btns.length > 0) {
        var all_btn = gsap.utils.toArray(".btn-hover");
    } else {
        var all_btn = gsap.utils.toArray("#btn-hover");
    }
    const all_btn_cirlce = gsap.utils.toArray(".btn-item");
    all_btn.forEach((btn, i) => {
        $(btn).mousemove(function (e) {
        callParallax(e);
        });
        function callParallax(e) {
        parallaxIt(e, all_btn_cirlce[i], 80);
        }

        function parallaxIt(e, target, movement) {
        var $this = $(btn);
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        gsap.to(target, 0.5, {
            x: ((relX - $this.width() / 2) / $this.width()) * movement,
            y: ((relY - $this.height() / 2) / $this.height()) * movement,
            ease: Power2.easeOut,
        });
        }
        $(btn).mouseleave(function (e) {
        gsap.to(all_btn_cirlce[i], 0.5, {
            x: 0,
            y: 0,
            ease: Power2.easeOut,
        });
        });
    });
    // btn-moveement Animation End

    /*======================================
    12.MagnificPopup image view
    ========================================*/
    $(".popup-img").magnificPopup({
        type: "image",
        showCloseBtn: true,
        gallery: {
            enabled: true,
        },
    });

    let tourImagePopupGallery = $(".tour-image-popup");
    tourImagePopupGallery.each(function () {
        let elm = $(this);
        let options = elm.data("gallery-options");
        let imageGallery = elm.magnificPopup(
            "object" === typeof options ? options : JSON.parse(options)
        );
    });

    /*======================================
    MagnificPopup video view
    ========================================*/
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    /*======================================
      13.Button scroll up js
      ========================================*/
    !function (s) { "use strict"; s(".switch").on("click", function () { s("body").hasClass("light") ? (s("body").removeClass("light"), s(".switch").removeClass("switched")) : (s("body").addClass("light"), s(".switch").addClass("switched")) }), s(document).ready(function () { var e = document.querySelector(".progress-wrap path"), t = e.getTotalLength(); e.style.transition = e.style.WebkitTransition = "none", e.style.strokeDasharray = t + " " + t, e.style.strokeDashoffset = t, e.getBoundingClientRect(), e.style.transition = e.style.WebkitTransition = "stroke-dashoffset 10ms linear"; var o = function () { var o = s(window).scrollTop(), r = s(document).height() - s(window).height(), i = t - o * t / r; e.style.strokeDashoffset = i }; o(), s(window).scroll(o); jQuery(window).on("scroll", function () { jQuery(this).scrollTop() > 50 ? jQuery(".progress-wrap").addClass("active-progress") : jQuery(".progress-wrap").removeClass("active-progress") }), jQuery(".progress-wrap").on("click", function (s) { return s.preventDefault(), jQuery("html, body").animate({ scrollTop: 0 }, 550), !1 }) }) }(jQuery);

    /* ============================================================ */
    /* 14.brand-slider-active
    /* ============================================================ */
    var brandSlider = new Swiper('.brand-slider', {
        spaceBetween: 30,
        slidesPerView: 2,
        loop: true,
        speed: 5000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
        },
    });
    /* ============================================================ */
    /* brand-slider-three
    /* ============================================================ */
    var brandSlider = new Swiper('.brand-slider-three', {
        spaceBetween: 30,
        slidesPerView: 3,
        loop: true,
        speed: 5000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1400: {
                slidesPerView: 6,
            },
        },
    });

    /* ============================================================ */
    /* 15.tools-slider-active
    /* ============================================================ */
    var toolsSlider = new Swiper('.tools-slider', {
        spaceBetween: 15,
        slidesPerView: 2,
        loop: true,
        allowTouchMove: true,
        navigation: {
            nextEl: ".tools_button_next",
            prevEl: ".tools_button_prev",
        },
    });
      // testimonial Content slider
      let testimonialSliderContent = new Swiper('.testimonialSliderContent', {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        parallax: true,
        watchSlidesProgress: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
                  clickable: true,
              renderBullet: function (index, className) {
                  return `<span class="${className}">${(index + 1)}</span>`;
              },
          },
    });
    
    // testimonial image slider
    var interleaveOffset = 0.5;
    let testimonialSliderImage = new Swiper('.testimonialSliderImage', {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        effect: "fade",
        speed: 1000,
        parallax: true,
        watchSlidesProgress: true,
    });
    // Link the two sliders together
    testimonialSliderContent.controller.control = testimonialSliderImage;
    testimonialSliderImage.controller.control = testimonialSliderContent;

    let smoother = ScrollSmoother.create({
		smooth: 1.35,
		effects: true,
		smoothTouch: true,
		normalizeScroll: false,
		ignoreMobileResize: true,
	});

    // gsap-register-plugin
    gsap.registerPlugin(
        ScrollSmoother,
        ScrollToPlugin,
        ScrollTrigger,
        SplitText
      );

    /* ============================================================ */
    /* 16.case-study-slider-active
    /* ============================================================ */
    var caseStudy = new Swiper('.case-study-slider', {
        spaceBetween: 35,
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        speed: 1500,
        allowTouchMove: true,
        breakpoints: {
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });
    /* ============================================================ */
    /* expertise-main-wrapper
    /* ============================================================ */
    var expertise = new Swiper('.expertise-main-wrapper', {
        spaceBetween: 35,
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        speed: 1500,
        allowTouchMove: true,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });
  
    /* ============================================================ */
    /* testimonial-two-slider-active
    /* ============================================================ */
    var testimonialTwo = new Swiper('.testimonial-two-slider', {
        spaceBetween: 15,
        slidesPerView: 1,
        loop: true,
        speed: 700,
        allowTouchMove: true,
        navigation: {
            nextEl: ".testimonial_button_next",
            prevEl: ".testimonial_button_prev",
        },
    });

    /* ============================================================ */
    /* testimonial-four-slider-active
    /* ============================================================ */
    var testimonialFour = new Swiper('.testimonial-four-slider', {
        spaceBetween: 15,
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        speed: 700,
        allowTouchMove: true,
        navigation: {
            nextEl: ".testimonial_button_next",
            prevEl: ".testimonial_button_prev",
        },
    });

    /* ============================================================ */
    /* 17.team-slider-active
    /* ============================================================ */
    var teamSlide = new Swiper('.team-slider-active', {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        speed: 1500,
        autoplay: true,
        allowTouchMove: true,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

     /* ============================================================ */
    /* testimonial-three-slider-active
    /* ============================================================ */
    var testimonialThree = new Swiper('.tesmonial-slider-three', {
        spaceBetween: 15,
        slidesPerView: 1,
        loop: true,
        speed: 700,
        autoplay: true,
        clickable: true,
        allowTouchMove: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    });

   // 18.Reveal Box Image
   let box_img_reveal = document.querySelectorAll(".img-box-reveal");
   box_img_reveal.forEach((img_reveal) => {
       let image = img_reveal.querySelector(".img");
       let tl = gsap.timeline({
           scrollTrigger: {
               trigger: img_reveal,
               start: "top 70%",
           }
       });

       tl.set(img_reveal, { autoAlpha: 1 });
       tl.from(img_reveal, 1.5, {
           xPercent: -100,
           ease: Power2.out
       });
       tl.from(image, 1.5, {
           xPercent: 100,
           scale: 1.5,
           delay: -1.5,
           ease: Power2.out
       });
   });
   // Reveal Box Image End
    let device_width = window.innerWidth;

    // 19.section reveal & stack also vanish animation Start
    const pineVanish = gsap.utils.toArray(".an-pine-vanish");
    if (pineVanish.length > 0) {
    if (device_width > 767) {
        pineVanish.forEach((item) => {
        gsap.to(item, {
            opacity: 0,
            scale: 0.9,
            y: 50,
            scrollTrigger: {
            trigger: item,
            scrub: true,
            start: "top top",
            pin: true,
            pinSpacing: false,
            markers: false,
            },
        });
     });
     }
    }
    // section reveal & stack also vanish animation End

    //  20.split text animation
    $(document).ready(function() {
		// split text animation
		var st = $(".split-text");
        if(st.length == 0) return;
        gsap.registerPlugin(SplitText);
        st.each(function(index, el) {
            el.split = new SplitText(el, {
                type: "lines,chars",
                linesClass: "split-line"
            });
            gsap.set(el, { perspective: 400 });

            if( $(el).hasClass('split-in-right') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "50",
                    ease: "Back.easeOut",
                });
            }
            if( $(el).hasClass('split-in-left') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "-50",
                    ease: "circ.out",
                });
            }
            if( $(el).hasClass('split-in-up') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "40",
                    ease: "circ.out",
                });
            }
            if( $(el).hasClass('split-in-down') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "-80",
                    ease: "circ.out",
                });
            }
            el.anim = gsap.to(el.split.chars, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                },
                x: "0",
                y: "0",
                rotateX: "0",
                scale: 1,
                opacity: 1,
                duration: 1,
                stagger: 0.02,
            });
        });
	});
    
    // 21.banner-title-right
    let splitTextElements = gsap.utils.toArray(".banner-title-right");

    splitTextElements.forEach(element => {
    const splitInstance = new SplitText(element, {
        type: "lines,words,chars"
    });
    gsap.set(splitInstance.chars, {
        x: 50, 
        opacity: 0 
    });
    gsap.to(splitInstance.chars, {
        x: 0, 
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.10,
        scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }
     });
    });

     ///////////////////////////////////////////////////// 

    // 22. Title Animation
    let splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, { duration: 1.5, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });
    /////////////////////////////////////////////////////
    // Title Animation

    /////////////////////////////////////////////////////
    // 23. Portfolio Animation
    if (device_width > 767) {
        let portfolioline = gsap.timeline({
        scrollTrigger: {
            trigger: ".feature-two-area",
            start: "top center-=200",
            pin: ".feature-large-title",
            end: "bottom bottom+=80",
            markers: false,
            pinSpacing: false,
            scrub: 1,
        } 
        })
        portfolioline.to(".feature-large-title", {
        scale: 2,
        duration: 1
        })
        portfolioline.to(".feature-large-title", {
        scale: 2,
        duration: 1
        })
        portfolioline.to(".feature-large-title", {
        scale: 1,
        duration: 1
        }, "+=2")
    }
    let portfolio_lists = gsap.utils.toArray(".feature-item")
    portfolio_lists.forEach((portfolio, i) => {
    gsap.set(portfolio, { opacity: 1 })
    let t1 = gsap.timeline()

    t1.set(portfolio, {
        position: "relative",
    })
    t1.to(portfolio, {
        scrollTrigger: {
        trigger: portfolio,
        scrub: 2,
        duration: 1.5,
        start: "top bottom+=100",
        end: "bottom center",
        markers: false
        },
        scale: 1,
        opacity: 1,
        rotateX: 0,
    })
    });

   /////////////////////////////////////////////////////

    // 24.magnetic-wrap-start
    var mWrap = document.querySelectorAll(".magnetic-wrap");

    function parallaxIt(e, wrap, movement = 1) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var boundingRect = wrap.mArea.getBoundingClientRect();
    
      var relX = e.pageX - boundingRect.left;
      var relY = e.pageY - boundingRect.top;
    
      gsap.to(wrap.mContent, {
        x: (relX - boundingRect.width / 2) * movement,
        y: (relY - boundingRect.height / 2 - scrollTop) * movement,
        ease: "power1",
        duration: 0.6,
      });
    }
    
    mWrap.forEach(function (wrap) {
      wrap.mContent = wrap.querySelector(".magnetic-content");
      wrap.mArea = wrap.querySelector(".magnetic-area");
    
      wrap.mArea.addEventListener("mousemove", function (e) {
        parallaxIt(e, wrap);
      });
    
      wrap.mArea.addEventListener("mouseleave", function (e) {
        gsap.to(wrap.mContent, {
          scale: 1,
          x: 0,
          y: 0,
          ease: "power3",
          duration: 0.6,
        });
      });
    });
    // magnetic-wrap-end

    //>> 25.Hover Image Show Slider Start <<//
    const portfolioBoxItems = document.querySelectorAll(".service-single-item");

    function followImageCursor(event, portfolioBoxItems) {
        const contentBox = portfolioBoxItems.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        portfolioBoxItems.children[2].style.transform = `translate(${dx}px) rotate(0) scale(1)`;
    }
    
    portfolioBoxItems.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
            setInterval(followImageCursor(event, item), 1000);
        });
    });
    /////////////////////////////////////////////////////
      

    /////////////////////////////////////////////////////
    //   26. case Animation
    if (device_width > 767) {
        // Timeline for pinning the case-title
        let portfolioline = gsap.timeline({
        scrollTrigger: {
            trigger: ".case-area",
            start: "top top+=100",
            pin: ".marquee-text-inner", // Pins the case-title
            end: "bottom bottom-=80",
            markers: false, // Debug markers, set true if needed
            pinSpacing: false, // Prevents extra spacing
            scrub: 1, // Smooth scrolling
        },
        });
    }
    
    // Animate each case-item
    let case_lists = gsap.utils.toArray(".case-item");
    
    case_lists.forEach((casestadies, i) => {
        // Set initial state
        gsap.set(casestadies, { opacity: 1 }); // Set initial properties
    
        // Create timeline for individual animations
        let t1 = gsap.timeline();
    
        t1.set(casestadies, {
        position: "relative", // Ensures the element has a relative position
        });
    
        t1.to(casestadies, {
        scrollTrigger: {
            trigger: casestadies, // Trigger for each case-item
            scrub: 2,
            duration: 1.5,
            start: "top top",
            end: "bottom center",
            markers: false
        },
        scale: .5,
        opacity: .5,
        translateX: 0,
        rotateX: 20,
        });
    });
    
    /* ============================================================ */
    /* 27.brand-slider-active
    /* ============================================================ */
    var brandSlider = new Swiper('.case-slider', {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        speed: 5000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
    });

    // 28.fade-top-animation
    if ($(".fade-wrapper").length > 0) {
        if (device_width > 576) {
            $(".fade-wrapper").each(function() {
                var section = $(this);
                var fadeItems = section.find(".fade-top");

                fadeItems.each(function(index, element) {
                    var delay = index * 0;

                    gsap.set(element, {
                        opacity: 0,
                        y: 100,
                        scale: 0.8
                    });

                    ScrollTrigger.create({
                        trigger: element,
                        start: "top 100%",
                        end: "bottom 20%",
                        onEnter: function() {
                            gsap.to(element, {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: 1,
                                delay: delay,
                            });
                        },
                        once: true,
                    });
                });
            });
        }
    }

    // // 28.Feature Horizontal scroll animation
    if (device_width > 1201) {
        document.addEventListener("DOMContentLoaded", function () {
            // Check if the feature area exists
            if ($(".feature-items").length > 0) {
                let container = document.querySelector(".feature-items");
                let sections = gsap.utils.toArray(".panel");
        
                // Horizontal scroll animation
                let horizontalScroll = gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".feature-items",
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                        start: "center center",
                        end: "+=" + container.scrollWidth,
                    },
                });
            }
        });
    }
   /////////////////////////////////////////////////////
    
    /*--------------------------------------------------
    29.Function Height Titles
    ---------------------------------------------------*/
	function HeightTitles() {
  
		function generateSpans(selector) {
			const elements = document.querySelectorAll(selector);
		
			elements.forEach((element) => {
				const text = element.textContent.trim();
				const words = text.split(' ');
		
				let finalHTML = ''; // Empty span at the beginning
		
				words.forEach((word, index) => {
					finalHTML += '<div>'; // Open a div for each word
					for (let i = 0; i < word.length; i++) {
						finalHTML += `<span>${word[i]}</span>`; // Wrap each letter in a span
					}
					finalHTML += '</div>'; // Close the div for each word
					
					if (index !== words.length - 1) {
						finalHTML += '<div><span></span></div>'; // Empty span and a div between words
					}
				});
		
				finalHTML += ''; // Empty span at the end
		
				element.innerHTML = finalHTML;
			});
		}
		
		generateSpans('.height-title .hero-title');
		generateSpans('.height-title .next-hero-title');
		generateSpans('.height-title .slide-hero-title');
		generateSpans('.fixed-title');
		

		function applyHoverEffect(selector) {
			const spans = document.querySelectorAll(selector);
			
			spans.forEach((span) => {
				span.originalScaleY = 1;
				span.addEventListener('mousemove', handleMouseMove);
			});
		
			function handleMouseMove(e) {
				const hoveredSpan = e.target;
				const rect = hoveredSpan.getBoundingClientRect();
				const mouseX = e.clientX - rect.left;
				const scaleFactor = 0.2;
				
				const center = rect.width / 2;
				let scale;
			
				if (mouseX < center) {
				  scale = (scaleFactor + 1) + (scaleFactor * mouseX) / center;
				} else {
				  scale = (scaleFactor + 1) + (scaleFactor * (rect.width - mouseX)) / center;
				}
			
				gsap.to(hoveredSpan, {
				  scaleY: scale,
				  duration: 0.5,
				  ease: 'power4.out',
				});
			
				const spansArray = Array.from(spans);
				const hoveredIndex = spansArray.indexOf(hoveredSpan);
			
				const prevSpan = spansArray[hoveredIndex - 1];
				const nextSpan = spansArray[hoveredIndex + 1];
			
				if (prevSpan) {
					let distanceFromMouse = Math.abs(rect.left - e.clientX);
					distanceFromMouse = Math.min(distanceFromMouse, center);
					
					const scalePrev = 1 + (scaleFactor * (center - distanceFromMouse)) / center;
					gsap.to(prevSpan, {
						scaleY: scalePrev,
						duration: 0.5,
						ease: 'power4.out',
					});
				}
			
				if (nextSpan) {
					let distanceFromMouse = Math.abs(rect.right - e.clientX);
					distanceFromMouse = Math.min(distanceFromMouse, center);
					
					const scaleNext = 1 + (scaleFactor * (center - distanceFromMouse)) / center;
					gsap.to(nextSpan, {
						scaleY: scaleNext,
						duration: 0.5,
						ease: 'power4.out',
					});
				}
			}
			
			spans.forEach((span) => {
				span.addEventListener('mouseleave', handleMouseLeave);
			});
		
			function handleMouseLeave() {
				spans.forEach((span) => {
					gsap.to(span, {
						scaleY: span.originalScaleY,
						duration: 0.5,
						ease: 'power4.out',
					});
				});
			}
		}
		
		applyHoverEffect('.height-title .hero-title span');
		applyHoverEffect('.height-title .next-hero-title span');
					
	}
    // End Height Titles	
				
    // Initialize HeightTitles
    document.addEventListener('DOMContentLoaded', HeightTitles);
    

    // 30.Fade Up js
    var fadeItems = document.querySelectorAll(".fade_in_bottom");

    if (fadeItems.length > 0) {
    fadeItems.forEach(function (item) {
        // Animation settings
        gsap.from(item, {
        y: 100, // Start 50px below the original position
        opacity: 0, // Start fully transparent
        ease: "power2.out", // Smooth easing
        duration: 1.5, // Animation duration
        scrollTrigger: {
            trigger: item, // Trigger animation when this element comes into view
            start: "top bottom", // Start animation when the top of the element reaches the bottom of the viewport
            markers: false, // No markers for debugging
        },
        });
    });
    }
    // fade up animation end

    // 31.Fade Bottom
    gsap.set(".fade_bottom", { y: 50, opacity: 0 });

    // Check for device width and apply different animations
    if (device_width < 1023) {
    // For smaller devices
    const fadeArray = gsap.utils.toArray(".fade_bottom");
    fadeArray.forEach((item) => {
        gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: "top center+=200", // Animation starts when the element is slightly above center
        },
        }).to(item, {
        y: 0, // Move to original position
        opacity: 1, // Fully visible
        ease: "power2.out", // Smooth easing
        duration: 1.5, // Animation duration
        });
    });
    } else {
    // For larger devices
    gsap.to(".fade_bottom", {
        scrollTrigger: {
        trigger: ".fade_bottom",
        start: "top center+=300", // Animation starts later for larger screens
        markers: false, // Disable markers for debugging
        },
        y: 0, // Move to original position
        opacity: 1, // Fully visible
        ease: "power2.out", // Smooth easing
        duration: 1, // Animation duration
        stagger: {
        each: 0.2, // Stagger the animation for each ".fade_bottom" element
        },
    });
    }

    // 32. vanilla tilt
    let topylotilt = document.querySelectorAll(".topy-tilt");

    if (topylotilt) {
        VanillaTilt.init(document.querySelectorAll(".topy-tilt"), {
            max: 9,
            speed: 3000,
        });
    }


    // 33.Case Cursor
    var case_cursor = document.getElementById("case_cursor");

    // 34.Team Cursor
    var team_cursor = document.getElementById("team_cursor");
    function mousemoveHandler(e) {
    try {
        const target = e.target;

        let tl = gsap.timeline({
        defaults: {
            x: e.clientX,
            y: e.clientY,
        }
        })
        let t2 = gsap.timeline({
        defaults: {
            x: e.clientX,
            y: e.clientY,
        }
        })

        // Case Study Cursor
        if (target.closest(".case-study-slider")) {
        tl.to(case_cursor, {
            opacity: 1,
            ease: "power4.out"
        }, "-=0.3");
        }
        else {
        t2.to(case_cursor, {
            opacity: 0,
            ease: "power4.out"
        }, "-=0.3");
        }
        // Team Cursor
        if (target.closest(".team-member-slider-wrapper")) {
        tl.to(team_cursor, {
            opacity: 1,
            ease: "power4.out"
        }, "-=0.3");
        }
        else {
        t2.to(team_cursor, {
            opacity: 0,
            ease: "power4.out"
        }, "-=0.3");
        }

    } catch (error) {
        console.log(error)
    }

    }
    document.addEventListener("mousemove", mousemoveHandler);
    /////////////////////////////////////////////////////

	  
})(jQuery);
