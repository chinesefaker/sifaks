const moreMenu = document.getElementById('moreMenu');
const moreBtn = document.getElementById('moreBtn');

if (moreMenu && moreBtn) {
  const setMenuState = (isOpen) => {
    moreMenu.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    moreBtn.setAttribute('aria-expanded', String(isOpen));
  };

  const closeMenu = () => {
    setMenuState(false);
  };

  moreBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    setMenuState(!moreMenu.classList.contains('open'));
  });

  moreMenu.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      moreBtn.focus();
    }
  });
}

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

const translationEntries = [
  ['site.name', 'Sifaks Ousmail', 'Sifaks Ousmail', 'Sifaks Ousmail'],
  ['site.logoAlt', 'Sifaks Ousmail logo', 'Logo de Sifaks Ousmail', 'Sifaks Ousmail 标志'],
  ['site.copyright', '© 2026 Sifaks Ousmail', '© 2026 Sifaks Ousmail', '© 2026 Sifaks Ousmail'],
  ['nav.home', 'Home', 'Accueil', '首页'],
  ['nav.background', 'Background', 'Parcours', '背景'],
  ['nav.research', 'Research', 'Recherche', '研究'],
  ['nav.projects', 'Projects', 'Projets', '项目'],
  ['nav.publications', 'Publications', 'Publications', '出版物'],
  ['nav.blog', 'Blog', 'Blog', '博客'],
  ['nav.contact', 'Contact', 'Contact', '联系'],
  ['nav.more', 'More', 'Plus', '更多'],
  ['nav.mainLinks', 'Main links', 'Liens principaux', '主要链接'],
  ['nav.internationalProfile', 'International Profile', 'Profil international', '国际简介'],
  ['nav.softwareCtaTitle', 'SIFAKS © Software', 'SIFAKS © Software', 'SIFAKS © Software'],
  ['nav.softwareCtaSub', 'Pronunciation for Chinese learners of French', 'Prononciation pour apprenants chinois du français', '面向中文母语法语学习者的发音'],
  ['country.china', 'China', 'Chine', '中国'],
  ['country.ukShort', 'UK', 'Royaume-Uni', '英国'],
  ['country.france', 'France', 'France', '法国'],
  ['common.learnMore', 'Learn more', 'En savoir plus', '了解更多'],
  ['common.emailLabel', 'Email: hello@sifaks.com', 'E-mail : hello@sifaks.com', '邮箱：hello@sifaks.com'],
  ['common.emailMe', 'Email me', 'M’écrire', '给我发邮件'],
  ['home.name', 'Sifaks Ousmail', 'Sifaks Ousmail', 'Sifaks Ousmail'],
  ['home.official', 'Official Website', 'Site officiel', '官方网站'],
  ['home.lead', 'Sifaks Ousmail is a linguist and researcher working across language policy, language education, applied linguistics, and French linguistics, with academic training spanning Paris, Cambridge, and Shanghai.', 'Sifaks Ousmail est linguiste et chercheur. Ses travaux portent sur la politique linguistique, l’éducation aux langues, la linguistique appliquée et la linguistique française, avec un parcours académique entre Paris, Cambridge et Shanghai.', 'Sifaks Ousmail 是一名语言学者和研究者，研究方向涵盖语言政策、语言教育、应用语言学和法语语言学，学术经历横跨巴黎、剑桥和上海。'],
  ['home.note', 'This site is a growing space for language and linguistics lovers, connecting research, multilingual education, and practical pathways for Chinese, English, and French language learning.', 'Ce site est un espace en développement pour les passionnés de langues et de linguistique, reliant recherche, éducation multilingue et parcours pratiques pour l’apprentissage du chinois, de l’anglais et du français.', '本站是一个面向语言与语言学爱好者的成长空间，连接研究、多语教育以及中文、英语和法语学习的实践路径。'],
  ['home.viewBackground', 'View background', 'Voir le parcours', '查看背景'],
  ['home.kicker', 'Academic Profile', 'Profil académique', '学术简介'],
  ['home.overviewTitle', 'Academic Work & International Profile', 'Travail académique et profil international', '学术工作与国际简介'],
  ['home.overviewNote', 'Sifaks Ousmail works across applied linguistics, language education, second language acquisition, Cambridge and Shanghai academic contexts, and Chinese/French language learning.', 'Sifaks Ousmail travaille entre linguistique appliquée, éducation aux langues, acquisition des langues secondes, contextes académiques de Cambridge et Shanghai, et apprentissage du chinois et du français.', 'Sifaks Ousmail 的工作涵盖应用语言学、语言教育、第二语言习得、剑桥与上海的学术语境，以及中文/法语学习。'],
  ['home.cardResearchKicker', 'Core interests', 'Intérêts principaux', '核心兴趣'],
  ['home.researchCardTitle', 'Research Areas', 'Axes de recherche', '研究领域'],
  ['home.researchCard', 'Research interests across applied linguistics, second language acquisition, language policy, and AI-assisted language learning. This section outlines the broad academic areas shaping the site.', 'Des intérêts de recherche en linguistique appliquée, acquisition des langues secondes, politique linguistique et apprentissage des langues assisté par l’IA. Cette section présente les grands axes académiques du site.', '研究兴趣涵盖应用语言学、第二语言习得、语言政策和人工智能辅助语言学习。本部分概述塑造本站的主要学术方向。'],
  ['home.cardProfileKicker', 'Academic path', 'Parcours académique', '学术路径'],
  ['home.profileCardTitle', 'International Academic Profile', 'Profil académique international', '国际学术简介'],
  ['home.profileCard', 'An international academic path connecting France, the United Kingdom, and China through French language learning, Chinese language learning, Cambridge, and Shanghai International Studies University.', 'Un parcours académique international reliant la France, le Royaume-Uni et la Chine à travers l’apprentissage du français, du chinois, Cambridge et l’Université des études internationales de Shanghai.', '一条连接法国、英国和中国的国际学术路径，涉及法语学习、中文学习、剑桥以及上海外国语大学。'],
  ['home.cardOutputsKicker', 'Ongoing work', 'Travaux en cours', '持续工作'],
  ['home.outputsCardTitle', 'Projects & Publications', 'Projets et publications', '项目与出版物'],
  ['home.outputsCard', 'Publications, working papers, conference outputs, and ongoing project work connected to multilingual education, FLE, pronunciation learning, and metacognition.', 'Publications, documents de travail, communications et projets en cours liés à l’éducation multilingue, au FLE, à l’apprentissage de la prononciation et à la métacognition.', '出版物、工作论文、会议成果和正在进行的项目，涉及多语教育、对外法语、语音学习和元认知。'],
  ['home.cardBlogKicker', 'Notes', 'Notes', '笔记'],
  ['home.blogCardTitle', 'Blog & Reflections', 'Blog et réflexions', '博客与思考'],
  ['home.blogCard', 'A reflection space for language learning, linguistics, AI-assisted learning, French grammar, Chinese learning, and ideas emerging from academic work.', 'Un espace de réflexion sur l’apprentissage des langues, la linguistique, l’apprentissage assisté par l’IA, la grammaire française, l’apprentissage du chinois et les idées issues du travail académique.', '一个关于语言学习、语言学、人工智能辅助学习、法语语法、中文学习以及学术工作中产生的想法的反思空间。'],
  ['home.learnMoreArrow', 'Learn more →', 'En savoir plus →', '了解更多 →'],
  ['home.focusTitle', 'Research Focus', 'Axes de recherche', '研究重点'],
  ['home.focusApplied', 'Applied Linguistics', 'Linguistique appliquée', '应用语言学'],
  ['home.focusEducation', 'Language Education', 'Éducation aux langues', '语言教育'],
  ['home.focusSla', 'Second Language Acquisition', 'Acquisition des langues secondes', '第二语言习得'],
  ['home.focusAi', 'AI-assisted Language Learning', 'Apprentissage des langues assisté par l’IA', '人工智能辅助语言学习'],
  ['home.focusFrench', 'French Linguistics', 'Linguistique française', '法语语言学'],
  ['home.focusChinese', 'Chinese Language Learning', 'Apprentissage du chinois', '中文学习'],
  ['home.softwareKicker', 'Software preview', 'Aperçu logiciel', '软件预览'],
  ['home.softwareTitle', 'AI Language Tools — Preview in development', 'Outils linguistiques IA — aperçu en développement', '人工智能语言工具 — 开发预览'],
  ['home.softwareCopy', 'Experimental tools by Sifaks Ousmail for AI-assisted pronunciation feedback, multilingual language education, applied linguistics, and French/Chinese language learning.', 'Outils expérimentaux de Sifaks Ousmail pour le feedback de prononciation assisté par l’IA, l’éducation multilingue, la linguistique appliquée et l’apprentissage du français/chinois.', 'Sifaks Ousmail 的实验性工具，面向 AI 辅助发音反馈、多语语言教育、应用语言学以及法语/中文学习。'],
  ['home.softwareLink', 'Open software preview →', 'Ouvrir l’aperçu logiciel →', '打开软件预览 →'],
  ['home.academicProfiles', 'External Academic Profiles', 'Profils académiques externes', '外部学术主页'],
  ['background.title', 'Background', 'Parcours', '背景'],
  ['background.pill', 'Academic Path', 'Parcours académique', '学术路径'],
  ['background.subtitle', 'Academic journey across France, the United Kingdom, and China.', 'Parcours académique entre la France, le Royaume-Uni et la Chine.', '横跨法国、英国和中国的学术旅程。'],
  ['background.heading', 'Academic Background', 'Parcours académique', '学术背景'],
  ['background.note', 'An international academic trajectory connecting France, the United Kingdom, and China.', 'Une trajectoire académique internationale reliant la France, le Royaume-Uni et la Chine.', '连接法国、英国和中国的国际学术轨迹。'],
  ['background.phd', 'PhD', 'Doctorat', '博士'],
  ['background.masters', 'Master’s', 'Master', '硕士'],
  ['background.bachelors', 'Bachelor’s', 'Licence', '本科'],
  ['background.phdDegree', 'PhD - Language Policy & Language Education', 'Doctorat - Politique linguistique et éducation aux langues', '博士 - 语言政策与语言教育'],
  ['background.phdSchool', 'Shanghai International Studies University · Shanghai, China', 'Université des études internationales de Shanghai · Shanghai, Chine', '上海外国语大学 · 中国上海'],
  ['background.phdField', 'Doctoral research in language policy and language education.', 'Recherche doctorale en politique linguistique et éducation aux langues.', '围绕语言政策与语言教育开展博士研究。'],
  ['background.mphilDegree', 'MPhil - Research in Second Language Education', 'MPhil - Recherche en éducation aux langues secondes', '哲学硕士 - 第二语言教育研究'],
  ['background.cambridgeSchool', 'University of Cambridge · Cambridge, United Kingdom', 'Université de Cambridge · Cambridge, Royaume-Uni', '剑桥大学 · 英国剑桥'],
  ['background.mphilField', 'Faculty of Education - second language education and applied linguistics.', 'Faculté d’éducation - éducation aux langues secondes et linguistique appliquée.', '教育学院 - 第二语言教育与应用语言学。'],
  ['background.fleDegree', 'Master FLE - Français Langue Étrangère', 'Master FLE - Français langue étrangère', '硕士 - 对外法语'],
  ['background.sorbonneSchool', 'Sorbonne Nouvelle - Paris III · Paris, France', 'Sorbonne Nouvelle - Paris III · Paris, France', '巴黎第三大学 · 法国巴黎'],
  ['background.fleField', 'Didactique des langues - French as a foreign language.', 'Didactique des langues - français langue étrangère.', '语言教学法 - 对外法语。'],
  ['background.baDegree', 'Bachelor’s - Foreign and Regional Languages, Literatures, and Civilizations (Chinese Language Studies)', 'Licence - Langues, littératures et civilisations étrangères et régionales (études chinoises)', '本科 - 外国语言、文学与区域文明（中文研究）'],
  ['background.parisSchool', 'Université Paris Cité · Paris, France', 'Université Paris Cité · Paris, France', '巴黎西岱大学 · 法国巴黎'],
  ['background.baField', 'Undergraduate studies in Chinese language, linguistics, language sciences, and history.', 'Études de licence en chinois, linguistique, sciences du langage et histoire.', '本科阶段学习中文、语言学、语言科学和历史。'],
  ['background.skills', 'Language Skills', 'Compétences linguistiques', '语言能力'],
  ['background.certified', 'Certified proficiency', 'Compétences certifiées', '认证能力'],
  ['background.skillsNote', 'Language credentials supporting academic work across English, Chinese, and French contexts.', 'Certifications linguistiques soutenant un travail académique en anglais, chinois et français.', '支持英语、中文和法语学术工作的语言证书。'],
  ['background.english', 'English', 'Anglais', '英语'],
  ['background.chinese', 'Chinese', 'Chinois', '中文'],
  ['background.ielts', 'IELTS 8.5', 'IELTS 8.5', '雅思 8.5'],
  ['background.hsk', 'HSK 6 · 270 points', 'HSK 6 · 270 points', 'HSK 6 · 270分'],
  ['background.ieltsDesc', 'Advanced English proficiency for academic research, teaching, and international collaboration.', 'Maîtrise avancée de l’anglais pour la recherche académique, l’enseignement et la collaboration internationale.', '高级英语能力，支持学术研究、教学和国际合作。'],
  ['background.hskDesc', 'Advanced Chinese proficiency with certified HSK 6 performance.', 'Maîtrise avancée du chinois avec une certification HSK 6.', '高级中文能力，并取得 HSK 6 认证成绩。'],
  ['background.languageQuestion', 'Interested in language learning?', 'Intéressé par l’apprentissage des langues ?', '对语言学习感兴趣？'],
  ['background.blogLink', 'See my blog >>>', 'Voir mon blog >>>', '查看我的博客 >>>'],
  ['research.title', 'Research', 'Recherche', '研究'],
  ['research.pill', 'Research Focus', 'Axes de recherche', '研究重点'],
  ['research.lead', 'Broad academic research areas and interests connecting applied linguistics, language education, second language acquisition, and AI-assisted language learning.', 'Grands domaines et intérêts de recherche reliant linguistique appliquée, éducation aux langues, acquisition des langues secondes et apprentissage assisté par l’IA.', '广泛的学术研究方向，连接应用语言学、语言教育、第二语言习得和人工智能辅助语言学习。'],
  ['research.areas', 'Research Areas', 'Axes de recherche', '研究领域'],
  ['research.core', 'Core Interests', 'Intérêts principaux', '核心兴趣'],
  ['research.note', 'Research themes connecting language learning, education, policy, and technology.', 'Thèmes de recherche reliant apprentissage des langues, éducation, politique et technologie.', '连接语言学习、教育、政策和技术的研究主题。'],
  ['research.sla', 'Second Language Acquisition', 'Acquisition des langues secondes', '第二语言习得'],
  ['research.slaDesc', 'Research interests include how learners develop grammar, pronunciation, and metalinguistic awareness across different stages of second language learning.', 'Mes intérêts portent notamment sur le développement de la grammaire, de la prononciation et de la conscience métalinguistique à différentes étapes de l’apprentissage.', '研究兴趣包括学习者在第二语言学习不同阶段如何发展语法、发音和元语言意识。'],
  ['research.applied', 'Applied Linguistics', 'Linguistique appliquée', '应用语言学'],
  ['research.appliedDesc', 'Applied linguistics provides the main framework for connecting language theory with teaching, learning, assessment, and multilingual communication.', 'La linguistique appliquée fournit le cadre principal pour relier théorie du langage, enseignement, apprentissage, évaluation et communication multilingue.', '应用语言学为连接语言理论、教学、学习、评估和多语交流提供主要框架。'],
  ['research.ai', 'AI-assisted Language Learning', 'Apprentissage des langues assisté par l’IA', '人工智能辅助语言学习'],
  ['research.aiDesc', 'This area explores how AI tools can support feedback, pronunciation practice, learner autonomy, and research-informed language education.', 'Cet axe explore comment les outils d’IA peuvent soutenir le feedback, la pratique de la prononciation, l’autonomie des apprenants et une éducation aux langues fondée sur la recherche.', '这一领域探讨 AI 工具如何支持反馈、发音练习、学习者自主性以及基于研究的语言教育。'],
  ['research.fle', 'French as a Foreign Language / FLE', 'Français langue étrangère / FLE', '对外法语 / FLE'],
  ['research.fleDesc', 'FLE research focuses on French language learning, grammar acquisition, learner difficulties, and pedagogical approaches for French as an additional language.', 'La recherche en FLE porte sur l’apprentissage du français, l’acquisition grammaticale, les difficultés des apprenants et les approches pédagogiques du français langue additionnelle.', '对外法语研究关注法语学习、语法习得、学习困难以及作为附加语言的法语教学方法。'],
  ['research.policy', 'Language Policy and Language Education', 'Politique linguistique et éducation aux langues', '语言政策与语言教育'],
  ['research.policyDesc', 'Work in this area considers how language policy shapes educational practice, multilingual learning environments, and access to language education.', 'Ce travail examine comment la politique linguistique façonne les pratiques éducatives, les environnements multilingues et l’accès à l’éducation aux langues.', '该方向关注语言政策如何塑造教育实践、多语学习环境以及语言教育机会。'],
  ['projects.title', 'Projects', 'Projets', '项目'],
  ['projects.pill', 'My Projects', 'Mes projets', '我的项目'],
  ['projects.lead', 'Concrete project work and ongoing initiatives connected to research, teaching, and multilingual language education.', 'Travaux de projet concrets et initiatives en cours liés à la recherche, à l’enseignement et à l’éducation multilingue.', '与研究、教学和多语教育相关的具体项目与持续行动。'],
  ['projects.kicker', 'Academic Projects', 'Projets académiques', '学术项目'],
  ['projects.work', 'Project work', 'Travaux de projet', '项目工作'],
  ['projects.note', 'Practical and ongoing initiatives that translate research interests into focused project work.', 'Initiatives pratiques et en cours qui transforment les intérêts de recherche en projets ciblés.', '将研究兴趣转化为具体项目工作的实践性持续行动。'],
  ['projects.color', 'Colour-Coding and Metacognition for French Gender Learning', 'Codage couleur et métacognition pour l’apprentissage du genre en français', '法语性别学习中的颜色编码与元认知'],
  ['projects.colorDesc', 'A project direction focused on how visual support and metacognitive reflection may help learners notice and retain French grammatical gender.', 'Un axe de projet sur la manière dont le soutien visuel et la réflexion métacognitive peuvent aider les apprenants à repérer et retenir le genre grammatical français.', '一个关注视觉支持和元认知反思如何帮助学习者注意并记住法语语法性别的项目方向。'],
  ['projects.pronunciation', 'AI-assisted Pronunciation Learning', 'Apprentissage de la prononciation assisté par l’IA', '人工智能辅助发音学习'],
  ['projects.pronunciationDesc', 'Exploration of how AI tools can support pronunciation practice, feedback, and learner autonomy in second language acquisition.', 'Exploration de la manière dont les outils d’IA peuvent soutenir la pratique de la prononciation, le feedback et l’autonomie dans l’acquisition des langues secondes.', '探索 AI 工具如何在第二语言习得中支持发音练习、反馈和学习者自主性。'],
  ['projects.multilingual', 'Multilingual Language Education', 'Éducation multilingue', '多语语言教育'],
  ['projects.multilingualDesc', 'Work connecting French, English, and Chinese language learning with broader questions in language education and applied linguistics.', 'Travail reliant l’apprentissage du français, de l’anglais et du chinois à des questions plus larges en éducation aux langues et linguistique appliquée.', '将法语、英语和中文学习与语言教育和应用语言学中的更广泛问题联系起来。'],
  ['projects.software', 'SIFAKS © Software', 'SIFAKS © Software', 'SIFAKS © Software'],
  ['projects.softwareDesc', 'A short preview of EuuuhFrench, an in-development AI-assisted French pronunciation tool for Chinese learners of French, connected to applied linguistics and language education.', 'Un court aperçu d’EuuuhFrench, un outil de prononciation française assisté par l’IA en développement pour les apprenants chinois du français, relié à la linguistique appliquée et à l’éducation aux langues.', 'EuuuhFrench 的简短预览：一款正在开发中的 AI 辅助法语发音工具，面向中文母语的法语学习者，并与应用语言学和语言教育相关。'],
  ['projects.softwareLink', 'Open software preview →', 'Ouvrir l’aperçu logiciel →', '打开软件预览 →'],
  ['software.title', 'SIFAKS © Software', 'SIFAKS © Software', 'SIFAKS © Software'],
  ['software.status', 'Prototype preview · In development', 'Aperçu de prototype · En développement', '原型预览 · 开发中'],
  ['software.subtitle', 'EuuuhFrench — AI-assisted French pronunciation support for Chinese learners', 'EuuuhFrench — soutien à la prononciation française assisté par l’IA pour les apprenants chinois', 'EuuuhFrench — 面向中文母语学习者的 AI 辅助法语发音支持'],
  ['software.viewPreview', 'View preview', 'Voir l’aperçu', '查看预览'],
  ['software.backProjects', 'Back to projects', 'Retour aux projets', '返回项目'],
  ['software.aboutKicker', 'About the project', 'À propos du projet', '项目介绍'],
  ['software.aboutTitle', 'Experimental pronunciation support', 'Soutien expérimental à la prononciation', '实验性发音支持'],
  ['software.aboutText', 'EuuuhFrench is an experimental language learning tool by Sifaks Ousmail. It explores how AI-assisted feedback, applied linguistics, and language education can support Chinese learners of French pronunciation.', 'EuuuhFrench est un outil expérimental d’apprentissage des langues par Sifaks Ousmail. Il explore comment le feedback assisté par l’IA, la linguistique appliquée et l’éducation aux langues peuvent soutenir les apprenants chinois dans la prononciation du français.', 'EuuuhFrench 是 Sifaks Ousmail 开发的实验性语言学习工具，探索 AI 辅助反馈、应用语言学和语言教育如何支持中文母语学习者的法语发音。'],
  ['software.aimsKicker', 'Learning support', 'Soutien à l’apprentissage', '学习支持'],
  ['software.aimsTitle', 'What it aims to help with', 'Ce que l’outil vise à soutenir', '它希望帮助的方面'],
  ['software.aimsNote', 'The prototype focuses on careful, research-informed pronunciation guidance rather than a public product launch.', 'Le prototype se concentre sur un accompagnement de prononciation prudent et informé par la recherche, plutôt que sur le lancement d’un produit public.', '该原型关注谨慎且基于研究的发音指导，而不是公开产品发布。'],
  ['software.cardPronunciation', 'French pronunciation practice', 'Pratique de la prononciation française', '法语发音练习'],
  ['software.cardPronunciationDesc', 'Focused practice for sounds, rhythm, and pronunciation patterns in French.', 'Une pratique ciblée des sons, du rythme et des schémas de prononciation en français.', '针对法语语音、节奏和发音模式的重点练习。'],
  ['software.cardFeedback', 'AI-assisted feedback', 'Feedback assisté par l’IA', 'AI 辅助反馈'],
  ['software.cardFeedbackDesc', 'Exploring how automated feedback can guide learners without replacing teaching or research judgment.', 'Explorer comment le feedback automatisé peut guider les apprenants sans remplacer l’enseignement ni le jugement de recherche.', '探索自动化反馈如何指导学习者，同时不取代教学和研究判断。'],
  ['software.cardLearners', 'Chinese learners of French', 'Apprenants chinois du français', '中文母语的法语学习者'],
  ['software.cardLearnersDesc', 'Designed around challenges that can appear when Chinese-speaking learners work on French pronunciation.', 'Conçu autour des difficultés qui peuvent apparaître lorsque des apprenants sinophones travaillent la prononciation française.', '围绕中文母语学习者练习法语发音时可能遇到的困难进行设计。'],
  ['software.cardApplied', 'Applied linguistics and language education', 'Linguistique appliquée et éducation aux langues', '应用语言学与语言教育'],
  ['software.cardAppliedDesc', 'Connected to language learning research, pronunciation pedagogy, and multilingual education.', 'Relié à la recherche sur l’apprentissage des langues, à la pédagogie de la prononciation et à l’éducation multilingue.', '与语言学习研究、发音教学和多语教育相关。'],
  ['software.previewKicker', 'Concept preview', 'Aperçu du concept', '概念预览'],
  ['software.previewTitle', 'Prototype learning interface', 'Interface d’apprentissage prototype', '原型学习界面'],
  ['software.previewNote', 'This static preview reflects the EuuuhFrench prototype direction, not a final public release.', 'Cet aperçu statique reflète l’orientation du prototype EuuuhFrench, et non une version publique finale.', '该静态预览展示 EuuuhFrench 原型方向，并非最终公开版本。'],
  ['software.practiceLabel', 'Practice sentence', 'Phrase d’entraînement', '练习句子'],
  ['software.mockCoach', 'AI pronunciation coach', 'Coach de prononciation IA', 'AI 发音教练'],
  ['software.mockMode', 'Prototype mode', 'Mode prototype', '原型模式'],
  ['software.mockTarget', 'Target sound · /ø/', 'Son cible · /ø/', '目标音 · /ø/'],
  ['software.mockAttempt', 'Attempt 1 of 4', 'Essai 1 sur 4', '第 1 / 4 次尝试'],
  ['software.mockHint', 'Listen carefully, then repeat the full sentence.', 'Écoutez attentivement, puis répétez la phrase complète.', '仔细听，然后重复完整句子。'],
  ['software.mockRecordNote', 'Preview mode does not score recordings yet.', 'Le mode aperçu ne note pas encore les enregistrements.', '预览模式尚不对录音评分。'],
  ['software.mockRecordButton', 'Record', 'Enregistrer', '录音'],
  ['software.mockFeedbackKicker', 'AI-assisted feedback preview', 'Aperçu du feedback assisté par l’IA', 'AI 辅助反馈预览'],
  ['software.mockFeedbackTitle', 'Clearer guidance after each attempt', 'Des indications plus claires après chaque essai', '每次尝试后获得更清晰的指导'],
  ['software.mockFeedbackBody', 'Focus on the rounded /ø/ vowel, keep the lips stable, then connect the sound inside the full sentence.', 'Concentrez-vous sur la voyelle arrondie /ø/, gardez les lèvres stables, puis reliez le son dans la phrase complète.', '注意圆唇元音 /ø/，保持嘴唇稳定，然后把这个音连接到完整句子中。'],
  ['software.mockDisclaimer', 'Static prototype preview · real pronunciation analysis is still in development.', 'Aperçu statique du prototype · l’analyse réelle de la prononciation est encore en développement.', '静态原型预览 · 真实发音分析仍在开发中。'],
  ['software.stepRecord', 'Record pronunciation', 'Enregistrer la prononciation', '录制发音'],
  ['software.stepFeedback', 'Receive focused feedback', 'Recevoir un feedback ciblé', '获得重点反馈'],
  ['software.stepRetry', 'Try again with clearer guidance', 'Réessayer avec des indications plus claires', '根据更清晰的指导再次尝试'],
  ['software.researchKicker', 'Research connection', 'Lien avec la recherche', '研究关联'],
  ['software.researchTitle', 'Language learning and research', 'Apprentissage des langues et recherche', '语言学习与研究'],
  ['software.researchText', 'The project connects to second language acquisition, French as a foreign language, Chinese-speaking learners, pronunciation learning, and AI-supported language education.', 'Le projet est relié à l’acquisition des langues secondes, au français langue étrangère, aux apprenants sinophones, à l’apprentissage de la prononciation et à l’éducation aux langues soutenue par l’IA.', '该项目连接第二语言习得、对外法语、中文母语学习者、发音学习和 AI 支持的语言教育。'],
  ['software.focusTitle', 'Connected areas', 'Domaines associés', '相关领域'],
  ['software.focusSla', 'Second Language Acquisition', 'Acquisition des langues secondes', '第二语言习得'],
  ['software.focusFle', 'French as a Foreign Language', 'Français langue étrangère', '对外法语'],
  ['software.focusChineseLearners', 'Chinese-speaking learners', 'Apprenants sinophones', '中文母语学习者'],
  ['software.focusPronunciation', 'Pronunciation learning', 'Apprentissage de la prononciation', '发音学习'],
  ['software.focusAi', 'AI-supported language education', 'Éducation aux langues soutenue par l’IA', 'AI 支持的语言教育'],
  ['software.statusKicker', 'Development status', 'Statut de développement', '开发状态'],
  ['software.statusText', 'This project is currently in development. The page presents the concept and early direction rather than a public release.', 'Ce projet est actuellement en développement. Cette page présente le concept et l’orientation initiale plutôt qu’une version publique.', '该项目目前正在开发中。本页展示概念和早期方向，而不是公开发布版本。'],
  ['publications.title', 'Publications', 'Publications', '出版物'],
  ['publications.pill', 'My Research', 'Mes recherches', '我的研究'],
  ['publications.lead', 'A space for publications, academic writing, conference work, and research outputs in language policy, language education, and applied linguistics.', 'Un espace pour les publications, l’écriture académique, les communications et les productions de recherche en politique linguistique, éducation aux langues et linguistique appliquée.', '用于展示语言政策、语言教育和应用语言学领域的出版物、学术写作、会议工作和研究成果。'],
  ['publications.outputs', 'Research Outputs', 'Productions de recherche', '研究成果'],
  ['publications.writing', 'Academic writing', 'Écriture académique', '学术写作'],
  ['publications.note', 'Selected outputs will be added as they become available.', 'Des productions sélectionnées seront ajoutées lorsqu’elles seront disponibles.', '相关成果将在可用时陆续添加。'],
  ['publications.journal', 'Journal Articles', 'Articles de revue', '期刊论文'],
  ['publications.journalDesc', 'Peer-reviewed publications in applied linguistics, language education, second language acquisition, and related areas will be listed here.', 'Les publications évaluées par les pairs en linguistique appliquée, éducation aux langues, acquisition des langues secondes et domaines associés seront listées ici.', '应用语言学、语言教育、第二语言习得及相关领域的同行评审出版物将在此列出。'],
  ['publications.working', 'Working Papers', 'Documents de travail', '工作论文'],
  ['publications.workingDesc', 'Developing research texts and preliminary academic writing will appear here when appropriate.', 'Les textes de recherche en cours et les écrits académiques préliminaires apparaîtront ici lorsque cela sera approprié.', '正在发展的研究文本和初步学术写作将在适当时展示。'],
  ['publications.conference', 'Conference Presentations', 'Communications', '会议报告'],
  ['publications.conferenceDesc', 'Conference talks and academic presentations connected to French language learning, Chinese language learning, and AI-assisted language learning will be added here.', 'Les communications liées à l’apprentissage du français, du chinois et à l’apprentissage assisté par l’IA seront ajoutées ici.', '与法语学习、中文学习和人工智能辅助语言学习相关的会议报告将在此添加。'],
  ['publications.progress', 'Research in Progress', 'Recherche en cours', '进行中的研究'],
  ['publications.progressDesc', 'Ongoing research directions linked to Cambridge training and Shanghai International Studies University doctoral work will be summarized here.', 'Les orientations de recherche en cours liées à la formation à Cambridge et au doctorat à l’Université des études internationales de Shanghai seront résumées ici.', '与剑桥训练和上海外国语大学博士研究相关的持续研究方向将在此概述。'],
  ['blog.title', 'Blog', 'Blog', '博客'],
  ['blog.pill', 'My Thoughts', 'Mes réflexions', '我的思考'],
  ['blog.lead', 'A space for reflections on languages, linguistics, learning, culture, education, and the small ideas that grow through reading, teaching, traveling, and research.', 'Un espace de réflexion sur les langues, la linguistique, l’apprentissage, la culture, l’éducation et les petites idées qui naissent de la lecture, de l’enseignement, du voyage et de la recherche.', '一个关于语言、语言学、学习、文化、教育以及在阅读、教学、旅行和研究中逐渐形成的小想法的反思空间。'],
  ['blog.planned', 'Planned Notes', 'Notes prévues', '计划笔记'],
  ['blog.notes', 'Language notes', 'Notes linguistiques', '语言笔记'],
  ['blog.note', 'A future reflection space for language learning, research, and academic ideas.', 'Un futur espace de réflexion sur l’apprentissage des langues, la recherche et les idées académiques.', '未来用于语言学习、研究和学术想法的反思空间。'],
  ['blog.gender', 'Why French Gender Is Difficult for Chinese Learners', 'Pourquoi le genre français est difficile pour les apprenants chinois', '为什么法语性别对中文学习者很难'],
  ['blog.genderDesc', 'A planned reflection on grammar, cross-linguistic differences, and the learning challenges behind French gender acquisition.', 'Une réflexion prévue sur la grammaire, les différences interlinguistiques et les défis d’apprentissage liés à l’acquisition du genre en français.', '一篇计划中的反思，讨论语法、跨语言差异以及法语性别习得背后的学习挑战。'],
  ['blog.aiPronunciation', 'AI and Pronunciation Learning', 'IA et apprentissage de la prononciation', '人工智能与发音学习'],
  ['blog.aiPronunciationDesc', 'A planned note on AI-assisted language learning, pronunciation feedback, and the limits of automated support.', 'Une note prévue sur l’apprentissage des langues assisté par l’IA, le feedback de prononciation et les limites du soutien automatisé.', '一篇计划中的笔记，关于 AI 辅助语言学习、发音反馈以及自动化支持的局限。'],
  ['blog.metacognition', 'Metacognition in Second Language Acquisition', 'Métacognition dans l’acquisition des langues secondes', '第二语言习得中的元认知'],
  ['blog.metacognitionDesc', 'A planned post on learner awareness, strategy use, and how metacognition can shape second language acquisition.', 'Un billet prévu sur la conscience des apprenants, l’usage des stratégies et la manière dont la métacognition peut façonner l’acquisition des langues secondes.', '一篇计划中的文章，关于学习者意识、策略使用以及元认知如何影响第二语言习得。'],
  ['contact.kicker', 'Get in touch', 'Me contacter', '联系我'],
  ['contact.title', 'Contact Sifaks Ousmail', 'Contacter Sifaks Ousmail', '联系 Sifaks Ousmail'],
  ['contact.lead', 'For academic inquiries, collaboration opportunities, or any other inquiries, feel free to contact me by email.', 'Pour toute demande académique, opportunité de collaboration ou autre question, vous pouvez me contacter par e-mail.', '如有学术咨询、合作机会或其他问题，欢迎通过电子邮件联系我。'],
  ['profile.label', 'International Academic Profile', 'Profil académique international', '国际学术简介'],
  ['profile.trajectory', 'Part of an international academic trajectory across France, the United Kingdom, and China.', 'Un élément d’une trajectoire académique internationale entre la France, le Royaume-Uni et la Chine.', '横跨法国、英国和中国的国际学术轨迹的一部分。'],
  ['china.title', 'China', 'Chine', '中国'],
  ['china.pill', 'Language learning, academic development, and cross-cultural research', 'Apprentissage des langues, développement académique et recherche interculturelle', '语言学习、学术发展与跨文化研究'],
  ['china.lead', 'China has played a central role in my academic and personal development, connecting advanced language learning with research in language education, applied linguistics, and AI-assisted learning.', 'La Chine a joué un rôle central dans mon développement académique et personnel, reliant un apprentissage avancé des langues à la recherche en éducation aux langues, linguistique appliquée et apprentissage assisté par l’IA.', '中国在我的学术和个人发展中发挥了核心作用，将高级语言学习与语言教育、应用语言学和 AI 辅助学习研究联系起来。'],
  ['china.languageJourney', 'Language Journey', 'Parcours linguistique', '语言学习历程'],
  ['china.studyPerspective', 'Chinese as study and perspective', 'Le chinois comme objet d’étude et perspective', '中文作为学习对象与研究视角'],
  ['china.languageNote', 'Chinese became both a language of study and a way to understand language learning from another perspective.', 'Le chinois est devenu à la fois une langue d’étude et une manière de comprendre l’apprentissage des langues depuis une autre perspective.', '中文既成为学习对象，也成为从另一种视角理解语言学习的方式。'],
  ['china.languageIntro', 'My interest in Chinese began before China became part of my academic path. Learning Chinese as a foreign language involved moving from beginner to advanced level through tones, characters, pronunciation, and cultural meaning. That experience continues to inform how I think about language learning and research.', 'Mon intérêt pour le chinois a commencé avant que la Chine ne fasse partie de mon parcours académique. Apprendre le chinois comme langue étrangère m’a conduit du niveau débutant vers un niveau avancé à travers les tons, les caractères, la prononciation et le sens culturel. Cette expérience continue de nourrir ma réflexion sur l’apprentissage des langues et la recherche.', '我对中文的兴趣早在中国成为我学术道路的一部分之前就开始了。作为外语学习中文，意味着从初级逐步走向高级，经历声调、汉字、发音和文化意义的学习。这段经历至今影响着我对语言学习和研究的思考。'],
  ['china.academicExperience', 'Academic Experience', 'Expérience académique', '学术经历'],
  ['china.wuhanShanghai', 'From Wuhan to Shanghai', 'De Wuhan à Shanghai', '从武汉到上海'],
  ['china.academicNote', 'A long-term academic trajectory shaped by Chinese language study and research.', 'Une trajectoire académique de long terme façonnée par l’étude et la recherche autour de la langue chinoise.', '由中文学习与研究塑造的长期学术轨迹。'],
  ['china.academicIntro', 'My connection with China includes an exchange year in Wuhan during undergraduate studies, advanced Chinese language learning, and a current PhD trajectory at Shanghai International Studies University. This path brings together language education, applied linguistics, and questions about AI-assisted learning.', 'Mon lien avec la Chine comprend une année d’échange à Wuhan pendant la licence, un apprentissage avancé du chinois et un parcours doctoral actuel à l’Université des études internationales de Shanghai. Ce parcours réunit l’éducation aux langues, la linguistique appliquée et les questions liées à l’apprentissage assisté par l’IA.', '我与中国的联系包括本科期间在武汉的交换学习、高级中文学习，以及目前在上海外国语大学的博士路径。这条路径结合了语言教育、应用语言学和 AI 辅助学习相关问题。'],
  ['china.researchEnvironment', 'Research Environment', 'Environnement de recherche', '研究环境'],
  ['china.higherEducation', 'Chinese higher education', 'Enseignement supérieur chinois', '中国高等教育'],
  ['china.researchNote', 'Research in China offers a different academic environment for multilingual and intercultural questions.', 'La recherche en Chine offre un environnement académique différent pour les questions multilingues et interculturelles.', '在中国开展研究为多语和跨文化问题提供了不同的学术环境。'],
  ['china.researchIntro', 'Studying and researching in China provides access to Chinese higher education, applied linguistics, language policy, and language education from a situated perspective. It also supports work on multilingual and intercultural research across different learning contexts.', 'Étudier et faire de la recherche en Chine permet d’aborder l’enseignement supérieur chinois, la linguistique appliquée, la politique linguistique et l’éducation aux langues depuis une perspective située. Cela soutient aussi les recherches multilingues et interculturelles dans différents contextes d’apprentissage.', '在中国学习和研究，可以从在地视角接触中国高等教育、应用语言学、语言政策和语言教育，也支持不同学习语境中的多语与跨文化研究。'],
  ['china.culturalPerspective', 'Cultural Perspective', 'Perspective culturelle', '文化视角'],
  ['china.beyondGrammar', 'Language beyond grammar', 'La langue au-delà de la grammaire', '超越语法的语言'],
  ['china.cultureNote', 'China helped frame language as culture, identity, communication, and education.', 'La Chine a aidé à penser la langue comme culture, identité, communication et éducation.', '中国帮助我将语言理解为文化、身份、交流和教育。'],
  ['china.field', 'China Field Exploration', 'Exploration de terrain en Chine', '中国实地探索'],
  ['china.fieldDesc', 'Travel across several regions offered an early view of China’s linguistic, cultural, and educational diversity.', 'Des voyages dans plusieurs régions ont offert une première vision de la diversité linguistique, culturelle et éducative de la Chine.', '在多个地区的旅行提供了对中国语言、文化和教育多样性的早期认识。'],
  ['china.wuhan', 'Wuhan Exchange', 'Échange à Wuhan', '武汉交换学习'],
  ['china.wuhanDesc', 'An undergraduate exchange year connected classroom learning with academic life in China.', 'Une année d’échange en licence a relié l’apprentissage en classe à la vie académique en Chine.', '本科交换年将课堂学习与中国的学术生活联系起来。'],
  ['china.languageLearning', 'Chinese Language Learning', 'Apprentissage du chinois', '中文学习'],
  ['china.languageLearningDesc', 'Advanced language study developed through tones, characters, pronunciation, and cultural meaning.', 'Un apprentissage avancé développé à travers les tons, les caractères, la prononciation et le sens culturel.', '通过声调、汉字、发音和文化意义发展出的高级语言学习。'],
  ['china.sisu', 'SISU PhD', 'Doctorat à SISU', '上外博士'],
  ['china.sisuDesc', 'Doctoral work at Shanghai International Studies University anchors the research trajectory.', 'Le doctorat à l’Université des études internationales de Shanghai constitue l’ancrage du parcours de recherche.', '上海外国语大学的博士研究奠定了研究轨迹。'],
  ['china.cross', 'Cross-Cultural Research', 'Recherche interculturelle', '跨文化研究'],
  ['china.crossDesc', 'The next step connects multilingual education, intercultural communication, and AI-assisted learning.', 'L’étape suivante relie l’éducation multilingue, la communication interculturelle et l’apprentissage assisté par l’IA.', '下一步连接多语教育、跨文化交流和 AI 辅助学习。'],
  ['china.shanghai', 'Shanghai, China', 'Shanghai, Chine', '中国上海'],
  ['china.academicResearch', 'Academic research', 'Recherche académique', '学术研究'],
  ['china.finalNote', 'A final research note connecting the China profile to doctoral work in Shanghai.', 'Une dernière note de recherche reliant le profil Chine au travail doctoral à Shanghai.', '将中国简介与上海博士研究相连接的最后研究说明。'],
  ['china.shanghaiWork', 'Academic work in Shanghai focused on language policy, language education, and international perspectives on multilingual learning.', 'Le travail académique à Shanghai porte sur la politique linguistique, l’éducation aux langues et les perspectives internationales sur l’apprentissage multilingue.', '在上海的学术工作聚焦于语言政策、语言教育以及多语学习的国际视角。'],
  ['uk.title', 'United Kingdom', 'Royaume-Uni', '英国'],
  ['uk.titleHtml', 'United<br>Kingdom', 'Royaume-Uni', '英国'],
  ['uk.pill', 'Research training, academic methodology, and Cambridge experience', 'Formation à la recherche, méthodologie académique et expérience à Cambridge', '研究训练、学术方法与剑桥经历'],
  ['uk.lead', 'The United Kingdom section focuses on research training at Cambridge and the development of an academic identity in second language education and applied linguistics.', 'La section Royaume-Uni porte sur la formation à la recherche à Cambridge et le développement d’une identité académique en éducation aux langues secondes et linguistique appliquée.', '英国部分聚焦于剑桥的研究训练，以及在第二语言教育和应用语言学中的学术身份发展。'],
  ['uk.cambridgeExperience', 'Cambridge Experience', 'Expérience à Cambridge', '剑桥经历'],
  ['uk.identity', 'Research identity', 'Identité de recherche', '研究身份'],
  ['uk.identityNote', 'Cambridge shaped a stronger foundation for research in second language education.', 'Cambridge a renforcé les bases de ma recherche en éducation aux langues secondes.', '剑桥为第二语言教育研究奠定了更坚实的基础。'],
  ['uk.identityIntro', 'My MPhil in Research in Second Language Education at the University of Cambridge helped me develop a stronger research identity in second language education and applied linguistics.', 'Mon MPhil en recherche en éducation aux langues secondes à l’Université de Cambridge m’a aidé à développer une identité de recherche plus solide en éducation aux langues secondes et linguistique appliquée.', '我在剑桥大学的第二语言教育研究哲学硕士经历，帮助我在第二语言教育和应用语言学中形成更强的研究身份。'],
  ['uk.training', 'Research Training', 'Formation à la recherche', '研究训练'],
  ['uk.methodology', 'Methodology and academic writing', 'Méthodologie et écriture académique', '方法论与学术写作'],
  ['uk.trainingNote', 'The UK experience strengthened the link between theory, method, and evidence.', 'L’expérience au Royaume-Uni a renforcé le lien entre théorie, méthode et données.', '英国经历强化了理论、方法和证据之间的联系。'],
  ['uk.trainingIntro', 'This training included research design, quantitative and qualitative methods, educational research, academic writing, dissertation work, and second language acquisition.', 'Cette formation comprenait la conception de recherche, les méthodes quantitatives et qualitatives, la recherche en éducation, l’écriture académique, le mémoire et l’acquisition des langues secondes.', '这项训练包括研究设计、定量与定性方法、教育研究、学术写作、论文工作和第二语言习得。'],
  ['uk.cambridgeProfile', 'Cambridge Language Sciences profile', 'Profil Cambridge Language Sciences', '剑桥语言科学个人主页'],
  ['uk.viewProfile', 'View profile >>>', 'Voir le profil >>>', '查看主页 >>>'],
  ['france.pill', 'Academic foundations, linguistic background, and early interest in China', 'Fondations académiques, arrière-plan linguistique et intérêt précoce pour la Chine', '学术基础、语言背景与早期中国兴趣'],
  ['france.lead', 'France represents the academic and linguistic foundation of my international trajectory, connecting French linguistic background with early training in Chinese studies and language learning.', 'La France représente la base académique et linguistique de ma trajectoire internationale, reliant mon arrière-plan linguistique français à une première formation en études chinoises et apprentissage des langues.', '法国代表了我国际轨迹中的学术与语言基础，将法语语言背景与中文研究和语言学习的早期训练联系起来。'],
  ['france.foundations', 'Academic Foundations', 'Fondations académiques', '学术基础'],
  ['france.paris', 'Paris and language studies', 'Paris et études de langues', '巴黎与语言研究'],
  ['france.foundationNote', 'The foundation of an academic path in languages, linguistics, and China-related studies.', 'La base d’un parcours académique en langues, linguistique et études liées à la Chine.', '语言、语言学和中国相关研究学术路径的基础。'],
  ['france.foundationIntro', 'My academic path began in France through undergraduate studies at Université Paris Cité, where Chinese studies and language learning became central to my intellectual development.', 'Mon parcours académique a commencé en France à travers des études de licence à Université Paris Cité, où les études chinoises et l’apprentissage des langues sont devenus centraux dans mon développement intellectuel.', '我的学术道路始于法国巴黎西岱大学的本科阶段，中文研究和语言学习在那里成为我智识发展的核心。'],
  ['france.linguisticBackground', 'Linguistic Background', 'Arrière-plan linguistique', '语言背景'],
  ['france.foundation', 'French as foundation', 'Le français comme fondation', '法语作为基础'],
  ['france.linguisticNote', 'French shaped later research interests in grammar, acquisition, and learning difficulties.', 'Le français a ensuite façonné mes intérêts de recherche sur la grammaire, l’acquisition et les difficultés d’apprentissage.', '法语塑造了后来关于语法、习得和学习困难的研究兴趣。'],
  ['france.linguisticIntro', 'French is my linguistic foundation. This background later shaped my research interests, especially French grammar, French gender acquisition, and the difficulties learners face when acquiring new language systems.', 'Le français est ma base linguistique. Cet arrière-plan a ensuite façonné mes intérêts de recherche, en particulier la grammaire française, l’acquisition du genre en français et les difficultés rencontrées par les apprenants face à de nouveaux systèmes linguistiques.', '法语是我的语言基础。这一背景后来塑造了我的研究兴趣，尤其是法语语法、法语性别习得以及学习者在习得新语言系统时面临的困难。']
];

