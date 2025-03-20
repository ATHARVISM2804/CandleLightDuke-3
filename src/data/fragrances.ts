import { Fragrance } from '../types';

export const fragrances: Fragrance[] = [
  {
    id: '1',
    name: 'Vanilla & Amber',
    description: 'A warm and inviting blend that creates a cozy atmosphere.',
    mood: 'Relaxing & Comforting',
    topNotes: ['Vanilla Bean', 'Almond'],
    middleNotes: ['Tonka Bean', 'Coconut'],
    baseNotes: ['Amber', 'Musk'],
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Fresh Linen',
    description: 'Clean and crisp scent reminiscent of freshly laundered linens.',
    mood: 'Fresh & Clean',
    topNotes: ['Ozone', 'Citrus'],
    middleNotes: ['Cotton Blossom', 'Lily'],
    baseNotes: ['White Musk', 'Woody Notes'],
    image: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Forest Walk',
    description: 'A refreshing blend of pine, cedar, and earthy notes.',
    mood: 'Energizing & Grounding',
    topNotes: ['Pine Needles', 'Eucalyptus'],
    middleNotes: ['Cedar', 'Fir Balsam'],
    baseNotes: ['Moss', 'Woody Notes'],
    image: 'https://images.unsplash.com/photo-1607892141389-3be8d54d00f0?q=80&w=2940&auto=format&fit=crop',
  },
];