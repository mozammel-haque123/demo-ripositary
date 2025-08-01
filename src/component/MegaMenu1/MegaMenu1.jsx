

const categories = [
  { title: 'Accessories',     items: ['Google Glass', 'Headphone', 'Laptop'] },
  { title: 'Bottoms',         items: ['Projector', 'Speaker', 'Light'] },
  { title: 'Bottoms',         items: ['Projector', 'Mobile'] },
  { title: 'Tops',            items: ['Google Glass', 'Headphone', 'Laptop'] },
  { title: 'Hot Categories',  items: ['Projector', 'Speaker', 'Light'] },
  { title: 'Outwear',         items: ['Projector', 'Mobile'] },
]

export default function MegaMenu1() {
  return (
    <div className="">
      {/* Trigger */}

      {/* Dropdown Content */}
      <div
        tabIndex={0}
        className=" w-[600px] bg-white shadow-lg rounded p-6 mt-2 grid grid-cols-3 gap-4 z-50"
      >
        {categories.map(cat => (
          <div key={cat.title}>
            <h5 className="font-semibold mb-2">{cat.title}</h5>
            <ul className="space-y-1">
              {cat.items.map(item => (
                <li key={item} className="hover:text-primary cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
