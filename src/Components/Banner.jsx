import { Navigation } from 'swiper';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";



const slides = [
    {
      title: 'Find Your Dream Home',
      description: 'We provide the best real estate services to find your dream house.',
      image: 'https://i.ibb.co.com/2dmj5pq/indian-city-buildings-scene-1.jpg', 
    },
    {
      title: 'Luxury Apartments',
      description: 'Discover high-end apartments in prime locations.',
      image: 'https://i.ibb.co.com/gmYhVN7/80575.jpg', 
    },
    {
      title: 'Commercial Spaces',
      description: 'We help businesses find the best commercial properties.',
      image: 'https://i.ibb.co.com/gmVZdCw/building.jpg',
    },
  ];
  

const Banner = () => {
   

    
    return (
        <div>
            <div className="relative w-full h-screen bg-gray-100">
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        spaceBetween={50}
        slidesPerView={1}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            {/* Left Content */}
            <motion.div
              className="flex items-center justify-center w-full max-w-7xl mx-auto p-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Left side: Text content */}
              <div className="w-1/2 text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">{slide.title}</h1>
                <p className="mt-4 text-lg text-gray-600">{slide.description}</p>
                <div className="mt-6 space-x-4">
                  <button className="btn btn-primary">Our Services</button>
                  <button className="btn btn-outline">Learn More</button>
                </div>
              </div>

              {/* Right side: Image */}
              <div className="w-1/2">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
           
        </div>
    );
};

export default Banner;