import FAQItem from "./FooterItem";

const contactUs = {
	links: [
		"test@gmail.com",
		"test@hotmail.com",
		"Twitter",
		"Facebook",
		"Instagram",
	],
	title: "Contact Us",
};

const entertainment = {
	title: "Services",
	links: [
		"Book Keeping",
		"Tax",
		"Apple Music",
		"Apple Arcade",
		"Apple Fitness+",
		"Apple News+",
		"Apple Podcasts",
		"Apple Books",
		"Apple Store",
	],
};
const appleStore = {
	title: "Apple Store",
	links: [
		"Find a Store",
		"Genius Bar",
		"Today at Apple",
		"Apple Camp",
		"Apple Store App",
		"Certified Refurbished",
		"Financing",
		"Apple Trade In",
		"Order Status",
		"Shopping Help",
	],
};


function Footer_accordion() {
	return (
		<div className="pt-2">
			<div className="">
				<div className="flex flex-col gap-3">
					<FAQItem links={shopAndLearn.links} title={shopAndLearn.title} />
					
					<FAQItem
						links={manageId.links}
						title={manageId.title}
						listHeight90={manageId.listHeight90}
					/>
					<FAQItem links={entertainment.links} title={entertainment.title} />
					<FAQItem links={appleStore.links} title={appleStore.title} />
				</div>
			</div>
			<footer className="mt-10 text-[12px]">
				<div>
					<p className="pb-3 text-[#6e6e73]">
						More ways to shop:
						<a className="px-1 text-apple-blue" href="#">
							Find an Apple Store
						</a>
						or
						<a className="px-1 text-apple-blue" href="#">
							other retailer
						</a>
						near you. 
					</p>
				</div>
				<div className="flex flex-col items-start justify-between pt-3">
					<p className="text-md pb-3">Sri LAnka</p>

					<p className="text-[#6e6e73]">
						Copyright © 2024 KS International. All rights reserved.
					</p>
					<p className="text-[#6e6e73]">
						Privacy | Policy | Terms of Use | Legal Site Map
					</p>
				</div>
			</footer>
		</div>
	);
}

export default Footer_accordion;
