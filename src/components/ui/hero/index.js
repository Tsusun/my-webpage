import { calcRem } from "@utils/style"
import Typewriter from "typewriter-effect"
const height = calcRem(1013)

export default function Hero() {
  const names = ["Welcome to my World", "The Shitcoin Ninja", "The Sushi Farm", " Lover ❤"]

  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: "url(/hero-bg-single2x-p-2000.png)", width: "100%", height: height }}
    >
      <div className="text-center">
        <Typewriter
          options={{
            autoStart: true,
            loop: true
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(names[0])
              .pauseFor(2500)
              .deleteAll()
              .typeString(names[1])
              .pauseFor(1500)
              .deleteAll()
              .typeString(names[2])
              .pauseFor(50)
              .deleteChars(5)
              .typeString(names[3])
              .pauseFor(5000)
              .start()
          }}
        />
      </div>
    </div>
  )
}
