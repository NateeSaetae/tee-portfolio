// Replace null values with your real information. No personal details are fabricated.
export const profile = {
  name: 'Tee', role: 'Full Stack Developer',
  email: null, github: null, linkedin: null,
  about: 'My focus is where thoughtful interfaces meet the systems behind them. I’m interested in web development, cloud infrastructure, and practical AI — connecting the pieces into useful software.',
};
// Shape: { company, role, period, responsibilities: ['...'] }
export const experiences = [];
export const projects = [{
  id: 'portfolio', title: 'A space on the web.', type: 'PERSONAL WEBSITE',
  description: 'A developer portfolio built around clarity, code, and a little personality.',
  purpose: 'Bring development work, technical interests, and contact details into one considered home.',
  solution: 'A responsive, component-based website with a terminal-inspired identity and accessible navigation.',
  contribution: 'Personal portfolio project · design and implementation assisted by AI.',
  technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
}];
export const skills = [
  { name: 'Frontend', icon: 'window', items: ['React', 'JavaScript', 'Tailwind CSS'], note: 'Interfaces & interactions' },
  { name: 'Backend', icon: 'code', items: ['Python'], note: 'APIs & system development' },
  { name: 'Database', icon: 'database', items: [], note: 'Technology details to be added' },
  { name: 'Cloud', icon: 'cloud', items: ['AWS'], note: 'Infrastructure & deployment' },
  { name: 'AI', icon: 'spark', items: [], note: 'Applied AI · a focus area' },
  { name: 'DevOps / Tools', icon: 'terminal', items: ['Vite'], note: 'Build tools & developer experience' },
];
