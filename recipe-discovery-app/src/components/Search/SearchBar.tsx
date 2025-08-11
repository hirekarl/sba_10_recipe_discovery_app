import { useId, useState, type ChangeEvent, type KeyboardEvent } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState<string>("")
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)

  const inputId = useId()
  const navigate = useNavigate()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setsearchTerm(event.target.value)
    setButtonDisabled(event.target.value === "")
  }

  const handleClick = () => {
    navigate(`/search?query=${searchTerm}`)
    setsearchTerm("")
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate(`/search?query=${searchTerm}`)
      setsearchTerm("")
    }
  }

  return (
    <div className="d-flex" role="search">
      <input
        id={inputId}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoComplete="on"
      />
      <button
        className="btn btn-outline-success"
        type="button"
        disabled={buttonDisabled}
        onClick={handleClick}>
        Search
      </button>
    </div>
  )
}

export default SearchBar
