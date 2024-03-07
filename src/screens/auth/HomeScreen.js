import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useGetAllCharactersQuery,
  useGetCharactersByPageQuery,
} from "../../slices/home/homeApiSlice";
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

  const {
    data: getCharactersByPage,
    error: getCharactersByPageError,
    isLoading: isLoadinggetCharactersByPage,
  } = useGetCharactersByPageQuery(2);

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

  console.log(
    {
      getCharactersByPage,
    },
    " getCharactersByPagegetCharactersByPage"
  );

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
