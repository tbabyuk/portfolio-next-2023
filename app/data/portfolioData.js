

export const projectsArray = [
    { 
      title: "Small Business Website",
      features: ["SEO optimization", "user form submission", "automated email alerts", "shop functionality with Stripe", "Google reviews integration", "asset storage with Firebase Storage", "responsive design"],
      technologies: ["Next.js", "React", "Node.js", "Tailwind", "Route Handlers (API Routes)", "Stripe API", "Google Reviews API", "Firebase Storage", "Controlled Forms", "Nodemailer"],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/node.png", "/images/skills/tailwind.png", "/images/skills/firebase.png", "/images/skills/stripe.png"],
      shortDescription: "Multi-featured website for a local business",
      longDescription: "A website / web application for a local music school business. The website includes multiple pages, such as home, teachers, rates, contact, blog, shop, etc. The shop contains complex functionality and uses the Stripe API for transactions. The website has 3 separate forms (trial lesson form, registration form, and new teacher application form) that visitors can submit, with automatic email alerts going to the admin. As this is a physical business and local search engine rankings are a crucial factor, the whole website is also optimized for SEO, with most pages ranking in the top 5 on Google.",
      src: "/images/projects/small_business_website.jpg",
      alt: "music school demo image",
      url: "small-business-app",
      liveUrl: "https://www.dacapomusic.ca/",
      videoUrl: "https://youtu.be/jxay5BvnSSk",
      githubUrl: "https://github.com/tbabyuk/dcam-website-2024",
      loginInfo: ""
    },
    { 
      title: "ESL Worksheet Wizard",
      features: ["worksheet generation with OpenAI API", "shop functionality with Stripe", "authentication with Clerk", "Clerk webhooks", "responsive design"],
      technologies: ["Next.js", "React", "Node.js", "Tailwind", "Route Handlers (API Routes)", "Web Hooks", "Stripe API", "Clerk", "OpenAI API", "MongoDB"],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/node.png", "/images/skills/tailwind.png", "/images/skills/stripe.png", "/images/skills/mongo.png", "/images/skills/clerk.png", "/images/skills/openai.png"],
      shortDescription: "An mock-sass app for generating PDFs with AI",
      longDescription: "This is a sass-like web app targeted at English teachers. It is designed to help them cut down on lesson prep time by taking advantage of the latest advances in AI to help them generate teachable PDF worksheets quickly and easily. Teachers have a choice of creating a 'Matching', 'Multiple Choice', 'Fill-In-The-Blanks' or 'Grammar Correction' worksheet in a matter of seconds. The app works on a credit system, where each AI generation costs one credit. When users are out of credits, they can purchase more.",
      src: "/images/projects/esl_worksheet_wizard.jpg",
      alt: "esl worksheet wizard image",
      url: "esl-worksheet-wizard",
      liveUrl: "https://www.eslworksheetwizard.com/",
      videoUrl: "https://youtu.be/j1HuFpGklgs",
      githubUrl: "https://github.com/tbabyuk/saas-esl-worksheet-wizard",
      loginInfo: "Please log in with any Google account"
    },
    { 
      title: "Office Admin App",
      features: ["task tracker with CRUD functionality", "payroll dashboard for employee pay", "instrument rental dashboard", "authentication with Firebase Auth", "responsive design"],
      technologies: ["Next.js", "React", "Node.js", "Tailwind", "Firebase Auth", "Firebase Firestore", "MongoDB"],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/node.png", "/images/skills/tailwind.png", "/images/skills/firebase.png", "/images/skills/mongo.png"], 
      shortDescription: "An app for office tasks and payroll tracking",
      longDescription: "A web app made for the admin team of a music school business with three main features: a task list/manager with live CRUD functionality using Firebase Firestore; a payroll dashboard that queries a MongoDB collection and allows admin to see which teachers have submitted their pay, how much they are owed, and any notes they may have left; and an instrument rental dashboard to keep track of which customers currently have a rental out along with the details of that rental. The app also contains auth functionality using Firebase Auth so that only the admin members can log in.",
      src: "/images/projects/office_admin_app.jpg",
      alt: "admin app demo image",
      url: "office-admin-app",
      liveUrl: "https://admin.dacapomusic.ca/",
      videoUrl: "https://youtu.be/4gzWEDhtNcE",
      githubUrl: "https://github.com/tbabyuk/dcam-admin-nextjs-2024",
      loginInfo: "Username: <strong>demo@gmail.com</strong><br>Password: <strong>demo123</strong><br><br><i>*For security reasons, you can only view data (and not write or delete) under the demo account.</i>"
    },
    {
      title: "Work Hours Tracker",
      features: ["employee work hours log", "employee document / tax form view", "authentication with Next Auth", "responsive design"],
      technologies: ["Next.js", "React", "Node.js", "Tailwind", "NextAuth.js", "MongoDB", "Date-fns"],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/node.png", "/images/skills/next-auth.png", "/images/skills/tailwind.png", "/images/skills/mongo.png"],
      shortDescription: "An app for logging payroll work hours",
      longDescription: "A web app designed to allow teachers to log their work hours at the end of every two weeks. Teachers are presented with a list of all of their students and for each student they must select the status of either 'present', 'basent', or 'counted'. Teachers can also leave additional notes to the admin if they wish. This information is then used by the admin to know how much each teacher is owed at payday. Teachers are also able to view any documents they might have under their profile, such as their tax forms. The app uses email and password authentication powered by Next Auth.",
      src: "/images/projects/work_hours_tracker.jpg",
      alt: "staff app demo image",
      url: "contractor-work-hours",
      liveUrl: "https://staff.dacapomusic.ca/",
      videoUrl: "https://youtu.be/57hjyfY6cSk",
      githubUrl: "https://github.com/tbabyuk/dcam-staff-nextjs-new",
      loginInfo: "Username: <strong>demo1@gmail.com</strong><br>Password: <strong>demo111</strong><br><br>Username: <strong>demo2@gmail.com</strong><br>Password: <strong>demo222</strong><br><br>Username: <strong>demo3@gmail.com</strong><br>Password: <strong>demo333</strong><br><br><i>*Feel free to play around as if you were a real user and even try to submit the attendance."
    },
    { 
      title: "Webinar Landing Page",
      features: ["user form submission", "automated email alerts", "responsive design"],
      technologies: ["Next.js", "React", "Node.js", "Tailwind", "Nodemailer"],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/node.png", "/images/skills/tailwind.png"],
      shortDescription: "Real-estate webinar landing page",
      longDescription: "A webinar landing page that I did for a real-estate client. It provides visitors with information about the webinar and allows them to register by entering their name and email address. After they submit their registration, they can view a zoom link to join the webinar. The webinar organizer (my client) receives an automated email alert whenever somebody registers, containing the registrant's name and email address.",
      src: "/images/projects/webinar_landing_page.jpg",
      alt: "landing page demo image",
      url: "landing-page",
      liveUrl: "https://golden-churros-0f78d2.netlify.app/",
      videoUrl: "https://youtu.be/bYv_hQkVqjo",
      githubUrl: "https://github.com/tbabyuk/webinar-landing-page-demo",
      loginInfo: ""
    },
    { 
      title: "Disney Website Clone",
      features: ["dropdown menus", "image sliders", "responsive design"],
      technologies: ["Next.js", "React", "Tailwind"],
      techIconsArray: ["/images/skills/next.png", "/images/skills/react.png", "/images/skills/tailwind.png"], 
      shortDescription: "Official disney website clone",
      longDescription: "This was a fun project to do and the goal here was just to keep my front-end skills sharp by re-creating an existing website with as much detail as possible. The Disney website has since changed a bit, but this version existed sometime in 2023. I enjoy Disney movies that I thought this would be fun to do!",
      src: "/images/projects/disney_website_clone.jpg",
      alt: "disney website clone image",
      url: "disney-website-clone",
      liveUrl: "https://disney-clone-demo-three.vercel.app/",
      videoUrl: "",
      githubUrl: "https://github.com/tbabyuk/disney_clone",
      loginInfo: ""
    },
  ]


