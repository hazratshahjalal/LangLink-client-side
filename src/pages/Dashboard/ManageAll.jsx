import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const queryClient = new QueryClient();


const ManageAll = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch(`https://lang-link-server-side.vercel.app/users`);
    return res.json();
  });

  const handleMakeAdmin = user => {
    fetch(`https://lang-link-server-side.vercel.app/users/admin/${user._id}`, {
      method: 'PATCH',

    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();

          Swal.fire({
            title: `${user.name} is an Admin now`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }
      })
  }

  const handleMakeInstructor = user => {
    fetch(`https://lang-link-server-side.vercel.app/users/instructor/${user._id}`, {
      method: 'PATCH',

    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: `${user.name} is an Instructor now!`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }
      })
  }
  const handleDeleteUser = user => {

  }

  return (
    <div>
      <h1 className='text-3xl text-gray-900 my-6'> All Users : {users.length}</h1>

      <div className="overflow-x-auto bg-slate-50">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className='text-right'>Actions</th>
              <th> </th>

            </tr>
          </thead>
          <tbody>
            {/* loop users  */}
            {
              users.map((user, index) =>
                <tr key={user._id}>
                  <td>

                    {index + 1}

                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user.photoURL} alt="User photo" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user.email}

                  </td>

                  <td>
                    {user.role}
                  </td>
                  <td>
                    {user.role === 'instructor' ? <button disabled onClick={() => { handleMakeInstructor(user) }} className="btn btn-success btn-sm">Make Instructor</button> :
                      <button onClick={() => { handleMakeInstructor(user) }} className="btn btn-success btn-sm">Make Insructor</button>
                    }
                  </td>
                  <td>
                    {user.role === 'admin' ? < button disabled onClick={() => { handleMakeAdmin(user) }} className="btn btn-info btn-sm">Make admin</button> :
                      < button onClick={() => { handleMakeAdmin(user) }} className="btn btn-info btn-sm">Make admin</button>
                    }
                  </td>
                </tr>
              )
            }

          </tbody>


        </table>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ManageAll />
    </QueryClientProvider>
  );
};

export default App;
