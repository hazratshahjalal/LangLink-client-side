import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const ManageInstructors = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className="overflow-x-auto bg-slate-50">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Number of Classes</th>
            <th>Students</th>
            <th>Classes</th>
            <th></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">Make admin</button>
            </th>
          </tr>


        </tbody>


      </table>
    </div>
  );
};

export default ManageInstructors;