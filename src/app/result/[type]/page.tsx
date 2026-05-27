import ResultClient from "@/components/result/result-client";

const TEST_TYPES = [
  "ab-personality", "animal-personality", "anxiety", "attachment-style", "big-five-aspects", "big-five",
  "bodily", "book-personality", "boundaries", "burnout", "career-anchor", "character-strengths",
  "charisma", "coffee-personality", "color-personality", "communication-style", "conflict-resolution",
  "consumer-values", "creativity", "critical-thinking", "dark-triad", "death-anxiety", "decision-style",
  "dependency", "depression", "diet-attitude", "digital-wellness", "disc", "emotion-granularity",
  "emotion-regulation", "emotional-contagion", "emotional-exhaustion", "emotional-intelligence",
  "emotional-resilience", "empathy", "enneagram", "entrepreneurship", "environmental", "eq",
  "exercise-motivation", "existential-anxiety", "family-relations", "first-impression", "flow",
  "food-personality", "friendship", "gratitude", "happiness", "humor-style", "interpersonal-attraction",
  "interpersonal-intel", "intimacy", "intrapersonal", "introversion", "job-satisfaction", "leadership",
  "learning-style", "life-satisfaction", "listening-skills", "locus-control", "logical-reasoning",
  "loneliness", "love-language", "manipulation", "mathematical", "mbti", "mindfulness", "minimalism",
  "motivation", "movie-personality", "music-personality", "musical", "narcissism", "naturalistic",
  "ocd", "online-social", "org-commitment", "party-personality", "people-pleasing", "perfectionism",
  "persuasion", "phobia", "post-traumatic-growth", "power-dynamics", "procrastination",
  "psychological-capital", "psychological-resilience", "public-speaking", "resilience", "risk-taking",
  "self-compassion", "self-efficacy", "self-esteem", "self-worth", "sleep-quality", "social-anxiety",
  "social-intelligence", "social-media", "social-network", "social-skills", "spatial", "stress-coping",
  "stress-tolerance", "stress", "tarot-personality", "temperament", "time-management", "travel-style",
  "trust", "verbal", "work-life-balance", "work-values", "zodiac-match"
];

export function generateStaticParams() {
  return TEST_TYPES.map((type) => ({ type }));
}

export default async function ResultPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  return <ResultClient testType={type} />;
}
