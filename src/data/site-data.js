export const siteData = {
  intro: {
    title: "علوم الحاسب: ما الذي سندرسه فعلًا؟",
    summary:
      "علوم الحاسب ليست مجرد برمجة، بل علم يدرس تمثيل المعلومات، تصميم الأنظمة، بناء البرمجيات، ربط الأجهزة بالشبكات، وتحليل الأداء والموثوقية والتوسع.",
    paragraphs: [
      "في مستوى الدكتوراه، لا يكفي أن تعرف كيف تستخدم التقنية، بل يجب أن تفهم لماذا تعمل، وما حدودها، وما الفرضيات التي بُنيت عليها، وكيف يمكن تحسينها أو مساءلتها علميًا.",
      "الهدف من هذا الموقع أن نؤسس فهمًا متدرجًا يجعلك قادرًا على مناقشة الأفكار والمقررات والاتجاهات البحثية بثقة، لا مجرد متابعة المحاضرة."
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
      "تستطيع شرح الفكرة من الأساسيات قبل القفز إلى المصطلحات الثقيلة.",
      "تفرّق بين التطبيق العملي وبين السؤال البحثي الكامن خلفه.",
      "تقدر على قراءة المصطلحات الإنجليزية وفهم استخدامها الشفهي والكتابي.",
      "عند ظهور تقنية جديدة، تسأل: ما المشكلة التي تحلها؟ وما المقايضة؟ وما حدودها؟",
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
      ],
      lessons: []
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
      ],
      lessons: [
        {
          id: "se-vs-design",
          level: "تمهيدي",
          title: "ما الفرق بين هندسة البرمجيات وتصميم البرمجيات؟",
          summary:
            "هندسة البرمجيات هي الإطار الأشمل الذي يغطي دورة حياة النظام كاملة، بينما تصميم البرمجيات هو الجزء الذي يركز على بنية الحل الداخلي وكيفية تنظيم مكوناته.",
          foundations: [
            {
              term: "Software Engineering",
              arabic: "هندسة البرمجيات",
              definition:
                "مجال يهتم ببناء البرمجيات بطريقة منهجية ومنظمة، من جمع المتطلبات حتى الصيانة والتطوير المستقبلي."
            },
            {
              term: "Software Design",
              arabic: "تصميم البرمجيات",
              definition:
                "عملية تحديد شكل النظام من الداخل: ما مكوناته، ما مسؤولية كل جزء، وكيف تتواصل هذه الأجزاء مع بعضها."
            },
            {
              term: "System Lifecycle",
              arabic: "دورة حياة النظام",
              definition:
                "المراحل التي يمر بها النظام، مثل التحليل، التصميم، التنفيذ، الاختبار، النشر، ثم الصيانة."
            }
          ],
          sections: [
            {
              title: "الفكرة الأساسية",
              body: [
                "عندما نقول هندسة البرمجيات، فنحن نتحدث عن المجال الذي يهتم بكيفية بناء نظام برمجي ناجح بشكل كامل، لا مجرد كتابة كود يعمل. هذا يشمل فهم المشكلة، جمع المتطلبات، تخطيط العمل، اختيار منهجية التطوير، التصميم، الاختبار، النشر، ثم متابعة النظام بعد إطلاقه.",
                "أما تصميم البرمجيات فهو جزء داخل هذه الرحلة. السؤال هنا لا يكون: كيف ندير المشروع كله؟ بل: كيف نرتب الحل نفسه؟ كيف نقسم النظام إلى أجزاء؟ وما المسؤولية الدقيقة لكل جزء؟ وكيف نضمن أن تكون العلاقات بين الأجزاء واضحة وقابلة للصيانة؟"
              ]
            },
            {
              title: "الفرق في زاوية النظر",
              body: [
                "هندسة البرمجيات تنظر إلى النظام كمنتج وكعملية في الوقت نفسه. لذلك هي تهتم بالناس، والعمليات، والجودة، والمخاطر، والتغيير عبر الزمن.",
                "تصميم البرمجيات ينظر إلى داخل الحل نفسه. يهتم بالمعمارية، والواجهات، والمكونات، وأنماط التصميم، والمقايضات الفنية التي تؤثر على جودة النظام."
              ]
            },
            {
              title: "مثال عملي بسيط",
              body: [
                "لو كنت تبني منصة تعليمية، فهندسة البرمجيات ستسأل: ما المتطلبات؟ من المستخدمون؟ كيف سنختبر المنصة؟ كيف سننشرها؟ وكيف سنتعامل مع التحديثات والمشكلات بعد الإطلاق؟",
                "أما تصميم البرمجيات فسيسأل: هل نجعل النظام تطبيقًا واحدًا Monolith أم خدمات متعددة Microservices؟ كيف نفصل بين حسابات المستخدمين، والدروس، والاختبارات؟ وكيف تنتقل البيانات بين هذه الوحدات؟"
              ]
            },
            {
              title: "الخلاصة العلمية",
              body: [
                "كل تصميم برمجيات هو جزء من هندسة البرمجيات، لكن هندسة البرمجيات ليست مجرد تصميم. التصميم يهتم ببنية الحل، أما الهندسة فتهتم ببنية الحل وبعملية إنتاجه وضمان جودته واستمراره.",
                "وهذا الفرق مهم جدًا في مستوى الدكتوراه، لأن كثيرًا من النقاشات الأكاديمية لا تركز فقط على شكل النظام، بل على كيفية تبرير القرارات التصميمية، وكيفية قياس أثرها على الجودة، وما الذي يحدث عند توسع النظام أو تغير متطلباته."
              ]
            }
          ],
          comparison: [
            {
              aspect: "النطاق",
              engineering: "يشمل دورة الحياة الكاملة للنظام.",
              design: "يركز على بنية النظام الداخلية."
            },
            {
              aspect: "السؤال الأساسي",
              engineering: "كيف نبني ونشغّل ونحافظ على نظام ناجح؟",
              design: "كيف ننظم مكونات النظام وعلاقاته؟"
            },
            {
              aspect: "التركيز",
              engineering: "العمليات، الجودة، الإدارة، التطوير، الاختبار، الصيانة.",
              design: "المعمارية، المسؤوليات، الواجهات، الترابط، أنماط التصميم."
            },
            {
              aspect: "المخرجات",
              engineering: "خطة تطوير، متطلبات، اختبارات، عمليات، وممارسات.",
              design: "نماذج تصميم، تقسيم مكونات، وقرارات معمارية."
            }
          ],
          takeaway:
            "ثبّت هذه القاعدة من البداية: Design يجيب عن شكل الحل، وEngineering يجيب عن شكل الحل وكيف نبنيه ونحافظ عليه عبر الزمن."
        }
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
      ],
      lessons: []
    },
    "computer-architecture": {
      code: "CS 704",
      title: "هندسة الكمبيوتر المتقدمة",
      english: "Advanced Computer Architecture",
      overview:
        "هذا المجال يشرح ما يحدث داخل الحاسوب نفسه: كيف تنفَّذ التعليمات، وكيف تتفاعل الذاكرة مع المعالج، وكيف يرفع التوازي الأداء أو يخلق تعقيدًا جديدًا.",
      whyItMatters:
        "كل باحث جاد في علوم الحاسب يستفيد من هذا الفهم، لأن كثيرًا من حدود الأداء التي تظهر في البرمجيات أو الأنظمة أو البيانات جذورها معمارية وعتادية.",
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
      ],
      lessons: []
    }
  }
};
