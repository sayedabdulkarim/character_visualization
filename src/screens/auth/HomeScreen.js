import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllCharactersQuery } from "../../slices/home/homeApiSlice";
import { setCharactersList } from "../../slices/home/homeSlice";
import ErrorComponent from "../../component/ErrorComponent";

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
        <ul>
          {getAllCharacters?.results?.map((item) => {
            const {
              id,
              name,
              status,
              species,
              type,
              gender,
              origin,
              location,
              image,
              episode,
              url,
              created,
            } = item;
            return (
              <li
                key={id}
                style={{ border: "1px solid red", margin: 20 }}
                onClick={() => handleClick(name, id)}
              >
                {name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default HomeScreen;
