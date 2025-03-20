import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Candle Making',
    excerpt: 'Discover the ancient craft of candle making and how it has evolved.',
    content: `The art of candle making dates back thousands of years...`,
    image: 'https://images.unsplash.com/photo-1602521879205-9e37c77c3077?q=80&w=2940&auto=format&fit=crop',
    date: '2024-03-15',
    author: 'Emma Thompson',
    category: 'Crafts',
  },
  {
    id: '2',
    title: 'Creating the Perfect Ambiance',
    excerpt: 'Learn how to use candles to transform your living space.',
    content: `The right combination of candles can completely transform...`,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=2940&auto=format&fit=crop',
    date: '2024-03-10',
    author: 'Michael Chen',
    category: 'Home Decor',
  },
  {
    id: '3',
    title: 'Understanding Fragrance Notes',
    excerpt: 'A guide to understanding the complexity of candle fragrances.',
    content: `Just like perfumes, candle fragrances are composed of...`,
    image: 'https://images.unsplash.com/photo-1596433809252-901acb9ae0b7?q=80&w=2940&auto=format&fit=crop',
    date: '2024-03-05',
    author: 'Sophie Williams',
    category: 'Education',
  },
];