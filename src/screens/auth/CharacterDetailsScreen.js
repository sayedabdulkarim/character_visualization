import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../../slices/home/homeApiSlice";
import { setSelectedCharacter } from "../../slices/home/homeSlice";
import ErrorComponent from "../../component/ErrorComponent";
import CardComponent from "../../component/CardComponent";

const CharacterDetailsScreen = () => {
  //misc
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  // queries n mutation
  const {
    data: characterById,
    error: characterByIdError,
    isLoading: isLoadingCharacterById,
  } = useGetCharacterByIdQuery(id);

  //func
  const handleBackClick = () => {
    navigate(-1);
  };

  //async
  useEffect(() => {
    if (characterById) {
      dispatch(setSelectedCharacter(characterById));
    }
  }, [characterById, dispatch]);

  return (
    <div>
      <ErrorComponent error={characterByIdError} />

      {isLoadingCharacterById ? (
        <div className="loader"></div>
      ) : (
        <div className="character_details_container">
          <div className="character_details_wrapper">
            <h1>Character Details</h1>
            {characterById && (
              <div className="card_container">
                <CardComponent item={characterById} />
              </div>
            )}
            <button onClick={() => handleBackClick()}>BACK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetailsScreen;
