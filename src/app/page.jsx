"use client";
import React, { useState } from "react";

import { FiFilter, FiX, FiDownload } from "react-icons/fi";
import Pagination from "@/component/Pagination";


const DialogBox = () => {

  return (
    <div class="  flex justify-center items-center m-20">
      <div class=" w-[1124px]  p-16 border border-gray-300 h-[750px] rounded">
        <div className="  flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Recently Generated Reports</h2>
          <div className="flex items-center space-x-2">
            <button className="text-gray-500 hover:text-gray-700 border border-gray-700 hover:border-gray-700 rounded p-2">
              <FiFilter />
            </button>

            <button className="text-gray-500 hover:text-gray-700 border border-gray-700 hover:border-gray-700 rounded p-2">
    <FiX />
</button>

          </div>
        </div>
        
          <Pagination />
        
      </div>
    </div>
  );
};

export default DialogBox;
