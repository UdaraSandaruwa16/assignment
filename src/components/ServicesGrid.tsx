import { gridData } from "../GridData";

function ServicesGrid() {
    return (
        <div className="grid grid-cols-1 gap-3 p-[10px] md:gap-4 md:p-[15px] lg:grid-cols-2">
          {gridData.map((data) => {
            const { img, h1, white} = data;
            return (
              <div key={h1} className="relative h-[400px] w-full md:h-[600px] bg-gradient-to-b from-[#c5c2c2] to-[#a1c3f0] shadow-md rounded-md">
                <img
                  className="h-full w-full object-cover object-center"
                  src={img}
                  alt={h1}
                />
                <div className="absolute top-[10px] left-0 w-full text-center md:top-[55px]">
                  <button className="flex items-center justify-center mx-auto rounded-3xl bg-white py-3 px-5 font-bold text-black transition-all hover:bg-gray-200 active:scale-x-105 active:bg-gray-100 md:mr-10 shadow-xl">
                    <div className="flex flex-col gap-3">
                      <h1 className={`text-2xl font-bold ${white ? "text-white" : "text-black"}`}>{h1}</h1>
                    </div>
                  </button>
                  
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    

export default ServicesGrid;
