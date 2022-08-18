import "./search-input.css";

export const SearchInput = ({ placeholder, icon, name, ...props }) => {
  return (
    <div className="search__input">
      <input
        placeholder={placeholder}
        type="search"
        name={name}
        id="name"
        {...props}
      />
      {icon}
    </div>
  );
};
