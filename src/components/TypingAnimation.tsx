import { useTypingAnimation } from '@/hooks/useTypingAnimation';

interface TypingAnimationProps {
  phrases: string[];
  className?: string;
}

export const TypingAnimation = ({ phrases, className = '' }: TypingAnimationProps) => {
  const { currentText, showCursor } = useTypingAnimation({
    phrases,
    typingSpeed: 80,
    pauseDuration: 1500,
    deletingSpeed: 40,
  });

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="text-primary font-medium">{currentText}</span>
      <span 
        className={`ml-1 w-0.5 h-6 bg-primary transition-opacity duration-75 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
};