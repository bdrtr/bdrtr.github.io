export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bedir Tuğra Karaabalı',
    jobTitle: 'Software Engineer',
    description: 'Full-stack web developer and software engineer',
    url: 'https://bdrtr.github.io',
    sameAs: [
      'https://github.com/bdrtr',
      'https://www.linkedin.com/in/bdrtr',
      'https://links.bedirkaraabali.me/',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Web Development',
      'Software Engineering',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Abant İzzet Baysal Üniversitesi',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Istanbul',
      addressCountry: 'TR',
    },
  };
}

