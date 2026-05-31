import type { ImageMetadata } from 'astro';

// Stained glass (cam altı)
import mermaid      from '../assets/exhibition/mermaid.jpg';
import nautilus     from '../assets/exhibition/nautilus.jpg';
import squid        from '../assets/exhibition/squid.jpg';
import angelfish    from '../assets/exhibition/angelfish.jpg';
import mantisShrimp from '../assets/exhibition/mantis-shrimp.jpg';
import starfish     from '../assets/exhibition/starfish.jpg';
import denizAti     from '../assets/exhibition/deniz-ati.jpg';

// 3D crochet (yün)
import orguResif    from '../assets/exhibition/orgu-resif.jpg';
import derininAlevi from '../assets/exhibition/derinin-alevi.jpg';
import geceBahcesi  from '../assets/exhibition/gece-bahcesi.jpg';

export type Medium = 'stained-glass' | 'crochet';

export interface Work {
  id: string;
  slug: string;
  poster: ImageMetadata;
  video: string;
  medium: Medium;
  year: number;
  /** Aspect ratio class for the card (e.g. 'aspect-[4/5]', 'aspect-square'). */
  aspect: string;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
}

export const exhibition = {
  title: { tr: 'Su Altı', en: 'Underwater' },
  subtitle: {
    tr: 'Cam altı resimler ve örgü heykellerin canlandığı bir dijital sergi',
    en: 'A digital exhibition where under-glass paintings and crochet sculptures come alive',
  },
  year: 2026,
} as const;

export const mediumLabels = {
  'stained-glass': { tr: 'Cam Altı',                 en: 'Stained Glass' },
  crochet:         { tr: '3 Boyutlu Yün Çalışma',    en: '3D Crochet Work' },
} as const;

/**
 * Compact card-caption label — same as mediumLabels for stained glass,
 * but a tighter form for crochet so it fits without wrapping.
 */
export const mediumLabelsShort = {
  'stained-glass': { tr: 'Cam Altı',  en: 'Stained Glass' },
  crochet:         { tr: 'Yün · 3B',  en: 'Crochet · 3D' },
} as const;

