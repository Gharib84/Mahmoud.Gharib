export interface ProjectDetail {
    id: number;
    title: string;
    description: string;
    image: string;
    link?: string;
    techStack: string[];
    githubLink?: string;
}
