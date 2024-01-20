import { Link } from "react-router-dom";

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
							<Link className="hover:underline" to={"/giftcards"}>
								Gi
							</Link>
						</ul>
					</div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">Apple Wallet</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/Applecash"}>
								Apple Cash
							</Link>
						</ul>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">Account</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/iCloud"}>
								iCloud.com
							</Link>
						</ul>
					</div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">Entertainment</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/applestore"}>
								Apple Store
							</Link>
						</ul>
					</div>
				</div>
				<div>
					<h3 className="mb-2 mt-4 text-[12px] font-medium">
						<span className="text-[#1d1d1f]">Apple Store</span>
					</h3>
					<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
						<Link className="hover:underline" to={"/shoppinghelp"}>
							Shopping Help
						</Link>
					</ul>
				</div>
				<div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">For Business</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/shopforbusiness"}>
								Shop for Business
							</Link>
						</ul>
					</div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">For Education</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/shopforcollege"}>
								Shop for College
							</Link>
						</ul>
					</div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">For Healthcare</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/healthrecordsonphone"}>
								Health Records on iPhone
							</Link>
						</ul>
					</div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">For Government</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/veterans and Military"}>
								Shop for Veterans and Military
							</Link>
						</ul>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">Apple Values</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/supplierresponsibility"}>
								Supplier Responsibility
							</Link>
						</ul>
					</div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">About Apple</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/contactapple"}>
								Contact Apple
							</Link>
						</ul>
					</div>
				</div>
			</div>
			<footer className="mt-10 text-[12px]">
				<div className="my-hr">
					<p className="pb-3 text-[#6e6e73]">
						More ways to shop:
						<a className="px-1 text-apple-blue underline" href="#">
							Find an Apple Store
						</a>
						or
						<a className="px-1 text-apple-blue underline" href="#">
							other retailer
						</a>
						near you.
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
