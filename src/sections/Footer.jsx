
import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start mt-5">
          <a href="/">
            <img src={footerLogo} alt="footer" width={150} height={45} />
          </a>
          <p className="text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm ">Get shoes ready for the new term at your nearest Nike Store</p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-slate-gray cursor-pointer transition-all ease-in-out hover:scale-110">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className=" text-white-400 text-3xl font-montserrat font-bold mb-2">{section.title}</h4>
              <ul>{section.links.map((link) => (
                <li key={link.name}>
                  <a href={link.link} className="text-slate-gray text-xl p-1 hover:text-coral-red transition-all duration-300 ease-in-out transform hover:scale-110 inline-block font-montserrat">
                    {link.name}
                  </a>
                </li>
              ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between gap-4 mt-24 max-sm:flex-col max-sm:items-center ">
       <div className="flex flex-1 text-slate-gray  max-sm:flex-col max-sm:items-center font-montserrat cursor-pointer  ">
          <p className="hover:text-white-400 transition-all ease-in-out">Copyright © 2023 Nike, Inc. All Rights Reserved.</p>
        </div>
          <p className="text-slate-gray cursor-pointer hover:text-white-400 transition-all ease-in-out">Terms & Conditions</p>
      </div>

    </footer>
  )
}

export default Footer