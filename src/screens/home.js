import React, { useState } from 'react';
import ColorCard from '../components/ColorCard/index';
import SelectColorCard from '../components/SelectColorCard/index';
import mixColors from '../scripts/index';

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
    for(let i = 0; i < selectedColors.length; i++){
      if(selectedColors[i] === title){
        selectedColors[i] = selectedColors[selectedColors.length-1];
        selectedColors[selectedColors.length-1] = title;
        selectedColors.pop(); 
      }
    }
  };

  const showResultOfMixColors = (mixs) => {
    if(mixs.length > 0){
      return (
        mixs.map((type) => (
          <ColorCard
            key={Math.random()}
            title={type}
          />
        ))
      )
    } else {
      return (
        <div>
          Não foi encontrado em nossos registros alguma cor resultante.
        </div>
      )
    }
  }


  return (
    <div>    
      { mixState 
      ? <div>
          A cor gerada foi:
        </div>
      : <div>
          <div>
            Seja bem vindo ao ColorGenerator
          </div>
          <div>
            Selecione duas cores e verifique o resultado
          </div>
        </div>
      }

        { mixState
          ? showResultOfMixColors(mixs)
          : colors.map((type, i) => (
            // permitir o componente aceitar selecionar 2 cores
            <SelectColorCard
              key={i}
              title={type}
              addItem={addColor}
              removeItem={removeColor}
            />
          ))
          }

      { mixState
        ? <div onClick={() => { setMixState(false); setSelectedColors([])}}>
            Voltar
          </div>
        : <div onClick={() => { setMixs(mixColors(selectedColors)); setMixState(true); }}>
            {/* liberar o botão de confirmar apenas quando a quantidade de ingredientes selecionados for 2 */}
            Confirmar
          </div>
      }
    </div>
  );
}

export default HomeScreen;