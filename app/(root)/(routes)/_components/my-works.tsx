
"use-client";

import Image from "next/image"

import {Button} from "@nextui-org/react";
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { mywork } from '@/helpers/constant';

import Link from "next/link";

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
                <div className="w-full fade-in  ">

                
                <Swiper 
             className="relative"
            slidesPerView={1.1}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            direction='horizontal'
            centeredSlides={true}
            loop={true}
            slidesPerGroup={1}
                modules={[Pagination]}
            >
                      
                {mywork.map((project, idx) => (
                    <SwiperSlide key={idx} className='
                    flex item-centers justify-center w-full p-5'>
                        <div className='flex flex-col sm:flex-row item-center justify-center mx-auto bg-primary-100 h-[500px] sm:h-[400px]  px-5 rounded-md sm:gap-14'>
                            <div className='relative flex flex-col items-center justify-center space-y-4 p-1'>
                                <div className="relative text-black text-base sm:text-2xl font-bold">
                                       {project.title}

                                </div>
                              
                                <span className="relative  text-black text-xs sm:text-sm font-bold">
                                    {project.description}&nbsp;-&nbsp;
                                    <div className=" inline-block bg-primary-200 text-white p-1 rounded-lg">
                                    {project.tag}

                                    </div>
                                </span>
                                
                                <div className=" flex items-center justify-center  gap-2 sm:gap-4 ">
                                    {project.preview != null ? (
                                        <Button className="text-black  font-semibold" color="primary"
                                        variant="ghost">
                                            <Link href={project.preview}>
                                                Preview 
                                            </Link>
                                        </Button>
                                    ) : null}
                                    {project.github != null ? (
                                        <Button className="text-black font-semibold"  color="primary"
                                        variant="ghost">
                                           <Link href={project.github}>
                                                Github 
                                            </Link>
                                        </Button>
                                    ) : null}
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center m-auto max-h-[50%] sm:max-h-[90%] '>
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
                                  flex item-centers justify-center w-full h-full mx-3'
                                >
                                <div className="relative flex flex-row items-center justify-center my-auto h-full w-[220px] sm:w-[250px] bg-primary-50 rounded-md py-2 ">
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
                              <div className="swiper-pagination"></div>
                            </Swiper>
                             
                            </div>
                        </div>
                    </SwiperSlide>
            ))} 
            <div className="swiper-pagination "></div>
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