const translations = { en: {}, fr: {}, zh: {} };
const sourceTextToKey = new Map();

translationEntries.forEach(([key, en, fr, zh]) => {
  translations.en[key] = en;
  translations.fr[key] = fr;
  translations.zh[key] = zh;
  sourceTextToKey.set(en.replace(/\s+/g, ' ').trim(), key);
});

sourceTextToKey.set("Master's", 'background.masters');
sourceTextToKey.set("Bachelor's", 'background.bachelors');
sourceTextToKey.set("Bachelor's - Foreign and Regional Languages, Literatures, and Civilizations (Chinese Language Studies)", 'background.baDegree');

const getElementText = (element) => {
  if (element.querySelector && element.querySelector('.flag')) {
    return Array.from(element.childNodes)
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  return element.textContent.replace(/\s+/g, ' ').trim();
};

const setElementText = (element, value) => {
  const hasChildren = element.children.length > 0;
  if (!hasChildren) {
    element.textContent = value;
    return;
  }

  const textNodes = Array.from(element.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE);
  if (!textNodes.length) {
    element.append(value);
    return;
  }

  textNodes[0].textContent = element.querySelector('.flag') ? ` ${value}` : value;
  textNodes.slice(1).forEach((node) => node.remove());
};

const hasOnlySafeInlineChildren = (element) => {
  return Array.from(element.children).every((child) => child.matches('.flag,.pill-dot,svg'));
};

const registerTranslatableElements = () => {
  document.querySelectorAll('.brand,.brand *,.brand-mark,.hero-logo,.home-hero h1').forEach((element) => {
    element.dataset.noTranslate = 'true';
  });

  const safeCopySelector = [
    '.nav-link',
    '.more-btn',
    '.drop-group-title',
    '.drop-item',
    '.hero .pill',
    '.hero .lead',
    '.hero .hero-note',
    '.hero .btn',
    'main h1:not(.home-hero h1)',
    'main h2',
    'main h3',
    'main p',
    'main .card-kicker',
    'main .focus-tags span',
    'main .software-tools-title',
    'main .software-tools-copy',
    'main .software-tools-link .inline-link',
    'main a',
    'main .pill',
    'main .btn',
    'footer span'
  ].join(',');

  document.querySelectorAll(safeCopySelector).forEach((element) => {
    if (
      element.dataset.i18n ||
      element.closest('[data-no-translate]') ||
      element.closest('.language-switcher') ||
      !hasOnlySafeInlineChildren(element)
    ) {
      return;
    }

    const key = sourceTextToKey.get(getElementText(element));
    if (key) element.dataset.i18n = key;
  });
};

const applyLanguage = (language) => {
  const selectedLanguage = translations[language] ? language : 'en';
  document.documentElement.lang = selectedLanguage === 'zh' ? 'zh-CN' : selectedLanguage;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    if (element.closest('[data-no-translate]')) return;
    const key = element.dataset.i18n;
    const value = translations[selectedLanguage][key] || translations.en[key];
    if (value) setElementText(element, value);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    element.dataset.i18nAttr.split(';').forEach((item) => {
      const [attribute, key] = item.split(':');
      const value = translations[selectedLanguage][key] || translations.en[key];
      if (attribute && value) element.setAttribute(attribute, value);
    });
  });

  document.querySelectorAll('.language-switcher button').forEach((button) => {
    const isActive = button.dataset.lang === selectedLanguage;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  localStorage.setItem('preferredLanguage', selectedLanguage);
};

const createLanguageSwitcher = () => {
  if (document.querySelector('.language-switcher')) return;

  const switcher = document.createElement('div');
  switcher.className = 'language-switcher';
  switcher.dataset.noTranslate = 'true';
  switcher.setAttribute('aria-label', 'Language selector');

  [
    ['fr', 'Français'],
    ['en', 'English'],
    ['zh', '中文']
  ].forEach(([language, label]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.lang = language;
    button.textContent = label;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => applyLanguage(language));
    switcher.appendChild(button);
  });

  document.body.prepend(switcher);
};

