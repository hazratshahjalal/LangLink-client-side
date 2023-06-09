import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const AllInstructors = () => {
  const { _id } = useParams();
  const [allInstructors, setAllInstructors] = useState([]);

  useEffect(() => {
    fetch(`https://lang-link-server-side.vercel.app/instructors`)
      .then((res) => res.json())
      .then((data) => {
        setAllInstructors(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container my-12 mx-auto">
      <h1 className="text-5xl text-center text-gray-950 font-bold mb-4">All Instructors</h1>
      <p className="text-base text-center text-gray-600 mb-8">Explore all our talented instructors.</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {allInstructors.map((instructor) => (
          <div key={instructor.id} className="card bg-gray-200 shadow-lg">
            <figure>
              <img className="w-full" src={instructor.image} alt="instructors" />
            </figure>
            <div className="card-body p-4">
              <h2 className="text-emerald-700 font-semibold text-4xl">{instructor.name}</h2>
              <p>Email: <span className="text-blue-500">{instructor.email}</span> </p>
              < p className='text-xl font-semibold'>Taken Classes: {instructor.numClasses}</p>
              < p className='text-xl font-semibold'>Classes:               <ul>
                {instructor.classes.map((cls) => (
                  <li className='text-gray-600 text-lg' key={cls.name}>{cls.name}</li>
                ))}
              </ul>
              </p>
              <div className="card-actions justify-center mt-4">
                <Link to={`/instructor/${instructor._id}`}><button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4  rounded">See Classes</button>
                </Link>              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllInstructors;
