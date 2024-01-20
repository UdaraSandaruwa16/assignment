import { gridData } from "../GridData";
function ServicesGrid() {
    return (
        <div className="grid grid-cols-1 gap-3 p-[10px] md:gap-4 md:p-[15px] lg:grid-cols-2">
          {gridData.map((data) => {
            const { img, h1, white, p } = data;
            return (
              <div key={h1} className="relative h-[400px] w-full md:h-[600px] bg-gradient-to-b from-[#727272] to-[#06038D] shadow-xl">
                <img
                  className="h-full w-full object-cover object-center"
                  src={img}
                  alt={h1}
                />
                <div className="absolute top-[10px] left-0 w-full text-center md:top-[55px]">
                  <h1 className={`text-2xl font-bold ${white ? "text-white" : "text-black"}`}>{h1}</h1>
                  <p className={`text-base ${white ? "text-white" : "text-black"}`}>{p}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    

export default ServicesGrid;
