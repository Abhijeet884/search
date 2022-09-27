import React from "react";
import Card from "./card";

const CardList = ({ monsters }) => (
    <div className='card-list'>
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
  
export default CardList; 