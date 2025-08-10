import { pricingPlans } from "../../utils/pricing-plan";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-5">
      {" "}
      <Container className="text-center">
        <Title>Pricing </Title>
        <Paragraph className="mt-4">
          Choose the plan that's right for your business.
        </Paragraph>
      </Container>
      <Container className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, key) => (
            <div key={key} className="relative group h-full">
              <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                <div
                  className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow
                                p-8 flex flex-col h-full relative"
                >
                  {plan.bestValue && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600">
                      Best Value
                    </div>
                  )}
                  <h3 className="font-semibold text-heading-2">
                    {" "}
                    {plan.title}
                  </h3>
                  <p className="mt-4 text-2xl font-bold text-heading-1">
                    {" "}
                    {plan.price}
                  </p>
                  <ul className="mt-6 flex-1 space-y-1 text-left text-heading-3">
                    <li className="font-bold">Includes:</li>
                    {plan.includes.map((include, keyFeatures) =>
                      include.startsWith("-") ? (
                        <li
                          key={keyFeatures}
                          className="flex items-center gap-2"
                        >
                          <span className="text-primary">📂 </span>{" "}
                          {/*📊 📑💎*/}
                          <span className="text-bold">
                            {include.substring(1)}
                          </span>
                        </li>
                      ) : (
                        <li
                          key={keyFeatures}
                          className="flex items-center gap-2"
                        >
                          <span className="text-sm pl-2">✅</span>
                          <span className="text-sm">{include} </span>
                        </li>
                      )
                    )}
                  </ul>
                  <ul className="mt-6 flex-1 space-y-2 text-left text-heading-3">
                    <li className="font-bold text-blue-600">
                      Optional Add-Ons:
                    </li>
                    {plan.optionalAddOns.map((option, keyFeatures) => (
                      <li key={keyFeatures} className="flex items-center gap-2">
                        <span className="text-sm pl-2">✨ </span>
                        <span className="text-sm">{option} </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button className="w-full transform transition-transform duration-300 hover:scale-105 text-white">
                      Choose Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
