"use client";
import React, { useState } from 'react';
import CustomPagination from '@/component/Pagination';
import { FiFilter, FiX, FiDownload } from 'react-icons/fi';
import Pagination from '@/component/Pagination';
const reportsData = [
  { id: 1, name: 'Report 1', date: '2024-04-10' },
  { id: 2, name: 'Report 2', date: '2024-04-15' },
  { id: 3, name: 'Report 3', date: '2024-04-20' },
  // Dummy data for demonstration
];

const DialogBox = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 5; // Number of reports per page

  // Logic to calculate reports to display on the current page
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reportsData.slice(indexOfFirstReport, indexOfLastReport);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div class="  flex justify-center items-center m-20">
      <div class=" w-[1124px]  p-16 border border-gray-300 h-[750px] rounded">
        <div className="  flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Recently Generated Reports</h2>
          <div className="flex items-center space-x-2">
            <button className="text-gray-500 hover:text-gray-700  ">
              <FiFilter />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <FiX />
            </button>
          </div>
        </div>
      


        {/* Paginator */}
        <div className="mt-4">
         <Pagination/>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;


