
"use-client";

import Image from "next/image"
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { mywork } from '@/helpers/constant';
function MyWork() {

    SwiperCore.use([Autoplay]);
    SwiperCore.use([Pagination]);
    return ( 
        <div className="">
                <Swiper 
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            direction='horizontal'
            centeredSlides={true}
        
                modules={[Pagination]}
            >
                      
                {mywork.map((project, idx) => (
                    <SwiperSlide key={idx} className='
                    flex item-centers justify-center w-full  '>
                        <div className='flex flex-row item-center justify-center mx-auto bg-secondary h-[350px] max-w-[75%] px-5 rounded-md'>
                            <div className='flex items-center justify-center'>
                                <div className="relative text-white text-[27px] leading-9">
                                       {project.title}
                               
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center m-auto max-h-[90%] '>
                                 <Swiper
                                className=""
                                direction={'vertical'}
                                spaceBetween={25}
                                centeredSlides={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                            >
                              {project.images.map((images, idx2) => (
                                  <SwiperSlide key={idx2} className='
                                  flex item-centers justify-center w-full h-full'
                                >
                                <div className="relative flex flex-row items-center justify-center my-auto h-full w-[250px] bg-primary-700 rounded-md py-2">
                                    <Image
                                    src={`${images.src}`}
                                    alt={`${images.alt}`}
                                    className=''
                                    sizes="500px"
                                    fill
                                    style={{
                                      objectFit: 'contain',
                                    }}
                                /> 
                                    </div>
                                      
                              
                                    
                                </SwiperSlide>
                              ))}
                            </Swiper>
                           


                             
                            </div>
                        </div>
                    </SwiperSlide>
            ))} 
            <div className="swiper-pagination"/>
        </Swiper>
        </div>
     );
}

export default MyWork;


// import { whySenang } from '~/helpers/constants';

// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/src/components/ui/Dialog";

