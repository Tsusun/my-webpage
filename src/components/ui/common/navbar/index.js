import { Button } from "@components/ui/common"
import useDarkMode from "@components/hooks/ui/useDarkMode"
import { RiAliensLine, RiAliensFill } from "react-icons/ri"

export default function Navbar() {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => setDarkTheme(!darkTheme)
  return (
    <nav className="flex justify-end p-2.5 sticky top-0 bg-opacity-30 text-white">
      <div className="flex">
        <span
          className="px-2"
          onClick={handleMode}
          onMouseOver={({ target }) => (target.style.color = "16E801")}
          onMouseOut={({ target }) => (target.style.color = "white")}
        >
          {darkTheme ? (
            <RiAliensFill size="24" className="navbar-icon " />
          ) : (
            <RiAliensLine size="24" className="navbar-icon" />
          )}
        </span>
        <Button onClick={() => window.open("https://metamask.io/download", "_blank")}>
          Install Metamask
        </Button>
      </div>
    </nav>
  )
}
