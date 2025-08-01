import card from '../../assets/offerbanner.jpg';
import card1 from '../../assets/offerbanner1.jpg';
import card3 from '../../assets/offerbanner3.png';

const Fashioncard = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4  md:mt-40 w-full overflow-hidden mt-[900px]">
      {/* Card 1 */}
      <div className="relative overflow-hidden group border-gray-300 w-full md:w-[48%] lg:w-[32%]">
        <img
          src={card}
          alt="Offer 1"
          className="w-full h-auto object-cover"
        />
        <span
          className="
            absolute inset-0
            w-[200%] h-[200%]
            bg-white opacity-40
            transform rotate-45 translate-x-full -translate-y-full
            group-hover:-translate-x-full group-hover:translate-y-full
            transition-transform duration-[2000ms] ease-in-out
            pointer-events-none
          "
        />
      </div>

      {/* Card 2 */}
      <div className="relative overflow-hidden group border-gray-300 w-full md:w-[48%] lg:w-[32%]">
        <img
          src={card1}
          alt="Offer 2"
          className="w-full h-auto object-cover"
        />
        <span
          className="
            absolute inset-0
            w-[200%] h-[200%]
            bg-white opacity-40
            transform rotate-45 translate-x-full -translate-y-full
            group-hover:-translate-x-full group-hover:translate-y-full
            transition-transform duration-[2000ms] ease-in-out
            pointer-events-none
          "
        />
      </div>

      {/* Card 3 */}
      <div className="relative overflow-hidden group border-gray-300 w-full md:w-[48%] lg:w-[32%]">
        <img
          src={card3}
          alt="Offer 3"
          className="w-full h-auto object-cover"
        />
        <span
          className="
            absolute inset-0
            w-[200%] h-[200%]
            bg-white opacity-40
            transform rotate-45 translate-x-full -translate-y-full
            group-hover:-translate-x-full group-hover:translate-y-full
            transition-transform duration-[2000ms] ease-in-out
            pointer-events-none
          "
        />
      </div>
    </div>
  );
};

export default Fashioncard;
