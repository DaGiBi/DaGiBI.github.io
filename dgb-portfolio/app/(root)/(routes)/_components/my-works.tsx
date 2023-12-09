"use-client";
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
            breakpoints={
                {
                    640: {
                        slidesPerView:1.3,
                        spaceBetween: 25,
                    },
                    1440: {
                        slidesPerView: 1.5,
                        spaceBetween: 0,
                    },  
                }
            }
            direction='horizontal'
            centeredSlides={true}
            slidesPerGroup={1}
            allowSlidePrev={true}
            pagination={{
                clickable: true,
                el: '.swiper-pagination',
                bulletClass: 'swiper-pagination-bullet', 
                bulletActiveClass: 'swiper-pagination-bullet-active'
                }}
                modules={[Pagination]}
            >
                      
                {mywork.map((feature, idx) => (
                    <SwiperSlide key={idx} className='
                    flex item-centers justify-center w-full'>
                        <div className='flex flex-col lg:flex-row item-centers justify-center  bg-primary rounded-[2rem] lg:rounded-[2.5rem]  px-5 lg:px-6  h-[310px] max-w-max lg:h-[200px] shadow-[-5px_-5px_0px_#0A3B5B] mx-auto mt-2 mb-14'>
                            <div className='flex items-center justify-center'>
                                <div className="relative text-white text-[27px] leading-9">
                                    <span className="inline-block text-left mr-2">
                                        {/* {feature.headline} */}
                                        {/* <Dialog>
                                            <DialogTrigger>
                                                <img 
                                                    src={`/images/products/motor-aggregator/why-senang/information-mark.png`}
                                                    alt=''
                                                    className='absolute inline-block bottom-[20px] w-[20px] h-[20px] '
                                                />
                                            </DialogTrigger>
                                            <DialogContent className='bg-secondary mx-auto !w-[95%] !rounded-[2rem] px-5 pt-10'>
                                            <DialogHeader>
                                                <DialogDescription className='pt-10'>
                                                    {feature.paragraphs.map((paragraph, pIdx) => (
                                                        <>
                                                            <p key={pIdx} className='text-xs font-normal lg:text-base font-manrope text-white text-justify'>
                                                                {paragraph}
                                                            </p>
                                                            <br/>
                                                        </>
                                                        ))}

                                                </DialogDescription>
                                            </DialogHeader>
                                            </DialogContent>
                                        </Dialog> */}
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center justify-end lg:ml-10 '>
                                {/* <img
                                    src={`/images/products/motor-aggregator/why-senang/${feature.icon}.svg`}
                                    alt=''
                                    className='h-[8rem] lg:h-[8rem] w-[8rem] lg:w-[8rem]'
                                />  */}
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

