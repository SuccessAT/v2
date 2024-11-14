export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    image: string;
  }
  
  export interface CaseStudy {
    id: string;
    title: string;
    description: string;
    image: string;
  }
  
  export interface Service {
    icon: React.ElementType;
    title: string;
    description: string;
  }