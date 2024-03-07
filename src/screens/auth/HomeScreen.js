import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllCharactersQuery } from "../../slices/home/homeApiSlice";
import { setCharactersList } from "../../slices/home/homeSlice";
import ErrorComponent from "../../component/ErrorComponent";
import CardComponent from "../../component/CardComponent";

const HomeScreen = () => {
  //misc
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // queries n mutation
  const {
    data: getAllCharacters,
    error: getAllCharactersError,
    isLoading: isLoadingGetAllCharacters,
  } = useGetAllCharactersQuery();

  //func
  const handleClick = (name, id) => {
    navigate(`/characterdetails/${name}/${id}`);
  };

  //async
  useEffect(() => {
    if (getAllCharacters) {
      dispatch(setCharactersList(getAllCharacters));
    }
  }, [getAllCharacters, dispatch]);

  return (
    <div>
      <ErrorComponent error={getAllCharactersError} />

      {isLoadingGetAllCharacters ? (
        <div className="loader"></div>
      ) : (
        <ul className="character_list_container">
          {getAllCharacters?.results?.map((item) => {
            const { id } = item;
            return (
              <li
                key={id}
                // onClick={() => handleClick(name, id)}
                className="card_container"
              >
                <CardComponent
                  item={item}
                  handleClick={handleClick}
                  isView={true}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default HomeScreen;
