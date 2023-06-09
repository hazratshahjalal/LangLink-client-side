import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InstructorClasses = () => {
  const { _id } = useParams(); // Access the instructor ID from the URL

  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    fetch(`https://lang-link-server-side.vercel.app/instructors/${instructor._id}`)
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
      })
      .catch((error) => console.log(error));
  }, [_id]);

  if (!instructor) {
    return <div>Loading instructor's classes...</div>;
  }

  return (
    <div className="container my-12 mx-auto">
      <h1 className="text-5xl text-center text-gray-950 font-bold mb-4">
        {instructor.name}'s Classes
      </h1>
      <p className="text-base text-center text-gray-600 mb-8">
        Explore {instructor.name}'s classes.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {instructor.classes.map((classItem) => (
          <div key={classItem.name} className="bg-gray-100 rounded-md shadow-lg overflow-hidden">
            <img className="w-full" src={classItem.image} alt={classItem.name} />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-2">{classItem.name}</h2>
              <p className="text-gray-700 mb-2">Instructor: {classItem.instructorName}</p>
              <p className="text-gray-700 mb-2">Number of Students: {classItem.numStudents}</p>
              <p className="text-gray-700 mb-2">Available Seats: {classItem.availableSeats}</p>
              <p className="text-gray-700 mb-2">Price: {classItem.price}</p>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorClasses;
