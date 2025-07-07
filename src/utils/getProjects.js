import { personalProjects } from "data/info-portfolio";

export function getProject(id) {
  const find = personalProjects.find((project) => project.id === id);
  console.log(find);
  // return new Promise((resolve) => resolve(find));
  return find;
}
