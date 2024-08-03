import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">

      <div className="flex-1 ">
        <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full hover:scale-110  transition-all ease-in-out" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=' font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className="text-coral-red "> Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on the ultimate Nike experience with our exclusive, trendsetting collections. Explore the freshest styles and innovations, designed to provide you with the perfect footwear for any activity.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">Navigate a realm of possibilities with our exclusive, trendsetting collections. Explore the freshest styles and innovations, designed to provide you with the perfect footwear for any activity.</p>
        <div className="mt-7 flex flex-wrap gap-4">  <Button label='Shop now' iconURL={arrowRight} />
          <Button label='Learn more' backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" /></div>
      </div>
    </section>
  )
}

export default SpecialOffer