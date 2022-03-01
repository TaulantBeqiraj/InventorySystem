import React from 'react'
import Cards from '../../components/shared/Cards/Cards';
import { AdminCardsData } from '../../data/CardsData';
import Graph from '../../components/shared/Graph/Graph';
import { GraphData } from '../../data/GraphData';

const Dashboard = () => {
  return (
    <>
      <Cards CardsData={AdminCardsData} />
      <Graph data={GraphData} />
    </>
  );
};

export default Dashboard