import { Injectable } from '@angular/core';
import { InformationService } from './information.service';

class Page {
  constructor(
    public title: string,
    public id: string,
    public children: Page[],
    public description?: string,
    public content?: Demo[],
    public svg?: string,
    public roadmap?: string
  ) {}
}

class Demo {
  constructor(
    public name: string,
    public description: string,
    public svg: string,
    public link?: string,
    public learning?: boolean,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  projects = this.informations.projects.reverse();
  backend = this.informations.backend;
  frontend = this.informations.frontend;
  db = this.informations.db;
  others = this.informations.others;

  hardskills = [
    new Page (
      'Backend',
      'backend',
      [],
      'Embark on a journey through my backend expertise: a realm where server-side magic brings applications to life. Delve into my skillful orchestration of databases, APIs, and robust architecture, all meticulously crafted to power seamless digital experiences. Welcome to the core of innovation.',
      this.backend,
      'assets/icons/backend.svg',
      'https://roadmap.sh/backend?s=64e9cc31b128dce3cb796349'
    ),

    new Page (
      'Frontend',
      'frontend',
      [],
      'Step into the world of my frontend prowess: where user interfaces transform into captivating experiences. Explore my skill in crafting responsive designs, fluid animations, and seamless interactions, all converging to shape the digital landscapes of tomorrow. Welcome to the artistry of user-centric innovation.',
      this.frontend,
      'assets/icons/frontend.svg',
      'https://roadmap.sh/frontend?s=64e9cc31b128dce3cb796349'
    ),

    new Page (
      'Databases',
      'db',
      [],
      'Dive into my SQL / NoSQL expertise showcase: a realm where data manipulation and database management harmonize seamlessly. Explore my mastery in crafting optimized queries, designing efficient database structures, and ensuring data integrity, all shaping the backbone of robust and organized information systems.',
      this.db,
      'assets/icons/sql.svg',
      'https://roadmap.sh/sql?s=64e9cc31b128dce3cb796349'
    ),

    new Page (
      'Others',
      'others',
      [],
      'Navigating through my multifaceted skills: adept in C, C++, and Bash, I seamlessly bridge the gap between low-level programming, system administration, and efficient scripting. With a foundation in these languages, I contribute to diverse projects and deliver holistic technical solutions.',
      this.others,
      'assets/icons/others.svg',
    ),
  ]

  pages = [
    new Page (
      'About',
      'about',
      []
    ),

    new Page (
      'Projects',
      'projects',
      [],
      'Explore my digital world: a collection of creations that blend code with creativity. I showcase my commitment to innovation through exciting projects, where each line of code tells a unique story. Welcome to the future of technological solutions.',
      this.projects,
    ),

    new Page (
      'Hard Skills',
      'hard-skills',
      this.hardskills,
    ),

    new Page (
      'Soft Skills',
      'soft-skills',
      []
    ),
  ];

  constructor(private informations :InformationService) { }
}
