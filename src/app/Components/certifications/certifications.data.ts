export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  description?: string;
  // Certificate image and viewing
  certificateImage?: string; // Path to certificate image
  certificateLink?: string;  // Link to view full certificate
}

export const CERTIFICATES_DATA: Certification[] = [
  {
    name: 'Docker for Java Developers',
    issuer: 'Udemy',
    date: 'Aug 2024',
    credentialId: 'UC-555601f9-6943-40f3-8215-49df7a5ec665',
    description: 'Hands-on course covering Docker fundamentals, containerization, images, containers, and Docker usage for Java-based applications.',
    certificateImage: 'assets/certificates/docker-java.jpg',
    certificateLink: 'https://www.udemy.com/certificate/UC-555601f9-6943-40f3-8215-49df7a5ec665/'
  },
  {
    name: 'Certification Program in Java Full Stack Development',
    issuer: 'EduBridge Learning Pvt. Ltd. (NSDC Approved)',
    date: 'May 2024',
    credentialId: 'EBEON1023845789',
    description: 'Comprehensive Java Full Stack certification covering Core Java, SQL, Spring Boot, Angular, and real-world project development.',
    certificateImage: 'assets/certificates/java-fullstack.jpg',
    certificateLink: 'http://www.edubridgeindia.com/certificate-detail?enrollment_number=EBEON1023845789'
  },
  {
    name: 'Java for Programmers Crash Course',
    issuer: 'Udemy',
    date: 'Jan 2025',
    credentialId: 'UC-ab9004e6-4e91-4f9d-a67b-723712258b65',
    description: 'Crash course focused on Java fundamentals, object-oriented programming concepts, and practical coding techniques.',
    certificateImage: 'assets/certificates/java-crash.jpg',
    certificateLink: 'https://www.udemy.com/certificate/UC-ab9004e6-4e91-4f9d-a67b-723712258b65/'
  },
  {
    name: 'SQL (Basic) Certificate',
    issuer: 'HackerRank',
    date: 'Jul 2024',
    credentialId: '32C6E42EE065',
    description: 'Certification validating foundational SQL skills including queries, joins, filtering, and database basics.',
    certificateImage: 'assets/certificates/sql-basic.png',
    certificateLink: 'https://www.hackerrank.com/certificates/32C6E42EE065'
  }
];