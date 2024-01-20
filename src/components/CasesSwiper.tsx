import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { swiperData } from "../swiperData";
import { AiFillPlayCircle } from "react-icons/ai";
import useResize from "../useResize";

function CasesSwiper() {
	const { size } = useResize();

	return (
		<div className="overflow-hidden pb-10">
			<Swiper
				autoplay={{ delay: 2000, disableOnInteraction: false }}
				pagination={{ clickable: true }}
				modules={[Pagination, Autoplay]}
				spaceBetween={15}
				slidesPerView={1.5}
				centeredSlides={true}
				loop={true}
			>
				{swiperData.map((data, _index) => {
					return (
						<SwiperSlide key={data.text}>
							<div className="relative h-full w-full cursor-grab">
								<div className="h-[550px] w-full">
									<img
										className="h-full w-full object-cover object-top md:object-center rounded-md"
										src={size <= 750 ? data.mobile_img : data.img}
										alt={data.text}
									/>
								</div>
								<div className="absolute bottom-12 left-0 flex flex-wrap items-center justify-center p-2 text-center text-white md:left-14">
									<button className="mr-0 mb-3 flex cursor-pointer items-center justify-center gap-3 rounded-3xl bg-white py-3 px-5 font-bold text-black transition-all hover:bg-gray-200 active:scale-x-105 active:bg-gray-100 md:mb-0 md:mr-10 sha">
										Let's explore
										<AiFillPlayCircle />
									</button>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
				<div className="mt-10"></div>
			</Swiper>
		</div>
	);
}

export default CasesSwiper;
