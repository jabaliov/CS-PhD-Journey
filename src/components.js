import { escapeHtml, joinHtml } from "./lib/html.js";

export function areaCard(area) {
  return `
    <a class="area-card" href="#/areas/${area.id}">
      <span class="course-code">${escapeHtml(area.code)}</span>
      <h3>${escapeHtml(area.title)}</h3>
      <p class="english-line">${escapeHtml(area.english)}</p>
      <p>${escapeHtml(area.teaser)}</p>
    </a>
  `;
}

export function glossaryItem(item) {
  return `
    <article class="glossary-item">
      <div>
        <h4>${escapeHtml(item.term)}</h4>
        <p>${escapeHtml(item.arabic)}</p>
        <small>النطق التقريبي: ${escapeHtml(item.pronunciation)}</small>
      </div>
      <button class="speak-term" type="button" data-term="${escapeHtml(item.term)}">
        نطق المصطلح
      </button>
    </article>
  `;
}

export function lessonLink(areaId, lesson) {
  return `
    <a class="lesson-link-card" href="#/areas/${areaId}/lessons/${lesson.id}">
      <span class="lesson-level">${escapeHtml(lesson.level)}</span>
      <h3>${escapeHtml(lesson.title)}</h3>
      <p>${escapeHtml(lesson.summary)}</p>
    </a>
  `;
}

export function lessonCard(lesson) {
  return `
    <article class="lesson-card" id="lesson-${escapeHtml(lesson.id)}">
      <div class="lesson-header">
        <span class="lesson-level">${escapeHtml(lesson.level)}</span>
        <h3>${escapeHtml(lesson.title)}</h3>
        <p>${escapeHtml(lesson.summary)}</p>
      </div>

      <div class="lesson-section">
        <h4>الأساسيات التي تحتاجها قبل فهم الجواب</h4>
        <div class="foundation-grid">
          ${joinHtml(
            lesson.foundations.map(
              (item) => `
                <article class="foundation-card">
                  <strong>${escapeHtml(item.term)}</strong>
                  <p class="foundation-arabic">${escapeHtml(item.arabic)}</p>
                  <p>${escapeHtml(item.definition)}</p>
                </article>
              `
            )
          )}
        </div>
      </div>

      ${joinHtml(
        lesson.sections.map(
          (section) => `
            <div class="lesson-section">
              <h4>${escapeHtml(section.title)}</h4>
              ${joinHtml(section.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`))}
            </div>
          `
        )
      )}

      <div class="lesson-section">
        <h4>مقارنة مباشرة</h4>
        <div class="comparison-table" role="table" aria-label="مقارنة بين هندسة البرمجيات وتصميم البرمجيات">
          <div class="comparison-row comparison-head" role="row">
            <span role="columnheader">الجانب</span>
            <span role="columnheader">هندسة البرمجيات</span>
            <span role="columnheader">تصميم البرمجيات</span>
          </div>
          ${joinHtml(
            lesson.comparison.map(
              (row) => `
                <div class="comparison-row" role="row">
                  <span role="cell">${escapeHtml(row.aspect)}</span>
                  <span role="cell">${escapeHtml(row.engineering)}</span>
                  <span role="cell">${escapeHtml(row.design)}</span>
                </div>
              `
            )
          )}
        </div>
      </div>

      <div class="lesson-takeaway">
        <strong>الخلاصة السريعة:</strong>
        <p>${escapeHtml(lesson.takeaway)}</p>
      </div>
    </article>
  `;
}
