import { HoverEffect, CardAction } from '../ui/card-hover-effect';

export function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: (
      <div>
        <p className="text-2xl pt-4">AP Creative Advertising Corp.</p>
        <p className="text-xl font-medium text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
          Full Stack Developer
        </p>
      </div>
    ),
    description: (
      <ul className="list-disc pl-8 text-lg text-gray-400">
        <li className="mb-4">
          Developed an internal system using Next.js and React.js to support
          more efficient company operations.
        </li>
        <li className="mb-4">
          Designed modern, responsive UIs using Tailwind CSS and Shadcn UI to
          improve the employee user experience.
        </li>
        <li className="mb-4">
          Managed the company database with PostgreSQL and Prisma ORM, focusing
          on data security and accessibility
        </li>
        <li>
          Worked with the team to handle Vercel deployments and Docker database
          setups for a consistent workflow.
        </li>
      </ul>
    ),
    action: (
      <CardAction className="text-xs text-black bg-white/80 px-3 py-1 rounded-full">
        Makati, Metro Manila
      </CardAction>
    ),
  },
  {
    title: (
      <div>
        <p className="text-2xl pt-4">Wellness PRO Inc.</p>
        <p className="text-xl font-medium text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
          Web Developer Intern
        </p>
      </div>
    ),
    description: (
      <ul className="list-disc pl-8 text-lg text-gray-400">
        <li className="mb-4">
          Built a branded WordPress platform using Elementor and WooCommerce for
          a consistent corporate identity.
        </li>
        <li className="mb-4">
          Redesigned the UI/UX in Figma to modernize the interface and improve
          the user experience.
        </li>
        <li>
          Collaborated with teams to learn and apply professional web
          development workflows
        </li>
      </ul>
    ),
    action: (
      <CardAction className="text-xs text-black bg-white/80 px-3 py-1 rounded-full">
        Pasig, Metro Manila
      </CardAction>
    ),
  },
];