const initTranslations = () => {
  registerTranslatableElements();
  createLanguageSwitcher();
  applyLanguage(localStorage.getItem('preferredLanguage') || 'en');
};

const createSiteBackground = () => {
  if (!document.body || document.querySelector('.site-background')) return;

  const background = document.createElement('div');
  background.className = 'site-background';
  background.setAttribute('aria-hidden', 'true');

  for (let index = 0; index < 4; index += 1) {
    const blob = document.createElement('span');
    blob.className = 'site-aurora-blob';
    background.appendChild(blob);
  }

  document.body.prepend(background);
};

const createLanguageClouds = () => {
  const languages = [
    '中文',
    'Français',
    'English',
    '한국어',
    'العربية',
    'Español',
    'Deutsch',
    'Italiano',
    'Português',
    'Русский',
    '日本語',
    'Türkçe',
    'हिन्दी',
    'Tiếng Việt',
    'Bahasa Indonesia',
    'ไทย'
  ];
  const shuffledLanguages = [...languages];
  for (let index = shuffledLanguages.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffledLanguages[index], shuffledLanguages[swapIndex]] = [shuffledLanguages[swapIndex], shuffledLanguages[index]];
  }
  const targets = document.querySelectorAll('.hero, .contact-panel');

  targets.forEach((target) => {
    if (target.querySelector('.language-cloud')) return;

    const cloud = document.createElement('div');
    cloud.className = 'language-cloud';
    cloud.setAttribute('aria-hidden', 'true');

    shuffledLanguages.forEach((language, index) => {
      const token = document.createElement('span');
      token.className = `lang-token token-${index + 1}`;
      token.textContent = language;
      token.style.animationDelay = `${-(Math.random() * 18).toFixed(2)}s`;
      cloud.appendChild(token);
    });

    target.prepend(cloud);
  });
};

