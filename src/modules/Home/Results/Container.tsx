import React from "react";
import { HorizontalGameCard } from "../../../components";

interface ResultsContainerProps {}

export const ResultsContainer: React.FC<ResultsContainerProps> = () => {
  return (
    <div className="home-results-container">
      <div className="home-title">Results (30)</div>
      <div className="home-results-list">
        <HorizontalGameCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxHBC_cbWak2wpF82npTqpI1wCzvkIVAVVwTJJLNWv3hztYDeK" />
        <HorizontalGameCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmXICnOt00miUIXNMPiDuLyLjuOwcxtdHM8lHDupvODvuJgevq" />
        <HorizontalGameCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRV2_AGedNvEcNpFRuaGwY1aeus-cCoLPzkzVUgpqRlEJhezX1" />
        <HorizontalGameCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy09ZZ7YsucvGoU_0cT-G5ZMiQkbiXpGgUKFfL0483h2pefRV6" />
      </div>
    </div>
  );
};
