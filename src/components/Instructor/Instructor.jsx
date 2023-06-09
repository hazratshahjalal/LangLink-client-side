import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Instructor = () => {
  const [homeInstructors, setHomeInstructors] = useState([]);

  useEffect(() => {
    fetch(`https://lang-link-server-side.vercel.app/instructors`)
      .then((res) => res.json())
      .then((data) => {
        const sortedInstructors = data.sort((a, b) => b.classes[0].numStudents - a.classes[0].numStudents);
        const topInstructors = sortedInstructors.slice(0, 6);
        setHomeInstructors(topInstructors);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='container text-center mx-auto'>
      <h1 className="text-5xl text-center text-gray-950 font-bold mb-4">Popular Instructors</h1>
      <p className="text-base text-center text-gray-600 mb-8">Discover our top instructors with the most students enrolled in their classes.</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {homeInstructors.map((instructor) => (
          <div key={instructor.id} className="card bg-gray-200 shadow-lg">

            <img className="w-full" src={instructor.image} alt="instructors" />

            <div className="card-body p-4">
              <h2 className="text-emerald-700 font-semibold text-4xl">{instructor.name}</h2>
              <p>{instructor.email}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="card-actions justify-center mt-4">
        <Link to='/allInstructors'>
          <button className="btn btn-outline btn-primary">See All Instructors</button>
        </Link>
      </div>
    </div>
  );
};

export default Instructor;
