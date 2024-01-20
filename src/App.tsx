import "./index.css";
import homebg from "./assets/hero.jpg";
import mobileHomeBg from "./assets/hero.jpg";
import iphoneBg from "./assets/right.jpg";
import useResize from "./useResize";
import TopAdd from "./components/TopAdd";
import CasesSwiper from "./components/CasesSwiper";
import ServicesGrid from "./components/ServicesGrid";
import Footer from "./components/Footer";

export default function App() {
	const { size } = useResize();

	return (
		<>
			<main className="top-12">
				<TopAdd />
				<div className="mx-auto max-w-[2500px]">
				<section id="hero" className="shadow-2xl">
					<div className="relative h-[90vh]">
						<img
							src={size >= 768 ? homebg : mobileHomeBg}
							alt="Accounting"
							className="h-full object-cover object-center"
						/>
						<div className="absolute top-[100px] left-0  w-full place-content-center text-center font-semibold ">
							<div className="absol items-center justify-center h-[185px] relative bg-gray-600 bg-opacity-50 p-2 shadow-lg">
								<div className="absolute top-[50px] left-0 grid w-full place-content-center text-center font-semibold">
									<h1 className="text-4xl md:text-5xl lg:text-6xl text-[#06038D]">
										KS International
									</h1>
									{""}
									<p className="text-xl md:text-2xl lg:text-3xl font-normal text-white">
										Accounting Services
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="about" className="p-5 shadow-2xl">
  					<div className="grid grid-cols-1 md:grid-cols-2">
    					{/* Left side */}
    						<div className="relative h-full">
								<img
									src={iphoneBg}
									alt="Right"
									className="h-full object-cover object-center"
								/>
							</div>

    					{/* Right side */}
    						<div className="p-10">
      							<h1 className="text-[rgb(29, 29, 31)] text-[50px] tracking-[0.28] md:text-[56px]">
       								 Who we are...
      							</h1>
								<p className="text-[rgb(29, 29, 31)] text-[20px] mt-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus
									nisl eu justo tempor, vel ullamcorper ipsum faucibus. Duis congue
									ullamcorper mauris, ac porta metus faucibus eu. Vestibulum ante ipsum
									primis in faucibus orci luctus et ultrices posuere cubilia curae;
								</p>
    						</div>
  					</div>
				</section>
				<section id="cases" className="p-5 shadow-2xl">
					<CasesSwiper />
				</section>
				<section id="services" className="p-5 shadow-2xl">
					<ServicesGrid/>
				</section>
				<section id="contact"  className="p-5 shadow-2xl">
					<Footer/>
				</section>

				</div>
			</main>
		</>
	);
}
