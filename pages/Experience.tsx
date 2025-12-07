import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, Card } from '../components/ui';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 15,
      mass: 1,
    },
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
      delay: 0.1, 
    },
  },
};

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeading 
        title="Professional Experience" 
        subtitle="A timeline of my journey in engineering, focusing on impactful contributions and technical growth."
      />

      {/* Main Container */}
      <div className="relative ml-4 md:ml-12">
        {/* Animated Vertical Line */}
        <motion.div 
          className="absolute left-0 top-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Content Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12 pl-8 pb-12"
        >
          {EXPERIENCE.map((job) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Dot */}
              <motion.span 
                variants={dotVariants}
                className="absolute -left-[43px] top-6 h-6 w-6 rounded-full border-4 border-background bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.6)] z-10"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              </motion.span>

              <Card hoverEffect className="p-8 relative overflow-hidden group">
                 {/* Subtle background glow effect */}
                 <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 relative z-10">
                  <div>
                     <h3 className="text-2xl font-bold text-foreground">{job.role}</h3>
                     <div className="flex items-center gap-2 text-primary font-medium text-lg mt-1">
                        <Briefcase size={18} />
                        {job.company}
                     </div>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center gap-2 px-3 py-1 bg-secondary/50 backdrop-blur-sm rounded-full text-muted-foreground font-mono text-sm border border-border">
                    <Calendar size={14} />
                    {job.duration}
                  </div>
                </div>

                <p className="text-muted-foreground italic mb-6 relative z-10">
                  {job.description}
                </p>

                <div className="space-y-3 relative z-10">
                  {job.achievements.map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (i * 0.1) }} // Adjusted delay to sync better with card reveal
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0 ring-4 ring-primary/10"></span>
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;