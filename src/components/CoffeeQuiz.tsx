import { useState } from 'react';
import { ChevronRight, Coffee, ThumbsUp, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Confetti from 'react-confetti';
import { useWindowSize } from '@/hooks/use-window-size';

const CoffeeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const { width, height } = useWindowSize();

  const questions = [
    {
      question: 'What time do you usually enjoy coffee?',
      options: ['Early Morning', 'Mid Morning', 'Afternoon', 'Evening'],
    },
    {
      question: 'How do you like your coffee?',
      options: ['Black & Strong', 'With Milk', 'Sweet & Creamy', 'Iced'],
    },
    {
      question: 'What flavor notes appeal to you?',
      options: ['Fruity & Floral', 'Nutty & Caramel', 'Chocolate & Rich', 'Earthy & Bold'],
    },
    {
      question: 'Your coffee brewing style?',
      options: ['French Press', 'Pour Over', 'Espresso', 'Cold Brew'],
    },
  ];

  const recommendations = [
    {
      name: 'Ethiopian Yirgacheffe',
      description: 'Light, floral, and citrusy - perfect for your refined palate',
      match: 95,
    },
    {
      name: 'Colombian Supremo',
      description: 'Balanced and smooth with caramel notes',
      match: 88,
    },
    {
      name: 'Costa Rican Tarrazu',
      description: 'Clean, bright, and crisp - an exceptional choice',
      match: 82,
    },
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section className="py-24 px-4 lg:px-8 bg-secondary/30 relative overflow-hidden">
      {showResult && <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />}

      <div className="container mx-auto max-w-4xl">
        {!showResult ? (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-accent">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-gold transition-smooth"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Question Card */}
            <Card className="p-8 md:p-12 shadow-medium border-0 animate-slide-up">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Coffee className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                    {questions[currentQuestion].question}
                  </h3>
                  <p className="text-muted-foreground">Choose the option that best describes you</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    onClick={() => handleAnswer(option)}
                    className="h-auto py-6 px-6 text-left justify-between hover:bg-accent/10 hover:border-accent hover:text-accent transition-smooth group"
                  >
                    <span className="text-lg font-medium">{option}</span>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-smooth" />
                  </Button>
                ))}
              </div>
            </Card>
          </>
        ) : (
          <div className="space-y-8 animate-slide-up">
            {/* Result Header */}
            <Card className="p-8 md:p-12 text-center shadow-medium border-0 bg-gradient-coffee text-cream">
              <Target className="w-16 h-16 mx-auto mb-4 animate-pulse-glow" />
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Your Perfect Match!
              </h2>
              <p className="text-xl opacity-90">
                Based on your preferences, here are our top recommendations
              </p>
            </Card>

            {/* Recommendations */}
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <Card
                  key={index}
                  className="p-6 shadow-soft hover:shadow-gold transition-smooth border-0 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                        <span className="text-2xl font-bold text-accent-foreground">
                          {rec.match}%
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-heading text-2xl font-bold text-primary">
                          {rec.name}
                        </h3>
                        {index === 0 && (
                          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <ThumbsUp className="w-3 h-3" />
                            Best Match
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4">{rec.description}</p>
                      <div className="flex gap-3">
                        <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                          View Product
                        </Button>
                        <Button size="sm" variant="outline">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Retake Quiz Button */}
            <div className="text-center">
              <Button
                onClick={resetQuiz}
                variant="outline"
                size="lg"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Retake Quiz
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoffeeQuiz;
