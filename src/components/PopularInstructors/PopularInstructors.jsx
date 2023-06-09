import React from 'react';
import Instructor from '../Instructor/Instructor';

const PopularInstructors = () => {
  return (
    <div >
      <div >
        {featured.slice(0, showCount).map(job => (
          <Instructor key={job.id} job={job} />
        ))}
      </div>
      {/* {showCount < featured.length && (
       <div>
         <button className="button-more" onClick={handleShowMore}>
           See all Jobs
         </button>
       </div>
     )} */}
    </div>
  );
};

export default PopularInstructors;