export const skillsArray = [
    {"id": 1, "name": "html", "src": "/images/skills/html.png", "alt": "html logo", "title": "HTML 5"},
    {"id": 2, "name": "css", "src": "/images/skills/css.png", "alt": "css logo", "title": "CSS 3"},
    {"id": 3, "name": "bootstrap", "src": "/images/skills/bootstrap.png", "alt": "bootstrap logo", "title": "Bootstrap"},
    {"id": 4, "name": "tailwind", "src": "/images/skills/tailwind.png", "alt": "tailwind logo", "title": "Tailwind"},
    {"id": 5, "name": "javascript", "src": "/images/skills/javascript.png", "alt": "javascript logo", "title": "JavaScript"},
    {"id": 6, "name": "react", "src": "/images/skills/react.png", "alt": "react logo", "title": "React"},
    {"id": 7, "name": "nextjs", "src": "/images/skills/next.png", "alt": "nextjs logo", "title": "Next.js"},
    {"id": 8, "name": "node", "src": "/images/skills/node.png", "alt": "nodejs logo", "title": "Node.js"},
    {"id": 9, "name": "mongo", "src": "/images/skills/mongo.png", "alt": "mongodb logo", "title": "MongoDB"},
    {"id": 10, "name": "firebase", "src": "/images/skills/firebase.png", "alt": "firebase logo", "title": "Firebase"},
    {"id": 11, "name": "wordpress", "src": "/images/skills/wordpress.png", "alt": "wordpress logo", "title": "Wordpress"},
    {"id": 12, "name": "clerk", "src": "/images/skills/clerk.png", "alt": "clerk logo", "title": "Clerk"},
    {"id": 13, "name": "nextauth", "src": "/images/skills/next-auth.png", "alt": "nextauth logo", "title": "NextAuth.js"},
    {"id": 14, "name": "stripe", "src": "/images/skills/stripe.png", "alt": "stripe logo", "title": "Stripe"},
    {"id": 15, "name": "openai", "src": "/images/skills/openai.png", "alt": "openai logo", "title": "OpenAI"},
    {"id": 16, "name": "github", "src": "/images/skills/github.png", "alt": "github logo", "title": "GitHub"}  
]