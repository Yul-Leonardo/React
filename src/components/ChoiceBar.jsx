import React from 'react';

function ChoiceBar({title, percent}) {
    const [count, setCount] = React.useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className='ChoiceBar' onClick={handleClick}>
            <div className='Progress' style={{width: percent + "%"}}>
                <div className='ChoiceBarTitle'>{title}</div>
            </div>
            <div className='ChoiceBarBadge'> 123 </div>
        </div>
    )
}

export default ChoiceBar;