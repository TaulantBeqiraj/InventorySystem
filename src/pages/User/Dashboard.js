import React from "react";
import Cards from "../../components/shared/Cards/Cards";
import { UserCardsData } from "../../data/CardsData";

const Dashboard = () => {
  return (
    <>
      <Cards CardsData={UserCardsData} />
    </>
  );
};

export default Dashboard;
