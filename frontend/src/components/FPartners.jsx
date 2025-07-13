import P1 from "../assets/partners/p1.png";
import P2 from "../assets/partners/p2.png";
import P3 from "../assets/partners/p3.png";
import P4 from "../assets/partners/p4.png";
import P5 from "../assets/partners/p5.png";
import P6 from "../assets/partners/p6.png";
import P7 from "../assets/partners/p7.png";
import P8 from "../assets/partners/p8.png";
import Marquee from "react-fast-marquee";

export const FPartners = () => {
  const partners = [P1, P2, P3, P4, P5, P6, P7, P8, P4, P6];

  return (
    <section className="">
      <p
        data-aos="fade-in-up"
        data-duration="500"
        className="text-center font-bold font-poppins text-xl md:text-2xl lg:text-3xl mb-4"
      >
        Our Valued Partners
      </p>
      <Marquee speed={50}>
        {partners.map((item, i) => (
          <img
            key={i}
            src={item}
            className="w-24 h-16 md:w-32 md:h-20 mx-4 object-contain hover:motion-scale-in-110 hover:motion-duration-500"
          />
        ))}
      </Marquee>
    </section>
  );
};
