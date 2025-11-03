import styled from "@emotion/styled";
import searchIcon from "@assets/icons/search.svg";

// TODO: Mobile Search should activate when the window is <900px

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;
const SearchInput = styled.input`
  width: calc(100% - 40px);
  height: 28px;
  padding-left: 30px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 50px;

  background-color: white;
  color: #585858;
  font-family: "avenir", sans-serif;
  font-weight: bolder;

  ::placeholder {
    color: #9b9b9b;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  margin-inline: auto;
  height: 12px;
  width: 12px;
`;

/**
 * Represents the Solomon's search bar.
 * @returns JSX.Component
 */
const SearchBar = () => {
  const submitQuery = () => {
    console.log("submission recorded :D");
  };

  return (
    <SearchContainer>
      <SearchInput placeholder="Search..." id="search_input" />
      <SearchIcon src={searchIcon} alt="search_icon" onClick={submitQuery} />
    </SearchContainer>
  );
};

export default SearchBar;
