import { HoverEffect, CardAction } from '../ui/card-hover-effect';

export function Experience() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: (
      <div>
        <p className="text-2xl pt-4 max-md:text-xl">Web Developer Intern</p>
        <p className="text-xl font-medium text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text max-md:text-lg">
          Wellness PRO Inc.
        </p>
      </div>
    ),
    description: (
      <ul className="list-disc pl-8 text-lg text-gray-400 max-md:text-[16px]">
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
