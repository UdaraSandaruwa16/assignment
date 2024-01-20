import heroimg from "../assets/hero_illustration.svg"
const Hero = () => (
  <div className="p-6 w-full min-h-[600px] md:min-h-[650px] relative text-white bg-gradient-to-b from-[#9c9ea0] to-blue-500">
    <div className="md:grid md:grid-cols-2 md:items-center md:py-8 lg:py-20">
      <div className="w-full h-full px-6 py-6 text-left flex flex-col absolute md:relative top-0 left-0 justify-center items-start xl:items-center z-30">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Accounting & Bookkeeping Services In Sri Lanka
        </h1>
        <p className="text-md m-2 text-gray-200 my-6 md:text-xg lg:text-2xl md:my-8">
            Unlock financial success with our comprehensive Accounting and Bookkeeping Services in Sri Lanka, ensuring accuracy, compliance, and peace of mind for your business.
        </p>
      </div>
      <img
        alt=""
        src={heroimg}
        className="opacity-30 md:opacity-100 lg:opacity-100 object-cover"
      />
    </div>
  </div>
)

export default Hero;