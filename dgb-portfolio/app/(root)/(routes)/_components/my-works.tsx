
"use-client";

import Image from "next/image"
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { mywork } from '@/helpers/constant';
function MyWork() {

    SwiperCore.use([Autoplay]);
    SwiperCore.use([Pagination]);
    return ( 
        <div className="flex flex-col items-center justify-center w-full">

                <div className="flex flex-col items-center justify-center px-10">
                    <div className="flex flex-col items-center justify-center py-5">
                        <h1 className="text-4xl font-bold">
                           My 
                           <span className="font-bold text-primary-100">
                                &nbsp;Projects
                            </span>
                        </h1>
                        <p>
                            I`ve worked on...
                        </p>
                    </div>
                </div>
                <div className="w-full ">

                
                <Swiper 
             
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            direction='horizontal'
            centeredSlides={true}
        
                modules={[Pagination, Navigation]}
            >
                      
                {mywork.map((project, idx) => (
                    <SwiperSlide key={idx} className='
                    flex item-centers justify-center w-full  '>
                        <div className='flex flex-row item-center justify-center mx-auto bg-primary-100 h-[350px] max-w-[75%] px-5 rounded-md gap-14'>
                            <div className='flex flex-col items-center justify-center'>
                                <div className="relative text-black text-3xl font-bold">
                                       {project.title}
                               
                                </div>
                                {project.features.map((feature, idx2) => (
                                <div key={idx2} className="relative text-black text-sm font-bold">
                                    {feature}
                                      
                               
                                </div>
                                ))}
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
                                <div className="relative flex flex-row items-center justify-center my-auto h-full w-[250px] bg-primary-50 rounded-md py-2">
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

