import React, { useState, useEffect } from "react";
import ColorCard from "../ColorCard";
import { SelectColorCardButton, Image, Text, CardColor } from "./Style";

const SelectColorCard = ({ title, addItem, removeItem }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      {selected ? (
        <SelectColorCardButton
          onClick={() => {
            setSelected(!selected);
            removeItem(title[0]);
          }}
          chosen
          color={title[1]}
        >
          <CardColor title={title[1]}>
            <span>color</span>
          </CardColor>
          <Text>
            <ColorCard title={title} selected={selected} />
          </Text>
        </SelectColorCardButton>
      ) : (
        <SelectColorCardButton
          onClick={() => {
            setSelected(!selected);
            addItem(title[0]);
          }}
        >
          <CardColor title={title[1]}>
            <span>color</span>
          </CardColor>
          <Text>
            <ColorCard title={title} selected={selected} />
          </Text>
        </SelectColorCardButton>
      )}
    </div>
  );
};

export default SelectColorCard;
