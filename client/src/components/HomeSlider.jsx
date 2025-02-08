import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import './HomeSlider.css'
export default function HomeSlider() {
    const slidesimg = [
        {
            id: 1,
            title: "Premium Crockery",
            subtitle: "Elegance & Quality Combined",
            description:
                "Explore our collection of finely crafted crockery that adds sophistication to every meal.",
            image: "/images/crockery1.png",
            bgColor: "#F9F4EF",
        },
        {
            id: 2,
            title: "Exclusive Toy Collection",
            subtitle: "Fun & Learning Together",
            description:
                "From classic wooden toys to the latest trends, we have something for every child.",
            image: "/images/toys1.png",
            bgColor: "#E3F2FD",
        },
        {
            id: 3,
            title: "Perfect Gift Sets",
            subtitle: "Curated for Special Moments",
            description:
                "Discover premium gift sets for your loved ones – ideal for any occasion.",
            image: "/images/giftset1.png",
            bgColor: "#FDEEF1",
        },
    ];

    const slides = [
        { id: 1, bgColor: "#F9F4EF" },
        { id: 2, bgColor: "#E3F2FD" },
        { id: 3, bgColor: "#FDEEF1" }
    ];

    const [activeBgColor, setActiveBgColor] = useState(slides[0].bgColor);

    useEffect(() => {
        const swiper = document.querySelector(".swiper").swiper;
        swiper.on("slideChange", () => {
            setActiveBgColor(slides[swiper.realIndex].bgColor);
        });
    }, []);

    return (
        <section className="w-full h-[85vh] overflow-hidden">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="relative w-full h-full"
            >
                {slidesimg.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative w-full h-[85vh] flex items-center justify-center px-6 lg:px-20"
                            style={{ backgroundColor: slide.bgColor }}
                        >
                            {/* Content Wrapper */}
                            <div className="flex flex-col-reverse lg:flex-row items-center max-w-7xl w-full h-[52vh]">
                                {/* Left: Text Content */}
                                <motion.div
                                    className="lg:w-1/2 text-center lg:text-left space-y-4"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h4 className="text-lg text-[#d87a38] font-semibold uppercase">
                                        {slide.subtitle}
                                    </h4>
                                    <h2 className="text-5xl font-bold text-[#3e5840] mt-2">
                                        {slide.title}
                                    </h2>
                                    <p className="text-gray-700">{slide.description}</p>

                                    {/* SHOP NOW Button */}
                                    <div className="mt-6 flex justify-center lg:justify-start">
                                        <button className="flex items-center bg-[#262424] text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 relative group overflow-hidden">
                                            <span className="mr-5 tracking-wide relative z-10">SHOP NOW</span>
                                            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-[#262424] transition-transform duration-300 relative z-10">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="w-5 h-5 text-[#262424] transition-transform duration-300 group-hover:translate-x-1"
                                                >
                                                    <path d="M9 18l6-6-6-6"></path>
                                                </svg>
                                            </span>

                                            {/* Hover Effects */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#3e3e3e] to-[#1b1b1b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute w-full h-full top-0 left-0 scale-100 group-hover:scale-105 transition-transform duration-300"></div>
                                        </button>
                                    </div>
                                </motion.div>

                                {/* Right: Image */}
                                <motion.div
                                    className="lg:w-1/2 flex justify-center mt-6 lg:mt-0"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="max-w-[350px] lg:max-w-[450px]"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* Navigation Buttons */}
                <div className="absolute bottom-5 right-1  transform -translate-x-1/3 flex space-x-4 z-20">
                    <button className="w-12 h-12 flex items-center justify-center rounded-full border-[3px] border-gray-700 bg-white shadow-lg transition-all hover:scale-110">
                        <ChevronRight className="text-gray-500" size={20} />
                    </button>
                </div>

                <div className="absolute bottom-5 right-12  transform -translate-x-1/2 flex space-x-4 z-20">
                    <button className="w-12 h-12 flex items-center justify-center rounded-full border-[3px] border-gray-700 bg-white shadow-lg transition-all hover:scale-110">
                        <ChevronLeft className="text-gray-500" size={20} />
                    </button>
                </div>

            </Swiper>



            {/* Wavy Bottom */}
            <div className="absolute left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-[200%] h-[120px] wave-animation"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        id="wavePath"
                        fill={activeBgColor}
                        fillOpacity="1"
                        d="M0,192L40,208C80,224,160,256,240,234.7C320,213,400,139,480,128C560,117,640,171,720,208C800,245,880,267,960,234.7C1040,203,1120,117,1200,90.7C1280,64,1360,96,1400,112L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                    ></path>
                    <path
                        id="wavePath2"
                        fill={activeBgColor}
                        fillOpacity="1"
                        d="M0,192L40,208C80,224,160,256,240,234.7C320,213,400,139,480,128C560,117,640,171,720,208C800,245,880,267,960,234.7C1040,203,1120,117,1200,90.7C1280,64,1360,96,1400,112L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                        transform="translate(1440,0)" /* Duplicate for infinite effect */
                    ></path>
                </svg>
            </div>



        </section>
    );
}
