import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Server, Cpu, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui';
import { PERSONAL_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)]">
      
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-mono font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-6 border border-primary/20">
            Available for Hire
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            {PERSONAL_INFO.name}
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground font-light flex flex-col md:flex-row items-center justify-center gap-2">
            <span>Software Engineer</span>
            <span className="hidden md:inline text-border">|</span>
            <span className="text-primary font-mono">QoS Specialist</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          {PERSONAL_INFO.tagline}
          <br />
          Specializing in scalable architecture, performance monitoring, and ensuring 99.9% reliability for mission-critical applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/projects">
            <Button size="lg" className="w-full sm:w-auto">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/resume">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full max-w-4xl"
      >
        {PERSONAL_INFO.stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border backdrop-blur-sm shadow-sm">
            <span className="text-4xl font-bold text-foreground mb-2">{stat.value}</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* QoS Principles */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 0.8 }}
         className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-border pt-16"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-primary/10 rounded-lg text-primary">
            <Server size={24} />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Scalability</h3>
          <p className="text-muted-foreground text-sm">Architecting systems that grow seamlessly with user demand.</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-sky-500/10 rounded-lg text-sky-500">
            <Cpu size={24} />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Performance</h3>
          <p className="text-muted-foreground text-sm">Optimizing latency and throughput for real-time responsiveness.</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500">
            <Shield size={24} />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Reliability</h3>
          <p className="text-muted-foreground text-sm">Ensuring uptime and fault tolerance through rigorous QA.</p>
        </div>
      </motion.div>

    </div>
  );
};

export default Home;