interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface Post_model {
    id?: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}