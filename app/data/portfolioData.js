

export const projectsArray = [
    { 
      title: "Small Business Website",
      features: ["SEO optimization", "user form submission", "automated email alerts", "shop functionality with Stripe", "Google reviews integration", "asset storage with Firebase Storage"],
      technologies: ["Next.js", "React", "Node.js", "Tailwind", "Route Handlers (API Routes)", "Stripe API", "Google Reviews API", "Firebase Storage", "Controlled Forms", "Nodemailer"],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/node.png", "/images/skills/tailwind.png", "/images/skills/firebase.png", "/images/skills/stripe.png"],
      shortDescription: "Multi-featured website for a local business",
      longDescription: "A website / web application for a local music school business. The website includes multiple pages, such as home, teachers, rates, contact, blog, shop, etc. The shop contains complex functionality and uses the Stripe API for transactions. The website has 3 separate forms (trial lesson form, registration form, and new teacher application form) that visitors can submit, with automatic email alerts going to the admin. As this is a local brick-and-mortar business and local search engine rankings are a crucial factor, the whole website is also optimized for SEO, with most pages ranking in the top 5 on Google.",
      src: "/images/projects/small_business_website.jpg",
      alt: "music school demo image",
      url: "small-business-app",
      liveUrl: "https://www.dacapomusic.ca/",
      videoUrl: "https://youtu.be/jxay5BvnSSk",
      githubUrl: "https://github.com/tbabyuk/dcam-website-2024"
    },
    { 
      title: "ESL Worksheet Wizard",
      features: ["SEO optimization", "user form submission", "automated email alerts", "shop functionality with Stripe", "Google reviews integration"],
      technologies: ["HTML", "Bootstrap", "JavaScript"], 
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/tailwind.png"],
      shortDescription: "An app showing music exam requirements",
      longDescription: "A simple web app (desktop and mobile-friendly) that lets users select a specific examination level and see a quick summary of everything they need to learn for that exam. This was a passion project for me. RCM (Royal Conservatory of Music) is a popular authority here in Canada when it comes to music exams. I myself have gone through almost all of their piano exams and wanted to make it easy for aspiring examinees to see exactly what they need to learn for each level of the RCM piano exams. It can also help piano teachers know exactly what they need to teach their students for each exam level.",
      src: "/images/projects/esl_worksheet_wizard.jpg",
      alt: "rcm wizard demo image",
      url: "music-exam-helper",
      liveUrl: "https://rcm-wizard.dacapomusic.ca/",
      videoUrl: "https://youtu.be/j1HuFpGklgs",
      githubUrl: "https://github.com/tbabyuk/rcm-wizard"
    },
    { 
      title: "Office Admin App",
      features: ["task tracker with CRUD functionality", "payroll dashboard for employee pay", "instrument rental dashboard", "authentication with Firebase Auth"],
      technologies: ["Next.js", "React", "Node.js", "Tailwind", "Firebase Auth", "Firebase Firestore", "MongoDB"],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/node.png", "/images/skills/tailwind.png", "/images/skills/firebase.png", "/images/skills/mongo.png"], 
      shortDescription: "An app for office tasks and payroll tracking",
      longDescription: "A web app made for the admin team of a music school business with three main features: a task list/manager with live CRUD functionality using Firebase Firestore; a payroll dashboard that queries a MongoDB collection and allows admin to see which teachers have submitted their pay, how much they are owed, and any notes they may have left; and an instrument rental dashboard to keep track of which customers currently have a rental out along with the details of that rental. The app also contains auth functionality using Firebase Auth so that only the admin members can log in.",
      src: "/images/projects/office_admin_app.jpg",
      alt: "admin app demo image",
      url: "office-admin-app",
      liveUrl: "https://dcam-admin-next-demo.vercel.app/",
      videoUrl: "https://youtu.be/4gzWEDhtNcE",
      githubUrl: "https://github.com/tbabyuk/dcam-admin-nextjs-2024"
    },
    {
      title: "Work Hours Tracker",
      features: ["employee work hours log", "employee document / tax form view", "authentication with Next Auth"],
      technologies: ["Next.js", "React", "Node.js", "Tailwind", "NextAuth.js", "MongoDB", "Date-fns"],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/node.png", "/images/skills/next-auth.png", "/images/skills/tailwind.png", "/images/skills/mongo.png"],
      shortDescription: "An app for logging payroll work hours",
      longDescription: "A web app designed to allow teachers to log their work hours at the end of every two weeks. Teachers are presented with a list of all of their students and for each student they must select the status of either 'present', 'basent', or 'counted'. Teachers can also leave additional notes to the admin if they wish. This information is then used by the admin to know how much each teacher is owed at payday. Teachers are also able to view any documents they might have under their profile, such as their tax forms. The app uses email and password authentication powered by Next Auth.",
      src: "/images/projects/work_hours_tracker.jpg",
      alt: "staff app demo image",
      url: "contractor-work-hours",
      liveUrl: "https://dcam-staff-next-demo.vercel.app/",
      videoUrl: "https://youtu.be/57hjyfY6cSk",
      githubUrl: "https://github.com/tbabyuk/dcam-staff-nextjs-new"
    },
    { 
      title: "Webinar Landing Page",
      features: ["SEO optimization", "user form submission", "automated email alerts", "shop functionality with Stripe", "Google reviews integration"],
      technologies: ["Next.js", "React", "Node.js", "Tailwind", "Nodemailer"],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/node.png", "/images/skills/tailwind.png"],
      shortDescription: "Real-estate webinar landing page",
      longDescription: "A simple webinar registration landing page that I had done for a real-estate client. It provides visitors with information about the webinar and allows them to register by entering their name and email address. After they register, they receive a zoom link that they can use to join the webinar. The webinar organizer (my client) receives an email to their mailbox with the name and email of each registrant, which was accomplished on the back end with Nodemailer.",
      src: "/images/projects/webinar_landing_page.jpg",
      alt: "landing page demo image",
      url: "landing-page",
      liveUrl: "https://golden-churros-0f78d2.netlify.app/",
      videoUrl: "https://youtu.be/bYv_hQkVqjo",
      githubUrl: "https://github.com/tbabyuk/webinar-landing-page-demo"
    },
    { 
      title: "Disney Website Clone",
      features: ["SEO optimization", "user form submission", "automated email alerts", "shop functionality with Stripe", "Google reviews integration"],
      technologies: [""],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/tailwind.png"], 
      shortDescription: "Official disney website clone",
      longDescription: "A website / web app for a local music school business. The website includes a home page, lesson offerings page, rates page, teachers page, reviews page, about page, contact page, and a blog page with multiple blog articles. It is also optimized for SEO.",
      src: "/images/projects/disney_website_clone.jpg",
      alt: "disney website clone image",
      url: "disney-website-clone",
      liveUrl: "https://disney-clone-liard-one.vercel.app/",
      videoUrl: "",
      githubUrl: "https://github.com/tbabyuk/disney_clone"
    }
  ]


