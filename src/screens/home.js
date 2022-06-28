import React, { useEffect, useState } from "react";
import ColorCard from "../components/ColorCard/index";
import SelectColorCard from "../components/SelectColorCard/index";
import mixColors from "../scripts/index";
import Header from "./header";
import { Button, FlexDiv, ColorsDiv } from "./Style";

const colors = [
  ["Vermelho", "rgb(226, 1, 1)"],
  ["Amarelo", "rgb(242, 250, 6)"],
  ["Azul", "rgb(6, 30, 250)"],
  ["Laranja", "rgb(255, 165, 0)"],
  ["Verde", "rgb(0,128,0)"],
  ["Roxo", "rgb(153, 51, 153)"],
];

const HomeScreen = () => {
  const [mixState, setMixState] = useState(false);
  const [mixs, setMixs] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const addColor = (title) => {
    selectedColors.push(title);
  };

  const removeColor = (title) => {
    for (let i = 0; i < selectedColors.length; i++) {
      if (selectedColors[i] === title) {
        selectedColors[i] = selectedColors[selectedColors.length - 1];
        selectedColors[selectedColors.length - 1] = title;
        selectedColors.pop();
      }
    }
  };

  const showResultOfMixColors = (mixs) => {
    if (mixs.length > 0) {
      return mixs.map((type) => (
        <ColorCard key={Math.random()} title={type} node />
      ));
    } else {
      return (
        <FlexDiv>
          Não foi encontrado em nossos registros alguma cor resultante.
        </FlexDiv>
      );
    }
  };

  const mixes = (selectedColors) => {
    setMixs(mixColors(selectedColors));
    setMixState(true);
  };

  const notMix = () => {
    alert("Selecione somente duas cores");
    window.location.reload();
  };

  return (
    <div style={{ backgroundColor: "#E8ECF3", height: "100vh" }}>
      <div>
        <Header />
      </div>
      {mixState ? (
        <FlexDiv>
          <h3>A cor gerada foi:</h3>
        </FlexDiv>
      ) : (
        <div>
          <FlexDiv>
            <h3>Selecione duas cores e verifique o resultado</h3>
          </FlexDiv>
        </div>
      )}

      <FlexDiv>
        {mixState
          ? showResultOfMixColors(mixs)
          : colors.map((type, i) => (
              <SelectColorCard
                key={i}
                title={type}
                addItem={addColor}
                removeItem={removeColor}
              />
            ))}
      </FlexDiv>

      <FlexDiv>
        {mixState ? (
          <Button
            onClick={() => {
              setMixState(false);
              setSelectedColors([]);
            }}
          >
            Voltar
          </Button>
        ) : (
          <Button
            onClick={() => {
              selectedColors.length > 2 ? notMix() : mixes(selectedColors);
            }}
          >
            Confirmar
          </Button>
        )}
      </FlexDiv>
    </div>
  );
};

export default HomeScreen;
