import { MapPin } from 'lucide-react';
import Stack from './Stack';
import Experience from './experience';
import { HatchDivider } from './HatchDivider';


export default function About() {
 const points = [
  "I build fast, reliable web apps that turn complex requirements into clean, usable products",
  "I design data-driven tools for public safety teams, helping them act faster with better information",
  "I bring AI into everyday workflows so people get smarter, quicker answers without the extra friction",
];
  return (
    <section id="about" className="bg-gradient-safe">
      <div className="max-w-3xl mx-auto border-x border-[lab(90.6853%_0.399232_-1.45452)]">
        <h2 className="px-4 text-3xl font-bold tracking-tight text-foreground  border-b border-[lab(90.6853%_0.399232_-1.45452)]">
          About Me
        </h2>
         
            <ul className="space-y-3 py-4">
          {points.map((text, i) => (
            <li key={i} className="flex items-center gap-3">
                 <MapPin  className="size-4 pl-2 text-primary" /> 
              <span className="text-base text-muted-foreground">{text}</span>
            </li>
          ))}
        </ul>
        
      </div>
      <HatchDivider />
          <Stack />
          <Experience />
    </section>
  );
}

