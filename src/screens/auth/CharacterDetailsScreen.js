import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../../slices/home/homeApiSlice";
import { setSelectedCharacter } from "../../slices/home/homeSlice";
import ErrorComponent from "../../component/ErrorComponent";
import CardComponent from "../../component/CardComponent";

const CharacterDetailsScreen = () => {
  //misc
  const dispatch = useDispatch();
  const { id } = useParams();

  // queries n mutation
  const {
    data: characterById,
    error: characterByIdError,
    isLoading: isLoadingCharacterById,
  } = useGetCharacterByIdQuery(id);

  //async
  useEffect(() => {
    if (characterById) {
      console.log({ characterById });
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
            <button>BACK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetailsScreen;
