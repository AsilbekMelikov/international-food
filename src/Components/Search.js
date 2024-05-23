import {useState} from "react";

const Search = ({filterMeals}) => {
    const [value, setValue] = useState("")

    const handleClick = (e) => {
        if (e.key === 'Enter') {
            filterMeals(value)
        }
    }

    return (
        <div className="col s12">
            <div className="row">
                <div className="input-field">
                    <i className="material-icons prefix">search</i>
                    <input type='search'
                           placeholder='Search...'
                           value={value}
                           onKeyDown={handleClick}
                           onChange={(e) => setValue(e.target.value)}

                    />
                    <button className='btn' type='button' onClick={() => filterMeals(value)}
                            style={{position: "absolute", right: '0', top: '0'}}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search