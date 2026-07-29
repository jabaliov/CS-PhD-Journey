import { siteData } from "./data/site-data.js";
import { escapeHtml, joinHtml } from "./lib/html.js";
import { areaCard, glossaryItem, lessonCard, lessonLink } from "./components.js";

function renderBreadcrumb(items) {
  return `
    <nav class="breadcrumb" aria-label="مسار الصفحة">
      ${joinHtml(
        items.map(
          (item, index) => `
            <a class="breadcrumb-item${index === items.length - 1 ? " is-current" : ""}" href="${escapeHtml(item.href)}" ${
              index === items.length - 1 ? 'aria-current="page"' : ""
            }>
              ${escapeHtml(item.label)}
            </a>
          `
        )
      )}
    </nav>
  `;
}

function renderContextHeader({ eyebrow, title, summary, breadcrumb, meta = "" }) {
  return `
    <section class="context-header">
      ${breadcrumb ? renderBreadcrumb(breadcrumb) : ""}
      <div class="context-heading">
        ${eyebrow ? `<p class="eyebrow">${escapeHtml(eyebrow)}</p>` : ""}
        <h1>${escapeHtml(title)}</h1>
        ${summary ? `<p class="context-summary">${escapeHtml(summary)}</p>` : ""}
        ${meta ? `<p class="context-meta">${meta}</p>` : ""}
      </div>
    </section>
  `;
}

export function renderHome() {
  const { intro } = siteData;

  return `
    <section class="hero">
      <div class="hero-grid">
        <section class="hero-copy">
          <p class="eyebrow">جامعة الملك عبدالعزيز • علوم الحاسب</p>
          <h1>موقع تعليمي يبني فهمًا عميقًا قبل الدكتوراه</h1>
          <p class="lead">
            هذه الصفحة هي المدخل العام فقط. بعد ذلك، تتحول كل صفحة داخلية إلى مساحة مركزة
            على المجال أو الدرس نفسه دون تكرار قصة الموقع في كل مرة.
          </p>
          <div class="hero-actions">
            <a class="primary-button" href="#/areas">ابدأ بالمجالات</a>
            <a class="secondary-button" href="#/readiness">جاهزيتي للدكتوراه</a>
          </div>
        </section>

        <aside class="hero-panel">
          <h2>فلسفة التعلّم هنا</h2>
          <ul class="compact-list">
            <li>الشرح بالعربية مع تثبيت المصطلحات الإنجليزية.</li>
            <li>البدء من الأساسيات التي لا يصح تجاوزها.</li>
            <li>الانتقال من الفهم إلى النقاش والبحث والتحليل.</li>
            <li>بناء الدروس القادمة حسب أسئلتك أنت.</li>
          </ul>
        </aside>
      </div>
    </section>

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
    ${renderContextHeader({
      eyebrow: "الاستعداد الأكاديمي",
      title: readiness.title,
      summary:
        "هذه الصفحة ليست تعريفًا بالموقع، بل قائمة تحقق سريعة تساعدك على تقييم موقعك الحالي قبل التوسع في الدروس والمجالات."
    })}

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
    ${renderContextHeader({
      eyebrow: "خريطة التخصص",
      title: "المجالات الأساسية في رحلتك",
      summary:
        "من هنا تبدأ الملاحة الحقيقية للموقع: اختر المجال، ثم انتقل إلى صفحته، ثم إلى دروسه، دون أن تعاد عليك مقدمة الموقع في كل مستوى."
    })}

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
    ${renderContextHeader({
      eyebrow: area.code,
      title: area.title,
      summary: area.overview,
      meta: `${escapeHtml(area.english)} • ${area.lessons.length} دروس حاليًا`,
      breadcrumb: [
        { label: "المجالات", href: "#/areas" },
        { label: area.title, href: `#/areas/${areaId}` }
      ]
    })}

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">لماذا هذا المجال؟</p>
        <h2>ما الذي ستبنيه هذه الصفحة لك؟</h2>
        <p>الترتيب هنا مقصود: تبدأ بالسياق، ثم الأساسيات، ثم خريطة الموضوعات، ثم المصطلحات، ثم تنتقل إلى بنك الدروس.</p>
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
    ${renderContextHeader({
      eyebrow: `${area.code} • درس`,
      title: lesson.title,
      summary: lesson.summary,
      meta: `${escapeHtml(area.title)} • ${escapeHtml(area.english)}`,
      breadcrumb: [
        { label: "المجالات", href: "#/areas" },
        { label: area.title, href: `#/areas/${areaId}` },
        { label: lesson.title, href: `#/areas/${areaId}/lessons/${lesson.id}` }
      ]
    })}

    <section class="section-block">
      <div class="lesson-navigation">
        <a class="secondary-button" href="#/areas/${areaId}">صفحة المجال</a>
        <a class="primary-button" href="#/areas/${areaId}/lessons/${lesson.id}">رابط الدرس</a>
      </div>
    </section>

    <section class="section-block">
      ${lessonCard(lesson)}
    </section>
  `;
}

export function renderNotFound() {
  return `
    ${renderContextHeader({
      eyebrow: "خطأ في المسار",
      title: "الصفحة غير موجودة",
      summary: "قد يكون الرابط غير صحيح، أو أن الصفحة لم تُنشأ بعد.",
      breadcrumb: [{ label: "الصفحة غير موجودة", href: "#/" }]
    })}

    <section class="section-block">
      <div class="section-heading">
        <h2>ارجع إلى المسار الرئيسي</h2>
        <p>اختر <a href="#/">الصفحة الرئيسية</a> أو انتقل إلى <a href="#/areas">المجالات</a> للمتابعة.</p>
      </div>
    </section>
  `;
}
