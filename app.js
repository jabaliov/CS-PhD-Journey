const siteData = {
  intro: {
    title: "علوم الحاسب: ما الذي سندرسه فعلًا؟",
    summary:
      "علوم الحاسب ليست مجرد برمجة، بل علم يدرس تمثيل المعلومات، تصميم الأنظمة، بناء البرمجيات، ربط الأجهزة بالشبكات، وتحليل الأداء والموثوقية والتوسع.",
    paragraphs: [
      "في مستوى الدكتوراه، لا يكفي أن تعرف كيف تستخدم التقنية، بل يجب أن تفهم لماذا تعمل، وما حدودها، وما الفرضيات التي بُنيت عليها، وكيف يمكن تحسينها أو مساءلتها علميًا.",
      "الهدف من هذا الموقع أن نؤسس فهمًا متدرجًا يجعلك قادرة على مناقشة الأفكار والمقررات والاتجاهات البحثية بثقة، لا مجرد متابعة المحاضرة."
    ],
    fields: [
      {
        id: "networks",
        code: "CS 701",
        title: "الشبكات المتقدمة",
        english: "Advanced Computer Networks",
        teaser:
          "كيف تنتقل البيانات، وكيف نضمن الجودة، وكيف تتطور البنية التحتية للإنترنت والاتصالات الحديثة؟"
      },
      {
        id: "software",
        code: "CS 702",
        title: "هندسة البرمجيات وتصميمها",
        english: "Software Engineering and Design",
        teaser:
          "كيف نصمم أنظمة برمجية كبيرة بشكل متماسك، قابل للتوسع، وعالي الجودة؟"
      },
      {
        id: "databases",
        code: "CS 703",
        title: "أنظمة قواعد البيانات المتقدمة",
        english: "Advanced Database Systems",
        teaser:
          "كيف تُنظَّم البيانات، وتُوزَّع، وتُحافَظ عليها تحت الضغط والتوازي والتوسع؟"
      },
      {
        id: "computer-architecture",
        code: "CS 704",
        title: "هندسة الكمبيوتر المتقدمة",
        english: "Advanced Computer Architecture",
        teaser:
          "كيف تعمل المعالجات والذاكرة والتوازي على مستوى يجعل الأداء والقدرات ممكنة؟"
      }
    ]
  },
  readiness: {
    title: "كيف تعرف أنك جاهز للدكتوراه؟",
    checkpoints: [
      "تستطيعين شرح الفكرة من الأساسيات قبل القفز إلى المصطلحات الثقيلة.",
      "تفرّقين بين التطبيق العملي وبين السؤال البحثي الكامن خلفه.",
      "تقدرين على قراءة المصطلحات الإنجليزية وفهم استخدامها الشفهي والكتابي.",
      "عند ظهور تقنية جديدة، تسألين: ما المشكلة التي تحلها؟ وما المقايضة؟ وما حدودها؟",
      "يمكنك الربط بين الطبقات: عتاد، نظام، شبكة، بيانات، وبرمجيات."
    ],
    note:
      "الجاهزية المثالية ليست حفظ كل شيء، بل امتلاك أساس متين يجعل أي موضوع جديد قابلًا للتفكيك والفهم بسرعة."
  },
  areas: {
    networks: {
      code: "CS 701",
      title: "مواضيع متقدمة في مجال الشبكات",
      english: "Advanced Computer Networks",
      overview:
        "هذا المجال يدرس كيف تنتقل البيانات بين الأنظمة، وكيف نحافظ على الأداء والاستمرارية وجودة الخدمة رغم الازدحام والتنقل وتغيّر البنية التحتية.",
      whyItMatters:
        "بدون فهم الشبكات لن يكون من السهل تحليل الأنظمة الموزعة أو الخدمات السحابية أو تأثيرات البروتوكولات على الأداء والموثوقية.",
      fundamentals: [
        "ما هي الشبكة؟ وما الفرق بين Link وPath وRoute؟",
        "كيف تُقسَّم البيانات إلى Packets، ولماذا هذا مهم؟",
        "ما دور بروتوكولات TCP وIP، وما الفرق بينهما؟",
        "كيف نقيس Throughput وLatency وJitter وPacket Loss؟"
      ],
      topics: [
        "TCP/IP Innovations",
        "Mobile IP",
        "Software-Defined Networking (SDN)",
        "Cloud Networking",
        "4G/5G Networks",
        "Traffic Engineering",
        "Quality of Service (QoS)",
        "Mobility Management",
        "Performance Evaluation"
      ],
      questions: [
        "كيف تختلف الشبكات التقليدية عن SDN؟",
        "لماذا يؤثر التأخير Latency على التطبيقات التفاعلية أكثر من معدل النقل؟",
        "ما الذي يتغير عند انتقال الجهاز بين شبكات مختلفة؟"
      ],
      glossary: [
        { term: "Latency", arabic: "زمن التأخير", pronunciation: "LAY-tuhn-see" },
        { term: "Throughput", arabic: "معدل النقل الفعلي", pronunciation: "THROO-put" },
        { term: "Packet Loss", arabic: "فقدان الرزم", pronunciation: "PAK-it loss" },
        { term: "Quality of Service", arabic: "جودة الخدمة", pronunciation: "KWA-li-tee ov SUR-vis" }
      ]
    },
    software: {
      code: "CS 702",
      title: "هندسة البرمجيات وتصميمها",
      english: "Software Engineering and Design",
      overview:
        "هذا المجال يركّز على بناء أنظمة برمجية معقدة بطريقة مقصودة: كيف نفصل المسؤوليات، ونحقق خصائص الجودة، ونتعامل مع المقايضات التصميمية.",
      whyItMatters:
        "المستوى البحثي هنا لا يسأل فقط كيف نبني نظامًا يعمل، بل كيف نبرر اختياراتنا المعمارية، وما أثرها على القابلية للصيانة، الأداء، الأمان، والتوسع.",
      fundamentals: [
        "ما الفرق بين Algorithm وArchitecture وImplementation؟",
        "ما معنى Coupling وCohesion ولماذا يؤثران في جودة النظام؟",
        "ما المقصود بـ Quality Attributes مثل Performance وScalability وMaintainability؟",
        "كيف نقارن بين Architectural Styles المختلفة؟"
      ],
      topics: [
        "Architectural Patterns",
        "Design Trade-offs",
        "Distributed Systems",
        "Service-Oriented Architecture (SOA)",
        "Component-Based Design",
        "Layered Architecture",
        "Case Studies",
        "Research-Driven System Analysis"
      ],
      questions: [
        "متى أستخدم Monolith ومتى أستخدم Microservices؟",
        "كيف أقيس أثر القرار المعماري على جودة النظام؟",
        "ما الفرق بين التصميم الجيد والتصميم الذي يبدو جميلًا فقط؟"
      ],
      glossary: [
        { term: "Maintainability", arabic: "قابلية الصيانة", pronunciation: "main-TAY-nuh-BIL-uh-tee" },
        { term: "Scalability", arabic: "قابلية التوسع", pronunciation: "SKAY-luh-BIL-uh-tee" },
        { term: "Coupling", arabic: "الترابط", pronunciation: "KUP-ling" },
        { term: "Cohesion", arabic: "الانسجام الوظيفي", pronunciation: "koh-HEE-zhun" }
      ]
    },
    databases: {
      code: "CS 703",
      title: "أنظمة قواعد البيانات المتقدمة",
      english: "Advanced Database Systems",
      overview:
        "هذا المجال يدرس كيف نخزن البيانات وننظمها ونديرها على نطاق واسع، مع الحفاظ على الاتساق والكفاءة في وجود المعاملات والتوزيع والتزامن.",
      whyItMatters:
        "قواعد البيانات المتقدمة تقف خلف الأنظمة الحديثة، من التجارة الإلكترونية إلى الذكاء الاصطناعي، وهي المكان الذي تظهر فيه بوضوح مقايضات الاتساق، السرعة، والتوسع.",
      fundamentals: [
        "ما الفرق بين Data Model وSchema وInstance؟",
        "ما المقصود بالمعاملة Transaction، ولماذا نحتاج خصائص ACID؟",
        "كيف يحدث التزامن Concurrency داخل قاعدة البيانات؟",
        "متى تكون القواعد العلائقية مناسبة، ومتى نحتاج NoSQL أو NewSQL؟"
      ],
      topics: [
        "Object-Oriented Databases",
        "Object-Relational Databases",
        "Distributed Databases",
        "Transaction Management",
        "Concurrency Control",
        "NoSQL",
        "NewSQL",
        "Scalable Data Systems",
        "Distributed Data Structures"
      ],
      questions: [
        "ما الفرق الحقيقي بين SQL وNoSQL؟",
        "كيف نمنع التعارض بين عمليات القراءة والكتابة المتزامنة؟",
        "لماذا يصبح التوسع أصعب كلما زاد الحرص على الاتساق؟"
      ],
      glossary: [
        { term: "Transaction", arabic: "معاملة", pronunciation: "tran-ZAK-shun" },
        { term: "Concurrency Control", arabic: "التحكم في التزامن", pronunciation: "kun-KUR-uhn-see كن-TROHL" },
        { term: "Consistency", arabic: "الاتساق", pronunciation: "kun-SIS-tuhn-see" },
        { term: "Replication", arabic: "النسخ المتماثل", pronunciation: "rep-li-KAY-shun" }
      ]
    },
    "computer-architecture": {
      code: "CS 704",
      title: "هندسة الكمبيوتر المتقدمة",
      english: "Advanced Computer Architecture",
      overview:
        "هذا المجال يشرح ما يحدث داخل الحاسوب نفسه: كيف تنفَّذ التعليمات، وكيف تتفاعل الذاكرة مع المعالج، وكيف يرفع التوازي الأداء أو يخلق تعقيدًا جديدًا.",
      whyItMatters:
        "كل باحثة جادة في علوم الحاسب تستفيد من هذا الفهم، لأن كثيرًا من حدود الأداء التي تظهر في البرمجيات أو الأنظمة أو البيانات جذورها معمارية وعتادية.",
      fundamentals: [
        "ما هي Instruction Set Architecture (ISA) وما الفرق بينها وبين Microarchitecture؟",
        "كيف تعمل الذاكرة المخبئية Cache، ولماذا تُعد حاسمة للأداء؟",
        "ما المقصود بـ Parallelism، ولماذا ليس مجانيًا؟",
        "كيف نقيس الأداء فعلًا بدل الاعتماد على الانطباع؟"
      ],
      topics: [
        "Processors",
        "Memory Systems",
        "Multiprocessors",
        "Caching",
        "Virtualization",
        "Parallel Processing",
        "Performance Evaluation",
        "Flynn's Taxonomy",
        "High-Performance Computing (HPC)"
      ],
      questions: [
        "لماذا يكون المعالج سريعًا لكن البرنامج بطيئًا؟",
        "كيف تؤثر Cache Misses على زمن التنفيذ؟",
        "ما الفرق بين التوازي على مستوى البيانات والتوازي على مستوى المهام؟"
      ],
      glossary: [
        { term: "Cache", arabic: "الذاكرة المخبئية", pronunciation: "kash" },
        { term: "Pipeline", arabic: "خط الأنابيب التنفيذي", pronunciation: "PIPE-line" },
        { term: "Virtualization", arabic: "المحاكاة الافتراضية", pronunciation: "vur-choo-uh-luh-ZAY-shun" },
        { term: "Parallelism", arabic: "التوازي", pronunciation: "PAIR-uh-luh-liz-um" }
      ]
    }
  }
};

