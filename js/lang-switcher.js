const translations = {
  en: {
    // Navbar
    nav_home: "Home",
    resume: "Resume",
    projects: "Projects",
    nav_contact: "Contact",

    // Footer
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    footer: "© Joao Silva 2025 — Built with HTML, CSS and JS",

    // Hero/About
    hero_subtext: "Full Stack Developer and QA Tester",
    hero_headline: "Building web applications with modern scripting languages and automated tests",
    about_title: "About Me",
    about_intro: "I'm a Software Developer with experience in full stack development building E-commerce applications, with Stripe payments and live chat. While my professional experience has been with PHP, I am passionate about JavaScript, TypeScript, Python and Linux \nI have strong analytical and problem‑solving skills from Biomedical Sciences and I like to look into the details in software development and quality assurance. I am seeking for a junior developer or QA automation position where I can apply my skills and expand my knowledge.",

    // Resume Sections
    resume_title: "Resume",
    resume_experience: "Experience",
    web_dev: "Web Developer",
    lisboa_car: "Carnaxide - Lisbon",
    estagio_1: "Led the design and delivery of a full‑stack library, using Laravel, MySQL and Tailwind/Daisy UI, supporting payments with Stripe and real‑time messaging with a live chat.",
    estagio_2: "Organized and coordinated project tasks with a teammate and reviewed their code for quality and alignment with the requirements.",
    estagio_3: "Implemented a secure user authentication system, product listings, cart workflows, and order management.",
    estagio_4: "Wrote and maintained unit tests with Pest, boosting reliability and enforcing testing practices.",
    estagio_5: "Added unit testing using Pest for web testing, covering Google Books API, UI, and backend logic.",
    estagio_6: "Presented the final project demo to senior developers and stakeholders.",
    estagio_7: "Built a full-stack to-do application using Vue 3 on a Laravel backend with task creation, filtering, and persistence.",
    estagio_8: "Implemented TypeScript, ESLint, and Prettier with Tailwind class formatting to keep the app clean and consistent.",
    estagio_9: "Added Pest unit tests for the app’s task logic (create/update/delete/complete) to improve reliability and prevent regressions.",

    resume_education: "Education",
    tecnico: "Specialist Technician in Information Systems Programming and Technologies",
    lisboa_cas: "Cascais - Lisbon",
    curso_1: "Technical course equivalent to Level 5 of the National Qualifications Framework;",
    curso_2: "The course covered various areas such as programming, networking, and data management;",
    curso_3: "Acquired skills to start a career in a corporate environment.",

    university: "University of Algarve",
    course: "Biomedical Sciences",
    uni_1: "Attended the Bachelor’s degree in Biomedical Sciences, having completed two full years and 120 ECTS;",
    uni_2: "Acquired analytical skills as well as reading, writing, and technical/academic language usage;",
    uni_3: "My most notable subjects were Biostatistics, Mathematics, Calculus, Physics and other medically related courses.",

    // Skills
    resume_skills: "Professional Skills",
    skill_1: "Frontend",
    skill_2: "Backend",
    skill_3: "Full-stack",
    skill_4: "QA Automation",
    skill_5: "Data Analysis",
    skill_6: "Project Lead",

    resume_languages: "Languages",
    lang_1: "JavaScript",
    lang_2: "TypeScript",
    lang_3: "Python",
    lang_4: "SQL",
    lang_5: "HTML",
    lang_6: "CSS",
    lang_7: "PHP",

    contact_title: "Get in touch",
    contact_subtitle: "Let's work together!",
  },

  pt: {
    // Navbar
    nav_home: "Início",
    resume: "Currículo",
    projects: "Projetos",
    nav_contact: "Contacto",

    // Footer
    privacy: "Privacidade",
    terms: "Termos",
    contact: "Contacto",
    footer: "© Joao Silva 2025 — Criado com HTML, CSS e JS",
    footer_copyright: "Copyright © Your Website 2023",

    // Hero/About
    hero_subtext: "Desenvolvedor Web Full-Stack",
    hero_headline: "A criar aplicações web escaláveis",
    about_title: "Sobre Mim",
    about_intro: "Olá! Sou o João e sou um full-stack developer à procura de um primeiro trabalho. Especializo-me em HTML, CSS (Tailwind & DaisyUI), Javascript, PHP (& Laravel). Também estou confortável com SQL e REST APIs.",

    // Resume Sections
    resume_title: "Currículo",
    resume_experience: "Experiência",
    resume_download: "Download Currículo",
    web_dev: "Desenvolvedor Web",
    lisboa_car: "Carnaxide - Lisboa",
    estagio_1: "Durante o estágio, desenvolvi aplicações web utilizando PHP, a framework Laravel, MySQL, Tailwind CSS e DaisyUI;",
    estagio_2: "Implementei APIs como o Stripe e GoogleBooks;",
    estagio_3: "Desenvolvi testes automatizados com a ferramenta PEST;",
    estagio_4: "Documentei e fiz code reviews, seguido de uma apresentação técnica à equipa.",

    resume_education: "Educação",
    tecnico: "Técnico Especialista em Tecnologias e Programação de Sistemas de Informação",
    lisboa_cas: "Cascais - Lisboa",
    curso_1: "Curso técnico equivalente ao Grau 5 do Quadro Nacional de Qualificações;",
    curso_2: "O curso deu a conhecer várias vertentes na área de programação, redes e dados;",
    curso_3: "Aquisição de competências polivalentes para começar a carreira num ambiente empresarial.",

    university: "Universidade do Algarve",
    course: "Ciências Biomédicas",
    uni_1: "Frequência na Licenciatura em Ciências Biomédicas, tendo completado dois anos por inteiro e 120 ECTS;",
    uni_2: "Aquisição de capacidades analíticas bem como leitura, escrita e contacto com linguagem técnica e académica;",
    uni_3: "Cadeiras favoritas ou de destaque incluem Química Orgânica, Física, Análise Matemática, Bioestatística e outras cadeiras de cariz médico.",

    // Skills
    resume_skills: "Skills Profissionais",
    skill_1: "Frontend",
    skill_2: "Backend",
    skill_3: "Fullstack",
    skill_4: "Automatização QA",
    skill_5: "Analise de dados",
    skill_6: "Planeamento de projetos",

    // Languages
    resume_languages: "Linguagens",
    lang_1: "JavaScript",
    lang_2: "TypeScript",
    lang_3: "Python",
    lang_4: "SQL",
    lang_5: "HTML",
    lang_6: "CSS",
    lang_7: "PHP",

    // Contact page
    contact_title: "Entre em contacto!",
    contact_subtitle: "Vamos trabalhar juntos!",
  }
};

//Page translation
function setLanguage(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => { 
    const key = el.getAttribute('data-lang'); 
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  }); 
// this will change the languague swticher button text
  document.getElementById('languageSwitcher').textContent = lang.toUpperCase();
//changes the language in the html tag
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => setLanguage('en'));
