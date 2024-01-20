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

const services = {
	title: "Services",
	links: [
		"Book Keeping",
		"Tax Consultation",
		"Advisory",
		"Payroll",
		"Budgeting",
		"Forcasting",
	],
};
const cases = {
	title: "Case Studies",
	links: [
		"Fontera",
		"Sandamadala Products",
	],
};
const careers = {
	title: "Careers",
	links: [
		"Full-stack developer",
		"Web-developer",
	],
};

function Footer_accordion() {
	return (
		<div className="pt-2">
			<div className="">
				<div className="flex flex-col gap-3">
					<FAQItem links={contactUs.links} title={contactUs.title} />
					
					<FAQItem
						links={services.links}
						title={services.title}
					/>
					<FAQItem links={cases.links} title={cases.title} />
					<FAQItem links={careers.links} title={careers.title} />
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
					<p className="text-md pb-3">Sri Lanka</p>

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
