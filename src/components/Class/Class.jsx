import React, { useEffect, useState } from 'react';

const Class = () => {
  const [topClasses, setTopClasses] = useState([]);

  useEffect(() => {
    fetch(`https://lang-link-server-side.vercel.app/classes`)
      .then((res) => res.json())
      .then((data) => {
        const sortedClasses = data.sort((a, b) => b.numStudents - a.numStudents);
        const topSixClasses = sortedClasses.slice(0, 6);
        setTopClasses(topSixClasses);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='container text-center my-10 mx-auto'>
      <h1 className="text-5xl text-center text-gray-950 font-bold mb-4">Top Classes</h1>
      <p className="text-base text-center text-gray-600 mb-8">Explore our most popular classes with the highest number of enrolled students.</p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {topClasses.map((classItem) => (
          <div key={classItem.name} className="bg-gray-200 rounded-md shadow-lg overflow-hidden">
            <img className="w-full" src={classItem.image} alt={classItem.name} />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-2">{classItem.name}</h2>
              <p className="text-gray-700 font-semibold text-lg mb-2">Instructor: {classItem.instructorName}</p>

              <p className="text-gray-700 mb-2">Available Seats: {classItem.availableSeats}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;
