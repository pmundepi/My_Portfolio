/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Praveen",
  logo_name: "PM",
  full_name: "Praveen Mundepi",
  subTitle:
    "Web Developer",
  resumeLink:
    "https://drive.google.com/file/d/1IQge4pNhyj-RD2OOnEMrRPMODDUWeVDy/view?usp=sharing",
  mail: "mailto:pmundepi05@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/pmundepi",
  linkedin: "https://www.linkedin.com/in/praveenmundepi/",
  gmail: "pmundepi05@gmail.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular JS and React JS",
        "⚡ Building front end using WPF Framework in windows application",
        "⚡ Created Multiple Store Procedure in MS SQL",
        "⚡ Creating API in Node JS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Microsoft SQL",
          fontAwesomeClassname: "simple-icons:fa-database",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indira Gandhi National Open University",
      subtitle: "Bachelor's of Computer Application",
      logo_path: "ignou.png",
      alt_name: "IGNOU",
      duration: "2015-2020",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Managmenet & Warehousing",
        "⚡ Also studied Mobile Computing, Severless Data Processing and created projects on them",
        "⚡ Upcoming courses: Advanced Topics in Web Development and Cloud Computing",
      ],
      website_link: "http://www.ignou.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Git and GitHub - Step by Step for Beginners",
      subtitle: "Udemy",
      logo_path: "Udemy_logo.png",
      certificate_link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-2c6b0220-8e5e-4f9c-8a34-7bbf83240917.pdf",
      alt_name: "Git and Github",
      color_code: "#ffc475",
    },
    {
      title: "JavaScript for beginners - Quick JavaScript Fundamentals",
      subtitle: "Udemy",
      logo_path: "Udemy_logo.png",
      certificate_link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-03b5b12e-ed0d-4137-8452-ce38c19bcca4.pdf",
      alt_name: "JavaScript",
      color_code: "#ffc476",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate Software Developer",
          company: "Yogesher India Pvt. Ltd.",
          company_url: "https://www.yogesher.com/",
          logo_path: "yogesher.jfif",
          duration: "November 2021 - Present",
          location: "Janakpuri East",
          description:
            "Yogesher is an product based company works in US Healthcare sector.",
          color: "#2962FF",
        },
        {
          title: "Interface Support",
          company: "Ctech Info Solution Pvt. Ltd.",
          company_url: "https://ctech.com/",
          logo_path: "ctech.jfif",
          duration: "Feb 2017 - November 2017",
          location: "Janakpuri West",
          description:
            "Ctech is an service based company which works in US Healthcare sector",
          color: "#2962FF",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "praveen.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      name: "Mail API",
      url: "#",
      description: "To send email from application this code creates a web server using the ExpressJS framework, with CORS (Cross-Origin Resource Sharing) enabled, that can send an email using the Nodemailer library.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "Rock-Paper-Scissor",
      url: "#",
      description: "This is a simple command-line game of rock-paper-scissors written in Python.",
      languages: [
        {
          name: "Pyhton",
          iconifyClass: "logos-python",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};