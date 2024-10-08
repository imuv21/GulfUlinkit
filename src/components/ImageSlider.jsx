import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const ImageSlider = () => {

    const content = [
        { title1: 'Build or Scale Up Your', title2: 'Business With Us', description: 'If You Can Think It, We Can Make It' },
        { title1: 'Discover Innovative Solutions', title2: 'Tailored For You', description: 'Let Us Help You Grow' },
        { title1: 'SEO Made Easy', title2: 'Boost Your Online Presence', description: 'Reach More Customers with Ease' },
        { title1: 'Mobile App Development', title2: 'Bring Your Ideas to Life', description: 'Creating Seamless Experiences' },
        { title1: 'Expert Web Development', title2: 'Powering The Digital World', description: 'We Build, You Thrive' },
    ];
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const slider1Ref = useRef(null);
    const navigate = useNavigate();
    const blogs = () => {
        navigate('/blogs');
    }

    useEffect(() => {
        const initializeSliders = () => {
            if (typeof jQuery !== 'undefined') {
                (function ($) {
                    $.fn.sliderResponsive = function (settings) {
                        var set = $.extend(
                            {
                                slidePause: 8000,
                                fadeSpeed: 800,
                                autoPlay: "on",
                                showArrows: "off",
                                hideDots: "off",
                                hoverZoom: "on",
                                titleBarTop: "off",
                            },
                            settings
                        );

                        var $slider = $(this);
                        var size = $slider.find("> div").length;
                        var position = 0;
                        var sliderIntervalID;

                        // Add a Dot for each slide
                        $slider.find("> ul").remove();
                        $slider.append("<ul></ul>");
                        $slider.find("> div").each(function () {
                            $slider.find("> ul").append("<li></li>");
                        });

                        // Put .show on the first Slide
                        $slider.find("div:first-of-type").addClass("show");
                        $slider.find("li:first-of-type").addClass("showli");
                        $slider.find("> div").not(".show").fadeOut();

                        if (set.autoPlay === "on") {
                            startSlider();
                        }

                        if (set.showArrows === "on") {
                            $slider.addClass("showArrows");
                        }

                        if (set.hideDots === "on") {
                            $slider.addClass("hideDots");
                        }

                        if (set.hoverZoom === "off") {
                            $slider.addClass("hoverZoomOff");
                        }

                        if (set.titleBarTop === "on") {
                            $slider.addClass("titleBarTop");
                        }

                        function startSlider() {
                            sliderIntervalID = setInterval(() => {
                                nextSlide();
                            }, set.slidePause);
                        }

                        $slider.mouseover(() => clearInterval(sliderIntervalID));
                        $slider.mouseout(() => startSlider());

                        $slider.find("> .right").click(nextSlide);
                        $slider.find("> .left").click(prevSlide);

                        function nextSlide() {
                            var currentSlideIndex = $slider.find(".show").index();
                            position = (currentSlideIndex + 1) % size;
                            changeCarousel(position);
                        }

                        function prevSlide() {
                            var currentSlideIndex = $slider.find(".show").index();
                            position = (currentSlideIndex - 1 + size) % size;
                            changeCarousel(position);
                        }

                        $slider.find(" > ul > li").click(function () {
                            position = $(this).index();
                            changeCarousel($(this).index());
                        });

                        function changeCarousel(position) {
                            $slider.find(".show").removeClass("show").fadeOut();
                            $slider.find("> div").eq(position).fadeIn(set.fadeSpeed).addClass("show");
                            $slider.find("> ul > li.showli").removeClass("showli");
                            $slider.find("> ul > li").eq(position).addClass("showli");
                            setActiveSlideIndex(position); 
                        }

                        return $slider;
                    };
                })(jQuery);

                $(slider1Ref.current).sliderResponsive({
                    hideDots: "on",
                });
            };
        };
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js';
        script.onload = initializeSliders;
        document.body.appendChild(script);
        return () => {
            if (typeof jQuery !== 'undefined' && slider1Ref.current) {
                $(slider1Ref.current).empty();
            }
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Fragment>
            <Helmet>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            </Helmet>

            <div className="slider" id="slider1" ref={slider1Ref}>
                <div style={{ backgroundImage: `url(https://res.cloudinary.com/dey1tujp8/image/upload/v1728372072/GulfUlinkit/EA99CC738B99D0AA67987EC2976D550F_lr6cxt.webp)` }}></div>
                <div style={{ backgroundImage: `url(https://res.cloudinary.com/dey1tujp8/image/upload/v1728371689/GulfUlinkit/FRSdefault_czuc1i.avif)` }}></div>
                <div style={{ backgroundImage: `url(https://res.cloudinary.com/dey1tujp8/image/upload/v1728372215/GulfUlinkit/Firefly_create_an_image_for_this_Discover_the_essence_of_SEO_its_benefits_for_small_businesses_an_1_1_qyv2mo.jpg)` }}></div>
                <div style={{ backgroundImage: `url(https://res.cloudinary.com/dey1tujp8/image/upload/v1728372408/GulfUlinkit/mobile-app-development-trends_t9uf1s.png)` }}></div>
                <div style={{ backgroundImage: `url(https://res.cloudinary.com/dey1tujp8/image/upload/v1728371940/GulfUlinkit/How-Many-Web-Developers-in-the-World-1_ylju9b.avif)` }}></div>
                <i className="left" style={{ zIndex: 3, position: 'absolute' }}>
                    <KeyboardArrowLeftIcon />
                </i>
                <i className="right" style={{ zIndex: 3, position: 'absolute' }}>
                    <KeyboardArrowRightIcon />
                </i>

                <span className="titleBar">
                    <h1>{content[activeSlideIndex].title1}</h1>
                    <h1>{content[activeSlideIndex].title2}</h1>
                    <p>{content[activeSlideIndex].description}</p>
                    <button onClick={blogs}>Discover More</button>
                </span>
            </div>
        </Fragment>
    )
};

export default ImageSlider;