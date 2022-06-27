import React, { useEffect, useState } from "react";
import ColorCard from "../components/ColorCard/index";
import SelectColorCard from "../components/SelectColorCard/index";
import mixColors from "../scripts/index";
import Header from "./header";
import { FlexDiv } from "./Style";

const colors = [
  ["Vermelho", "rgb(226, 1, 1)"],
  ["Amarelo", "rgb(242, 250, 6)"],
  ["Azul", "rgb(6, 30, 250)"],
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

  useEffect(() => {
    console.log(selectedColors);
  }, [selectedColors, mixState]);

  const mixes = (selectedColors) => {
    console.log(selectedColors);
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>A cor gerada foi:</h3>
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3>Selecione duas cores e verifique o resultado</h3>
          </div>
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {mixState
          ? showResultOfMixColors(mixs)
          : colors.map((type, i) => (
              // permitir o componente aceitar selecionar 2 cores
              <SelectColorCard
                key={i}
                title={type}
                addItem={addColor}
                removeItem={removeColor}
              />
            ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {mixState ? (
          <div
            onClick={() => {
              setMixState(false);
              setSelectedColors([]);
            }}
            style={{
              border: "1px solid black",
              margin: "50px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            Voltar
          </div>
        ) : (
          <div
            onClick={() => {
              selectedColors.length > 2 ? notMix() : mixes(selectedColors);
            }}
            style={{
              border: "1px solid black",
              margin: "50px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            {/* liberar o botão de confirmar apenas quando a quantidade de ingredientes selecionados for 2 */}
            Confirmar
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