export const works: Work[] = [
  // ─── Cam Altı / Stained Glass ─────────────────────────────────────
  {
    id: 'mermaid',
    slug: 'denizkizi',
    poster: mermaid,
    video: '/exhibition/videos/mermaid.mp4',
    medium: 'stained-glass',
    year: 2026,
    aspect: 'aspect-[3/4]',
    title: { tr: 'Denizkızı', en: 'Mermaid' },
    description: {
      tr: 'Altın halenin önünde, su gibi akan kızıl saçlar. Art Nouveau çizgisinde bir cam altı kompozisyonu.',
      en: 'Flame-red hair flowing like water before a golden halo. An Art Nouveau composition in reverse glass.',
    },
  },
  {
    id: 'nautilus',
    slug: 'natilus',
    poster: nautilus,
    video: '/exhibition/videos/nautilus.mp4',
    medium: 'stained-glass',
    year: 2026,
    aspect: 'aspect-square',
    title: { tr: 'Natilus', en: 'Nautilus' },
    description: {
      tr: 'Spiralin geometrisi ile ahtapotun yumuşaklığı arasında bir yaratık. Camın arkasına çekilmiş zaman.',
      en: 'A creature between the geometry of the spiral and the softness of the cephalopod. Time pressed behind glass.',
    },
  },
  {
    id: 'squid',
    slug: 'kalamar',
    poster: squid,
    video: '/exhibition/videos/squid.mp4',
    medium: 'stained-glass',
    year: 2026,
    aspect: 'aspect-[4/5]',
    title: { tr: 'Kalamarlar', en: 'Squids' },
    description: {
      tr: 'Mavinin derinliklerinden yüzeye doğru süzülen üç kalamar. Mercanlar ve yosunlar arasında ışık oyunu.',
      en: 'Three squids gliding from the deep blue toward the surface. Light playing among coral and seaweed.',
    },
  },
  {
    id: 'angelfish',
    slug: 'melek-baligi',
    poster: angelfish,
    video: '/exhibition/videos/angelfish.mp4',
    medium: 'stained-glass',
    year: 2026,
    aspect: 'aspect-square',
    title: { tr: 'İmparator Melek Balığı', en: 'Emperor Angelfish' },
    description: {
      tr: 'Yosunların yarattığı dikey ritimle, balığın yatay çizgileri arasında bir tezat. Camın gerisinde tropik bir an.',
      en: 'A contrast between the vertical rhythm of seaweed and the horizontal stripes of the fish. A tropical moment behind glass.',
    },
  },
  {
    id: 'mantis-shrimp',
    slug: 'mantis-karides',
    poster: mantisShrimp,
    video: '/exhibition/videos/mantis-shrimp.mp4',
    medium: 'stained-glass',
    year: 2026,
    aspect: 'aspect-[3/4]',
    title: { tr: 'Mantis Karides', en: 'Mantis Shrimp' },
    description: {
      tr: 'Onaltı renkli görüş alanına sahip canlının portresi. Kayaların turuncusu ile karidesin çelik mavi gözleri.',
      en: 'A portrait of the creature with sixteen-channel vision. Orange rocks against the shrimp’s steel-blue eyes.',
    },
  },
  {
    id: 'starfish',
    slug: 'denizyildizi',
    poster: starfish,
    video: '/exhibition/videos/starfish.mp4',
    medium: 'stained-glass',
    year: 2026,
    aspect: 'aspect-[5/4]',
    title: { tr: 'Denizyıldızı', en: 'Starfish' },
    description: {
      tr: 'Mercanların pembesi, yosunların yeşili ve yıldızın turuncu sıcaklığı. Minik bir resif sahnesi.',
      en: 'Pink corals, green seaweed and the orange warmth of the starfish. A small reef scene.',
    },
  },
  {
    id: 'deniz-ati',
    slug: 'deniz-ati',
    poster: denizAti,
    video: '/exhibition/videos/deniz-ati.mp4',
    medium: 'stained-glass',
    year: 2026,
    aspect: 'aspect-square',
    title: { tr: 'Deniz Atı', en: 'Seahorse' },
    description: {
      tr: 'Yeşil yosunların arasından süzülen sarı bir süvari. Deniz kabukları ve yıldızlar bir taht gibi altında bekliyor.',
      en: 'A yellow rider gliding between green seaweed. Shells and starfish wait beneath like a throne.',
    },
  },

  // ─── 3 Boyutlu Yün / 3D Crochet ───────────────────────────────────
  {
    id: 'orgu-resif',
    slug: 'orgu-resif',
    poster: orguResif,
    video: '/exhibition/videos/orgu-resif.mp4',
    medium: 'crochet',
    year: 2026,
    aspect: 'aspect-[4/5]',
    title: { tr: 'Örgü Resif', en: 'Crochet Reef' },
    description: {
      tr: 'Mavi denizyıldızı, kızıl mercan, koyu su otları ve deniz kestaneleri — üç boyutta dokunulabilen bir resif sahnesi.',
      en: 'A blue starfish, red coral, dark sea grasses and urchins — a reef scene you can touch in three dimensions.',
    },
  },
  {
    id: 'derinin-alevi',
    slug: 'derinin-alevi',
    poster: derininAlevi,
    video: '/exhibition/videos/derinin-alevi.mp4',
    medium: 'crochet',
    year: 2026,
    aspect: 'aspect-[4/5]',
    title: { tr: 'Derin’in Alevi', en: 'Flame of the Deep' },
    description: {
      tr: 'Kızıl mercan dalları lacivert derinlikte yukarı uzanıyor. Soğuk maviye dokunan sıcak bir nefes.',
      en: 'Crimson coral branches reaching upward through indigo depth. A warm breath touching the cold blue.',
    },
  },
  {
    id: 'gece-bahcesi',
    slug: 'gece-bahcesi',
    poster: geceBahcesi,
    video: '/exhibition/videos/gece-bahcesi.mp4',
    medium: 'crochet',
    year: 2026,
    aspect: 'aspect-[3/4]',
    title: { tr: 'Gece Bahçesi', en: 'Night Garden' },
    description: {
      tr: 'Siyah deniz şakayığı gece açan bir çiçek gibi. Beyaz spiral, kızıl dal ve uyuyan poliplerin etrafında sessiz bir gel-git havuzu.',
      en: 'A black anemone like a night-blooming flower. A quiet tide pool around a white spiral, crimson branch and sleeping polyps.',
    },
  },
];

export function worksByMedium(medium: Medium): Work[] {
  return works.filter((w) => w.medium === medium);
}

export function featuredWorks(): Work[] {
  // Three highlights for the home page hero strip —
  // one striking stained glass, one crochet centrepiece, one quieter piece.
  return [
    works.find((w) => w.id === 'mermaid')!,
    works.find((w) => w.id === 'orgu-resif')!,
    works.find((w) => w.id === 'deniz-ati')!,
  ];
}
