import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import PrintableResume from "@/components/PrintableResume";
import SkillsSection from "@/components/SkillsSection";
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award,
  CheckCircle2,
  Brain,
  Cpu,
  Database,
  Globe,
  GitBranch,
  Palette,
  Wrench,
  Target,
  Bot
} from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("skills");

  const education = [
    {
      institution: "Vellore Institute of Technology, Andhra Pradesh",
      degree: "Integrated M.Tech",
      field: "Computer Science & Engineering",
      duration: "2022 - 2027",
      gpa: "9.25/10.0",
      location: "Vijayawada, India",
    },
    {
      institution: "Kendriya Vidyalaya, Alipurduar Junction",
      degree: "Pre-University College",
      field: "Science Stream",
      duration: "2020 - 2022",
      gpa: "89%",
      location: "Alipurduar, India",
    },
  ];

  const experience = [
    {
      position: "Intern",
      company: "North Eastern Space Applications Centre (NESAC), Department of Space, Govt. of India ",
      duration: "May 2025 - July 2025",
      description: "Developed a census-independent population estimation framework leveraging high resolution satellite imagery, interpretable deep learning models (YOLOv8), and spatial AI techniques.",
      responsibilities: [
         "Spearheaded the development of a census-independent population estimation framework leveraging high resolution satellite imagery, interpretable deep learning models (YOLOv8), and spatial AI techniques.",
         "Applied advanced geospatial analytics and remote sensing workflows to process imagery and elevation data (DSM/DTM), enabling precise building detection and floor estimation.",
         "Authored and integrated a novel AI-driven demographic mapping system that has since been adopted by over 12 researchers and analysts across multiple geospatial and urban planning projects.",
         "Gained hands-on exposure to end-to-end deployment of AI/ML pipelines in a research-grade space technology environment, with practical applications in smart urban development and population intelligence."
      ]
    },
    {
      position: "Web Developer Intern",
      company: "Bluestock Fintech",
      duration: "January 2025 - February 2025",
      description: "Led a team of 9 to develop a production-level IPO web app and REST API using Django, DRF, and PostgreSQL. Built a responsive frontend with HTML, CSS, JavaScript, and Bootstrap 5.",
      responsibilities: [
         "Led a 9-member team to develop a production-level IPO web app & REST API using Django, DRF, and PostgreSQL.",
         "Built a responsive frontend with HTML, CSS, JavaScript, and Bootstrap 5, reducing page load time by 30%.",
         "Ensured code quality, security, and API performance, using Git/GitHub, Postman, and best practices, improving API response time by 25%.",
         "Delivered project 5 days ahead of deadline, aligning with business goals and stakeholder requirements."
      ]
    },
    {
      position: " Data Analytics and Visualization",
      company: " Accenture North America - Forage Job Simulation ",
      duration: "June 2024",
      description: "Completed a job simulation project with Accenture North America, focusing on data analytics and visualization using Python, SQL, and Tableau.",
      responsibilities: [
         "Developed interactive dashboards and reports using Tableau to visualize key business metrics.",
         "Performed data cleaning and preprocessing using Python and SQL to ensure data quality.",
         "Collaborated with cross-functional teams to gather requirements and deliver insights.",
         "Presented findings and recommendations to stakeholders for data-driven decision making."
      ]
    },
    {
      position: "Open Source Contributor",
      company: "GitHub Community",
      duration: "January 2022 - Present",
      description: "Actively contributed to various open-source projects, focusing on web development and machine learning libraries.",
      responsibilities: [
        "Fixed bugs and implemented new features in popular repositories",
        "Collaborated with developers worldwide through pull requests",
        "Improved documentation for better user experience",
        "Participated in code reviews and discussions"
      ]
    },
  ];

  const projects = [
    {
      title: "Interpretable AI for Census-Independent Population Estimation leveraging space technology",
      description: "Developed a deep learning pipeline to estimate population from satellite imagery by detecting buildings using YOLOv8 and incorporating elevation data (DSM & DTM) to infer floor counts. Achieved over 90% accuracy and built a GUI for real-time input and visualization.",
      technologies: ["Python", "Machine Learning", "AI", "Deep Learning", "Satellite Imagery", "YOLOv8", "GUI", "Population Estimation"],
      duration: "05/2025 - 06/2025",
      type: "Summer Internship",
      accomplishments: [
        "Developed a deep learning pipeline to estimate population from satellite imagery",
        "Implemented YOLOv8 for building detection and incorporated elevation data (DSM & DTM) to infer floor counts",
        "Achieved over 90% accuracy in population estimation",
        "Built a GUI for real-time input and visualization of results"
      ]
    },
    {
      title: "OCR-Based Product Info Extractor",
      description: "Built a standalone executable application that captures product images via webcam and extracts key information like MRP and manufacturing date using OCR and image processing, with 92%+ text recognition accuracy.",
      technologies: ["Python", "OCR", "Image Processing", "OpenCV", "GUI", "Standalone Application", "Webcam", "Text Recognition", "Product Information"],
      duration: "05/2024 - 06/2024",
      type: "2nd Year Project",
      accomplishments: [
        "Developed a standalone executable application that captures product images via webcam",
        "Extracted key information like MRP and manufacturing date using OCR and image processing",
        "Achieved 92%+ text recognition accuracy with real-time processing",
        "Designed a user-friendly GUI for easy interaction and data extraction"
      ]
    },
    {
      title: "Fruit Freshness Detection",
      description: "Created a real-time webcam-based system that identifies fruits (banana, apple, orange, guava) and estimates freshness as a percentage using machine learning techniques, achieving ~90% classification accuracy.",
      technologies: ["Python", "Machine Learning", "Computer Vision", "OpenCV", "Real-time", "Webcam", "Fruit Detection", "Freshness Estimation"],
      duration: "07/2024 - 08/2024",
      type: "Open-source",
      accomplishments: [
        "Developed a real-time webcam-based system for fruit detection and freshness estimation",
        "Implemented machine learning techniques to classify fruits with ~90% accuracy",
        "Estimated freshness as a percentage based on visual features",
        "Contributed to open-source community by sharing the project on GitHub"
      ]
    },
    {
      title: "Drag-and-Drop Form Builder",
      description: "Developed a dynamic form builder using React, enabling users to create, customize, and share forms effortlessly. Integrated functionality to export form responses as a CSV file for streamlined data management.",
      technologies: ["React", "JavaScript", "Form Builder", "CSV Export", "Web Development", "Frontend Development", "UI/UX", "Drag and Drop"],
      duration: "09/2024 - 10/2024",
      type: "Personal Project",
      accomplishments: [
        "Created a user-friendly drag-and-drop form builder interface",
        "Implemented features for form customization and sharing",
        "Integrated CSV export functionality for easy data management",
        "Ensured responsive design for optimal user experience across devices"
      ]
    },
    {
      title: "IPO-WebApp",
      description: "Developed a web application for tracking Initial Public Offerings (IPOs) using React.js and Web3.js, enabling users to view upcoming IPOs, track their performance, and interact with blockchain-based data.",
      technologies: ["React", "Web3.js", "Blockchain", "IPO Tracking", "Web Development", "JavaScript", "Frontend Development"],
      duration: "11/2024 - 12/2024",
      type: "Personal Project",
      accomplishments: [
        "Built a comprehensive IPO tracking web application using React.js",
        "Integrated Web3.js for blockchain interactions and data retrieval",
        "Enabled users to view upcoming IPOs and track their performance",
        "Implemented responsive design for seamless user experience across devices"
      ]
    },
    {
      title: "Blood Group Detection Device",
      description: "Designed and built a non-invasive Blood Group Detection Device using Raspberry Pi, achieving 95% accuracy in determining blood type by analysing light absorption from a fingertip with laser-based transmission and light sensors, eliminating the need for blood samples.",
      technologies: ["Raspberry Pi", "IoT", "Electronics", "Python", "Hardware Design", "Blood Group Detection", "Laser Technology", "Light Sensors", "Non-invasive"],
      duration: "10/2023 - 12/2023",
      type: "Personal Project",
      accomplishments: [
        "Built a comprehensive Blood Group Detection Device using Raspberry Pi",
        "Achieved 95% accuracy in blood type determination",
        "Eliminated the need for blood samples with non-invasive technology",
        "Contributed to open-source community by sharing the project on GitHub"
      ]
    },
  ];

  const certifications = [
    {
      name: "Oracle Cloud Infrastructure Generative AI Professional",
      issuer: "Oracle",
      date: "July 2025",
      skills: "Oracle Cloud Infrastructure, Generative AI, AI Solutions",
      
    },
    {
      name: "Google Cloud Computing Foundations.",
      issuer: "Google Cloud",
      date: "November 2024",
      skills: "Google Cloud Platform, Cloud Computing, Infrastructure",
      
    },
    {
      name: "Accenture Data Analytics And Visualization Simulation",
      issuer: "Forage",
      date: "November 2024",
      skills: "Data Analytics, Data Visualization, Python, SQL",
    },
    {
      name: "Google Cloud Computing Foundations",
      issuer: "Google Cloud Skills Boost",
      date: "January 2025",
      skills: "Google Cloud Platform, Cloud Computing, Core Services",
    },
    {
      name: "Google Cloud Fundamentals: Core Infrastructure",
      issuer: "Google Cloud Skills Boost",
      date: "February 2025",
      skills: "Google Cloud, Core Infrastructure, Compute Engine, Cloud Storage",
    },
    {
      name: "The web developer bootcamp",
      issuer: "Udemy",
      date: "February 2024",
      skills: "HTML, CSS, JavaScript, React.js, Node.js",
    },
    {
      name: "JavaScript Essentials 1 (JSE)",
      issuer: "Cisco Networking Academy",
      date: "June 2024",
      skills: "JavaScript, Programming Fundamentals, Web Development",
    },
    {
      name: "Tata Imagination Challenge 2024",
      issuer: "Tata",
      date: "July 2024",
      skills: "Problem Solving, Innovation, Research",
    },
    {
      name: "Flipkart Grid Robotics 2024",
      issuer: "Flipkart",
      date: "August 2024",
      skills: "Robotics, Problem Solving, Team Collaboration, Machine Learning, Python",
    },
  ];

  const softSkills = [
    { skill: "Problem Solving", description: "Analytical approach to complex technical challenges" },
    { skill: "Communication", description: "Clear technical and non-technical communication" },
    { skill: "Leadership", description: "Ability to lead and motivate teams towards common goals" },
    { skill: "Work ethic", description: "Strong dedication to tasks and responsibilities" },
    { skill: "Attention to detail", description: "Thoroughness in completing tasks and projects" },
    { skill: "Team Collaboration", description: "Effective work in cross-functional teams" },
    { skill: "Adaptability", description: "Quick learning of new technologies and methodologies" },
    { skill: "Time Management", description: "Efficient project delivery within deadlines" },
    { skill: "Critical Thinking", description: "Analytical evaluation of solutions and approaches" },
  ];

  const resumeHighlights = [
    { 
      title: "AI & ML Specialist", 
      description: "Specialized in machine learning algorithms and AI applications with practical implementation experience",
      icon: <Brain className="h-8 w-8 text-brand-purple" />
    },
    { 
      title: "Full-Stack Developer", 
      description: "Proficient in both front-end and back-end technologies, creating complete web solutions",
      icon: <Code className="h-8 w-8 text-brand-purple" />
    },
    { 
      title: "Web Developer", 
      description: "Experienced in building web applications using react framework and plain HTML and CSS",
      icon: <Cpu className="h-8 w-8 text-brand-purple" />
    },
    { 
      title: "Data Analyst", 
      description: "Skilled in data analysis, visualization, and extracting actionable insights",
      icon: <Database className="h-8 w-8 text-brand-purple" />
    },
  ];

  const tabContent = {
    skills: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {resumeHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg flex items-start backdrop-blur-md border border-white/10"
            >
              <div className="mr-4 bg-brand-purple/10 p-3 rounded-full">
                {highlight.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <SkillsSection />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="glass-panel p-6 rounded-lg backdrop-blur-md border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((item, index) => (
              <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-medium text-lg mb-1">{item.skill}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
    education: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <GraduationCap className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <div className="text-lg mt-1">{edu.institution}</div>
                    <div className="text-muted-foreground mt-1">{edu.field}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end text-right">
                <div className="px-3 py-1 rounded-full text-sm bg-brand-purple/10 text-brand-purple">
                  {edu.gpa}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{edu.duration}</div>
                <div className="text-sm text-muted-foreground mt-1">{edu.location}</div>
              </div>
            </div>
            <div className="mt-4 pl-4 border-l-2 border-brand-purple/30">
              <h4 className="font-medium mb-2">Key Courses:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {edu.institution.includes("Vellore") ? (
                  <>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Artificial Intelligence & Machine Learning
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Data Structures & Algorithms
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Computer Network
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Operating System
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Web Development
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Object Oriented Programming
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Database Management Systems
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Deep Learning
                    </li>
                  </>
                ) : (
                  <>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Physics
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Chemistry
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Mathematics
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Computer Science
                    </li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    experience: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <Briefcase className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="text-lg mt-1">{exp.company}</div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                {exp.duration}
              </div>
            </div>
            <p className="text-muted-foreground mb-4 pl-0 md:pl-12">{exp.description}</p>
            <div className="pl-0 md:pl-12">
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    projects: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs py-1 px-3 bg-brand-purple/10 text-brand-purple rounded-full">
                  {project.type}
                </span>
                <span className="text-xs text-muted-foreground">
                  {project.duration}
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Key Accomplishments:</h4>
              <ul className="space-y-2">
                {project.accomplishments.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs py-1 px-3 bg-secondary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    certifications: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex items-start">
              <div className="bg-brand-purple/10 p-2 rounded-full mr-4 flex-shrink-0">
                <Award className="h-5 w-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-semibold">{cert.name}</h3>
                <div className="text-sm text-muted-foreground mb-2">
                  {cert.issuer} • {cert.date}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {cert.skills.split(', ').map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 bg-secondary inline-block rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4 backdrop-blur-sm border border-brand-purple/20">
              Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <AnimatedText text="Professional Experience" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                I'm an aspiring developer specializing in web development, AI, and machine learning.
                My goal is to leverage these technologies to create innovative solutions for real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <PrintableResume />
          </motion.div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: "skills", icon: <Code className="h-5 w-5" />, label: "Skills" },
                { id: "education", icon: <GraduationCap className="h-5 w-5" />, label: "Education" },
                { id: "experience", icon: <Briefcase className="h-5 w-5" />, label: "Experience" },
                { id: "projects", icon: <Code className="h-5 w-5" />, label: "Projects" },
                { id: "certifications", icon: <Award className="h-5 w-5" />, label: "Certifications" },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors backdrop-blur-sm border ${
                    activeTab === tab.id
                      ? "bg-brand-purple text-white border-brand-purple/50"
                      : "bg-secondary/20 text-muted-foreground hover:bg-secondary/40 border-white/10"
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
