export const languages = {
  tr: 'Türkçe',
  en: 'English',
} as const;

export const defaultLang = 'tr' as const;

export const ui = {
  tr: {
    'nav.home': 'Anasayfa',
    'nav.gallery': 'Galeri',
    'nav.about': 'Hakkımda',
    'nav.contact': 'İletişim',

    'site.tagline': 'Bir sanat ve tasarım koleksiyonu',

    'home.eyebrow': 'Koleksiyon',
    'home.hero.title.line1': 'Sanat',
    'home.hero.title.emphasis': 've',
    'home.hero.title.line2': 'İfade',
    'home.hero.subtitle':
      'Resim, dijital tasarım ve karışık medyanın kesiştiği noktada şekillenen, kişisel bir görsel arşiv.',
    'home.cta.gallery': 'Koleksiyonu keşfet',
    'home.featured': 'Öne çıkan eserler',
    'home.viewAll': 'Tümünü gör',
    'home.soon': 'Yakında',
    'home.intro.eyebrow': 'Hakkında',
    'home.intro.heading': 'Form, doku ve sessizliğin diyaloğu.',
    'home.intro.body':
      'AldeArts; renk, doku ve kompozisyonun birbirine yaslandığı bir alan. Her seri, izleyiciye bir an — bir duraksama — sunar.',
    'home.intro.cta': 'Hakkında daha fazlası',

    'gallery.title': 'Galeri',
    'gallery.subtitle': 'Eserler · kategoriye göre',
    'gallery.allCategories': 'Tümü',
    'gallery.empty':
      'Henüz eser eklenmedi. Birinci koleksiyon çok yakında burada olacak.',
    'gallery.placeholder': 'Eser',

    'about.title': 'Hakkımda',
    'about.eyebrow': 'Sanatçı notları',
    'about.placeholder':
      'Bir sanatçı için biyografi, üretim kadar dikkat ister. Bu sayfa şu an boş — ama uzun süre öyle kalmayacak.',
    'about.placeholder.body':
      'Biyografi, sanat felsefesi ve özgeçmiş bilgileri kısa süre içinde eklenecek. O zamana kadar iletişim sayfasından selam atabilirsin.',

    'contact.title': 'İletişim',
    'contact.eyebrow': 'Konuş',
    'contact.subtitle':
      'Sergi davetleri, koleksiyoncu soruları, işbirlikleri veya yalnızca bir selam için yaz.',
    'contact.email.label': 'E-posta',
    'contact.form.name': 'Adınız',
    'contact.form.email': 'E-posta adresiniz',
    'contact.form.subject': 'Konu',
    'contact.form.message': 'Mesajınız',
    'contact.form.submit': 'Gönder',
    'contact.form.note':
      'Form gönderildiğinde e-posta uygulamanız açılır. Doğrudan da yazabilirsiniz.',

    'footer.copyright': 'Tüm hakları saklıdır',
    'footer.explore': 'Gez',
    'footer.contact': 'İletişim',
    'footer.contactDesc':
      'İşbirlikleri, sergi davetleri ve eser soruları için iletişime geç.',

    'category.painting': 'Resim',
    'category.digital': 'Dijital',
    'category.illustration': 'İllüstrasyon',
    'category.sculpture': 'Heykel',
    'category.mixed': 'Karışık Medya',
  },
  en: {
    'nav.home': 'Home',
    'nav.gallery': 'Gallery',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'site.tagline': 'An art and design collection',

    'home.eyebrow': 'Collection',
    'home.hero.title.line1': 'Art',
    'home.hero.title.emphasis': 'and',
    'home.hero.title.line2': 'Expression',
    'home.hero.subtitle':
      'A personal visual archive shaped at the intersection of painting, digital design and mixed media.',
    'home.cta.gallery': 'Explore the collection',
    'home.featured': 'Featured works',
    'home.viewAll': 'View all',
    'home.soon': 'Coming soon',
    'home.intro.eyebrow': 'About',
    'home.intro.heading': 'A dialogue between form, texture and silence.',
    'home.intro.body':
      'AldeArts is a space where colour, texture and composition lean into each other. Each series invites the viewer into a moment — a pause.',
    'home.intro.cta': 'More about the practice',

    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Works · by category',
    'gallery.allCategories': 'All',
    'gallery.empty':
      'No works added yet. The first collection will be here very soon.',
    'gallery.placeholder': 'Work',

    'about.title': 'About',
    'about.eyebrow': 'Artist notes',
    'about.placeholder':
      'A biography deserves the same care as the work itself. This page is empty for now — but not for long.',
    'about.placeholder.body':
      'Biography, artist statement and résumé will be added shortly. Until then, feel free to say hello via the contact page.',

    'contact.title': 'Contact',
    'contact.eyebrow': 'Say hello',
    'contact.subtitle':
      'For exhibition invitations, collector enquiries, collaborations — or simply to say hello.',
    'contact.email.label': 'Email',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Your email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your message',
    'contact.form.submit': 'Send',
    'contact.form.note':
      'Submitting the form opens your email app. You can also write directly.',

    'footer.copyright': 'All rights reserved',
    'footer.explore': 'Browse',
    'footer.contact': 'Get in touch',
    'footer.contactDesc':
      'Collaborations, exhibitions and inquiries about specific works are all welcome.',

    'category.painting': 'Painting',
    'category.digital': 'Digital',
    'category.illustration': 'Illustration',
    'category.sculpture': 'Sculpture',
    'category.mixed': 'Mixed Media',
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof typeof ui[typeof defaultLang];
