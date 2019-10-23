import React from 'react';
const SearchCriteriaRadioButtons = (props) => {
    return (<form>
        <input type="radio" id="CriteriaChoiceLastName"
            name="CriteriaChoice" value="Last Name" checked={props.criteria === "Last Name"} onChange={props.onChange} />
        <label htmlFor="CriteriaChoiceLastName">Last Name</label>
        <input type="radio" id="CriteriaChoiceCountry"
            name="CriteriaChoice" value="Country" checked={props.criteria === "Country"} onChange={props.onChange} />
        <label htmlFor="CriteriaChoiceCountry">Country</label>
    </form>);
}

export default SearchCriteriaRadioButtons;