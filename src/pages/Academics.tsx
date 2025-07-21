
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { BookOpen } from "lucide-react";
import EducationCard from "@/components/EducationCard";
import CertificationCard from "@/components/CertificationCard";

const Academics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      id: 1,
      institution: "Vellore Institute of Technology, Andhra Pradesh",
      degree: "Integrated M.Tech",
      field: "Computer Science & Engineering",
      duration: "2022 - Present",
      location: "Vijayawada, Andhra Pradesh",
      cgpa: "9.25",
      details: [
        "Specializing in Artificial Intelligence and Machine Learning",
        "Key courses include Data Structures, Algorithms, Machine Learning, Deep Learning, and Web Development",
        "Actively participating in research projects related to AI/ML"
      ]
    },
    {
      id: 2,
      institution: "Kendriya Vidyalaya, Alipurduar Junction",
      degree: "Pre-University College",
      field: "Science Stream",
      duration: "2020 - 2022",
      location: "Alipurduar, West Bengal",
      cgpa: "9.37",
      details: [
        "Major subjects included Physics, Mathematics, Chemistry, Computer Science and English",
        "Highlights: Advanced Mathematics & Computer Science",
        "Developed strong foundation in scientific principles and programming"
      ]
    },
    {
      id: 3,
      institution: "Kendriya Vidyalaya, Alipurduar Junction",
      degree: "Secondary High School",
      field: "NCERT-based Curriculum",
      duration: "2011 - 2020",
      location: "Alipurduar, West Bengal",
      cgpa: "9.12",
      details: [
        "Strong foundation in Science",
        "Studied foundations of Mathematics"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Oracle Cloud Infrastructure Generative AI Professional. ",
      issuer: "Oracle",
      date: "2025",
      description: "Certification in Oracle Cloud Infrastructure with a focus on Generative AI technologies, covering foundational concepts and practical applications."
    },
    {
      id: 2,
      name: "Accenture Data Analytics And Visualization Simulation",
      issuer: "Forage",
      date: "2024",
      description: "Hands-on experience in data analytics and visualization techniques using Accenture's simulation platform, focusing on real-world data challenges."
    },
    {
      id: 3,
      name: "Google Cloud Computing Foundations. ",
      issuer: "Google Cloud Skills Boost",
      date: "2025",
      description: "Foundational course on Google Cloud Platform, covering core services, architecture, and best practices for cloud computing."
    },
    {
      id: 4,
      name: "Google Cloud Fundamentals: Core Infrastructure ",
      issuer: "Google Cloud Skills Boost",
      date: "2025",
      description: "Introduction to Google Cloud's core infrastructure services, including Compute Engine, Cloud Storage, and networking, with practical labs."
    },
    {
      id: 5,
      name: "The web developer bootcamp",
      issuer: "Udemy",
      date: "2023",
      description: "Comprehensive course covering HTML, CSS, JavaScript, React.js, Node.js, and more to build full-stack web applications."
    },
    {
      id: 6,
      name: "Google Cloud Essentials ",
      issuer: "Google Cloud Skills Boost",
      date: "2025",
      description: "Foundational course on Google Cloud Platform, covering core services, architecture, and best practices for cloud computing."
    },
    {
      id: 7,
      name: " JavaScript Essentials 1 (JSE) ",
      issuer: "Cisco Networking Academy",
      date: "2024",
      description: "Introduction to JavaScript programming, covering basic syntax, data types, control structures, and functions, with hands-on exercises."
    },
    {
      id: 8,
      name: "Oracle Cloud Infrastructure AI Foundations ",
      issuer: "Oracle",
      date: "2025",
      description: "Foundational course in AI concepts and applications within Oracle Cloud Infrastructure, with a focus on practical use cases."
    }
  ];

  const courseHighlights = [
    "Data Structures and Algorithms",
    "Machine Learning",
    "Artificial Intelligence",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Web Technologies",
    "Software Engineering",
    "Cloud Computing",
    "Data Analytics",
    "Cybersecurity",
    "Server Side Programming"
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Academics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Educational Background" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                My academic journey, courses, and educational achievements that have shaped my technical expertise.
              </p>
            </div>
          </motion.div>

          {/* Education Cards */}
          <div className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  institution={edu.institution}
                  degree={edu.degree}
                  field={edu.field}
                  duration={edu.duration}
                  location={edu.location}
                  cgpa={edu.cgpa}
                  details={edu.details}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Key Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ boxShadow: "0 20px 25px -5px rgba(155, 135, 245, 0.1)" }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Key Courses</h2>
            
            <div className="glass-panel p-10 rounded-lg">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-teal-500/10 p-4 rounded-full">
                  <BookOpen className="h-8 w-8 text-teal-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseHighlights.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(155, 135, 245, 0.2)", 
                      color: "#9b87f5"
                    }}
                    className="flex items-center p-4 bg-secondary/50 rounded-lg"
                  >
                    <div className="h-2 w-2 rounded-full bg-teal-400 mr-3" />
                    <span>{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard 
                  key={cert.id}
                  name={cert.name}
                  issuer={cert.issuer}
                  date={cert.date}
                  description={cert.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