const createShaderBackground = () => {
  if (motionQuery.matches || !document.body) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'shader-background';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);

  const gl = canvas.getContext('webgl', {
    alpha: true,
    antialias: false,
    depth: false,
    stencil: false
  });

  if (!gl) {
    canvas.remove();
    return;
  }

  const vertexSource = `
    attribute vec2 aPosition;
    void main() {
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision highp float;
    uniform vec2 uResolution;
    uniform float uTime;

    float wave(float value) {
      return sin(value) * 0.5 + 0.5;
    }

    float softLine(float position, float width, float axis) {
      return smoothstep(width, 0.0, abs(axis - position));
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / uResolution.xy;
      vec2 field = (uv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);

      float vignette = smoothstep(1.08, 0.16, length(field));
      float horizon = smoothstep(-0.72, -0.22, field.y) * smoothstep(0.78, 0.18, field.y);
      vec3 blue = vec3(0.49, 0.83, 0.99);
      vec3 cyan = vec3(0.36, 0.91, 0.95);
      vec3 violet = vec3(0.65, 0.55, 0.98);

      vec3 color = vec3(0.0);
      float alpha = 0.0;

      for (int i = 0; i < 10; i++) {
        float index = float(i);
        float base = -0.54 + index * 0.115;
        float phase = index * 0.72;
        float curve = base
          + sin(field.x * (2.1 + index * 0.12) + uTime * (0.085 + index * 0.006) + phase) * 0.058
          + sin(field.x * (5.1 - index * 0.08) - uTime * 0.052 + phase) * 0.018;

        float veilWidth = 0.032 + wave(uTime * 0.12 + index) * 0.022;
        float coreWidth = 0.0038 + wave(uTime * 0.18 + index * 1.6) * 0.0028;
        float veil = softLine(curve, veilWidth, field.y) * (0.034 + index * 0.004);
        float core = softLine(curve, coreWidth, field.y) * (0.152 + index * 0.004);
        float ridge = softLine(curve + sin(field.x * 8.0 + phase) * 0.011, coreWidth * 0.42, field.y) * 0.072;
        float sideLight = softLine(curve + 0.023, coreWidth * 1.45, field.y) * 0.036;

        vec3 bandColor = mix(cyan, violet, wave(index * 1.21 + uv.x * 2.1));
        bandColor = mix(bandColor, blue, smoothstep(0.0, 0.85, uv.y) * 0.32);

        float band = (veil + core + ridge + sideLight) * horizon;
        color += bandColor * band;
        alpha += (veil * 0.54 + core + ridge + sideLight) * horizon;
      }

      float upperArc = softLine(0.34 + sin(field.x * 2.8 + uTime * 0.05) * 0.04, 0.015, field.y) * 0.042;
      float lowerArc = softLine(-0.36 + sin(field.x * 3.4 - uTime * 0.045) * 0.035, 0.012, field.y) * 0.031;

      color += mix(blue, violet, uv.x) * (upperArc + lowerArc) * vignette;
      alpha = clamp((alpha + upperArc + lowerArc) * vignette, 0.0, 0.72);

      gl_FragColor = vec4(color * vignette, alpha);
    }
  `;

  const compileShader = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn('Shader compile error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  };

  const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertexShader || !fragmentShader) {
    canvas.remove();
    return;
  }

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn('Shader link error:', gl.getProgramInfoLog(program));
    canvas.remove();
    return;
  }

  const positions = new Float32Array([
    -1, -1,
    1, -1,
    -1, 1,
    1, 1
  ]);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

  const positionLocation = gl.getAttribLocation(program, 'aPosition');
  const resolutionLocation = gl.getUniformLocation(program, 'uResolution');
  const timeLocation = gl.getUniformLocation(program, 'uTime');

  let animationFrame = 0;
  let startTime = performance.now();

  const resizeCanvas = () => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2.5);
    const width = Math.floor(window.innerWidth * pixelRatio);
    const height = Math.floor(window.innerHeight * pixelRatio);

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    }
  };

  const render = (now) => {
    resizeCanvas();
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    gl.uniform1f(timeLocation, (now - startTime) / 1000);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    animationFrame = requestAnimationFrame(render);
  };

  const stopShader = () => {
    cancelAnimationFrame(animationFrame);
    canvas.remove();
    window.removeEventListener('resize', resizeCanvas);
  };

  const handleMotionChange = (event) => {
    if (event.matches) stopShader();
  };

  if (motionQuery.addEventListener) {
    motionQuery.addEventListener('change', handleMotionChange);
  } else {
    motionQuery.addListener(handleMotionChange);
  }

  window.addEventListener('resize', resizeCanvas);
  animationFrame = requestAnimationFrame(render);
};

initTranslations();
createSiteBackground();
createLanguageClouds();
createShaderBackground();
