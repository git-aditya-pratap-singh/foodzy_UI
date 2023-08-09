import React from "react";
import network from "../../assets/network.png";
import testimonials from "./TestimonialData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonial = ()=>{
    return(
      <>
      <section className="w-10/12 mx-auto flex flex-col md:flex-row justify-center mt-20 lg:mt-10 ">

        <div className="basis-1/2 flex flex-col justify-center items-start lg:px-8 space-y-3 pt-10 lg:pt-0">
            <h1 className="text-xl font text-red-500">Testimonial</h1>
            <h2 className="text-[1.8rem] md:text-3xl font font-semibold">What our 
                <span className="text-red-500"> customers</span> are saying</h2>



          <div className="w-80 lg:w-96">

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              
            >
            {testimonials.map((data,index)=>{
                    return (
                        <>
                          <SwiperSlide>
                            <Testcard {...data}/>
                          </SwiperSlide>
                        </>
                    )
            })}
            </Swiper>
          </div>
               
        </div>

        <div className="basis-1/2 justify-center">
          <img src={network} alt="Image doesn't load..." className="w-[75vh] mx-auto"/>
        </div>
      </section>
       
       </>
    )
}

const Testcard = ({id,name,quote,image})=>{
    return(
        <>
        <div key={id} className="space-y-8 py-12">
              <p className="font font-thin leading-7 text-[0.8rem] text-gray-500">{quote}</p>

              <div className="flex justify-start items-center space-x-5 ">
                <img src={image} alt="image dowsn't load...." className="w-16 h-16 rounded-full bg-contain"/>
                <h1 className="font text-[0.9rem]">{name}</h1>
              </div>
                

        </div>
        </>
    )
}
export default Testimonial;