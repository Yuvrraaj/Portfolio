import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import { 
  Bot, 
  MonitorSmartphone,
  Database,
  Cpu,
  Filter,
  Search,
  Code,
  Brain,
  BarChart
} from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "Interpretable AI for Census-Independent Population Estimation leveraging space technology",
      description: "Developed a deep learning pipeline to estimate population from satellite imagery by detecting buildings using YOLOv8 and incorporating elevation data (DSM & DTM) to infer floor counts. Achieved over 90% accuracy and built a GUI for real-time input and visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      tags: ["Python", "Machine Learning", "AI", "Deep Learning", "Satellite Imagery", "YOLOv8", "GUI", "Population Estimation"],
      code: "https://github.com/Yuvrraaj/Population-Estimation",
      category: "ai"
    },
    {
      id: 2,
      title: "DocuMind AI - Universal Document Intelligence System",
      description: "A powerful AI-driven desktop application that transforms how professionals analyze and interact with documents across any industry. Built with Python and Google Gemini AI, this versatile system processes multiple document formats and provides instant, intelligent answers to complex queries about any type of content. ",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      tags: ["Python", "AI", "Machine Learning", "Document Processing", "Google Gemini AI", "Desktop Application", "Universal Document Intelligence", "Natural Language Processing"],
      code: "https://github.com/Yuvrraaj/DocuMind-AI---Universal-Document-Intelligence-System/tree/main",
      category: "ai"
    },
    {
      id: 3,
      title: "OCR-Based Product Info Extractor",
      description: "Built a standalone executable application that captures product images via webcam and extracts key information like MRP and manufacturing date using OCR and image processing, with 92%+ text recognition accuracy.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      tags: ["Python", "OCR", "Image Processing", "OpenCV", "GUI", "Standalone Application", "Webcam", "Text Recognition", "Product Information"],
      code: "https://github.com/Yuvrraaj/OCR-Text-Extraction",
      category: "ai"
    },
    {
      id: 4,
      title: "Fruit Freshness Detection",
      description: "Created a real-time webcam-based system that identifies fruits (banana, apple, orange, guava) and estimates freshness as a percentage using machine learning techniques, achieving ~90% classification accuracy.",
      image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800",
      tags: ["Python", "Machine Learning", "Computer Vision", "OpenCV", "Real-time", "Webcam", "Fruit Detection", "Freshness Estimation"],
      code: "https://github.com/Yuvrraaj/Freshness_Detection",
      category: "ai"
    },
    {
      id: 5,
      title: "Personal Portfolio",
      description: "A responsive personal portfolio website showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node", "HTML","CSS", "JavaScript", "Portfolio", "Web Development", "Frontend Development", "Responsive Design"],
      code: "https://github.com/oxBinaryBrain/Portfolio_V1",
      category: "web"
    },
    {
      id: 6,
      title: "Animated Car Page",
      description: "This project is a simple web page featuring an animated car moving along a highway. It's implemented using HTML, CSS, and JavaScript.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      tags: ["HTML", "CSS", "JavaScript", "Animation", "Web Development"],
      code: "https://github.com/Yuvrraaj/Car-Animated.git",
      category: "web"
    },
    
    {
      id: 7,
      title: "IPO-WebApp",
      description: "Developed a web application for tracking Initial Public Offerings (IPOs) using React.js and Web3.js, enabling users to view upcoming IPOs, track their performance, and interact with blockchain-based data.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Web3.js", "Blockchain", "IPO Tracking", "Web Development", "JavaScript", "Frontend Development"],
      code: "https://github.com/Yuvrraaj/IPO-WebApp.git",
      category: "blockchain"
    },
    {
      id: 8,
      title: "Blood Group Detection Device",
      description: "Designed and built a non-invasive Blood Group Detection Device using Raspberry Pi, achieving 95% accuracy in determining blood type by analysing light absorption from a fingertip with laser-based transmission and light sensors, eliminating the need for blood samples.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
      tags: ["Raspberry Pi", "IoT", "Electronics", "Python", "Hardware Design", "Blood Group Detection", "Laser Technology", "Light Sensors", "Non-invasive"],
      category: "iot"
    }
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case "ai":
        return Bot;
      case "web":
        return MonitorSmartphone;
      case "blockchain":
        return Database;
      case "iot":
        return Cpu;
      case "ml":
        return Brain;
      case "data":
        return BarChart;
      default:
        return Code;
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ai", name: "AI & ML" },
    { id: "blockchain", name: "Blockchain" },
    { id: "iot", name: "IoT" }
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
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="My Projects" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Explore a collection of my recent work across various technologies and domains.
              </p>
            </div>
          </motion.div>

          {/* Filter and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.1)" }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between glass-panel p-6 rounded-lg">
              {/* Category Filter */}
              <div className="flex items-center">
                <Filter className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="mr-4 text-sm font-medium">Filter:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <motion.button
                      key={category.id}
                      onClick={() => setFilter(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                        filter === category.id 
                          ? "bg-brand-purple text-white" 
                          : "bg-secondary hover:bg-secondary/80 text-muted-foreground"
                      }`}
                    >
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-muted-foreground" />
                </div>
                <motion.input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  whileFocus={{ boxShadow: "0 0 0 3px rgba(155, 135, 245, 0.3)" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  code={project.code}
                  category={project.category}
                  icon={getIcon(project.category)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 glass-panel rounded-lg"
              >
                <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
                <motion.button
                  onClick={() => {
                    setFilter("all");
                    setSearchTerm("");
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: "#8B5CF6" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-brand-purple text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
