import { TypingAnimation } from '@/components/TypingAnimation';
import { PortfolioCarousel, CarouselCard } from '@/components/PortfolioCarousel';

// Import portfolio images
import portfolio1 from '@/assets/problem1.png';
import portfolio2 from '@/assets/design1.png';
import portfolio3 from '@/assets/results1.png';
import portfolio4 from '@/assets/problem2.png';
import portfolio5 from '@/assets/design2.png';
import portfolio6 from '@/assets/results2.png';
import portfolio7 from '@/assets/problem3.png';
import portfolio8 from '@/assets/design3.png';
import portfolio9 from '@/assets/results3.png';
import portfolio10 from '@/assets/linkedin.png';

const portfolioCards: CarouselCard[] = [
  // Media cards
  {
    id: '1',
    type: 'media',
    media: portfolio1,
  },
  {
    id: '2',
    type: 'content',
    category: 'problem',
    bullets: [
      'Cleaning toilets is the #1 most disliked household chore',
      'Conventional drop-in tank chemical tablets only dose part of the water and fade within a week',
      'Conventional tablets soak 24/7 in tank water, causing tank components to erode and shortening tablet lifespan',
      'Conventional tablets provide inconsistent amounts of cleaner over time',
    ],
  },
  {
    id: '3',
    type: 'media',
    media: portfolio2,
  },
  {
    id: '4',
    type: 'content',
    category: 'design',
    bullets: [
      'Integrated tablet on flapper underside for non 24/7 water exposure and consistent doses of cleaner',
      'Large bulb dome to withstand added tablet weight ≥ 6.2 cubic in volume',
      'Rubber snap-off design for tool free replacement',
      '3 large vent openings in the bulb dome to improve water circulation while maintaining buoyancy',
    ],
  },
  {
    id: '5',
    type: 'media',
    media: portfolio3,
  },
  {
    id: '6',
    type: 'content',
    category: 'deliverables',
    bullets: [
      'Production cost: ~$0.55 per unit (one shot compression mold)',
      'Tablet lasts 1,400 flushes in the flapper vs 400 flushes when loose in the tank',
      'Reduces chemical consumption by 83% by dosing only during the 3 second flush, not 24/7 tank soak'
    ],
  },
  {
    id: '7',
    type: 'media',
    media: portfolio4,
  },
  {
    id: '8',
    type: 'content',
    category: 'problem',
    bullets: [
      'Every stock change, reorder check, and report had to be entered manually',
      'Multiple team members editing the same sheet caused version conflicts and accidental overwrites',
      'As more SKUs were added, the spreadsheet became cluttered',
      'Different versions of the same sheet were stored and sent across different inboxes and folders, which made organization inefficient'
    ],
  },
  {
    id: '9',
    type: 'media',
    media: portfolio5,
  },
  {
    id: '10',
    type: 'content',
    category: 'design',
    bullets: [
      'Live inventory visibility that displays updated stock levels for all SKUs',
      'Summary metrics to showcase total SKUs, total inventory value, and number of low stock items',
      'Automatic alert that flags items below their reorder point',
      'Product level filtering to allow members to filter by product name or category',
      'Inventory value calculations (unit cost * quantity)',
      'Downloadable reports for reports and sharing'
    ],
  },
  {
    id: '11',
    type: 'media',
    media: portfolio6,
  },
  {
    id: '12',
    type: 'content',
    category: 'deliverables',
    bullets: [
      'Enabled real-time inventory health visibility <3 seconds across 30+ SKUs',
      'Saved 2+ hours in manual tracking and reporting',
      'Achieved 100% team adoption in under 2 weeks with no training needed'
    ],
  },
  {
    id: '13',
    type: 'media',
    media: portfolio7,
  },
  {
    id: '14',
    type: 'content',
    category: 'problem',
    bullets: [
      'Manual pricing analysis was slow and error prone, often taking ~2 days to produce basic insights',
      'Team lacked visibility into how price changes impact demand and total revenue',
      'Pricing decisions relied heavily on intuition or spreadsheets, leading to inconsistent outcomes',
      'No fast, self-service way to quantify the impact of raising/lowering prices'
    ],
  },
  {
    id: '15',
    type: 'media',
    media: portfolio8,
  },
  {
    id: '16',
    type: 'content',
    category: 'design',
    bullets: [
      'Enable fast, no code pricing analysis',
      'Visualization of demand and revenue curves from historical transaction data',
      'Estimation of price elasticity of demand using ML',
      'Filtering by product to support segmented analysis',
      'Exportable filtered outputs (csv transactions and graph images) for reporting and documentation',
      'Minimize analyst dependency by automating common price queries'
    ],
  },
  {
    id: '17',
    type: 'media',
    media: portfolio9,
  },
  {
    id: '18',
    type: 'content',
    category: 'deliverables',
    bullets: [
      'Reduced time spent generating elasticity reports from ~2 days (manual spreadsheet workflows) to under 30 seconds using a self-service dashboard',
      'Supported segmented analysis for 5 product categories, uncovering unique elasticity profiles per vertical',
      'Replaced gut-feel pricing decisions with interpretable ML models, improving revenue impact estimates'
    ],
  },
  {
    id: '18',
    type: 'media',
    media: portfolio10,
  }
  
];

const typingPhrases = [
  'efficiency and impact',
  'user-centered design',
  'hands-on iteration',
];

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg">
      {/* Hero Section */}
      <header className="px-6 pt-[calc(25vh-85px)] pb-12 md:pb-16 max-w-4xl mx-auto">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-light text-portfolio-text leading-relaxed">
              Hi! I'm <span className="font-semibold text-primary">Audrey</span>!
            </h1>
            <p className="text-lg md:text-xl text-portfolio-text">
              I'm an engineering student at Columbia interested in{' '}
              <TypingAnimation 
                phrases={typingPhrases}
                className="h-6 inline-flex items-center"
              />
            </p>
          </div>
        </div>
      </header>

      {/* Portfolio Carousel */}
      <main className="px-4 pb-12 max-w-5xl mx-auto mt-[calc(10vh-85px)]">
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <PortfolioCarousel cards={portfolioCards} />
        </div>
      </main>

    </div>
  );
};

export default Index;