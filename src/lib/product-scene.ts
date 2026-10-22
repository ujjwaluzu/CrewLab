export type ProductLayer = "brief" | "profiles" | "discovery" | "requests" | "workspace" | "github";

const PRODUCT_ROUTES: Record<string, ProductLayer> = {
  "/explore": "discovery",
  "/features": "profiles",
  "/how-it-works": "brief",
  "/resources": "discovery",
  "/resources/find-technical-cofounder-india": "profiles",
  "/resources/questions-before-joining-startup-as-cofounder": "requests",
  "/resources/where-developers-find-startup-projects": "discovery",
  "/resources/write-startup-project-listing": "brief",
  "/resources/choose-side-project-and-contribute": "workspace",
};

export function productLayerForPath(path: string): ProductLayer | undefined {
  return PRODUCT_ROUTES[path];
}
