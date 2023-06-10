import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    const res = await fetch('https://lang-link-server-side.vercel.app/classes');
    return res.json();
  });

  const handleApproveClass = (classId) => {
    fetch(`https://lang-link-server-side.vercel.app/classes/approve/${classId}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          refetch();
        }
      });
  };

  const handleDenyClass = (classId) => {
    fetch(`https://lang-link-server-side.vercel.app/classes/deny/${classId}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          refetch();
        }
      });
  };

  const handleSendFeedback = (classId) => {
    // Implement the logic to open a modal or navigate to a separate route for sending feedback
    // Pass the necessary classId or class object to the modal or route
  };

  return (
    <div>
      <h1 className='text-3xl text-gray-900 my-6'>Manage Classes</h1>

      <div className="overflow-x-auto bg-slate-50">
        <table className="table">

          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* loop classes */}
            {classes.map((classItem, index) => (
              <tr key={classItem._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={classItem.image} alt="Class Image" />
                </td>
                <td>{classItem.name}</td>
                <td>{classItem.instructorName}</td>
                <td>{classItem.availableSeats}</td>
                <td>{classItem.price}</td>
                <td>{classItem.status}</td>
                <td>
                  {classItem.status === 'pending' ? <>
                    <button

                      onClick={() => handleApproveClass(classItem._id)}
                      className="btn btn-success btn-sm"
                    >
                      Approve
                    </button>
                    <button

                      onClick={() => handleDenyClass(classItem._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Deny
                    </button></> :
                    <>
                      <button
                        disabled
                        onClick={() => handleApproveClass(classItem._id)}
                        className="btn btn-success btn-sm"
                      >
                        Approve
                      </button>
                      <button
                        disabled
                        onClick={() => handleDenyClass(classItem._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Deny
                      </button>
                    </>}

                  <button
                    onClick={() => handleSendFeedback(classItem._id)}
                    className="btn btn-info btn-sm"
                  >
                    Send Feedback
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ManageClasses />
    </QueryClientProvider>
  );
};

export default App;
