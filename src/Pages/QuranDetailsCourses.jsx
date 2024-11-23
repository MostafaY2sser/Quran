import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const QuranDetailsCourses = () => {
  const { id } = useParams(); // تأكد من أن id يتم تمريره بشكل صحيح عبر الرابط
  const location = useLocation();
  const { image, description, title } = location.state || {};

  return (
    <div
      className="mt-11 relative"
      style={{ backgroundColor: "var(--body-bg-color)", direction: "rtl" }}
    >
      {/* العنوان */}
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold text-green-700 mb-4">{title}</h1>
      </div>

      {/* المحتوى */}
      <div className="p-8 mt-11 flex flex-col items-center h-screen">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-80 h-52 mb-4 rounded-lg border"
            style={{
              borderColor: "var(--main-dark-color)",
            }}
          />
        )}
        {description && (
          <p className="text-gray-700 text-center text-lg">{description}</p>
        )}
      </div>
    </div>
  );
};

export default QuranDetailsCourses;
