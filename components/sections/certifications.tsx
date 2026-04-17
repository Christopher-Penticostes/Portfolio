import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

export function Certifications() {
  const certificate = [
    {
      quote:
        'Completed The Git & GitHub Bootcamp, gaining practical experience in version control, branching strategies, and collaborative development using Git and GitHub. Demonstrated the ability to manage code efficiently, track changes, and work effectively within team-based workflows.',
      name: 'The Git and Github Bootcamp',
      designation: 'Udemy',
      src: '/images/cert1.jpg',
    },
    {
      quote:
        'Received a Best Web Design Certification for a college project, recognizing the team’s excellence in creating a visually appealing, user-friendly, and well-structured web application. Contributed to both design and development, ensuring a seamless and engaging user experience.',
      name: 'Best Web Design',
      designation: 'Cavite State University - Imus Campus',
      src: '/images/cert2.jpg',
    },
  ];
  return <AnimatedTestimonials testimonials={certificate} autoplay={true} />;
}
