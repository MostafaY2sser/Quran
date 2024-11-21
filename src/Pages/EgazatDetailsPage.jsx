// import { useParams } from 'react-router-dom';

// export default function EgazatDetailsPage() {
//   const { card, narration } = useParams();

//   return (
//     <>
//     <div className="p-8 bg-gray-100 h-screen">
//       <h1 className="text-2xl font-bold text-green-700">
//         {card} : {narration}
//       </h1>
//       <div className="mt-4 p-4 border rounded bg-white">
//         <p>هنا يمكنك عرض التفاصيل الخاصة بـ "{narration}" من "{card}".</p>
//       </div>
//     </div>
//     </>
//   );
// }

import { useParams, useLocation } from 'react-router-dom';

export default function EgazatDetailsPage() {
  const { card, narration } = useParams();
  const location = useLocation();
  const { image, description } = location.state || {};

  return (
    <div className="p-8 bg-gray-100 h-screen">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        {card} : {narration}
      </h1>
      <div className="p-4 border rounded bg-white shadow-lg">
        {image && (
          <img
            src={image}
            alt={narration}
            className="w-48 h-48 mx-auto mb-4 rounded-lg shadow-md"
          />
        )}
        {description && (
          <p className="text-gray-700 text-center text-lg">{description}</p>
        )}
      </div>
    </div>
  );
}
