import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const works = [
  "AmethystDesign",
  "Brainwave",
  "CulturalDragon",
  "VerdantVibe",
  "RecipeApp",
  "eCommerce",
  "MealPlans",
  "HabitTrackerApp",
  "MovieApp",
  "TestPracticeApp",
];

export const Portfolio = () => {
  return (
    <section>
      {" "}
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>Showcase of Design & Development Work</Title>
        </div>
        <div className="flex grid grid-cols-2 justify-center flex-wrap gap-4">
          {works.map((work, key) => (
            <div
              key={key}
              className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group flex items-center justify-center"
            >
              <img
                src={`/assets/images/${work}.png`}
                alt={work}
                className="h-auto w-auto align-middle ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
