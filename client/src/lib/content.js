import siteData from "@/data/site.json";
import servicesData from "@/data/services.json";
import projectsData from "@/data/projects.json";

export const site = siteData;
export const services = servicesData;
export const projects = projectsData;

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}
