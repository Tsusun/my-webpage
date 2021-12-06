import moment from "moment"

export default function Presentation() {
  return (
    <div style={{ backgroundColor: "black", width: "100%", height: "61rem" }}>
      <p className="text-white">
        Hi there my Name is Silvan I m {moment().diff(moment("1998/01/05", "YYYY/M/D"), "years")} crypto
        entousiast.
        <br /> I started my journey into crypto and shorter after Blockchain back in November 2020. Like
        everyone I was first interested into the #making profit# side of things,
        <br />
        but quickly relized how amazing this world is. What I learn form that and other expericences is
        <strong>HOOOOOOOOOOOOOODL !!!</strong>
      </p>
    </div>
  )
}
