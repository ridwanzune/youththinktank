export interface Publication {
    id: string;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    content: string;
}

export interface Event {
    id?: string;
    date: string;
    title: string;
    description: string;
    link: string;
    status: 'upcoming' | 'past';
}

export interface TeamMember {
    name: string;
    role: string;
    imageUrl: string;
}