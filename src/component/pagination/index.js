import React from "react";
import { usePagination, DOTS } from "./paginationCalc";

const PaginationComp = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
    //
    selectedPage,
    totalPage,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1, "next");
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1, "prev");
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={"pagination-container border rounded-md"}>
      <button
        className={` text-gray-800 focus:ring-4 rounded-lg text-base text-center px-2 ${
          selectedPage === 1 ? "button-disabled" : ""
        }`}
        onClick={(_) => onPrevious()}
        disabled={selectedPage === 1 ? true : false}
      >
        Previous
      </button>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            key={pageNumber}
            className={"pagination-item cursor-pointer"}
            onClick={() => onPageChange(pageNumber)}
            style={{
              border: selectedPage !== pageNumber ? "1px solid #F1F3F4" : "",
              padding: "10px",
              background: selectedPage === pageNumber ? "#F1F3F4" : "",
            }}
          >
            {pageNumber}
          </li>
        );
      })}
      <button
        className={`text-gray-800 focus:ring-4 rounded-lg text-base text-center px-2 ${
          selectedPage === totalPage ? "button-disabled" : ""
        }`}
        onClick={(_) => onNext()}
        disabled={selectedPage === totalPage ? true : false}
      >
        Next
      </button>
    </ul>
  );
};

export default PaginationComp;
