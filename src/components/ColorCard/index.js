import React from "react";
import { SelectColorCardButton, Text } from "./Style";
import { AiOutlineCheck } from "react-icons/ai";

const ColorCard = ({ title, node, selected }) => {
  const colorContent = title[0];
  const color = title[1];
  console.log(title);
  return (
    <div>
      <div>
        {node ? (
          <SelectColorCardButton chosen color={title[1]}>
            <div
              style={{
                backgroundColor: title.color,
                width: "100%",
                height: "80%",
                color: "transparent",
              }}
            >
              <span>color</span>{" "}
            </div>
            <Text>{title.name}</Text>
          </SelectColorCardButton>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selected && <AiOutlineCheck />}
            <Text>{colorContent}</Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorCard;
