
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
        <div className="flex items-center justify-center">
                <Swiper 
            slidesPerView={1.1}
            spaceBetween={10}
       
            direction='horizontal'
            centeredSlides={true}
        
                modules={[Pagination]}
            >
                      
                {mywork.map((project, idx) => (
                    <SwiperSlide key={idx} className='
                    flex item-centers justify-center w-full  h-auto '>
                        <div className='flex flex-row item-centers justify-center  bg-secondary  max-w-max'>
                            <div className='flex items-center justify-center'>
                                <div className="relative text-white text-[27px] leading-9">
                                       {project.title}
                               
                                </div>
                            </div>
                            <div className=' flex flex-1 items-center justify-center '>

                            {/* <Swiper
                                className=""
                                direction={'vertical'}
                                spaceBetween={50}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Pagination]}
                            >
                              {project.images.map((images, idx2) => (
                                <SwiperSlide key={idx2} className=''
                                >
                                       <Image
                                    src={`${images.src}`}
                                    alt={`${images.alt}`}
                                    width={100}
                                    height={100}
                                    className=''
                                /> 
                                    
                                </SwiperSlide>
                              ))}
                            </Swiper> */}


                             
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