const app = document.querySelector("#app");
const speakPageButton = document.querySelector("#speak-page");

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function areaCard(area) {
  return `
    <a class="area-card" href="#/areas/${area.id}">
      <span class="course-code">${escapeHtml(area.code)}</span>
      <h3>${escapeHtml(area.title)}</h3>
      <p class="english-line">${escapeHtml(area.english)}</p>
      <p>${escapeHtml(area.teaser)}</p>
    </a>
  `;
}

function glossaryItem(item) {
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

function renderHome() {
  const { intro } = siteData;
  return `
    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">مدخل</p>
        <h2>${escapeHtml(intro.title)}</h2>
        <p>${escapeHtml(intro.summary)}</p>
      </div>
      <div class="story-grid">
        ${intro.paragraphs.map((paragraph) => `<p class="story-card">${escapeHtml(paragraph)}</p>`).join("")}
      </div>
    </section>

    <section class="section-block" id="areas">
      <div class="section-heading">
        <p class="eyebrow">المجالات الأساسية</p>
        <h2>المقررات الإلزامية التي سنبني عليها رحلتك</h2>
        <p>اضغطي على أي مجال لتجدي صفحة تعريفية مفصلة تتضمن: لماذا هو مهم، ما الأساسيات التي يجب فهمها، أهم المصطلحات، وأفكار الدروس القادمة.</p>
      </div>
      <div class="cards-grid">
        ${intro.fields.map(areaCard).join("")}
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
          <p>تقرئين صفحة المجال حتى تتكون لديك صورة شاملة ومصطلحات أولية.</p>
        </article>
        <article class="timeline-item">
          <strong>2. السؤال</strong>
          <p>تكتبين لي السؤال الذي خطر ببالك حول المجال أو أي مفهوم داخله.</p>
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

function renderReadiness() {
  const { readiness } = siteData;
  return `
    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">جاهزية</p>
        <h2>${escapeHtml(readiness.title)}</h2>
        <p>${escapeHtml(readiness.note)}</p>
      </div>
      <div class="checklist">
        ${readiness.checkpoints.map((item) => `<article class="check-item">${escapeHtml(item)}</article>`).join("")}
      </div>
    </section>
  `;
}

function renderAreasIndex() {
  return `
    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">المجالات</p>
        <h2>اختاري المجال الذي تريدين الغوص فيه</h2>
        <p>كل صفحة مجال صُممت لتكون مرجعًا تمهيديًا يسبق بناء الدروس المتخصصة.</p>
      </div>
      <div class="cards-grid">
        ${siteData.intro.fields.map(areaCard).join("")}
      </div>
    </section>
  `;
}

function renderAreaDetail(areaId) {
  const area = siteData.areas[areaId];

  if (!area) {
    return `
      <section class="section-block">
        <div class="section-heading">
          <h2>الصفحة غير موجودة</h2>
          <p>ارجعي إلى <a href="#/">الصفحة الرئيسية</a> لاختيار مجال متاح.</p>
        </div>
      </section>
    `;
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
            ${area.fundamentals.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
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
        ${area.topics.map((topic) => `<span>${escapeHtml(topic)}</span>`).join("")}
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">مصطلحات</p>
        <h2>قاموس أولي مع النطق</h2>
        <p>هذه المصطلحات ستكون جزءًا من لغتك العلمية في النقاش والقراءة والبحث.</p>
      </div>
      <div class="glossary-grid">
        ${area.glossary.map(glossaryItem).join("")}
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">بداية الدروس</p>
        <h2>كيف سنولّد الدروس في هذا المجال؟</h2>
        <p>لن نكتب المنهج كاملًا دفعة واحدة. سنحوّل أسئلتك إلى دروس متسلسلة تبدأ من الصفر ثم ترتفع تدريجيًا إلى مستوى بحثي.</p>
      </div>
      <div class="question-grid">
        ${area.questions.map((question) => `<article class="question-card">${escapeHtml(question)}</article>`).join("")}
      </div>
      <div class="lesson-placeholder">
        <h3>الخطوة التالية</h3>
        <p>أرسلي لي أول سؤال يخطر ببالك في هذا المجال، وسأضيف له درسًا عربيًا مفصلًا داخل الموقع مع المصطلحات الإنجليزية والنطق والأساسيات اللازمة للفهم.</p>
      </div>
    </section>
  `;
}

function renderRoute() {
  const hash = window.location.hash || "#/";
  const route = hash.replace(/^#/, "");
  const parts = route.split("/").filter(Boolean);

  let content = "";

  if (parts.length === 0) {
    content = renderHome();
  } else if (parts[0] === "readiness") {
    content = renderReadiness();
  } else if (parts[0] === "areas" && parts.length === 1) {
    content = renderAreasIndex();
  } else if (parts[0] === "areas" && parts[1]) {
    content = renderAreaDetail(parts[1]);
  } else {
    content = renderAreaDetail("");
  }

  app.innerHTML = content;
  wireTermButtons();
}

function speakText(text, lang = "en-US") {
  if (!("speechSynthesis" in window)) {
    window.alert("متصفحك الحالي لا يدعم ميزة النطق.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function wireTermButtons() {
  document.querySelectorAll(".speak-term").forEach((button) => {
    button.addEventListener("click", () => {
      const term = button.dataset.term;
      if (term) {
        speakText(term, "en-US");
      }
    });
  });
}

function speakCurrentPage() {
  const heading = app.querySelector("h2")?.textContent ?? "";
  const paragraph = app.querySelector("p")?.textContent ?? "";
  speakText(`${heading}. ${paragraph}`, "ar-SA");
}

window.addEventListener("hashchange", renderRoute);
speakPageButton.addEventListener("click", speakCurrentPage);

renderRoute();
