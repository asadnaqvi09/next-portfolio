import siteData from "@/data/site.json";
import skillsData from "@/data/skills.json";
import experienceData from "@/data/experience.json";
import projectsData from "@/data/projects.json";

export const site = siteData;
export const skills = skillsData;
export const experience = experienceData;
export const projects = projectsData;

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}
