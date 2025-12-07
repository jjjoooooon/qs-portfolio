import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, Card } from '../components/ui';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <div>
      <SectionHeading 
        title="Technical Expertise" 
        subtitle="A comprehensive toolkit designed for building high-performance, resilient systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground text-sm font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                        className="h-full bg-gradient-to-r from-primary to-sky-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* QoS Concept Highlight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 p-8 border border-dashed border-border rounded-2xl bg-secondary/20"
      >
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">My Quality Philosophy</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
                <div className="text-2xl font-mono text-primary mb-2">MTBF</div>
                <div className="text-sm text-muted-foreground">Maximizing Mean Time Between Failures</div>
            </div>
            <div className="p-4">
                <div className="text-2xl font-mono text-primary mb-2">MTTR</div>
                <div className="text-sm text-muted-foreground">Minimizing Mean Time To Recovery</div>
            </div>
            <div className="p-4">
                <div className="text-2xl font-mono text-primary mb-2">P99</div>
                <div className="text-sm text-muted-foreground">Focusing on Long-tail Latency</div>
            </div>
            <div className="p-4">
                <div className="text-2xl font-mono text-primary mb-2">SLA</div>
                <div className="text-sm text-muted-foreground">Adhering to strict Service Level Agreements</div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;