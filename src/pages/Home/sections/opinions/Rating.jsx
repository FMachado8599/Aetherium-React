import { Star } from 'lucide-react';

export default function Rating({ value, max = 5 }) {
  return (
    <div className="opinion-rating">
      {[...Array(max)].map((_, i) => (
        <Star
          key={i}
          className={`${
            i < value
              ? 'filled-star'
              : 'empty-star'
          }`}
        />
      ))}
    </div>
  );
}