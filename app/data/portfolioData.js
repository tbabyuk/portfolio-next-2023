

export const projectsArray = [
    { 
      title: "Small Business Website",
      technologies: ["Next.js", "React", "Node.js", "Tailwind", "Route Handlers (API Routes)", "Stripe API", "Google Reviews API", "Firebase Storage", "Controlled Forms", "Nodemailer"],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/node.png", "/images/skills/tailwind.png", "/images/skills/firebase.png", "/images/skills/stripe.png"],
      shortDescription: "Multi-featured music school website",
      longDescription: "A website / web app for a local music school business. The website includes multiple pages, such as home, teachers, rates, contact, blog, shop, etc. The shop contains complex functionality and uses the Stripe API for transactions. It also has 3 separate forms (trial lesson form, registration form, and new teacher application form) that visitors can submit. As this is a local brick-and-mortar business and local search engine rankings are a crucial factor, the whole website is also optimized for SEO, with most pages ranking in the top 5 on Google.",
      src: "/images/music_school_demo.jpg",
      alt: "music school demo image",
      url: "small-business-app",
      liveUrl: "https://www.dacapomusic.ca/",
      video: "https://youtu.be/jxay5BvnSSk",
      githubUrl: "https://github.com/tbabyuk/DCAM-2023-NextJS"
    },
    { 
      title: "Office Admin App",
      technologies: ["Next.js", "React", "Node.js", "Tailwind", "Firebase Auth", "Firebase Firestore", "MongoDB"],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/node.png", "/images/skills/tailwind.png", "/images/skills/firebase.png", "/images/skills/mongo.png"], 
      shortDescription: "An app for office tasks and payroll tracking",
      longDescription: "A web app made for the admin team of a music school business with three main functionalities: a task list/manager, paysheet/work hours tracker for staff members, and rental instrument tracker. The app also contains auth functionality so that only the admin members can log in.",
      src: "/images/dcam-admin-next-demo.jpg",
      alt: "admin app demo image",
      url: "office-admin-app",
      liveUrl: "https://dcam-admin-next-demo.vercel.app/",
      video: "https://youtu.be/4gzWEDhtNcE",
      githubUrl: "https://github.com/tbabyuk/dcam-admin-next-demo"
    },
    { 
      title: "Contractor Work Hours App",
      technologies: ["Next.js", "React", "Node.js", "Tailwind", "Next Auth", "MongoDB", "Date-fns"],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/node.png", "/images/skills/next-auth.png", "/images/skills/tailwind.png", "/images/skills/mongo.png"],
      shortDescription: "An app for logging payroll work hours",
      longDescription: "A web app designed to allow business employees to log their work hours at the end of every two weeks. This information is then used by the payroll team when doing payments.",
      src: "/images/dcam-staff-next-demo.jpg",
      alt: "staff app demo image",
      url: "contractor-work-hours",
      liveUrl: "https://dcam-staff-next-demo.vercel.app/",
      video: "https://youtu.be/57hjyfY6cSk",
      githubUrl: "https://github.com/tbabyuk/dcam-staff-next-demo"
    },

    { 
      title: "Webinar Landing Page",
      technologies: ["Next.js", "React", "Node.js", "Tailwind", "Nodemailer"],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/node.png", "/images/skills/tailwind.png"],
      shortDescription: "Real-estate webinar landing page",
      longDescription: "A simple webinar registration landing page that I had done for a real-estate client. It provides visitors with information about the webinar and allows them to register by entering their name and email address. After they register, they receive a zoom link that they can use to join the webinar. The webinar organizer (my client) receives an email to their mailbox with the name and email of each registrant, which was accomplished on the back end with Nodemailer.",
      src: "/images/landing_page_demo.jpg",
      alt: "landing page demo image",
      url: "landing-page",
      liveUrl: "https://golden-churros-0f78d2.netlify.app/",
      video: "https://youtu.be/bYv_hQkVqjo",
      githubUrl: "https://github.com/tbabyuk/webinar-landing-page-demo"
    },
    { 
      title: "Disney Website Clone",
      technologies: [""],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/tailwind.png"], 
      shortDescription: "Official disney website clone",
      longDescription: "A website / web app for a local music school business. The website includes a home page, lesson offerings page, rates page, teachers page, reviews page, about page, contact page, and a blog page with multiple blog articles. It is also optimized for SEO.",
      src: "/images/disney_clone_demo.jpg",
      alt: "disney website clone image",
      url: "disney-website-clone",
      liveUrl: "https://disney-clone-liard-one.vercel.app/",
      video: "",
      githubUrl: "https://github.com/tbabyuk/disney_clone"
    },
    { 
      title: "Music Exam Helper",
      technologies: ["HTML", "Bootstrap", "JavaScript"], 
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/tailwind.png"],
      shortDescription: "An app showing music exam requirements",
      longDescription: "A simple web app (desktop and mobile-friendly) that lets users select a specific examination level and see a quick summary of everything they need to learn for that exam. This was a passion project for me. RCM (Royal Conservatory of Music) is a popular authority here in Canada when it comes to music exams. I myself have gone through almost all of their piano exams and wanted to make it easy for aspiring examinees to see exactly what they need to learn for each level of the RCM piano exams. It can also help piano teachers know exactly what they need to teach their students for each exam level.",
      src: "/images/rcm_wizard_demo.jpg",
      alt: "rcm wizard demo image",
      url: "music-exam-helper",
      liveUrl: "https://rcm-wizard.dacapomusic.ca/",
      video: "https://youtu.be/j1HuFpGklgs",
      githubUrl: "https://github.com/tbabyuk/rcm-wizard"
    },
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