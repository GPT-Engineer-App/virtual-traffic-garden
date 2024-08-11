import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat } from "lucide-react";

const Index = () => {
  const catBreeds = [
    { name: "Siamese", origin: "Thailand" },
    { name: "Maine Coon", origin: "United States" },
    { name: "Persian", origin: "Iran" },
    { name: "British Shorthair", origin: "United Kingdom" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-8"
        />
        <p className="text-xl text-gray-700 mb-8">
          Cats are fascinating creatures known for their independence, agility, and affectionate nature. 
          They have been domesticated for thousands of years and are one of the most popular pets worldwide.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Characteristics of Cats</h2>
        <ul className="list-disc list-inside mb-8 text-gray-700">
          <li>Retractable claws for climbing and hunting</li>
          <li>Excellent night vision</li>
          <li>Flexible bodies and great balance</li>
          <li>Highly developed sense of smell</li>
          <li>Can purr when content or stressed</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Popular Cat Breeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {catBreeds.map((breed) => (
            <Card key={breed.name}>
              <CardHeader>
                <CardTitle>{breed.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Origin: {breed.origin}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
