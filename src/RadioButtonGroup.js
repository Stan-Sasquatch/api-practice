import React from 'react';
import RadioButton from './RadioButton';
const RadioButtonGroup = (props) => {

    let groupName = props.structure[0]
    let choiceArray = props.structure[1]
    return (<form>
        <div>{choiceArray.map(choice => <RadioButton id={choice.replace(/\s/g, "")} group={groupName} choice={choice} criteria={props.criteria} onChange={props.onChange} />)}</div>



    </form>);
}

export default RadioButtonGroup;