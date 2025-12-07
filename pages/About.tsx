import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, Card } from '../components/ui';
import { GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading 
          title="About Me" 
          subtitle="Software Engineer passionate about the intersection of code quality, performance metrics, and user experience."
        />
        
        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I am a recent Software Engineering graduate specializing in Quality of Service (QoS). While many developers focus solely on shipping features, my philosophy centers on shipping <em>reliable</em> features. 
            </p>
            <p>
              My academic background provided a strong foundation in distributed systems and networking protocols, which I've applied in real-world scenarios to optimize API latency and ensure data consistency under load.
            </p>
            <p>
              I bridge the gap between development and operations (DevOps), using advanced testing strategies to detect anomalies before they reach production. I believe that high-quality code is the most sustainable way to scale a business.
            </p>
          </div>
          <div className="md:col-span-1">
             <div className="relative">
                <div className="absolute inset-0 bg-primary blur-3xl opacity-20 rounded-full"></div>
                <img 
                  src="https://picsum.photos/400/400?grayscale" 
                  alt="Profile" 
                  className="relative w-full rounded-2xl border-2 border-border shadow-2xl"
                />
             </div>
          </div>
        </div>

        {/* Education Timeline */}
        <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
           <GraduationCap className="text-primary" /> Education
        </h3>
        <div className="space-y-8 relative pl-8 border-l border-border ml-4">
           {/* Timeline Item 1 */}
           <div className="relative">
             <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary"></span>
             <Card className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-xl font-bold text-foreground">Bachelor of Science in Software Engineering</h4>
                  <span className="text-primary font-mono text-sm">2019 - 2023</span>
                </div>
                <p className="text-muted-foreground mb-4">University of Technology</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                   <li>Major GPA: 3.8/4.0</li>
                   <li>Specialization: Network Systems & QoS</li>
                   <li>Thesis: "Adaptive Bitrate Streaming in Congested Networks"</li>
                </ul>
             </Card>
           </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-8 mt-12 flex items-center gap-2">
           <Award className="text-primary" /> Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <Card className="p-4 flex items-center gap-4">
              <div className="bg-secondary p-3 rounded-lg"><Award className="text-sky-500"/></div>
              <div>
                <h4 className="font-bold text-foreground">AWS Certified Solutions Architect</h4>
                <p className="text-xs text-muted-foreground">Associate Level</p>
              </div>
           </Card>
           <Card className="p-4 flex items-center gap-4">
              <div className="bg-secondary p-3 rounded-lg"><Award className="text-emerald-500"/></div>
              <div>
                <h4 className="font-bold text-foreground">Certified Kubernetes Administrator</h4>
                <p className="text-xs text-muted-foreground">The Linux Foundation</p>
              </div>
           </Card>
        </div>

      </motion.div>
    </div>
  );
};

export default About;