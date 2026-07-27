export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yuvraj Chauhan",
    url: "https://dcodr1303.vercel.app",
    image: "https://dcodr1303.vercel.app/profile.jpg",
    jobTitle: "Software Engineer",
    description:
      "Software engineer and M.Tech CSE student at IIT Bombay working across cybersecurity, systems, and artificial intelligence.",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Technology Bombay",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Technology Bombay",
    },
    knowsAbout: [
      "Cybersecurity",
      "Systems Engineering",
      "Artificial Intelligence",
      "Deep Learning",
      "Software Engineering",
    ],
    sameAs: [
      "https://github.com/YuvrajChauhan1303",
      "https://linkedin.com/in/dcodr1303",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
