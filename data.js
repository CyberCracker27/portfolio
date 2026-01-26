/* =========================
   PROFILE / HEADER DETAILS
   ========================= */

const profile = {
  name: "Gopikrishnan S",
  role: "Cybersecurity Student | Ethical Hacking Enthusiast",
  profilePicture: "assets/profile/profile.jpeg",
  email: "gopikrishnan2734@gmail.com",
  phone: "+91 93447 23835",

  links: {
    github: "https://github.com/cybercracker27",
    linkedin: "https://www.linkedin.com/in/gopikrishnan-s-84b808341/",
    medium: "https://medium.com/@CyberCracker27",
    email: "mailto:gopikrishnan2734@gmail.com"
  },

  resume: {
    view: "assets/resume/Gopikrishnan_Resume.pdf",
    download: "assets/resume/Gopikrishnan_Resume.pdf"
  }
};


/* =========================
   SKILLS
   ========================= */

const skills = [
  "Cybersecurity",
  "Ethical Hacking",
  "Pentesting",
  "Web Security",
  "Network Security",
  "Python",
  "Java",
  "C",
  "HTML, CSS, JavaScript",
  "Problem Solving",
  "Logical Thinking"
];


/* =========================
   TOOLS (WITH ICONS)
   ========================= */

const tools = [
  { name: "VS Code", icon: "assets/tools/vscode.svg" },
  { name: "Android Studio", icon: "assets/tools/androidstudio.svg" },
  { name: "Burp Suite", icon: "assets/tools/burpsuite.svg" },
  { name: "Nmap", icon: "assets/tools/nmap.svg" },
  { name: "Kali Linux", icon: "assets/tools/kali.svg" }
];


/* =========================
   PROJECTS
   ========================= */

const projects = [
  {
    title: "Phishing Detection Tool – Browser Extension",
    description: "Phishing Detection Tool – Built a browser-integrated security tool that detects phishing emails and malicious URLs using URL feature analysis, NLP, and email header validation (SPF, DKIM, DMARC). Integrated Gmail API for real-time email extraction and automated analysis, with a Python Flask backend and ML models for accurate threat detection.",
    tech: ["Web Security", "Browser Extension"],
    link: "https://github.com/CyberCracker27/Phishing-Detection-Tool"
  },
  {
    title: "Web-based IoT Forensics Toolkit",
    description: "Web-based IoT Forensics Toolkit – Built a web-based tool to collect and analyze data from IoT devices for digital forensics. It helps identify security incidents by examining logs and device activity through a single web interface.",
    tech: ["Forensics", "Network Security"],
    link: "https://github.com/CyberCracker27/IoT_Forensics_Console"
  },
  {
    title:"HoloLearn: A Holographic -Based Remote Teaching System",
    description:"HoloLearn – Developed a holographic learning system that streams live video from multiple cameras to a holographic frustum display. The platform enables immersive learning through real-time video streaming, synchronized audio-video playback, and a web-based interface.",
    tech:["Web Development", "Real-Time Streaming"],
    link:"https://github.com/CyberCracker27/holo-git"
  },
  {
    title:"WebNmap – Web-based Network Scanning Tool",
    description:"WebNmap – Built a web-based network scanning tool that allows users to perform Nmap scans such as port scanning, service detection, and OS detection through a browser. The tool uses a Flask backend to execute scans and display results in a user-friendly web interface.",
    tech:["Network Security", "Web Development"],
    link:"https://github.com/CyberCracker27/WebNmap"
  },
  {
    title:"CareerPath – Career Guidance Web Platform",
    description:"CareerPath – Built a web-based platform that helps users explore suitable career paths based on their interests and skills. The system provides structured career options and guidance to support informed career decisions.",
    tech:["Web Development", "Career Guidance"],
    link:"https://github.com/CyberCracker27/Careerpath"
  }
];


/* =========================
   CERTIFICATIONS (DRIVE LINKS)
   ========================= */

