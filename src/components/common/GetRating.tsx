import { StarIcon } from 'lucide-react';

const GetRating = ({ rate }: { rate: number }) => {
  rate = Math.round(rate);
  return (
    <>
      <div className="flex gap-2">
        {Array.from({ length: rate }, (_, index) => (
          <StarIcon
            fill="currentColor"
            key={index}
            className="w-4 h-4 text-yellow-500"
          />
        ))}
      </div>
    </>
  );
};

export default GetRating;
