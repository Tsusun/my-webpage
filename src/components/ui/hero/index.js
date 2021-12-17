import { calcRem } from "@utils/style"
import Typewriter from "typewriter-effect"
import { GiSolarSystem } from "react-icons/gi"

const height = calcRem(1013)

export default function Hero() {
  const names = ["a Blockchain Dev 💻", "⚙️ an Engineer", "a Sushi Farm", " Lover♥"]

  return (
    <div
      className="hero my-auto"
      style={{
        width: "100%",
        height: height
      }}
    >
      <div className=" bg-gray-50 bg-opacity-60 rounded p-6 dark:bg-gray-600 dark:bg-opacity-50">
        <h1>Silvan Reigue</h1>
        <h2>
          Welcome to my Universe
        </h2>
        <h3>Here you will find:</h3>
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