const certificates = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    link: "https://drive.google.com/file/d/152bYSyMOMfzVUt3tZltKDJvROL0Z1l_M/view?usp=sharing"
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    link: "https://drive.google.com/file/d/122CFsPlbkuCkhm8PEXMZE4asLc0YP6F6/view?usp=sharing"
  },
  {
    title: "Python (Basics) Accomplishment",
    issuer: "Hackerrank",
    link: "https://drive.google.com/file/d/1QkCjRfTY0PeHasmxCNN2-XH0EZ0g_A-A/view?usp=sharing"
  },
  {
    title:"Java(Basic) Accomplishment",
    issuer:"Hackerrank",
    link:"https://drive.google.com/file/d/16RbarSS9f-CVFDjv38RJ3Gt4W8JP8Pu4/view?usp=sharing"
  },
  {
    title:"Recon Certificate Completion",
    issuer:"Pentesterlab",
    link:"https://drive.google.com/file/d/1BtN0iVDI5ZAxYcVhUxvgbVjh_OM2VT8-/view?usp=sharing"
  },
  {
    title:"Advent of Cyber 2025",
    issuer:"TryHackMe",
    link:"https://drive.google.com/file/d/1QIKxBojxd9otD3uM-4oOwa3D8Alc72Ty/view?usp=sharing"
  },
  {
    title: "The Cyber Heist - CTF Participation",
    issuer: "Dr. N.G.P. Institute of Technology x Cybernexus Association",
    link: "https://drive.google.com/file/d/1M8SDMeQC8CiCAlIAHmKGrXx_7tPXpBRH/view?usp=sharing"
  },
  {
    title:"Basics of Python",
    issuer:"Infosys Springboard",
    link:"https://drive.google.com/file/d/14URyp8k5rgP4EEb2ZGM0bd4yGiYepuA4/view?usp=sharing"
  },
  {
    title:"C Programming 101",
    issuer:"Infosys Springboard",
    link:"https://drive.google.com/file/d/1QoOVLadbPOZCdNFOp_fYaTbjbjJPTl4K/view?usp=sharing"
  },
  {
    title:"Ethical hacking 101 : Beginners guide to Ethical hacking",
    issuer:"Simplilearn SkillUP",
    link:"https://drive.google.com/file/d/1gAEz8RgEf-cJnnIUZavEb5y7oo5ImovZ/view?usp=sharing"
  },
  {
    title:"Fundamentals of Data Structures in C",
    issuer:"Simplilearn SkillUP",
    link:"https://drive.google.com/file/d/11_j_HQClw6JTaB9w-mjdn8vECx2Rj-8q/view?usp=sharing"
  },
  {
    title:"BOUNTY HUNT 101 - LEARN THE ART OF BREAKING ",
    issuer:"DevTown in Collaboration with Google Developer Groups - VIT - AP",
    link:"https://drive.google.com/file/d/1QAFsQNDfk9qk3CLz2jvKNqFg2w_9iz9H/view?usp=sharing"
  },
  {
    title:"BOUNTY HUNT 101 - LEARN THE ART OF BREAKING",
    issuer:"DevTown in Collaboration with Microsoft Student Chapter - MSIT",
    link:"https://drive.google.com/file/d/1W2Jt9gbGK4Fv4atrV5rcPKvEzrXUuZ94/view?usp=sharing"
  },
  {
    title:"IEEE YESIST12 2025 Participation",
    issuer:"ITM University Gwalior",
    link:"https://drive.google.com/file/d/1Dg-Fx1sKSfwewqLbVmCM7jLs364ihM3W/view?usp=sharing"
  },
  {
    title:"Introduction to Dark Web, Anonymity, and Cryptocurrency",
    issuer:"EC-Council Continuing Education",
    link:"https://drive.google.com/file/d/105Cd43H0oJi5DrQ4d2TrDw0qLX1G0PWr/view?usp=sharing"
  },
  {
    title:"Introduction to Kali Linux Basics",
    issuer:"Simplilearn SkillUP",
    link:"https://drive.google.com/file/d/15ivYIripTt7KWKJvOGfWUIUUhPbUr5wM/view?usp=sharing"
  },
  {
    title:"Networking Essentials using CISCO Workshop",
    issuer:"KPR Institute of Engineering and Technology",
    link:"https://drive.google.com/file/d/1S0_u6FietvUZx2SdgRg3uXa30QLFkfO6/view?usp=sharing"
  },
  {
    title:"HACKATHON Participation",
    issuer:"NATIONAL CYBER SECURITY RESEARCH COUNCIL (NCSRC)",
    link:"https://drive.google.com/file/d/1LvhNNb84gGkMfH4Ir-joNObSSIHGTi-U/view?usp=sharing"
  },
  {
    title:"SQL Injection Attacks",
    issuer:"ECCouncil Continuing Education",
    link:"https://drive.google.com/file/d/1HNXIG6O_zfg7FlNjPUGy4b_5q9Isji7r/view?usp=sharing"
  },
  {
    title:"U & ME State Level Hackathon 2025 - Participation",
    issuer:"Edutantra & Coimbatorte Institute of Technology",
    link:"https://drive.google.com/file/d/1GQrDQwpczNZ_Di2McJbsW63-PyalI0QQ/view?usp=sharing"
  },
  {
    title:"Python 3.4.3 Training Completion",
    issuer:"Spoken Tutorial - IIT Bombay",
    link:"https://drive.google.com/file/d/1pW1MWbfefRWpPzbH4uXFFGlCpOE42CIg/view?usp=sharing"
  }
];

/* =========================
   EDUCATION
   ========================= */

const education = [
  {
    degree: "B.E Computer Science and Engineering (Cybersecurity)",
    institution: "Dr.N.G.P Institute of Technology, Coimbatore",
    year: "2024 - 2028",
    description: ""
  },
  {
    degree: "Higher Secondary Certificate (HSC – 12th)",
    institution: "Unique Public School, The Nilgiris",
    year: "2023 - 2024",
    description: "Percentage: 84.5%"
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC – 10th)",
    institution: "Priyadharshini Matriculation School, The Nilgiris",
    year: "2021 - 2022",
    description: "Percentage: 86%"
  }
];


/* =========================
   PRACTICE & PLATFORMS
   (EDIT LIKE CERTIFICATES)
   ========================= */

const platforms = [
  {
    name: "TryHackMe",
    icon: "assets/tools/tryhackme.svg",
    profile: "https://tryhackme.com/p/CyberCracker27"
  },
  {
    name: "Hack The Box",
    icon: "assets/tools/hackthebox.svg",
    profile: "https://app.hackthebox.com/public/users/2144960"
  },
  {
    name: "LeetCode",
    icon: "assets/tools/leetcode.svg",
    profile: "https://leetcode.com/CyberCracker27/"
  }
];


/* =========================
   FOOTER
   ========================= */

const footer = {
  text: "Session terminated.",
};


