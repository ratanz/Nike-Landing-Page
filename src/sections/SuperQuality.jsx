import { shoe8 } from "../assets/images";
import Button from "../Components/Button";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className=' font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You
          <span className="text-coral-red"> Super</span> <br />
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Immerse yourself in the ultimate Nike experience with our exclusive, trendsetting collections. Explore the freshest styles and innovations, designed to provide you with the perfect footwear for any activity.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">Whether you're running, training, or simply seeking comfort, our selection ensures you find the ideal pair. Elevate your lifestyle with the unparalleled excellence of Nike.</p>
        <div className=" mt-7">  <Button label='View Details' className="" /></div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain hover:scale-110 transition-all ease-in-out" />
      </div>


    </section>
  )
}

export default SuperQuality 