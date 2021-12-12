import { Button } from "@components/ui/common"
import useDarkMode from "@components/hooks/ui/useDarkMode"
import { BsTsunami } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { GiNinjaHead } from "react-icons/gi"

export default function Navbar() {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => setDarkTheme(!darkTheme)
  return (
    <section>
      <div className="relative p-2.5">
        <nav className="relative self-auto" aria-label="Global">
          <div className="flex  justify-between items-center">
            <div>
              <AiFillHome onClick={() => (document.location.href = "/")} size="24" className="navbar-icon" />
            </div>
            <div className="flex">
              <span className="px-2" onClick={handleMode}>
                {darkTheme ? (
                  <BsTsunami size="24" className="navbar-icon " />
                ) : (
                  <GiNinjaHead size="24" className="navbar-icon" />
                )}
              </span>
              <Button onClick={() => window.open("https://metamask.io/download", "_blank")}>
                Install Metamask
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}
