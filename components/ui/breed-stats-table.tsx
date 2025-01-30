import { Pet } from "contentlayer/generated";

interface BreedStatsTableProps {
  breed: Pet;
}

export function BreedStatsTable({ breed }: BreedStatsTableProps) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left">Characteristic</th>
            <th className="border p-3 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-3 font-medium">Lifespan</td>
            <td className="border p-3">{breed.lifespan}</td>
          </tr>
          <tr>
            <td className="border p-3 font-medium">Weight</td>
            <td className="border p-3">{breed.weight}</td>
          </tr>
          <tr>
            <td className="border p-3 font-medium">Height</td>
            <td className="border p-3">{breed.height}</td>
          </tr>
          <tr>
            <td className="border p-3 font-medium">Temperament</td>
            <td className="border p-3">{breed.temperament.join(", ")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 