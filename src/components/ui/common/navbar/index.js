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
      <div className="relative py-6 pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative self-auto" aria-label="Global">
          <div className="flex  justify-between items-center">
            <div>
              <AiFillHome onClick={() => (document.location.href = "/")} size="24" className="navbar-icon bg-black" />
            </div>
            <div className="flex">
              <span className="px-2" onClick={handleMode}>
                {darkTheme ? (
                  <BsTsunami size="24" className="navbar-icon " />
                ) : (
                  <GiNinjaHead size="24" className="navbar-icon bg-black" />
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
