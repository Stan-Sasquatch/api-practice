import React from 'react';
import RadioButton from './RadioButton';
const RadioButtonGroup = (props) => {

    /* takes props with structure ["Criteria name", ["choice1", "choice2", "choice3"]] */

    let groupName = props.structure[0]
    let choiceArray = props.structure[1]
    return (<form>
        <div>{choiceArray.map(choice => <RadioButton id={choice.replace(/\s/g, "")} group={groupName} choice={choice} current={props.current} onChange={props.onChange} />)}</div>



    </form>);
}

export default RadioButtonGroup;