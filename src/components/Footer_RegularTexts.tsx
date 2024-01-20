import { Link } from "react-router-dom";
import awradimg from "../assets/award.jpg";

function Footer_RegularTexts() {
	return (
		<div className="pt-2">
			<div className="my-grid2">
				<div className="flex flex-col gap-3">
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">Contact US</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/"}>
								test@gmail.com
							</Link>
							<li>Mobile : 077 777 7777</li>
							<li>Address : Colombo 7</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">Services</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/"}>
								Book keeping
							</Link>
							<Link className="hover:underline" to={"/"}>
								Payroll
							</Link>
							<Link className="hover:underline" to={"/"}>
								Tax Consultation
							</Link>
							<Link className="hover:underline" to={"/"}>
								Advisory
							</Link>
							<Link className="hover:underline" to={"/"}>
								Budgeting
							</Link>
							<Link className="hover:underline" to={"/"}>
								Forcasting
							</Link>
						</ul>
					</div>
				</div>
				<div>
					<h3 className="mb-2 mt-4 text-[12px] font-medium">
						<span className="text-[#1d1d1f]">Case Studies</span>
					</h3>
					<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
						<Link className="hover:underline" to={"/"}>
							Fontera
						</Link>
						<Link className="hover:underline" to={"/"}>
							Sandamadala Products
						</Link>
					</ul>
				</div>
				<div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">Careers</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/"}>
								Join with us
							</Link>
						</ul>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<div>
						<img
							alt=""
							src={awradimg}
							className="opacity-30 md:opacity-100 p-5 mx-auto lg:opacity-100 object-cover"
						/>
					</div>
				</div>
			</div>
			<footer className="mt-10 text-[12px]">
				<div className="my-hr">
					<p className="pb-3 text-[#6e6e73]">
						More ways to contact us :
						<a className="px-1 text-apple-blue underline" href="#">
							Join our whatsapp
						</a>
						or
						<a className="px-1 text-apple-blue underline" href="#">
							viber
						</a>
					</p>
				</div>
				<div className="flex justify-between">
					<div className="flex flex-col items-start justify-between gap-1 pt-3">
						<p className="text-[#6e6e73]">
							Copyright © 2024 KS International. All rights reserved.
						</p>
						<p>
							Privacy | Policy | Terms of Use | Legal Site
							Map
						</p>
					</div>
					<p className="pt-3">Sri Lanka</p>
				</div>
			</footer>
		</div>
	);
}

export default Footer_RegularTexts;
