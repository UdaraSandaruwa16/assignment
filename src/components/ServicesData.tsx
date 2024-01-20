import { useLocation, Link } from "react-router-dom";

interface Service {
  title: string;
  link: string;
}

interface ServicesInterface {
  data: Service[];
}

interface ServicesProps {
  Navdata: ServicesInterface;
}

function ServicesData({ Navdata }: ServicesProps) {
  const location = useLocation();
  const headerWhite = location.pathname === "/about";

  const list = Navdata.data.map((service: Service) => (
    <Link key={service.title} to={`/services/${service.link}`} className="hover:text-gray-400">
      <li>{service.title}</li>
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

export default ServicesData;
