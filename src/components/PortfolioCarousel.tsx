import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export interface CarouselCard {
  id: string;
  type: 'media' | 'content';
  media?: string;
  isVideo?: boolean;
  category?: 'problem' | 'design' | 'deliverables';
  bullets?: string[];
  title?: string;
}

interface PortfolioCarouselProps {
  cards: CarouselCard[];
}

export const PortfolioCarousel = ({ cards }: PortfolioCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: true,
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'problem':
        return 'border-muted bg-muted/50';
      case 'design':
        return 'border-muted bg-muted/50';
      case 'deliverables':
        return 'border-muted bg-muted/50';
      default:
        return 'border-muted bg-muted/50';
    }
  };

  const getCategoryTitle = (category?: string) => {
    switch (category) {
      case 'problem':
        return 'Problem';
      case 'design':
        return 'Design';
      case 'deliverables':
        return 'Deliverables';
      default:
        return '';
    }
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`flex-[0_0_280px] min-w-0 pl-4 transition-all duration-500 ease-out ${
                index === selectedIndex 
                  ? 'scale-105 z-10' 
                  : 'scale-95 opacity-80'
              }`}
              style={{
                transform: `perspective(1000px) rotateY(${
                  index === selectedIndex ? '0deg' : index < selectedIndex ? '15deg' : '-15deg'
                })`,
              }}
            >
              <Card className="aspect-square w-full bg-card shadow-3d hover:shadow-3d-hover transition-all duration-300 border-0 overflow-hidden">
                {card.type === 'media' ? (
                  <div className="w-full h-full">
                    {card.isVideo ? (
                      <video
                        src={card.media}
                        className="w-full h-full object-cover rounded-lg"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={card.media}
                        alt="Portfolio content"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                  </div>
                ) : (
                  <div className={`w-full h-full p-6 flex flex-col ${getCategoryColor(card.category)}`}>
                    <div className="flex-shrink-0 mb-4">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {getCategoryTitle(card.category)}
                      </h3>
                      <div className="w-12 h-1 bg-primary rounded-full" />
                    </div>
                    
                    <ScrollArea className="flex-1">
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        {card.bullets?.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-primary scale-125'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};