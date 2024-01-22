
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

function ServicesData({}: ServicesProps) {
  return (
    <div>
      
    </div>
  );
}

export default ServicesData;
