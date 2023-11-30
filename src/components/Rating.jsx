import PropTypes from 'prop-types';

// Componente Rating
const Rating = ({ rating }) => {
  const maxRating = 5;
  const validRating = Number.isFinite(rating) && rating >= 0 && rating <= maxRating ? rating : 0;

  return (
    <div className="flex items-center mt-2.5 mb-5">
      {[...Array(Math.floor(validRating)).keys()].map((_, index) => (
        <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}

      {validRating % 1 !== 0 && (
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      )}

      {[...Array(Math.floor(maxRating - validRating)).keys()].map((_, index) => (
        <svg key={index} className="w-4 h-4 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
};

// Agrega la validación de PropTypes
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
