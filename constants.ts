import { Scenario, ScenarioType, MarketingVideo, ComparisonLink } from './types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'combined',
    type: ScenarioType.HYBRID,
    name: 'Shaheqa 12 (Combined Portfolio)',
    color: '#4A2C5A', // Royal Purple
    description: 'Comprehensive analysis for the 20-unit luxury portfolio. Combining 12 × 1BR apartments (8 STR + 4 LTR) and 8 × 2BR apartments (5 STR + 3 LTR) across high-vibe peak (5 months) and off-peak (7 months) seasonality in Riyadh.',
    
    financials: {
        worst: {
            revenue: 4116160, 
            mabaatShare: 4116160 * 0.15, 
            netIncome: 4116160 * 0.85, 
            roi: 13.7
        },
        base: {
            revenue: 4332800,
            mabaatShare: 4332800 * 0.15, 
            netIncome: 4332800 * 0.85, 
            roi: 14.4
        },
        best: {
            revenue: 4549440, 
            mabaatShare: 4549440 * 0.15, 
            netIncome: 4549440 * 0.85, 
            roi: 15.2
        }
    },

    propertyValue: 30000000, 
    
    unitCount: 20,
    unitLabel: 'Units',
    occupancyDurationLabel: 'Annual Hybrid Projection',
    
    unitMix: [
        { 
            name: '1 Bedroom (Short-Term Rental) - 8 Units', 
            count: 8, 
            avgPrice: 194600, // (21000*5 + 12800*7)
            priceRange: { min: 184870, avg: 194600, max: 204330 }, 
        },
        { 
            name: '1 Bedroom (Long-Term Rental) - 4 Units', 
            count: 4, 
            avgPrice: 149500, // (18000*5 + 8500*7)
            priceRange: { min: 142025, avg: 149500, max: 156975 }, 
        },
        { 
            name: '2 Bedroom (Short-Term Rental) - 5 Units', 
            count: 5, 
            avgPrice: 283500, // (28000*5 + 20500*7)
            priceRange: { min: 269325, avg: 283500, max: 297675 }, 
        },
        { 
            name: '2 Bedroom (Long-Term Rental) - 3 Units', 
            count: 3, 
            avgPrice: 253500, // (25500*5 + 18000*7)
            priceRange: { min: 240825, avg: 253500, max: 266175 }, 
        }
    ],
  },
  {
    id: '1br',
    type: ScenarioType.HYBRID,
    name: '1 Bedroom Segment (12 Units)',
    color: '#2A5B64', // Teal
    description: 'Targeted analysis for the 12 One-Bedroom apartments comprising 8 Short-Term Rental (STR) and 4 Long-Term Rental (LTR) layouts. Designed to capture professional executives and holidaymakers.',
    
    financials: {
        worst: {
            revenue: 2047060, 
            mabaatShare: 2047060 * 0.15,
            netIncome: 2047060 * 0.85, 
            roi: 12.2
        },
        base: {
            revenue: 2154800, 
            mabaatShare: 2154800 * 0.15,
            netIncome: 2154800 * 0.85, 
            roi: 12.8
        },
        best: {
            revenue: 2262540, 
            mabaatShare: 2262540 * 0.15,
            netIncome: 2262540 * 0.85, 
            roi: 13.5
        }
    },

    propertyValue: 18000000, 
    
    unitCount: 12,
    unitLabel: 'Units',
    occupancyDurationLabel: '1BR Sub-Portfolio',
    
    unitMix: [
        { 
            name: '1BR (STR) Layouts', 
            count: 8, 
            avgPrice: 194600,
            priceRange: { min: 184870, avg: 194600, max: 204330 },
        },
        { 
            name: '1BR (LTR) Layouts', 
            count: 4, 
            avgPrice: 149500,
            priceRange: { min: 142025, avg: 149500, max: 156975 },
        }
    ],
  },
  {
    id: '2br',
    type: ScenarioType.HYBRID,
    name: '2 Bedroom Segment (8 Units)',
    color: '#8A6E99', // Muted Violet
    description: 'Targeted analysis for the 8 Two-Bedroom apartments comprising 5 Short-Term Rental (STR) and 3 Long-Term Rental (LTR) units. Geared toward high-income families and premium business trips.',
    
    financials: {
        worst: {
            revenue: 2069100, 
            mabaatShare: 2069100 * 0.15,
            netIncome: 2069100 * 0.85, 
            roi: 15.6
        },
        base: {
            revenue: 2178000, 
            mabaatShare: 2178000 * 0.15,
            netIncome: 2178000 * 0.85, 
            roi: 16.4
        },
        best: {
            revenue: 2286900, 
            mabaatShare: 2286900 * 0.15,
            netIncome: 2286900 * 0.85, 
            roi: 17.2
        }
    },

    propertyValue: 12000000, 
    
    unitCount: 8,
    unitLabel: 'Units',
    occupancyDurationLabel: '2BR Sub-Portfolio',
    
    unitMix: [
        { 
            name: '2BR (STR) Layouts', 
            count: 5, 
            avgPrice: 283500,
            priceRange: { min: 269325, avg: 283500, max: 297675 },
        },
        { 
            name: '2BR (LTR) Layouts', 
            count: 3, 
            avgPrice: 253500,
            priceRange: { min: 240825, avg: 253500, max: 266175 },
        }
    ],
  },
  {
    id: 'str',
    type: ScenarioType.SHORT_TERM,
    name: 'STR Portfolio Segment (13 Units)',
    color: '#D4AF37', // Gold
    description: 'Consolidated Short-Term Rental (STR) segment containing 13 units (8 × 1BR and 5 × 2BR). Programmed to capitalize on peak Riyadh winter tourism season.',
    
    financials: {
        worst: {
            revenue: 2825585, 
            mabaatShare: 2825585 * 0.15,
            netIncome: 2825585 * 0.85, 
            roi: 14.5
        },
        base: {
            revenue: 2974300, 
            mabaatShare: 2974300 * 0.15,
            netIncome: 2974300 * 0.85, 
            roi: 15.2
        },
        best: {
            revenue: 3123015, 
            mabaatShare: 3123015 * 0.15,
            netIncome: 3123015 * 0.85, 
            roi: 16.0
        }
    },

    propertyValue: 19500000, 
    
    unitCount: 13,
    unitLabel: 'Units',
    occupancyDurationLabel: 'STR Sub-Portfolio',
    
    unitMix: [
        { 
            name: '1BR Short-Term layouts', 
            count: 8, 
            avgPrice: 194600,
            priceRange: { min: 184870, avg: 194600, max: 204330 },
        },
        { 
            name: '2BR Short-Term layouts', 
            count: 5, 
            avgPrice: 283500,
            priceRange: { min: 269325, avg: 283500, max: 297675 },
        }
    ],
  },
  {
    id: 'ltr',
    type: ScenarioType.LONG_TERM,
    name: 'LTR Portfolio Segment (7 Units)',
    color: '#AA7C11', // Bronze
    description: 'Steady Long-Term Rental (LTR) segment of 7 premium contracts (4 × 1BR and 3 × 2BR). Providing visual financial predictability, lowering operational churn and marketing costs.',
    
    financials: {
        worst: {
            revenue: 1290575, 
            mabaatShare: 1290575 * 0.15,
            netIncome: 1290575 * 0.85, 
            roi: 12.3
        },
        base: {
            revenue: 1358500, 
            mabaatShare: 1358500 * 0.15,
            netIncome: 1358500 * 0.85, 
            roi: 12.9
        },
        best: {
            revenue: 1426425, 
            mabaatShare: 1426425 * 0.15,
            netIncome: 1426425 * 0.85, 
            roi: 13.6
        }
    },

    propertyValue: 10500000, 
    
    unitCount: 7,
    unitLabel: 'Units',
    occupancyDurationLabel: 'LTR Sub-Portfolio',
    
    unitMix: [
        { 
            name: '1BR Long-Term layouts', 
            count: 4, 
            avgPrice: 149500,
            priceRange: { min: 142025, avg: 149500, max: 156975 },
        },
        { 
            name: '2BR Long-Term layouts', 
            count: 3, 
            avgPrice: 253500,
            priceRange: { min: 240825, avg: 253500, max: 266175 },
        }
    ],
  }
];

