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
    refetch: refetchGetAllCharacters,
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
      console.log({ getAllCharacters });
      dispatch(setCharactersList(getAllCharacters));
    }
  }, [getAllCharacters, dispatch]);

  console.log({
    getAllCharactersError,
    getAllCharacters,
  });

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
              <CardComponent key={id} item={item} handleClick={handleClick} />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default HomeScreen;
