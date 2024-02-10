import { MagnifyingGlass } from "@phosphor-icons/react"
import { buttonLogin, buttonSearch, container, formSearch, inputStyle } from "./styles.css"

export default function AppBar() {
  return (
    <header>
      <nav className={container}>
        <form className={formSearch}>
          <input className={inputStyle}
            name="search"
            id="search"
            placeholder="Search"
            type="search"
          />
          <button
            type="submit"
            className={buttonSearch}>
            <MagnifyingGlass size={18} />
          </button>
        </form>

        <button className={buttonLogin}>
          Log in
        </button>
      </nav>
    </header>
  )
}