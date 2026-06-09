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
            revenue: 3704544, 
            mabaatShare: 1111363, 
            netIncome: 2211727, 
            roi: 7.4
        },
        base: {
            revenue: 3899520,
            mabaatShare: 1169856, 
            netIncome: 2328133, 
            roi: 7.8
        },
        best: {
            revenue: 4094496, 
            mabaatShare: 1228349, 
            netIncome: 2444540, 
            roi: 8.2
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
            avgPrice: 175140, // Reduced from 194600
            priceRange: { min: 166383, avg: 175140, max: 183897 }, 
        },
        { 
            name: '1 Bedroom (Long-Term Rental) - 4 Units', 
            count: 4, 
            avgPrice: 134550, // Reduced from 149500
            priceRange: { min: 127823, avg: 134550, max: 141278 }, 
        },
        { 
            name: '2 Bedroom (Short-Term Rental) - 5 Units', 
            count: 5, 
            avgPrice: 255150, // Reduced from 283500
            priceRange: { min: 242393, avg: 255150, max: 267908 }, 
        },
        { 
            name: '2 Bedroom (Long-Term Rental) - 3 Units', 
            count: 3, 
            avgPrice: 228150, // Reduced from 253500
            priceRange: { min: 216743, avg: 228150, max: 239558 }, 
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
            revenue: 1842354, 
            mabaatShare: 552706,
            netIncome: 1089988, 
            roi: 6.1
        },
        base: {
            revenue: 1939320, 
            mabaatShare: 581796,
            netIncome: 1147356, 
            roi: 6.4
        },
        best: {
            revenue: 2036286, 
            mabaatShare: 610886,
            netIncome: 1204724, 
            roi: 6.7
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
            avgPrice: 175140,
            priceRange: { min: 166383, avg: 175140, max: 183897 },
        },
        { 
            name: '1BR (LTR) Layouts', 
            count: 4, 
            avgPrice: 134550,
            priceRange: { min: 127823, avg: 134550, max: 141278 },
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
            revenue: 1862190, 
            mabaatShare: 558657,
            netIncome: 1121739, 
            roi: 9.4
        },
        base: {
            revenue: 1960200, 
            mabaatShare: 588060,
            netIncome: 1180777, 
            roi: 9.8
        },
        best: {
            revenue: 2058210, 
            mabaatShare: 617463,
            netIncome: 1239816, 
            roi: 10.3
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
            avgPrice: 255150,
            priceRange: { min: 242393, avg: 255150, max: 267908 },
        },
        { 
            name: '2BR (LTR) Layouts', 
            count: 3, 
            avgPrice: 228150,
            priceRange: { min: 216743, avg: 228150, max: 239558 },
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
            revenue: 2543027, 
            mabaatShare: 762908,
            netIncome: 1398665, 
            roi: 7.2
        },
        base: {
            revenue: 2676870, 
            mabaatShare: 803061,
            netIncome: 1472278, 
            roi: 7.6
        },
        best: {
            revenue: 2810714, 
            mabaatShare: 843214,
            netIncome: 1545893, 
            roi: 7.9
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
            avgPrice: 175140,
            priceRange: { min: 166383, avg: 175140, max: 183897 },
        },
        { 
            name: '2BR Short-Term layouts', 
            count: 5, 
            avgPrice: 255150,
            priceRange: { min: 242393, avg: 255150, max: 267908 },
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
            revenue: 1161518, 
            mabaatShare: 348455,
            netIncome: 813063, 
            roi: 7.7
        },
        base: {
            revenue: 1222650, 
            mabaatShare: 366795,
            netIncome: 855855, 
            roi: 8.2
        },
        best: {
            revenue: 1283783, 
            mabaatShare: 385135,
            netIncome: 898648, 
            roi: 8.6
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
        price: 119543,
        url: 'https://rightcompound.com/hittin-residential-compound-riyadh',
        photosUrl: 'https://www.canva.com/design/DAG84DmPBK4/ndxj8ASiUXX9SSpUr353YA/edit?utm_content=DAG84DmPBK4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    },
    {
        platform: 'Shaheqa 12 Compound',
        type: '2 Bedroom Premium Furnished',
        title: '2 Bedroom Premium in Hittin, Riyadh',
        location: 'Al Hittin',
        area: '145 sqm',
        price: 166500,
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

export const MABAAT_SHARE_PERCENTAGE = 0.30; // Management fee remains 30%
export const BRANCHES: any[] = [];
