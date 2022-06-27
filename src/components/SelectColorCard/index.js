import React, { useState, useEffect } from 'react';
import { SelectColorCardButton, Image, Text } from './Style';

const SelectColorCard = ({
 title, addItem, removeItem
}) => {
  
  const [selected, setSelected] = useState(false);

  useEffect(() => {
  },[selected])

  return (
    <div>
      { selected
        ? (
          <SelectColorCardButton
            onClick={() => { 
              setSelected(!selected); 
              removeItem(title[0]); 
            }}
            chosen
          >
            <Text>
              {title[0]}
            </Text>
          </SelectColorCardButton>
        ) : (
          <SelectColorCardButton 
            onClick={() => { 
              setSelected(!selected); 
              addItem(title[0]); 
            }}
          >
            <Text>
              {title[0]}
            </Text>
          </SelectColorCardButton>
        )
        }
    </div>
  );
};

export default SelectColorCard;