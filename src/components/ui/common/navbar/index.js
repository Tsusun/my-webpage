import { AiFillHome } from "react-icons/ai"
import { Button } from "@components/ui/common"

export default function Navbar() {
  return (
    <section>
      <div className="relative py-6 pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative self-auto" aria-label="Global">
          <div className="flex  justify-between items-center">
            <div>
              <AiFillHome onClick={() => (document.location.href = "/")} size="24" className="navbar-icon" />
            </div>
            <div className="flex">
              <span className="px-2">
                <Button onClick={() => window.open("https://metamask.io/download", "_blank")}>
                  Install Metamask
                </Button>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}
