import { siteData } from "./data/site-data.js";
import { escapeHtml, joinHtml } from "./lib/html.js";
import { areaCard, glossaryItem, lessonCard, lessonLink } from "./components.js";

export function renderHome() {
  const { intro } = siteData;

  return `
    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">مدخل</p>
        <h2>${escapeHtml(intro.title)}</h2>
        <p>${escapeHtml(intro.summary)}</p>
      </div>
      <div class="story-grid">
        ${joinHtml(intro.paragraphs.map((paragraph) => `<p class="story-card">${escapeHtml(paragraph)}</p>`))}
      </div>
    </section>

    <section class="section-block" id="areas">
      <div class="section-heading">
        <p class="eyebrow">المجالات الأساسية</p>
        <h2>المقررات الإلزامية التي سنبني عليها رحلتك</h2>
        <p>اضغط على أي مجال لتجد صفحة تعريفية مفصلة تتضمن: لماذا هو مهم، ما الأساسيات التي يجب فهمها، أهم المصطلحات، وأفكار الدروس القادمة.</p>
      </div>
      <div class="cards-grid">
        ${joinHtml(intro.fields.map(areaCard))}
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">كيف سنضيف الدروس؟</p>
        <h2>نظام تعلّم يتوسع مع أسئلتك</h2>
      </div>
      <div class="timeline">
        <article class="timeline-item">
          <strong>1. التهيئة</strong>
          <p>تقرأ صفحة المجال حتى تتكون لديك صورة شاملة ومصطلحات أولية.</p>
        </article>
        <article class="timeline-item">
          <strong>2. السؤال</strong>
          <p>تكتب لي السؤال الذي خطر ببالك حول المجال أو أي مفهوم داخله.</p>
        </article>
        <article class="timeline-item">
          <strong>3. بناء الدرس</strong>
          <p>أضيف درسًا جديدًا يبدأ من الأساسيات اللازمة ثم يتدرج حتى يجيب بدقة عن السؤال.</p>
        </article>
        <article class="timeline-item">
          <strong>4. التراكم</strong>
          <p>يتحوّل كل سؤال إلى لبنة جديدة في مكتبتك التعليمية الشخصية.</p>
        </article>
      </div>
    </section>
  `;
}

export function renderReadiness() {
  const { readiness } = siteData;
  return `
    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">جاهزية</p>
        <h2>${escapeHtml(readiness.title)}</h2>
        <p>${escapeHtml(readiness.note)}</p>
      </div>
      <div class="checklist">
        ${joinHtml(readiness.checkpoints.map((item) => `<article class="check-item">${escapeHtml(item)}</article>`))}
      </div>
    </section>
  `;
}

export function renderAreasIndex() {
  return `
    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">المجالات</p>
        <h2>اختر المجال الذي تريد الغوص فيه</h2>
        <p>كل صفحة مجال صُممت لتكون مرجعًا تمهيديًا يسبق بناء الدروس المتخصصة.</p>
      </div>
      <div class="cards-grid">
        ${joinHtml(siteData.intro.fields.map(areaCard))}
      </div>
    </section>
  `;
}

export function renderAreaDetail(areaId) {
  const area = siteData.areas[areaId];

  if (!area) {
    return renderNotFound();
  }

  return `
    <section class="section-block">
      <a class="back-link" href="#/areas">العودة إلى المجالات</a>
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(area.code)}</p>
        <h2>${escapeHtml(area.title)}</h2>
        <p class="english-line">${escapeHtml(area.english)}</p>
        <p>${escapeHtml(area.overview)}</p>
      </div>
      <div class="detail-grid">
        <article class="info-panel">
          <h3>لماذا هذا المجال مهم؟</h3>
          <p>${escapeHtml(area.whyItMatters)}</p>
        </article>
        <article class="info-panel">
          <h3>الأساسيات التي يجب ألا نتجاوزها</h3>
          <ul class="compact-list">
            ${joinHtml(area.fundamentals.map((item) => `<li>${escapeHtml(item)}</li>`))}
          </ul>
        </article>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">خريطة المجال</p>
        <h2>أهم المحاور التي سنبني عليها الدروس لاحقًا</h2>
      </div>
      <div class="topic-cloud">
        ${joinHtml(area.topics.map((topic) => `<span>${escapeHtml(topic)}</span>`))}
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">مصطلحات</p>
        <h2>قاموس أولي مع النطق</h2>
        <p>هذه المصطلحات ستكون جزءًا من لغتك العلمية في النقاش والقراءة والبحث.</p>
      </div>
      <div class="glossary-grid">
        ${joinHtml(area.glossary.map(glossaryItem))}
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">بداية الدروس</p>
        <h2>كيف سنولّد الدروس في هذا المجال؟</h2>
        <p>لن نكتب المنهج كاملًا دفعة واحدة. سنحوّل أسئلتك إلى دروس متسلسلة تبدأ من الصفر ثم ترتفع تدريجيًا إلى مستوى بحثي.</p>
      </div>
      <div class="question-grid">
        ${joinHtml(area.questions.map((question) => `<article class="question-card">${escapeHtml(question)}</article>`))}
      </div>
      <div class="lesson-placeholder">
        <h3>الخطوة التالية</h3>
        <p>أرسل لي أول سؤال يخطر ببالك في هذا المجال، وسأضيف له درسًا عربيًا مفصلًا داخل الموقع مع المصطلحات الإنجليزية والنطق والأساسيات اللازمة للفهم.</p>
      </div>
    </section>

    ${
      area.lessons.length
        ? `
          <section class="section-block">
            <div class="section-heading">
              <p class="eyebrow">الدروس الحالية</p>
              <h2>دروس بُنيت من أسئلتك</h2>
              <p>كل درس هنا يبدأ من الأساسيات، ثم يشرح الفكرة بعمق، ثم يربطها بسياق أكاديمي يساعدك في رحلة الدكتوراه.</p>
            </div>
            <div class="lesson-links-grid">
              ${joinHtml(area.lessons.map((lesson) => lessonLink(areaId, lesson)))}
            </div>
          </section>
        `
        : ""
    }
  `;
}

export function renderLessonDetail(areaId, lessonId) {
  const area = siteData.areas[areaId];
  const lesson = area?.lessons.find((item) => item.id === lessonId);

  if (!area || !lesson) {
    return renderNotFound();
  }

  return `
    <section class="section-block">
      <a class="back-link" href="#/areas/${areaId}">العودة إلى ${escapeHtml(area.title)}</a>
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(area.code)} • درس</p>
        <h2>${escapeHtml(lesson.title)}</h2>
        <p>${escapeHtml(area.title)} • ${escapeHtml(area.english)}</p>
      </div>
      <div class="lesson-navigation">
        <a class="secondary-button" href="#/areas/${areaId}">صفحة المجال</a>
        <a class="primary-button" href="#/areas/${areaId}/lessons/${lesson.id}">الرابط الحالي للدرس</a>
      </div>
    </section>

    <section class="section-block">
      ${lessonCard(lesson)}
    </section>
  `;
}

export function renderNotFound() {
  return `
    <section class="section-block">
      <div class="section-heading">
        <h2>الصفحة غير موجودة</h2>
        <p>ارجع إلى <a href="#/">الصفحة الرئيسية</a> لاختيار صفحة متاحة.</p>
      </div>
    </section>
  `;
}
