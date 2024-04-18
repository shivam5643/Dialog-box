import { useEffect, useState } from "react";
import { TbFileDownload } from "react-icons/tb";
const arr = [
  {
    date: "22.07.2021",
    name: "APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
  },
  {
    date: "22.07.2021",
    name: "APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
  },
  {
    date: "22.07.2021",
    name: "APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
  },
  {
    date: "22.07.2021",
    name: "APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
  },
  {
    date: "22.07.2021",
    name: "APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
  },
  {
    date: "22.07.2021",
    name: "APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
  },
  {
    date: "22.07.2021",
    name: "APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
  },
  {
    date: "22.07.2021",
    name: "APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
  },
  {
    date: "22.07.2021",
    name: "APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
  },
  {
    date: "22.07.2021",
    name: "APP_URL_USAGE(Exclude_half_days)_34_2_89_2021.csv",
  },
];

console.log(arr.length);
function Pagination() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= arr.length / 2 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setPage(1); // Reset page when changing rows per page
  };
  return (
    <div className="flex h-6  flex-col items-center">
      <div >
  <table className="border-collapse border w-full max-w-md">
    <thead>
  <tr className="bg-gray-300">
    <th className="border p-2 text-left">Date</th>
    <th className="border p-2 text-center">Name</th>
    <th className="border p-2 text-right">Download</th>
  </tr>
</thead>


    <tbody>
      {arr.length > 0 &&
        arr
          .slice((page - 1) * rowsPerPage, page * rowsPerPage)
          .map((prod, index) => (
            <tr key={index} className="border border-gray-400">
              <td className="border border-gray-400 p-2">{prod.date}</td>
              <td className="border border-gray-400 p-2">{prod.name}</td>
              
             <td className="text-2xl text-center cursor-pointer"> <TbFileDownload /></td>
             

            </tr>
          ))}
    </tbody>
  </table>
</div>

      
<div className="fixed  mt-[530px] w-[1024px] top-100   bg-gray-500 p-4">
  <div className="flex items-center justify-between gap-4">
    <div>
      {arr.length > 0 && (
        <div className="flex justify-center space-x-4">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "border px-4 py-2 cursor-pointer" : "opacity-0"}
          >
            ◀ Prev
          </span>

          {[...Array(Math.ceil(arr.length / 2))].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "bg-gray-200 px-4 py-2 rounded cursor-pointer" : "px-4 py-2 border cursor-pointer"}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < arr.length / 2 ? "border px-4 py-2 cursor-pointer" : "opacity-0"}
          >
            Next ▶
          </span>
        </div>
      )}
    </div>

    <div className="flex justify-center">
      <label htmlFor="rowsPerPage">Rows per page:</label>
      <select
        id="rowsPerPage"
        className="ml-2 border border-gray-400 px-2 py-1"
        value={rowsPerPage}
        onChange={handleChangeRowsPerPage}
      >
        {[4,5,6,7,8,9,10].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
</div>
  

    </div>
  );
}

export default Pagination;
