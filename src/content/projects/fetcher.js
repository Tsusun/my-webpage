import project from "./index.json"

export const getAllProjects = () => {
  return {
    data: project,
    projectMap: project.reduce((accumulator, project, idx) => {
      accumulator[project.id] = project
      accumulator[project.id].index = idx
      return accumulator
    }, {})
  }
}