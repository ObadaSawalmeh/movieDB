// components/shared/SearchInput/SearchInput.jsx
import { useEffect, useRef, useState } from "react";
import IconContainer from "../iconContainer/iconContainer";
import {
  CloseButton,
  SearchContainer,
  SearchInputField,
  SearchWrapper,
} from "./ExpandedSearchInput.styles";

const SearchInput = ({
  onSearch,
  placeholder = "Search for a movie, tv show, person...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim() && onSearch) {
      onSearch(searchValue.trim());
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.closest(".search-container").contains(event.target)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <SearchContainer className="search-container">
      <div
        onClick={handleSearchClick}
        style={{ cursor: "pointer", display: "flex" }}
      >
        <IconContainer
          iconName="searchIcon.svg"
          alt="Search"
          height="29px"
          width="29px"
        />
      </div>

      {/* Only show input and close button when open */}
      {isOpen && (
        <SearchWrapper>
          <IconContainer
            iconName="ExpandedsearchIcon.svg"
            alt="Search"
            height="1.5rem"
            width="1.5rem"
          />
          <form onSubmit={handleSubmit}>
            <SearchInputField
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
            />
          </form>
          <CloseButton onClick={handleClose} aria-label="Close search">
            ×
          </CloseButton>
        </SearchWrapper>
      )}
    </SearchContainer>
  );
};

export default SearchInput;
