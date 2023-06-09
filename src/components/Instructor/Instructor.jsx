import React, { useEffect, useState } from 'react';

const Instructor = () => {
  const [homeInstructors, setHomeInstructors] = useState([]);

  useEffect(() => {
    fetch("/instructors.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedInstructors = data.sort((a, b) => b.numStudents - a.numStudents);
        const topInstructors = sortedInstructors.slice(0, 6);
        setHomeInstructors(topInstructors);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    < div className='container text-center mx-auto'>
      <h1 className="text-5xl text-center text-gray-950 font-bold mb-4">Popular Instructors</h1>
      <p className="text-base text-center text-gray-600 mb-8">Discover our top instructors with the most students enrolled in their classes.</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {homeInstructors.map((instructor) => (
          <div key={instructor.id} className="card bg-gray-200 shadow-2xl">
            <figure>
              <img className="w-full" src={instructor.image} alt="instructors" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-2xl">{instructor.name}</h2>
              <p>{instructor.email}</p>
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-primary">See Classes</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
