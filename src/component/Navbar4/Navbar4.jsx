import wone from '../../assets/wan.png';
import two from '../../assets/tow.png';
import thiri from '../../assets/thire.png';
import fore from '../../assets/fore.png';
import five from '../../assets/five.png';
import wone1 from '../../assets/wan.png';
import two2 from '../../assets/tow.png';
import fore4 from '../../assets/fore.png';
import fashon from '../../assets/images.jpeg';
import maun from '../../assets/man1.png'

const categories = [
  'Speaker',
  'Portable',
  'Mobile',
  'Light',
  'Headphone',
  'Google Glass',
  'Drone',
  'Camera',
  '3D Glass',
];

const products = [
  { id: 1, name: 'Summer Casual Cotton', price: '$19.00', image: wone },
  { id: 2, name: 'Black Solid Color Full Sleeve', price: '$29.00', image: two },
  { id: 3, name: 'Women Tops Solid Color', price: '$19.00', image: thiri },
  { id: 4, name: 'Women Tops', price: '$19.00', image: fore },
  { id: 5, name: "Men’s Solid Color Short Sleeve", price: '$29.00', image: five },
  { id: 6, name: 'Summer Casual Cotton', price: '$19.00', image: wone1 },
  { id: 7, name: 'Women Tops Solid Color', price: '$19.00', image: two2 },
  { id: 8, name: 'Women Tops', price: '$19.00', image: fore4 },
];

const Navbar4 = () => {
  return (
    <div className="flex flex-col md:flex-row border border-gray-200 mb-20 md:h-[600px]">
      {/* Sidebar */}
      <div className="relative w-full md:w-1/5">
        <div
          className="relative bg-cover md:w-[300px] h-full p-6"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.8), rgba(34,211,238,0.6)),
              url(${maun})
            `,
          }}
        >
          <h2 className="text-xl font-bold text-black mb-6 text-center">
            Women Clothing
          </h2>
          <ul className="space-y-4 text-white text-center font-bold">
            {categories.map((cat) => (
              <li key={cat}>{cat}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-2/5">
        <img src={maun} alt="hero" className="md:w-[400px] w-full h-full" />
      </div>

      {/* Products Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">
          {products.map((prod) => (
            <div key={prod.id} className="flex flex-col items-center">
              <img src={prod.image} alt={prod.name} className="h-50 w-60 mb-2" />
              <p className="text-gray-700 font-semibold text-center">{prod.name}</p>
              <p className="text-blue-600 text-sm font-semibold mt-1">{prod.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar4;
