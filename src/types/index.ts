interface Sources {
    id: string;
    name: string;
}

export interface Article {
    length: number;
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Sources;
    title: string;
    url: string;
    urlToImage: string;
}

export interface Source {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface DataNews {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface DataSources {
    status: string;
    sources: Source[];
}

export interface Options {
    sources?: string;
    apiKey?: string;
}

export type CallbackDataNews = <T extends DataNews>(data?: T) => void;
export type CallbackDataSources = <T extends DataSources>(data?: T) => void;