export const MARKETING_VIDEOS: MarketingVideo[] = [
    {
        id: 'v1',
        title: 'Community Overview',
        thumbnailUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
        videoUrl: '#',
    },
    {
        id: 'v2',
        title: 'Apartment Interior',
        thumbnailUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
        videoUrl: '#',
    }
];

export const COMPARISON_LINKS: Record<string, ComparisonLink[]> = {
  combined: [
    {
        platform: 'Azure Compound',
        type: '1 Bedroom Apartment',
        title: '1 Bedroom Apartment in Al Rabwa',
        location: 'Al Rabwa',
        area: '117 sqm',
        price: 94864,
        url: 'https://rightcompound.com/green-diamond-compound',
        photosUrl: 'https://www.canva.com/design/DAG8309BRgE/2V4p8Fmz0oOuQa-AMXBNow/edit?utm_content=DAG8309BRgE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    },
    {
        platform: 'Roshan Residences',
        type: '1 Bedroom Fully Furnished',
        title: '1 Bedroom Furnished in Al Reem',
        location: 'Al Reem',
        area: '83 sqm',
        price: 99000,
        url: 'https://rightcompound.com/al-reem-residences-compound',
        photosUrl: 'https://www.canva.com/design/DAG84DVDdtU/oWQm9eq2ZwKCDxdi3QPgIw/edit?utm_content=DAG84DVDdtU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    },
    {
        platform: 'Hittin Shaheqa 12 Complexes',
        type: '1 Bedroom Fully Furnished + Terrace',
        title: '1 Bedroom Furnished + Terrace in Hittin',
        location: 'Al Hittin',
        area: '100 sqm',
        price: 132825,
        url: 'https://rightcompound.com/hittin-residential-compound-riyadh',
        photosUrl: 'https://www.canva.com/design/DAG84DmPBK4/ndxj8ASiUXX9SSpUr353YA/edit?utm_content=DAG84DmPBK4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    },
    {
        platform: 'Shaheqa 12 Compound',
        type: '2 Bedroom Premium Furnished',
        title: '2 Bedroom Premium in Hittin, Riyadh',
        location: 'Al Hittin',
        area: '145 sqm',
        price: 185000,
        url: '#',
        photosUrl: '#'
    }
  ],
  '1br': [
    {
        platform: 'Azure Compound',
        type: '1 Bedroom Apartment',
        title: '1 Bedroom Apartment in Al Rabwa',
        location: 'Al Rabwa',
        area: '117 sqm',
        price: 94864,
        url: 'https://rightcompound.com/green-diamond-compound',
        photosUrl: 'https://www.canva.com/design/DAG8309BRgE/2V4p8Fmz0oOuQa-AMXBNow/edit?utm_content=DAG8309BRgE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    },
    {
        platform: 'Azure Compound',
        type: '1 Bedroom Fully Furnished',
        title: '1 Bedroom Furnished in Al Reem',
        location: 'Al Reem',
        area: '83 sqm',
        price: 99000,
        url: 'https://rightcompound.com/al-reem-residences-compound',
        photosUrl: 'https://www.canva.com/design/DAG84DVDdtU/oWQm9eq2ZwKCDxdi3QPgIw/edit?utm_content=DAG84DVDdtU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    }
  ],
  '2br': [
    {
        platform: 'Bayut',
        type: '2 Bedroom Furnished',
        title: 'Premium 2BR Apartment in Al Arid',
        location: 'Al Arid',
        area: '130 sqm',
        price: 11000,
        period: '/mo',
        url: 'https://www.bayut.sa/ar/property/details-87842870.html'
    },
    {
        platform: 'Airbnb',
        type: '2 Bedroom Holiday Home',
        title: 'Luxury 2BR with Balcony',
        location: 'Hittin, Riyadh',
        area: '120 sqm',
        price: 15500,
        period: '/mo',
        url: '#'
    }
  ]
};

export const MABAAT_SHARE_PERCENTAGE = 0.15; // Management fee remains 15%
export const BRANCHES: any[] = [];
