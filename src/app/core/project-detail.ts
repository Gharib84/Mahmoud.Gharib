export interface ProjectDetail {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies?:string[];
    link?: string;
    techStack: string[];
    githubLink?: string;
}
