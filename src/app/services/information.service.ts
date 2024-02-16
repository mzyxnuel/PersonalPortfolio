import { Injectable } from '@angular/core';

class Social {
  constructor(
    public link: string,
    public svg: string,
  ) {}
}

class SoftSkill {
  constructor(
    public name: string,
    public description: string,
    public svg: string,
  ) {}
}

class Demo {
  constructor(
    public name: string,
    public description: string,
    public svg: string,
    public onProgress?: boolean,
    public git?: string,
    public roadmap?: string,
    public hosting?: string,
    public android?: string,
    public ios?: string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  email = '**blurred**'
  name = 'Manuel';
  description = `
  I am a passionate full-stack developer with a focus on backend. 
  My portfolio showcases my skills in creating innovative solutions. 
  Inspired by the future, I am fascinated by cutting-edge technologies
  and disruptive companies like Tesla and SpaceX.`
  cv_file = 'cv_sossaimanuel.pdf'
  logo = 'assets/images/logo/logo-white.png'

  projects = [
    new Demo (
      'CinemaManager',
      'A Java application built using the Model-View-Controller (MVC) design pattern, designed to streamline the internal management of a cinema.',
      'assets/images/projects/cinema.svg',
      false,
      'https://github.com/mzyxnuel/CinemaManager',
    ),
    new Demo (
      'FC4BOOK',
      'A prototype of full stack website similar to Facebook, developed using JavaScript, PHP, and SQL.',
      'assets/images/projects/fc4book.png',
      false,
      'https://github.com/mzyxnuel/FC4BOOK',
      '',
      'https://fc4b00k.000webhostapp.com/html/home.html',
    ),
    new Demo (
      'Web Portfolio',
      'Developed using Angular and enriched with the aesthetics of Tailwind CSS, it captivatingly showcases my skills as a developer through a dynamic and modern interface.',
      'assets/images/projects/portfolio.svg',
      false,
      'https://github.com/mzyxnuel/Web-Portfolio',
      '',
      'https://sossai-manuel.vercel.app',
    ),
    new Demo (
      'Orbit',
      'Orbit is a platform that promotes authentic social interaction and data security. With its unique features, it aims to create a welcoming and engaging online environment for all users.',
      'assets/images/projects/orbit.svg',
      true,
      'https://github.com/mzyxnuel/Orbit',
      '',
    ),
  ]

  backend = [
    new Demo (
      'Rust',
      '"Experienced Rust developer with a proficiency in building high-performance and reliable systems. Capable of designing and implementing efficient, reusable components, and adept at leveraging Rust\'s strengths for creating robust applications.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
      false,
    ),
    new Demo (
      'Node.js',
      'Explore my Node.js mastery: where server-side possibilities unfold through efficient and scalable JavaScript runtime.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      false,
      '',
      'https://roadmap.sh/nodejs?s=64e9cc31b128dce3cb796349'
    ),
    new Demo (
      'Express.js',
      'Highlighting my Express.js skills: seamlessly creating robust and efficient web applications through this minimalistic and flexible Node.js framework.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    ),
    new Demo (
      'PHP',
      'Discover my PHP proficiency: crafting dynamic web experiences through versatile server-side scripting.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    ),
    new Demo (
      'Python',
      'Unveil my Python expertise: harnessing its versatility to build solutions across data science, automation, and more.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      false,
      '',
      'https://roadmap.sh/python?s=64e9cc31b128dce3cb796349'
    ),
    new Demo (
      'Typescript',
      'Spotlighting my TypeScript expertise: elevating web development with strong typing and modern ECMAScript features for more scalable code.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      false,
      '',
      'https://roadmap.sh/typescript?s=64e9cc31b128dce3cb796349',
    ),
    new Demo (
      'Javacript',
      'Shining a light on my JavaScript mastery: harnessing its versatility to breathe life into interactive web experiences.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      false,
      '',
      'https://roadmap.sh/javascript?s=64e9cc31b128dce3cb796349',
    ),
    new Demo (
      'Ruby',
      'Showcasing my Ruby proficiency: leveraging its elegant syntax and dynamic nature to develop elegant and functional applications.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
      true,
    ),
    new Demo (
      'Symfony',
      'Spotlighting my Symfony expertise: building robust and high-performance web applications through this PHP framework\'s elegant architecture.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',
      true,
    ),
  ]

  frontend = [
    new Demo (
      'Angular',
      'Spotlighting my Angular prowess: crafting dynamic and structured web applications through this powerful TypeScript framework.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      false,
      '',
      'https://roadmap.sh/angular?s=64e9cc31b128dce3cb796349',
    ),
    new Demo (
      'React',
      'I am proficient in using React with a strong background in developing responsive and high-performance user interfaces.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      true,
    ),
    new Demo (
      'Typescript',
      'Spotlighting my TypeScript expertise: elevating web development with strong typing and modern ECMAScript features for more scalable code.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      false,
      '',
      'https://roadmap.sh/typescript?s=64e9cc31b128dce3cb796349',
    ),
    new Demo (
      'Javacript',
      'Shining a light on my JavaScript mastery: harnessing its versatility to breathe life into interactive web experiences.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      false,
      '',
      'https://roadmap.sh/javascript?s=64e9cc31b128dce3cb796349',
    ),
    new Demo (
      'Sass',
      'Demonstrating my Sass proficiency: elevating web design with efficient and modular CSS preprocessing for stylish and maintainable stylesheets.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    ),
    new Demo (
      'TailwindCSS',
      'Showcasing my Tailwind expertise: streamlining web development through a utility-first CSS framework for rapid and responsive interface creation.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    ),
    new Demo (
      'Dart',
      'Highlighting my Dart expertise: leveraging its efficiency to craft high-performance, cross-platform applications with a focus on smooth user experiences.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
      true,
    ),
    new Demo (
      'Flutter',
      'Showcasing my Flutter skills: building captivating and responsive native interfaces for mobile, web, and desktop using a single codebase.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      true,
      '',
      'https://roadmap.sh/flutter?s=64e9cc31b128dce3cb796349',
    ),
  ]

  db = [
    new Demo (
      'MySQL',
      'Highlighting my MySQL proficiency: skillfully managing and querying relational databases for robust data storage and retrieval solutions.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
    ),
    new Demo (
      'PostgreSQL',
      'Spotlighting my PostgreSQL expertise: adeptly designing, managing, and querying databases for reliable and scalable data solutions.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      true,
      '',
      'https://roadmap.sh/postgresql-dba?s=64e9cc31b128dce3cb796349',
    ),
    new Demo (
      'Neo4j',
      'I possess substantial skills in Neo4j, specializing in the design and management of complex graphs for advanced data analysis.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg',
      true,
    ),
    new Demo (
      'MongoDB',
      'Showcasing my MongoDB mastery: harnessing the power of NoSQL for flexible and efficient data storage and retrieval in modern applications.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    ),
    new Demo (
      'Firestore',
      'I have extensive expertise in Firestore, excelling in data modeling and real-time database solutions, driving efficient and scalable web applications.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    ),
  ]

  others = [
    new Demo (
      'Bash',
      'Highlighting my Bash expertise: orchestrating efficient and automated workflows through command-line mastery for streamlined system administration and scripting.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    ),
    new Demo (
      'Java',
      'Showcasing my Java proficiency: creating powerful and versatile applications that run seamlessly across platforms.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      false,
      '',
      'https://roadmap.sh/java?s=64e9cc31b128dce3cb796349'
    ),
    new Demo (
      'C',
      'Spotlighting my C proficiency: crafting efficient and powerful programs through this foundational programming language.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    ),
    new Demo (
      'C++',
      'Showcasing my C++ expertise: architecting robust and high-performance software solutions with this versatile and object-oriented programming language.',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      true
    ),
  ]

  socials: Social[] = [
    new Social(
      'https://github.com/mzyxnuel',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    ),
    new Social(
      'https://www.linkedin.com/in/sossai-manuel/',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg'
    ),
  ]

  softskills_description = `Explore my versatile soft skills: adept communication, collaborative spirit, and adaptability converge to foster effective teamwork and innovative problem-solving. With a keen eye for empathy and a growth mindset, I navigate challenges to deliver impactful results.`
  softskills: SoftSkill[] = [
    new SoftSkill(
      'Effective Communication',
      'The ability to express oneself clearly and actively listen to others, facilitating the exchange of ideas and information while ensuring understanding.',
      'assets/icons/talk.svg'
    ),
    new SoftSkill(
      'Teamwork',
      'The skill of collaborating with others, sharing ideas, providing support, and respecting team members to achieve common goals.',
      'assets/icons/group.svg'
    ),
    new SoftSkill(
      'Leadership',
      'The art of inspiring and guiding individuals or groups towards shared objectives, often involving making informed decisions, and fostering a sense of direction.',
      'assets/icons/leadership.svg'  
    ),
    new SoftSkill(
      'Problem Solving',
      'The capacity to creatively and systematically address challenges or obstacles, identifying and implementing solutions to achieve desired outcomes.',
      'assets/icons/problem-solving.svg'
    ),
    new SoftSkill(
      'Negotiation',
      'The skill of reaching mutually beneficial agreements or compromises between parties by understanding differing perspectives and finding common ground.',
      'assets/icons/negotiation.svg'
    ),
    new SoftSkill(
      'Adaptability',
      'The flexibility to adjust actions, strategies, or approaches in response to changing circumstances or new situations, ensuring effective performance.',
      'assets/icons/connect.svg'
    ),
  ]

  constructor() { }
}



