import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Stars = ({ readOnly, initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (value) => {
    if (!readOnly) {
      setRating(value);
      onChange(value);
    }
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={ratingValue}
            className={`
              ${ratingValue <= rating ? 'text-yellow-500' : 'text-gray-300'}
              ${ratingValue >= 3 ? 'star-green' : 'star-red'}
              ${!readOnly ? 'cursor-pointer' : ''}
            `}
            onClick={() => handleClick(ratingValue)}
          />
        );
      })}
    </div>
  );
};

export default Stars;
