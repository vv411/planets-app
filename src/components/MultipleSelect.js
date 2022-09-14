import './MultipleSelect.scss'

//Multiple selection dropdown to use for the terrain filter, create a list of checkboxes based on the data array passed in
const MultipleSelect = ({ heading, options, selected, toggleOption }) => {
    return (
        <div className="multipleSelectContainer">
            <div>
                {heading}
                <div className="arrowImg">
                    &#9013;
                </div>
            </div>
            
            <ul className="multipleSelectOptions">
                {options.map(option => {
                    const isSelected = selected.includes(option);

                    return (
                        <li key={option} className="multipleSelectOption" onClick={() => toggleOption({iOption: option})}>
                            <input type="checkbox" checked={isSelected} className="multipleSelectOption-checkbox"></input>
                            <span>{option}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default MultipleSelect;