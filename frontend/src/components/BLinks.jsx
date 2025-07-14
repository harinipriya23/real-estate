import { PiBuildingApartmentFill } from "react-icons/pi";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const BLinks = () => {
  const quickLinks = [
    { id: 1, link: "Home", href: "#" },
    { id: 2, link: "About Us", href: "#about-us" },
    { id: 3, link: "Our Properties", href: "#properties" },
    { id: 4, link: "Our Advantages", href: "#advantages" },
    { id: 5, link: "FAQs", href: "#faqs" },
  ];
  return (
    <section className="max-w-6xl grid grid-cols-1 md:grid-cols-3 md:justify-items-center gap-4">
      <div className="space-y-2">
        <div className="flex gap-2 ">
          <PiBuildingApartmentFill className="h-6 md:h-8 w-6 md:w-8 motion-scale-in-50 motion-duration-1500" />
          <p className="font-poppins tracking-widest text-[16px] md:text-[20px] font-extrabold dark:text-white motion-preset-slide-up-sm motion-duration-1500 ">
            ESTATE
          </p>
        </div>
        <p className="font-inter font-normal text-xs md:text-sm lg:text-base">
          Building Your Dreams in Real Estate
        </p>
      </div>
      <div className="font-inter">
        <h3 className="text-sm font-normal mb-2">Quick Navigation</h3>
        <ul className="space-y-1 font-semibold text-xs md:text-base lg:text-lg">
          {quickLinks.map(({ id, link, href }) => (
            <li key={id} className="hover:underline">
              <a href={href}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="font-inter">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 md:w-12 md:h-12 object-cover object-top rounded-full group-hover:scale-105 duration-300e"
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlfGVufDB8fDB8fHww"
          />
          <p className="text-xs whitespace-nowrap text-neutral-500 dark:text-neutral-400">
            We are here to <br /> change your future.
          </p>
        </div>
        <div className="flex items-center gap-4 my-4">
          {" "}
          <button className="text-xs md:text-sm lg:text-base bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-md">
            Contact Us
          </button>
          <div className="flex gap-3 md:gap-4 md:text-xl text-lg">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>
    </section>
  );
};
