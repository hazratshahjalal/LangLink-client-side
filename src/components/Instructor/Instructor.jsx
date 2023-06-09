import React, { useEffect, useState } from 'react';


const Instructor = () => {
  const [homeInstructors, setHomeInstructors] = useState([]);

  useEffect(() => {



    fetch("/instructors.json")
      .then(res => res.json())
      .then(data => setHomeInstructors(data))
    console.log(homeInstructors)
  }, []);


  return (
    <div>
      Instructor <p>{homeInstructors.length}</p>
    </div>
  );
};

export default Instructor;