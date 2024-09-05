import { Card, CardHeader, CardTitle } from "./ui/card";

interface FeatureProps {
  img: string;
}

const features: FeatureProps[] = [
  {
    img: "image",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Some of my{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          crafts{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        They're almost as beautiful as me
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* {features.map(({ img }: FeatureProps) => (
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                <img src={img} />
              </CardTitle>
            </CardHeader>
          </Card>
        ))} */}
      </div>
    </section>
  );
};
