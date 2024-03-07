import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetCharactersByPageQuery } from "../../slices/home/homeApiSlice";
import { setCharactersList } from "../../slices/home/homeSlice";
import CardComponent from "../../component/CardComponent";
import PaginationComp from "../../component/pagination";
import ErrorComponent from "../../component/ErrorComponent";

const HomeScreen = () => {
  //misc
  const pageSize = 20;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state
  const [currentPage, setCurrentPage] = useState(1);

  //queries n mutation
  const { data, error, isLoading } = useGetCharactersByPageQuery(currentPage);

  //func
  const totalPage = data ? data?.info.pages : 0;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //async
  useEffect(() => {
    if (data) {
      dispatch(setCharactersList(data));
    }
  }, [data, dispatch]);

  console.log(isLoading, "lllllllllllllllllllllll");
  return (
    <div>
      <ErrorComponent error={error} />

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <ul className="character_list_container">
            {data?.results?.map((item) => {
              const { id } = item;
              return (
                <li key={id} className="card_container">
                  <CardComponent
                    item={item}
                    handleClick={() =>
                      navigate(`/characterdetails/${item.name}/${id}`)
                    }
                    isView={true}
                  />
                </li>
              );
            })}
          </ul>
          <div className="pagination-bar">
            <PaginationComp
              className=""
              currentPage={currentPage}
              totalCount={data ? data.info.count : 0}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              selectedPage={currentPage}
              totalPage={totalPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
