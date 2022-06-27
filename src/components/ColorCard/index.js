import React from "react";
import { ColorCheck, ColorResult, SelectColorCardButton, Text } from "./Style";
import { AiOutlineCheck } from "react-icons/ai";

const ColorCard = ({ title, node, selected }) => {
  const colorContent = title[0];
  return (
    <div>
      <div>
        {node ? (
          <SelectColorCardButton chosen color={title[1]}>
            <ColorResult title={title}>
              <span>color</span>
            </ColorResult>
            <Text>{title.name}</Text>
          </SelectColorCardButton>
        ) : (
          <ColorCheck>
            {selected && <AiOutlineCheck />}
            <Text>{colorContent}</Text>
          </ColorCheck>
        )}
      </div>
    </div>
  );
};

export default ColorCard;
