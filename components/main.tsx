
'use client';
import { motion } from "framer-motion";
import { FaNode, FaReact } from "react-icons/fa";
import { SiD3Dotjs, SiFirebase, SiGraphql, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { title } from "process";    




const projects = [
    {
        title: "E-commerce Platform",
        description: "Modern shopping experinece with Next.js and Typescript",
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "000000" },
            { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },

        ],
        image: "/images/ecommerce3-2.jpg",
    },
    {
        title: "Analytics Dashboard",
        description: "Real-time data visualization platform",
        tech: [
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "D3.js", icon: SiD3Dotjs, color: "#F9A03C" },
            { name: "Node.js", icon: FaNode, color: "#339933" }
        ],
        image: '/images/istockphoto-1309831153-612x612.jpg'
    },
    {
        title: "Mobile Application",
        description: "Cross-platform mobile app for health tracking",
        tech: [
            { name: "React Native", icon: FaReact, color: "#61DAFB" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "GraphQL", icon: SiGraphql, color: "#E535AB" }
        ],
        image: '/images/76bef4b5120d2b0b37238bdb0212cf0a.webp'
    },
    {
        title:"Ai Career coach",
        description:"Ai powered career coach for personalized job search,Resume Generation and AI mock interviews",
        tech:[
            {name:"Next.js", icon:SiNextdotjs, color:"#000000"},
            {name:"Tailwind CSS", icon:SiTailwindcss, color:"#06B6D4"},
            {name:"Firebase", icon:SiFirebase, color:"#FFCA28"}
        ],
        image:"/images/OIP (1).webp"
    },
]


export default function Main() {
    return (
        <section className=" py-32 relative id='work'">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-20"
                >

                    <h2 className="text-4xl md:text-5xl font-bold
                    text-content mb-4 text-center">Selected Work</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary
                    to-tertiary rounded-full"/>

                </motion.div>
                {/* Project Grid */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-8 relative z-10">

                    {
                        projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.2 }
                                }}

                                className="group relative h-[500px] rounded-3xl overflow-hidden
                    bg-surface border border-white/10 cursor-pointer"
                            >
                                {/* Image Section */}
                                <motion.div
                                    className="h-[250px] relative"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>

                                {/* Content Section */}
                                <motion.div
                                    className="p-6 h-[25px] bg-surface"
                                    transition={{ duration: 0.3 }}
                                >

                                    <div className="flex justify-between items-start
                            mb-4 group/title">

                                        <h3 className="text-2xl font-bold text-content">{project.title}</h3>
                                        <ArrowUpRightIcon className="h-6 w-6 text-content/50
                                        group-hover/title:text-primary transition-colors duration-300"/>

                                    </div>
                                    <p className="text-content/80 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">

                                        {
                                            project.tech.map((tech, j) => (
                                                <span
                                                    key={j}
                                                    className="px-3 py-1 rounded-full bg-white/5 text-content/80
                                            text-sm border border-white/5
                                            hover:bg-surface transition-colors flex items-center
                                            gap-1.5 group/tech"
                                                >
                                                    <tech.icon
                                                        style={{ color: tech.color }}
                                                        className="w-4 h-4 transition-colors" />
                                                    <span className="group-hover/tech:text-content transition-colors">
                                                        {tech.name}
                                                    </span>
                                                </span>
                                            ))
                                        }

                                    </div>

                                </motion.div>
                            </motion.div>
                        ))
                    }


                </div>
               
                
            </div>
            
        </section>

        
    );
}