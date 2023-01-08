import './search-box.style.css'

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
        <input
            type='search'
            className={`search-box ${className}`}
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );

export default SearchBox;