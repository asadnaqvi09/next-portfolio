import siteData from "@/data/site.json";
import capabilitiesData from "@/data/capabilities.json";
import processData from "@/data/process.json";
import stackData from "@/data/stack.json";
import faqData from "@/data/faq.json";
import projectsData from "@/data/projects.json";

export const site = siteData;
export const capabilities = capabilitiesData;
export const process = processData;
export const stack = stackData;
export const faq = faqData;
export const projects = projectsData;

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}
