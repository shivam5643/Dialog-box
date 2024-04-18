import { useEffect, useState } from 'react';
const arr=[
    {
      date:"22.07.2021",
      name:"APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
    },
    {
      date:"22.07.2021",
      name:"APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
    },
    {
      date:"22.07.2021",
      name:"APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
    },
    {
      date:"22.07.2021",
      name:"APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
    },
    {
      date:"22.07.2021",
      name:"APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
    },
    {
        date:"22.07.2021",
        name:"APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
      },
      {
        date:"22.07.2021",
        name:"APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
      },
      {
        date:"22.07.2021",
        name:"APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
      },
      {
        date:"22.07.2021",
        name:"APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
      },
      {
        date:"22.07.2021",
        name:"APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
      },
      {
        date:"22.07.2021",
        name:"APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
      },
  ]
  

function Pagination() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`)
    const data = await res.json()

    console.log(data);

    if (data && data.products) {
      setProducts(data.products)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
      setPage(selectedPage)
    }
  }

  return (
    <div>

<table className="border-collapse border  w-full">
  <thead>
    <tr className='bg-gray-300'>
      <th className="border  p-2">Date</th>
      <th className="border  p-2">Name</th>
      <th className="border  p-2">Download</th>
    </tr>
  </thead>
  
  <tbody>
    {arr.length > 0 && arr.slice((page - 1) * 10, page * 10).map((prod, index) => (
      <tr key={index} className="border border-gray-400">
        <td className="border border-gray-400 p-2">{prod.date}</td>
        <td className="border border-gray-400 p-2">{prod.name}</td>
      </tr>
    ))}
  </tbody>
</table>
    <div>

      {arr.length > 0 && <div className="flex justify-center content-between space-x-4 mt-8">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "border px-4 py-2 cursor-pointer" : "opacity-0"}>◀</span>

        {[...Array(products.length / 20)].map((_, i) => {
            return <span key={i} className={page === i + 1 ? "bg-gray-200 px-4 py-2 rounded cursor-pointer" : "px-4 py-2 border cursor-pointer"} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < products.length / 20  ? "border px-4 py-2 cursor-pointer" : "opacity-0"}>▶</span>
      </div>}

</div>
    </div>
  );
}

export default Pagination;
