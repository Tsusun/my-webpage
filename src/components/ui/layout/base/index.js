
import { Navbar } from "@components/ui/common"
import { Footer } from "@components/ui/common"

export default function BaseLayout({ children }) {
  return (
    <>  
      <Navbar />
      <div className="fit">{children}</div>
      <Footer />
    </>
  )
}