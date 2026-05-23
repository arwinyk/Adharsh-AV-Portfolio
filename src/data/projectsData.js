const rawProjects = [
  {
    slug: 'smell-food',
    title: 'Smell Food — Food Discovery & Ordering',
    shortDescription: 'A modern food discovery and ordering experience designed for users who want faster, cleaner, and more visually engaging food browsing.',
    category: 'UI/UX Design',
    featured: true,
    year: '2026',
    client: 'Smell Food',
    role: 'UI/UX Designer',
    platform: 'Mobile App & Web Experience',
    coverImage: '/projects/smell-food-mobile/Screenshot 2026-05-20 011704.webp',
    slides: [
      { src: '/projects/smell-food-mobile/Screenshot 2026-05-20 011704.webp', label: 'Food Feed View', frame: 'mac' },
      { src: '/projects/smell-food-mobile/Screenshot 2026-05-20 011804.webp', label: 'Restaurant Listing', frame: 'mac' },
      { src: '/projects/smell-food-mobile/Screenshot 2026-05-20 011840.webp', label: 'Item Detail & Cart', frame: 'mac' },
      { src: '/projects/smell-food-mobile/Screenshot 2026-05-20 011922.webp', label: 'Checkout Summary', frame: 'mac' },
      { src: '/projects/smell-food-mobile/Screenshot 2026-05-20 012000.webp', label: 'Order Confirmed', frame: 'mac' },
    ],
    metrics: [
      { label: 'UX Simplification', value: '+40%' },
      { label: 'Browse Speed', value: '+25%' },
      { label: 'Checkout Steps', value: '3' }
    ],
    tags: ['Mobile App', 'Food Delivery', 'UX Case Study', 'Visual Design'],
    
    // Legacy support fields mapping (for standard rendering if needed)
    overview: 'Smell Food is a modern food discovery and ordering experience designed for users who want faster, cleaner, and more visually engaging food browsing. Unlike cluttered food delivery apps filled with overwhelming information, Smell Food focuses on simplicity, speed, emotional visual design, and a premium browsing experience.',
    challenge: 'Most food delivery applications suffer from overcrowded interfaces, distracting layouts, excessive promotions, and poor visual hierarchy. Users often struggle to find relevant food quickly, experience decision fatigue, abandon carts during checkout, and feel overloaded by too many options.',
    solution: 'Smell Food solves these issues through visual-first browsing, a clean UI hierarchy, premium product presentation, simplified interactions, and a frictionless ordering flow. The design prioritizes speed, appetite appeal, simplicity, and emotional engagement.',
    deliverables: [
      'Interactive Figma Workspace',
      'Mobile Application Prototyping',
      'Auto-layout Design Systems',
      'High-fidelity Screens',
    ],
    outcomes: [
      'Cleaner food discovery with visually engaging browsing',
      'Faster ordering experience and checkout simplicity',
      'Premium food-tech presentation with strong emotional engagement',
      'Improved browsing speed and ordering clarity'
    ],

    // New deep-dive fields
    about: {
      goals: [
        'Simplify food discovery',
        'Reduce ordering friction',
        'Improve visual engagement',
        'Create a premium food-tech experience',
        'Increase user retention through immersive UI'
      ],
    },
    screens: [
      {
        title: 'Home Screen — Discover Food Faster',
        description: 'The Home screen was designed to help users discover meals instantly without feeling overwhelmed. The experience focuses on fast browsing, visual-first discovery, simplified navigation, and category exploration.',
        decisions: [
          'Large hero banners create emotional food appeal',
          'Search bar positioned prominently for quick access',
          'Food categories improve discoverability',
          'Minimal card clutter improves scanning speed',
          'Featured restaurant sections increase engagement'
        ],
        highlights: ['Quick one-handed navigation', 'Large visual food cards', 'Clear hierarchy', 'Reduced cognitive overload', 'Faster decision making'],
      },
      {
        title: 'Restaurant Detail Screen — Immersive Food Experience',
        description: 'The Restaurant Detail screen focuses on creating trust and appetite simultaneously. Users can browse menu items, view ratings, explore food imagery, check delivery details, and place orders seamlessly.',
        decisions: [
          'Large food imagery increases emotional connection',
          'Sticky CTA improves conversion',
          'Organized menu sections reduce confusion',
          'Clean spacing improves readability',
          'Floating cart interaction improves accessibility'
        ],
        highlights: ['Smooth food browsing', 'Fast add-to-cart interaction', 'Premium visual storytelling', 'Clear information structure', 'Mobile-first usability'],
      },
      {
        title: 'Food Detail Screen — Decision Focused Design',
        description: 'The Food Detail page was designed to help users decide quickly without distractions. The interface highlights food imagery, pricing, ingredients, reviews, and customization options.',
        decisions: [
          'Large hero visuals increase appetite appeal',
          'Minimal layout keeps focus on the product',
          'Quantity controls simplified for speed',
          'CTA positioned within thumb reach',
          'High contrast buttons improve interaction clarity'
        ],
        highlights: ['Faster ordering flow', 'Clear customization', 'Emotion-driven presentation', 'Reduced interaction friction', 'Premium mobile experience'],
      },
      {
        title: 'Cart & Checkout Screen — Frictionless Ordering',
        description: 'The checkout experience was intentionally simplified to reduce abandonment. The goal was fewer steps, faster completion, transparent pricing, and easy payment flow.',
        decisions: [
          'Minimal checkout structure',
          'Clear price breakdown',
          'Strong CTA hierarchy',
          'Simplified address selection',
          'Reduced unnecessary inputs'
        ],
        highlights: ['Faster checkout completion', 'Mobile optimized flow', 'Clear order visibility', 'Reduced user confusion', 'Improved conversion-focused UX'],
      }
    ],
    features: [
      {
        title: 'Smart Food Discovery',
        description: 'Users can explore meals through categories, trending foods, featured restaurants, and personalized recommendations. The system improves browsing efficiency and engagement.'
      },
      {
        title: 'Visual-First Experience',
        description: 'Large food imagery creates stronger emotional interaction and faster decision making.'
      },
      {
        title: 'Quick Search',
        description: 'A simplified search experience helps users discover dishes faster, reduce browsing time, and access restaurants instantly.'
      },
      {
        title: 'Seamless Cart System',
        description: 'Users can add items instantly, edit quantities, review pricing, and checkout quickly without navigating through multiple screens.'
      },
      {
        title: 'Modern Checkout Flow',
        description: 'The checkout process focuses on minimal steps, transparency, mobile accessibility, and faster order completion.'
      }
    ],
    process: [
      {
        phase: '01 — Empathize',
        desc: 'Studied user behavior across existing food delivery applications. Research revealed common frustrations: cluttered homepages, excessive offers, difficult browsing, confusing navigation, checkout fatigue.'
      },
      {
        phase: '02 — Define',
        desc: 'The core problem identified: Food ordering apps prioritize promotions over user experience. The design challenge became creating a clean, emotionally engaging ordering experience.'
      },
      {
        phase: '03 — Ideate',
        desc: 'Explored multiple concepts: card-heavy interfaces, minimalist browsing, visual-first discovery systems. The final direction focused on premium food presentation with simplified navigation.'
      },
      {
        phase: '04 — Prototype',
        desc: 'Created high-fidelity mobile screens using dark luxury UI, modern gradients, premium typography, large visual imagery, and floating card systems.'
      },
      {
        phase: '05 — Test & Iterate',
        desc: 'User testing revealed users preferred larger food visuals, simplified navigation improved browsing, and sticky checkout buttons improved usability.'
      }
    ],
    research: {
      insights: [
        { title: 'Users Decide Visually', desc: 'Food imagery heavily influences ordering behavior.' },
        { title: 'Simplicity Increases Engagement', desc: 'Cleaner layouts improved browsing confidence.' },
        { title: 'Faster Checkout Reduces Drop-Off', desc: 'Users preferred shorter checkout flows.' },
        { title: 'Mobile Experience Is Critical', desc: 'Most ordering behavior happens on mobile devices.' }
      ],
      quotes: [
        { text: 'I just want to find good food quickly without too many distractions.', author: 'College Student' },
        { text: 'Most food apps feel crowded and stressful.', author: 'Working Professional' },
        { text: 'Good food photos make me decide instantly.', author: 'Frequent Food Delivery User' },
        { text: 'Checkout should feel effortless.', author: 'Daily User' }
      ]
    },
    designSystem: {
      visuals: ['Modern', 'Premium', 'Immersive', 'Appetizing', 'Visually cinematic'],
      colors: 'Dark backgrounds with warm orange/red accents. Used to create appetite stimulation, premium contrast, and emotional engagement.',
      typography: 'A bold modern sans-serif system was used to improve readability, hierarchy, and visual impact.',
      components: [
        { name: 'Floating Food Cards', desc: 'Designed to create depth and modern presentation.' },
        { name: 'Rounded Buttons', desc: 'Used to improve touch interaction and friendliness.' },
        { name: 'Gradient CTAs', desc: 'Created stronger visual emphasis for actions.' },
        { name: 'Minimal Navigation', desc: 'Focused on reducing distractions and improving speed.' }
      ]
    }
  },
  {
    slug: 't-expo',
    title: 'T Expo — Travel Discovery Platform',
    shortDescription: 'A community-powered travel discovery platform designed to help tourists explore destinations across India with confidence.',
    category: 'Product Design',
    featured: true,
    year: '2026',
    client: 'T Expo',
    role: 'UI/UX Designer',
    platform: 'iOS & Android App',
    coverImage: '/projects/t-expo/Home Screen.webp',
    slides: [
      { src: '/projects/t-expo/Home Screen.webp', label: 'Discovery Feed', frame: 'mobile' },
      { src: '/projects/t-expo/Place details.webp', label: 'Live Location Status', frame: 'mobile' },
      { src: '/projects/t-expo/Add details.webp', label: 'Community Contribution', frame: 'mobile' },
      { src: '/projects/t-expo/Desktop wide mode.webp', label: 'Desktop Adaptive', frame: 'mac' },
    ],
    metrics: [
      { label: 'Real-Time Updates', value: 'Live' },
      { label: 'Trip Waste Reduction', value: '-80%' },
      { label: 'Community Edits', value: '+300%' }
    ],
    tags: ['Travel App', 'Product Design', 'Mobile UI', 'Community'],
    
    // Legacy support fields
    overview: 'T Expo is a community-powered travel discovery platform designed to help tourists explore destinations across India with confidence. Unlike traditional travel apps that rely on static listings, T Expo combines curated travel discovery with real-time community updates. The platform allows users to discover destinations, verify current conditions, and contribute live updates for future travelers.',
    challenge: 'Travelers often face uncertainty while visiting tourist destinations. Most travel platforms provide outdated information, static listings, inaccurate crowd conditions, and no live updates from visitors. As a result, users waste travel time, destinations may be unexpectedly closed, crowd levels become unpredictable, and travel planning becomes stressful.',
    solution: 'T Expo solves these problems through live status indicators, crowd-level visualization, community-powered updates, category-based exploration, and a simplified information hierarchy. The design prioritizes clarity, trust, accessibility, speed, and traveler confidence.',
    deliverables: [
      'Interactive Prototyping',
      'Mobile Application Design',
      'Design Systems',
      'Auto-Layout Structuring'
    ],
    outcomes: [
      'Transforms tourism from static planning to live adaptive exploration.',
      'Improved travel confidence and information reliability.',
      'Enhanced destination awareness and contribution accessibility.',
      'Reinforced the importance of real-time UX systems and community-driven products.'
    ],

    // New deep-dive fields
    about: {
      goals: [
        'Reduce wasted travel trips',
        'Improve travel confidence',
        'Create a real-time tourism ecosystem',
        'Encourage community participation',
        'Simplify place discovery'
      ],
    },
    screens: [
      {
        title: 'Home Screen — Discovery Starts Here',
        description: 'The Home screen was designed as the primary discovery hub of the application. The goal was to help users explore destinations quickly, filter places effortlessly, and understand place status instantly.',
        decisions: [
          'Large search bar improves accessibility and visibility',
          'Horizontal category filters allow fast browsing',
          'Category cards visually separate travel interests',
          'Large destination cards improve visual engagement',
          'Live status badges reduce uncertainty before travel'
        ],
        highlights: ['Simple vertical scrolling experience', 'One-handed mobile usability', 'Fast content scanning', 'Minimal cognitive overload', 'Immediate visibility of ratings and status'],
      },
      {
        title: 'Place Detail Screen — Real-Time Information',
        description: 'The Place Detail screen focuses on live destination awareness. This screen helps travelers understand whether a place is open, how crowded it currently is, current weather conditions, and recent visitor experiences.',
        decisions: [
          'Large hero image creates emotional connection',
          'Live Status section placed above fold for instant visibility',
          'Crowd Level bar uses visual indicators for faster understanding',
          'Tab system organizes information clearly',
          'Floating action button encourages participation'
        ],
        highlights: ['Real-time status visibility', 'Social proof through community updates', 'Minimal navigation friction', 'Clear information hierarchy', 'Strong visual storytelling'],
      },
      {
        title: 'Add Update Screen — Community Contribution',
        description: 'The Add Update flow was designed to make participation effortless. The objective was to reduce friction while encouraging users to contribute useful travel information.',
        decisions: [
          'Minimal 3-step update flow',
          'Optional image upload reduces effort',
          'Single-tap status selection improves speed',
          'Large text area supports detailed updates',
          'Persistent CTA improves completion rate'
        ],
        highlights: ['Fast contribution flow', 'Mobile-friendly interactions', 'Accessible controls', 'Reduced typing effort', 'Clear feedback-driven layout'],
      }
    ],
    features: [
      {
        title: 'Smart Discovery',
        description: 'Users can browse destinations using categorized filters such as Temples, Waterfalls, Rivers, Food Spots, and Adventure Locations. This improves content discoverability and reduces search effort.'
      },
      {
        title: 'Live Status System',
        description: 'Every destination includes Open status, Closed status, and Crowded status. The system helps travelers make informed decisions before visiting.'
      },
      {
        title: 'Crowd Level Indicator',
        description: 'A visual progress bar communicates crowd density in real time. This allows users to avoid overcrowded places, plan better visit timings, and improve travel comfort.'
      },
      {
        title: 'Community Updates Feed',
        description: 'Users can post weather updates, crowd conditions, photos, and access information. The feed creates a collaborative travel ecosystem.'
      },
      {
        title: 'Add Update Flow',
        description: 'Travelers can contribute updates in seconds through photo upload, status selection, and text-based descriptions. The experience was intentionally designed to be lightweight and frictionless.'
      }
    ],
    process: [
      {
        phase: '01 — Empathize',
        desc: 'Conducted user interviews with solo travelers, families, photographers, and weekend tourists. The research revealed consistent frustrations around outdated information, uncertainty, overcrowding, and poor travel planning.'
      },
      {
        phase: '02 — Define',
        desc: 'The core UX problem identified: Travelers lack access to trustworthy real-time information about destinations. Success metrics focused on reducing wasted trips, improving decision confidence, and increasing community engagement.'
      },
      {
        phase: '03 — Ideate',
        desc: 'Explored multiple concepts: map-heavy interfaces, social feed layouts, and destination-first discovery systems. The final direction combined curated travel discovery with live community updates, creating a balance between exploration and real-world verification.'
      },
      {
        phase: '04 — Prototype',
        desc: 'High-fidelity interfaces were designed using soft green accents, rounded card systems, lightweight visual hierarchy, and mobile-first layouts. The design system focused on simplicity, trust, and visual comfort.'
      },
      {
        phase: '05 — Test & Iterate',
        desc: 'User feedback sessions highlighted the need for stronger crowd visibility, easier contribution flow, and better CTA accessibility. Iterations included a floating add-update button, enhanced crowd bar visibility, and simplified interaction flow.'
      }
    ],
    research: {
      insights: [
        { title: 'Travelers Need Confidence', desc: 'Users want reassurance before starting a journey.' },
        { title: 'Live Information Matters More Than Reviews', desc: 'Current conditions were more valuable than old ratings.' },
        { title: 'Community Trust Improves Decision Making', desc: 'People trust real traveler updates more than static platform content.' },
        { title: 'Simplicity Improves Participation', desc: 'Short contribution flows increased willingness to post updates.' }
      ],
      quotes: [
        { text: 'I drove hours only to find the destination closed.', author: 'Ravi K., Solo Traveler' },
        { text: 'If we knew the crowd level earlier, we would have changed our timing.', author: 'Priya M., Family Traveler' },
        { text: 'I want to share real travel conditions, not just Instagram photos.', author: 'Arun S., Travel Photographer' },
        { text: 'I need category-based discovery, not random search results.', author: 'Sunita R., Weekend Traveler' }
      ]
    },
    designSystem: {
      visuals: ['Clean', 'Approachable', 'Modern', 'Lightweight', 'Trustworthy'],
      colors: 'Soft Teal & Green. Used to represent safety, travel freshness, positive actions, and live status indicators.',
      typography: 'A clean sans-serif typography system was used to improve readability, accessibility, and mobile scanning.',
      components: [
        { name: 'Rounded Cards', desc: 'Used throughout the interface to create softness, visual friendliness, and approachable interactions.' },
        { name: 'Status Pills', desc: 'Designed for instant visibility and quick recognition.' },
        { name: 'Floating Action Button', desc: 'Encourages fast community participation.' },
        { name: 'Progress Indicators', desc: 'Used to communicate crowd density visually.' }
      ]
    }
  }
];

export const projects = [
  rawProjects.find(p => p.slug === 't-expo'),
  rawProjects.find(p => p.slug === 'smell-food')
];
