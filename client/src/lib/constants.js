export const NAV_ITEMS = [
  { key: "capabilities", id: "capabilities", label: "Capabilities" },
  { key: "process", id: "capabilities", label: "Process" },
  { key: "work", id: "work", label: "Work" },
  { key: "stack", id: "stack", label: "Stack" },
  { key: "faq", id: "faq", label: "FAQ" },
];

export const WORK_FILTERS = ["All", "Website", "Dashboard", "App" ];

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
