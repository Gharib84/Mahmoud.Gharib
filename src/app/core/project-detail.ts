export interface ProjectDetail {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies?:string[];
    link?:{demo?:string, github?:string};
    techStack: string[];
    githubLink?: string;
}
