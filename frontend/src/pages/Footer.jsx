import { PiBuildingApartmentFill } from "react-icons/pi";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const quickLinks = [
    { id: 1, link: "Home", href: "#" },
    { id: 2, link: "About Us", href: "#about" },
    { id: 3, link: "Our Properties", href: "#properties" },
    { id: 4, link: "Our Advantages", href: "#advantages" },
    { id: 5, link: "FAQs", href: "#faqs" },
  ];

  return (
    <footer className="bg-neutral-50 text-neutral-800 dark:bg-zinc-900 dark:text-white p-8 rounded-xl">
      <section className="max-w-6xl grid grid-cols-1 sm:grid-cols-3 sm:justify-items-center gap-4">
        <div data-aos="fade-in-up" data-aos-duration="500" data-aos-delay="200" className="space-y-2">
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
        <div data-aos="fade-in-up" data-aos-duration="500" data-aos-delay="300" className="font-inter">
          <h3 className="text-sm font-normal mb-2">Quick Navigation</h3>
          <ul className="space-y-1 font-semibold text-xs md:text-base lg:text-lg">
            {quickLinks.map(({ id, link, href }) => (
              <li key={id} className="hover:underline">
                <a href={href}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div data-aos="fade-in-up" data-aos-duration="500" data-aos-delay="300" className="font-inter">
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
            <a href="tel:+911234567890" className="text-xs md:text-sm lg:text-base bg-black text-white dark:bg-neutral-200 hover:bg-neutral-800 dark:hover:bg-neutral-400 dark:text-black px-3 py-1 rounded-md">
              Contact Us
            </a>
            <div className="flex gap-3 md:gap-4 md:text-xl text-lg">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>
        </div>
      </section>
      <section data-aos="slide-in-up" data-aos-duration="500" data-aos-delay="300" >
        <div className="font-poppins md:text-center space-y-2 my-2">
          <h3 className="font-semibold">Subscribe to our news</h3>
          <div className="flex items-center justify-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full md:w-1/2 border border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700 rounded-md text-xs md:text-sm lg:text-base"
            />
            <button className="bg-black text-white dark:bg-neutral-200 hover:bg-neutral-800 dark:hover:bg-neutral-400 dark:text-black px-3 py-2 rounded-md text-xs md:text-sm lg:text-base">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-neutral-500">
          © 2025 Real Estate. All rights reserved.
          <span className="mx-2">|</span>
          <a href="#" className="underline">
            Terms
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="underline">
            Privacy
          </a>
        </div>
      </section>
    </footer>
  );
};
