import React from "react";
import { StyledCard } from "./Card.styled";
import { Link } from "react-router-dom";

const Card = ({ image, title, link, stats }) => {
  return (
    <StyledCard>
      <div className="card-head">
        <div className="card-title">
          <img src={image} alt="" />
          <h3>{title}</h3>
        </div>

        <div className="card-link">
          <Link to={link} >
            <p>View all</p>
          </Link>
        </div>
      </div>
      <div className="card-body">
        {stats.map((stats, index) => {
          return (
            <div key={index} className="stats">
              <h2>{stats.value}</h2>
              <p>{stats.text}</p>
            </div>
          );
        })}
      </div>
    </StyledCard>
  );
};

export default Card;
