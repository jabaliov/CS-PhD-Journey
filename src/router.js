import { renderAreaDetail, renderAreasIndex, renderHome, renderLessonDetail, renderNotFound, renderReadiness } from "./views.js";

export function renderRoute() {
  const hash = window.location.hash || "#/";
  const route = hash.replace(/^#/, "");
  const parts = route.split("/").filter(Boolean);

  if (parts.length === 0) {
    return renderHome();
  }

  if (parts[0] === "readiness") {
    return renderReadiness();
  }

  if (parts[0] === "areas" && parts.length === 1) {
    return renderAreasIndex();
  }

  if (parts[0] === "areas" && parts.length === 2) {
    return renderAreaDetail(parts[1]);
  }

  if (parts[0] === "areas" && parts[2] === "lessons" && parts[3]) {
    return renderLessonDetail(parts[1], parts[3]);
  }

  return renderNotFound();
}
