import React, { useState, useEffect } from "react";
import ColorCard from "../ColorCard";
import { SelectColorCardButton, Image, Text } from "./Style";

const SelectColorCard = ({ title, addItem, removeItem }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {}, [selected]);

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
          <div
            style={{
              backgroundColor: title[1],
              width: "100%",
              height: "80%",
              color: "transparent",
            }}
          >
            <span>color</span>{" "}
          </div>
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
          <div
            style={{
              backgroundColor: title[1],
              width: "100%",
              height: "80%",
              color: "transparent",
            }}
          >
            <span>color</span>{" "}
          </div>
          <Text>
            <ColorCard title={title} selected={selected} />
          </Text>
        </SelectColorCardButton>
      )}
    </div>
  );
};

export default SelectColorCard;
