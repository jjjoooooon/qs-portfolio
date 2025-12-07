import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading, Card, Badge, Button } from '../components/ui';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, BarChart3 } from 'lucide-react';

const CATEGORIES = ['All', 'Web', 'Mobile', 'QoS', 'Academic'];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = PROJECTS.filter(project => 
    filter === 'All' ? true : project.category === filter
  );

  return (
    <div>
      <SectionHeading 
        title="Featured Projects" 
        subtitle="A showcase of technical challenges solved through engineering, ranging from web apps to system reliability tools."
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Card hoverEffect className="h-full flex flex-col group">
                <div className="flex justify-between items-start mb-4">
                   <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors">
                      {project.category === 'QoS' ? <BarChart3 className="text-primary" /> : <ExternalLink className="text-primary" />}
                   </div>
                   <Badge className={
                       project.category === 'QoS' ? 'text-primary border-primary/30' : 'text-muted-foreground'
                   }>{project.category}</Badge>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  {project.description}
                </p>

                {project.metrics && (
                   <div className="mb-6 p-3 bg-primary/10 border border-primary/20 rounded text-sm text-primary font-mono">
                      ⚡ Metric: {project.metrics}
                   </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  {project.githubUrl && (
                     <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1">
                        <Github size={16} /> Code
                     </a>
                  )}
                  {project.liveUrl && (
                     <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1 ml-auto">
                        Live Demo <ExternalLink size={16} />
                     </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;