import "./index.css";
import Hero from "./components/Hero"
import hero from "./assets/right.jpg";
import useResize from "./useResize";
import TopAdd from "./components/TopAdd";
import CasesSwiper from "./components/CasesSwiper";
import ServicesGrid from "./components/ServicesGrid";
import Footer from "./components/Footer";

export default function App() {
	useResize();

	return (
		<>
			<main className="top-12 ">
				<TopAdd />
				<div className="mx-auto max-w-[1500px]">
				<section id="hero" className=" shadow-2xl">
					<Hero/>
				</section>
	
				<section id="about" className="p-5 shadow-2xl ">
  					<div className="grid grid-cols-1 md:grid-cols-2  w-full max-w-[1500px] px-5 py-5">
    					{/* Left side */}
    						<div className="relative h-full">
								<img
									src={hero}
									alt="Right"
									className="h-full object-cover object-center rounded-md"
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
