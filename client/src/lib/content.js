import siteData from "@/data/site.json";
import servicesData from "@/data/services.json";
import projectsData from "@/data/projects.json";

export const site = siteData;
export const services = servicesData;
export const projects = projectsData;

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(currentSlug) {
  return getFeaturedProjects().filter((p) => p.slug !== currentSlug);
}

export function getAllProjectSlugs() {
  return projects.map((p) => p.slug);
}
