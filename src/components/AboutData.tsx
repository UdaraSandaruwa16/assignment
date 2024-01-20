import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface aboutProps {
	data: string[];
}

interface aboutData {
	Navdata: aboutProps;
}

function AboutData({ Navdata }: aboutData) {
	const location = useLocation();
	const headerWhite = location.pathname === "/store";

	const list = Navdata.data.map((data) => (
		<Link key={data} to={`/${data}`} className="hover:text-gray-400">
			<li>{data}</li>
		</Link>
	));

	return (
		<div className="my-grid mx-[20px] mt-[150px] h-screen md:mt-8">
			<div>
				<ul
					className={`mt-4 flex flex-col gap-0 text-[24px] ${
						headerWhite ? "font-semibold text-grayish" : "text-[#E8E8ED]"
					}`}
				>
					{list}
				</ul>
			</div>
		</div>
	);
}

export default AboutData;
