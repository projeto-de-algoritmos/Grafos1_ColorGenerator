import React from 'react';

const ColorCard = ({title}) => {
    const colorContent = title;
    return (
        <div>
            {colorContent.name}
            {/* TODO: Fazer card representando cor de maneira agradavel */}
        </div>
    );
};

export default ColorCard;