export const skillsArray = [
  {"id": 1, "name": "html", "src": "/images/skills/html.png", "alt": "html logo", "title": "HTML 5"},
  {"id": 2, "name": "css", "src": "/images/skills/css.png", "alt": "css logo", "title": "CSS 3"},
  {"id": 3, "name": "bootstrap", "src": "/images/skills/bootstrap.png", "alt": "bootstrap logo", "title": "Bootstrap"},
  {"id": 4, "name": "tailwind", "src": "/images/skills/tailwind.png", "alt": "tailwind logo", "title": "Tailwind"},
  {"id": 5, "name": "javascript", "src": "/images/skills/javascript.png", "alt": "javascript logo", "title": "JavaScript"},
  {"id": 6, "name": "react", "src": "/images/skills/react.png", "alt": "react logo", "title": "React"},
  {"id": 7, "name": "firebase", "src": "/images/skills/firebase.png", "alt": "firebase logo", "title": "Firebase"},
  {"id": 8, "name": "wordpress", "src": "/images/skills/wordpress.png", "alt": "wordpress logo", "title": "Wordpress"},
  {"id": 9, "name": "mongo", "src": "/images/skills/mongo.png", "alt": "mongoDB logo", "title": "MongoDB"},
  {"id": 10, "name": "node", "src": "/images/skills/node.png", "alt": "nodeJS logo", "title": "Node.js"}
]