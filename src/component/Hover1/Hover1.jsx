import { useEffect, useState } from "react";

const Hover1 = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("/hoverdata1.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div className="w-full lg:w-[1000px] md:w-[500px] md:h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {datas.map((d, idx) => (
          <div
            key={idx}
            className="text-center shadow-md p-2 rounded bg-white"
          >
            <img
              src={d.img}
              alt={d.name}
              className="w-full h-48 sm:h-56 md:h-60 lg:h-72 object-cover rounded"
            />
            <p className="text-sm mt-2 truncate">{d.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hover1;






// const Hover1 = () => {
//   const [datas, setDatas] = useState([]);

//   useEffect(() => {
//     fetch("hover1data.json")
//       .then((res) => res.json())
//       .then((data) => setDatas(data));
//   }, []);

//   return (
//     <div className="w-[1000px] h-auto">
//       <div className="grid grid-cols-4 gap-4">
//         {datas.map((d, idx) => (
//           <div key={idx} className="text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2">
//             <img src={d.img} alt={d.name} className="w-full  h-[290px]" />
//             <p className="text-sm mt-1">{d.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// export default Hover1;