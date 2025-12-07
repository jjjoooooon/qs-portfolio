import React from 'react';
import { SectionHeading, Button } from '../components/ui';
import { Download, Printer } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, SKILL_CATEGORIES } from '../constants';

const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
       <div className="flex justify-between items-center mb-8">
         <SectionHeading title="Resume" />
         <div className="flex gap-4">
            <Button variant="outline" onClick={() => window.print()}>
               <Printer className="mr-2 h-4 w-4" /> Print
            </Button>
            <Button>
               <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
         </div>
       </div>

       {/* Resume Paper Effect */}
       <div className="bg-white text-slate-900 p-8 md:p-12 shadow-2xl rounded-sm min-h-screen">
          
          {/* Header */}
          <header className="border-b-2 border-slate-900 pb-8 mb-8 flex justify-between items-end">
             <div>
                <h1 className="text-4xl font-bold tracking-tight uppercase text-slate-900">{PERSONAL_INFO.name}</h1>
                <p className="text-lg font-mono text-slate-600 mt-2">{PERSONAL_INFO.title}</p>
             </div>
             <div className="text-right text-sm text-slate-600 space-y-1">
                <p>{PERSONAL_INFO.email}</p>
                <p>{PERSONAL_INFO.location}</p>
                <p className="text-indigo-600 font-semibold">linkedin.com/in/alexdev</p>
             </div>
          </header>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             
             {/* Main Column */}
             <div className="md:col-span-2 space-y-8">
                <section>
                   <h2 className="text-xl font-bold uppercase tracking-wider border-b border-slate-300 pb-2 mb-4">Experience</h2>
                   <div className="space-y-6">
                      {EXPERIENCE.map(job => (
                         <div key={job.id}>
                            <div className="flex justify-between items-baseline mb-1">
                               <h3 className="font-bold text-lg">{job.role}</h3>
                               <span className="text-sm text-slate-500 font-mono">{job.duration}</span>
                            </div>
                            <p className="text-indigo-700 font-medium text-sm mb-2">{job.company}</p>
                            <ul className="list-disc list-outside ml-4 text-sm text-slate-700 space-y-1">
                               {job.achievements.map((ach, i) => (
                                  <li key={i}>{ach}</li>
                               ))}
                            </ul>
                         </div>
                      ))}
                   </div>
                </section>

                <section>
                   <h2 className="text-xl font-bold uppercase tracking-wider border-b border-slate-300 pb-2 mb-4">Featured Projects</h2>
                   <div className="space-y-4">
                      {PROJECTS.filter(p => p.category !== 'Academic').slice(0, 3).map(proj => (
                         <div key={proj.id}>
                            <h3 className="font-bold">{proj.title}</h3>
                            <p className="text-sm text-slate-700">{proj.description}</p>
                            <p className="text-xs text-slate-500 mt-1">Tech: {proj.tags.join(', ')}</p>
                         </div>
                      ))}
                   </div>
                </section>
             </div>

             {/* Sidebar Column */}
             <div className="space-y-8">
                <section>
                   <h2 className="text-xl font-bold uppercase tracking-wider border-b border-slate-300 pb-2 mb-4">Skills</h2>
                   <div className="space-y-4">
                      {SKILL_CATEGORIES.map(cat => (
                         <div key={cat.title}>
                            <h3 className="font-semibold text-sm mb-1">{cat.title}</h3>
                            <div className="flex flex-wrap gap-1">
                               {cat.skills.map(skill => (
                                  <span key={skill.name} className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-700">
                                     {skill.name}
                                  </span>
                               ))}
                            </div>
                         </div>
                      ))}
                   </div>
                </section>

                <section>
                   <h2 className="text-xl font-bold uppercase tracking-wider border-b border-slate-300 pb-2 mb-4">Education</h2>
                   <div>
                      <h3 className="font-bold">B.S. Software Engineering</h3>
                      <p className="text-sm">University of Technology</p>
                      <p className="text-xs text-slate-500 mt-1">Graduated 2023</p>
                      <p className="text-xs font-medium mt-1">GPA: 3.8</p>
                   </div>
                </section>
             </div>
          </div>

       </div>
    </div>
  );
};

export default Resume;