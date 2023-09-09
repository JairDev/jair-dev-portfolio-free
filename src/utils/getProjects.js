import { personalProjects } from "data/info-portfolio";

export async function getProject(id) {
  const find = personalProjects.find((project) => project.id === id);
  return new Promise((resolve) => resolve(find));
}
