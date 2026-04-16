'use client';

import * as React from 'react';

import { Progress } from '@/components/ui/progress';

export default function Skills() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-4">
      <p className="text-md font-medium text-gray-400">Languages</p>
      <div className="mt-2 grid grid-cols-3 gap-x-9 gap-y-4 max-md:grid-cols-2">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">HTML</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              100%
            </p>
          </div>
          <Progress
            value={100}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">CSS</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              100%
            </p>
          </div>
          <Progress
            value={100}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">JavaScript</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              80%
            </p>
          </div>
          <Progress
            value={80}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">TypeScript</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              80%
            </p>
          </div>
          <Progress
            value={80}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">PHP</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              75%
            </p>
          </div>
          <Progress
            value={75}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Python</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              20%
            </p>
          </div>
          <Progress
            value={20}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">C++</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              20%
            </p>
          </div>
          <Progress
            value={20}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Java</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              50%
            </p>
          </div>
          <Progress
            value={50}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">SQL</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              80%
            </p>
          </div>
          <Progress
            value={80}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Framework */}
      <p className="text-md font-medium text-gray-400 mt-8">
        Frameworks & Runtimes
      </p>
      <div className="mt-2 grid grid-cols-3 gap-x-9 gap-y-4 max-md:grid-cols-2">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">React.js</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              70%
            </p>
          </div>
          <Progress
            value={70}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Next.js</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              80%
            </p>
          </div>
          <Progress
            value={80}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Node.js</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              70%
            </p>
          </div>
          <Progress
            value={70}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Nest.js</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              50%
            </p>
          </div>
          <Progress
            value={50}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Bootstrap</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              70%
            </p>
          </div>
          <Progress
            value={70}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Tailwind</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              95%
            </p>
          </div>
          <Progress
            value={95}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Wordpress</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              95%
            </p>
          </div>
          <Progress
            value={95}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Packages */}
      <p className="text-md font-medium text-gray-400 mt-8">
        Packages & Libraries
      </p>
      <div className="mt-2 grid grid-cols-3 gap-x-9 gap-y-4 max-md:grid-cols-2">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Prisma ORM</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              75%
            </p>
          </div>
          <Progress
            value={75}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Zod</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              70%
            </p>
          </div>
          <Progress
            value={70}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Better Auth</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              70%
            </p>
          </div>
          <Progress
            value={70}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Components Libraries */}
      <p className="text-md font-medium text-gray-400 mt-8">
        Components Libraries
      </p>
      <div className="mt-2 grid grid-cols-3 gap-x-9 gap-y-4 max-md:grid-cols-2">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Shadcn UI</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              90%
            </p>
          </div>
          <Progress
            value={90}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Aceternity UI</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              75%
            </p>
          </div>
          <Progress
            value={75}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Databases */}
      <p className="text-md font-medium text-gray-400 mt-8">Databases</p>
      <div className="mt-2 grid grid-cols-3 gap-x-9 gap-y-4 max-md:grid-cols-2">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">MySQL</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              90%
            </p>
          </div>
          <Progress
            value={85}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">PostgreSQL</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              85%
            </p>
          </div>
          <Progress
            value={85}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Microsoft SQL Server</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              30%
            </p>
          </div>
          <Progress
            value={30}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Dev Tools */}
      <p className="text-md font-medium text-gray-400 mt-8">
        Dev Tools & Platforms
      </p>
      <div className="mt-2 grid grid-cols-3 gap-x-9 gap-y-4 max-md:grid-cols-2">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Git</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              95%
            </p>
          </div>
          <Progress
            value={95}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">GitHub</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              95%
            </p>
          </div>
          <Progress
            value={95}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Postman</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              65%
            </p>
          </div>
          <Progress
            value={65}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">PgAdmin</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              95%
            </p>
          </div>
          <Progress
            value={95}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Docker</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              50%
            </p>
          </div>
          <Progress
            value={50}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Vercel</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              85%
            </p>
          </div>
          <Progress
            value={85}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">Figma</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              90%
            </p>
          </div>
          <Progress
            value={90}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white">VS Code</p>
            <p className="text-xs font-bold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
              95%
            </p>
          </div>
          <Progress
            value={95}
            className="w-full mt-1"
            style={{ '--primary': '#4ade80' } as React.CSSProperties}
          />
        </div>
      </div>
    </div>
  );
}
