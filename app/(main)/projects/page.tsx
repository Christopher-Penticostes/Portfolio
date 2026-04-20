import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import {
  Store,
  ChefHat,
  School,
  BriefcaseBusiness,
  Calculator,
  Gamepad2,
  Cog,
} from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function Project() {
  return (
    <div className="w-full overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 100% at 50% 0%, black 0%, black 40%, transparent 75%)',
          maskImage:
            'radial-gradient(ellipse 70% 100% at 50% 0%, black 0%, black 40%, transparent 75%)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-35 pb-20 max-lg:pt-30 max-lg:pb-30">
        <div className="mb-8 text-white">
          <p className="font-semibold text-4xl/14 max-md:text-3xl/12">
            My Projects
          </p>
          <p className="text-lg max-w-5xl text-gray-300 max-md:text-[16px]">
            A collection of projects I&apos;ve built and am currently working
            on. Some are complete, others are still in progress — all shared
            here to showcase my work and growth as a developer.
          </p>
        </div>
        <BentoGrid className="w-full mx-auto grid-cols-2 max-lg:grid-cols-1">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className="p-6 bg-[#171717] border-2 border-[#262626]"
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const items = [
  {
    title: 'Job Application Tracker',
    description: (
      <>
        <p className="text-gray-400">
          Job Application Tracker is an online tool currently being developed to
          help job seekers stay organized throughout their job hunt. Users can
          log applications, track statuses, and monitor their progress all in
          one place. The platform is still actively being built, with more
          features continuously being added and improved.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 w-full">
          <Badge className="dark h-5 px-3" variant="next">
            Next.js
          </Badge>
          <Badge className="dark h-5 px-3" variant="react">
            React
          </Badge>
          <Badge className="dark h-5 px-3" variant="prisma">
            Prisma ORM
          </Badge>
          <Badge className="dark h-5 px-3" variant="postgresql">
            PostgreSQL
          </Badge>
          <Badge className="dark h-5 px-3" variant="auth">
            Better Auth
          </Badge>
          <Badge className="dark h-5 px-3" variant="zod">
            Zod
          </Badge>
          <Badge className="dark h-5 px-3" variant="shadcn">
            Shadcn UI
          </Badge>
          <Badge className="dark h-5 px-3" variant="docker">
            Docker
          </Badge>
          <Badge className="dark h-5 px-3" variant="vercel">
            Vercel
          </Badge>
        </div>
      </>
    ),
    header: (
      <div className="relative flex items-center justify-center gap-2 bg-neutral-600 w-full h-68 rounded-lg overflow-hidden shrink-0 max-lg:h-88 max-md:h-36 ">
        <Cog className="h-6 w-6 text-white" />
        <p className="font-bold text-white text-lg">Work in Progress</p>
      </div>
    ),
    icon: <BriefcaseBusiness className="h-4 w-4 text-neutral-500" />,
  },
  {
    title:
      'Online Ordering System with Product Image to 3D Viewing and Conversion',
    description: (
      <>
        <p className="text-gray-400">
          Developed a full-stack e-commerce platform for our Capstone Project
          that enables seamless product browsing and ordering, featuring an
          integrated AI API to convert product images into 3D models. My group
          and I implemented real-time delivery tracking using Leaflet.js,
          powered by Server-Sent Events for live updates. We prioritized a
          user-friendly design and ensured data security for safe online
          transactions.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge className="dark h-5 px-3" variant="html">
            HTML
          </Badge>
          <Badge className="dark h-5 px-3" variant="css">
            CSS
          </Badge>
          <Badge className="dark h-5 px-3" variant="javascript">
            JavaScript
          </Badge>
          <Badge className="dark h-5 px-3" variant="php">
            PHP
          </Badge>
          <Badge className="dark h-5 px-3" variant="mysql">
            MySQL
          </Badge>
          <Badge className="dark h-5 px-3" variant="sse">
            SSE
          </Badge>
          <Badge className="dark h-5 px-3" variant="leaftlet">
            LeafletJS
          </Badge>
        </div>
      </>
    ),
    header: (
      <div className="relative w-full h-68 rounded-lg overflow-hidden shrink-0 max-lg:h-88 max-md:h-36">
        <Image
          src="/images/ordering-system.png"
          loading="lazy"
          alt="Ordering System"
          fill
          className="object-cover"
        />
      </div>
    ),
    icon: <Store className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'WordPress-Based Online Ordering System',
    description: (
      <>
        <p className="text-gray-400">
          Built and customized a WordPress website designed to meet the
          company&apos;s requirements. My team and I integrated WooCommerce to
          handle online ordering transactions, enabling customers to browse
          products, and place orders. We also customized the design for better
          user experience, ensured mobile responsiveness, and optimized the site
          for performance and security.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge className="dark h-5 px-3" variant="html">
            HTML
          </Badge>
          <Badge className="dark h-5 px-3" variant="css">
            CSS
          </Badge>
          <Badge className="dark h-5 px-3" variant="javascript">
            JavaScript
          </Badge>
          <Badge className="dark h-5 px-3" variant="wordpress">
            Wordpress
          </Badge>
          <Badge className="dark h-5 px-3" variant="woocommerce">
            WooCommerce
          </Badge>
          <Badge className="dark h-5 px-3" variant="elementor">
            Elementor
          </Badge>
        </div>
      </>
    ),
    header: (
      <div className="relative w-full h-68 rounded-lg overflow-hidden shrink-0 max-lg:h-88 max-md:h-36">
        <Image
          src="/images/wordpress.png"
          loading="lazy"
          alt="Ordering System"
          fill
          className="object-cover"
        />
      </div>
    ),
    icon: <Store className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Online Food Ordering System',
    description: (
      <>
        <p className="text-gray-400">
          Developed an Online Food Ordering System for our school project that
          allows users to browse menus, place orders, and make payments
          digitally. The system streamlines the ordering process by providing an
          easy-to-use interface for customers and an order management dashboard
          for administrators. It also includes features such as order tracking,
          notifications, and secure transaction handling.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge className="dark h-5 px-3" variant="html">
            HTML
          </Badge>
          <Badge className="dark h-5 px-3" variant="css">
            CSS
          </Badge>
          <Badge className="dark h-5 px-3" variant="javascript">
            JavaScript
          </Badge>
          <Badge className="dark h-5 px-3" variant="php">
            PHP
          </Badge>
          <Badge className="dark h-5 px-3" variant="mysql">
            MySQL
          </Badge>
        </div>
      </>
    ),
    header: (
      <div className="relative w-full h-68 rounded-lg overflow-hidden shrink-0 max-lg:h-88 max-md:h-36">
        <Image
          src="/images/food-ordering.png"
          loading="lazy"
          alt="Ordering System"
          fill
          className="object-cover"
        />
      </div>
    ),
    icon: <ChefHat className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Student Guidance and Counseling System',
    description: (
      <>
        <p className="text-gray-400">
          Developed a Guidance and Counseling System for our school project that
          includes features such as appointment scheduling, announcements, and a
          mental health assessment test to evaluate students’ well-being. The
          system aims to provide accessible support for students, improve
          communication between counselors and learners, and streamline the
          management of counseling services.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge className="dark h-5 px-3" variant="html">
            HTML
          </Badge>
          <Badge className="dark h-5 px-3" variant="css">
            CSS
          </Badge>
          <Badge className="dark h-5 px-3" variant="javascript">
            JavaScript
          </Badge>
          <Badge className="dark h-5 px-3" variant="php">
            PHP
          </Badge>
          <Badge className="dark h-5 px-3" variant="mysql">
            MySQL
          </Badge>
        </div>
      </>
    ),
    header: (
      <div className="relative w-full h-68 rounded-lg overflow-hidden shrink-0 max-lg:h-88 max-md:h-36">
        <Image
          src="/images/guidance-system.png"
          loading="lazy"
          alt="Ordering System"
          fill
          className="object-cover"
        />
      </div>
    ),
    icon: <School className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Calculator',
    description: (
      <>
        <p className="text-gray-400">
          Developed a calculator system that performs basic arithmetic
          operations such as addition, subtraction, multiplication, and
          division. The project also included input validation to handle errors
          like division by zero and invalid entries.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge className="dark h-5 px-3" variant="html">
            HTML
          </Badge>
          <Badge className="dark h-5 px-3" variant="css">
            CSS
          </Badge>
          <Badge className="dark h-5 px-3" variant="javascript">
            JavaScript
          </Badge>
        </div>
      </>
    ),
    header: (
      <div className="relative w-full h-68 rounded-lg overflow-hidden shrink-0 max-lg:h-88 max-md:h-36">
        <Image
          src="/images/calculator.png"
          loading="lazy"
          alt="Ordering System"
          fill
          className="object-cover"
        />
      </div>
    ),
    icon: <Calculator className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Jack and Poy',
    description: (
      <>
        <p className="text-gray-400">
          Developed a Rock-Paper-Scissors game using HTML, CSS, and JavaScript.
          The game allows players to compete against the computer, with results
          displayed instantly after each round.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge className="dark h-5 px-3" variant="html">
            HTML
          </Badge>
          <Badge className="dark h-5 px-3" variant="css">
            CSS
          </Badge>
          <Badge className="dark h-5 px-3" variant="javascript">
            JavaScript
          </Badge>
        </div>
      </>
    ),
    header: (
      <div className="relative w-full h-68 rounded-lg overflow-hidden shrink-0 max-lg:h-88 max-md:h-36">
        <Image
          src="/images/jack-poy.png"
          loading="lazy"
          alt="Ordering System"
          fill
          className="object-cover"
        />
      </div>
    ),
    icon: <Gamepad2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Guessing Number',
    description: (
      <>
        <p className="text-gray-400">
          Developed a Number Guessing Game using HTML, CSS, and JavaScript. The
          game generates a random number within a given range, and players must
          guess the correct number with feedback provided after each attempt
          (too high, too low, or correct).
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge className="dark h-5 px-3" variant="html">
            HTML
          </Badge>
          <Badge className="dark h-5 px-3" variant="css">
            CSS
          </Badge>
          <Badge className="dark h-5 px-3" variant="javascript">
            JavaScript
          </Badge>
        </div>
      </>
    ),
    header: (
      <div className="relative w-full h-68 rounded-lg overflow-hidden shrink-0 max-lg:h-88 max-md:h-36">
        <Image
          src="/images/guessing-number.png"
          loading="lazy"
          alt="Ordering System"
          fill
          className="object-cover"
        />
      </div>
    ),
    icon: <Gamepad2 className="h-4 w-4 text-neutral-500" />,
  },
];
