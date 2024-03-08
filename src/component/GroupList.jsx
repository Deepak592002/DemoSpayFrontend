import React from 'react';
import Avatar from '@mui/material/Avatar';
const GroupList = () => {
    const groups=["Backchodi","Spikewell","Nist","Nist","Nist","Nist","Nist","Nist","Nist"]
  return (
    <div className="p-4 border  bg-yellow-400 rounded-md">
      <h2 className="text-lg font-semibold mb-2">List of Groups</h2>
      <ul>
        {groups.map((group, index) => (
          <li key={index} className="flex items-center py-2 border-b hover:bg-yellow-600 rounded p-2">
            {/* <img src={group.profilePic} alt={group.name} className="w-12 h-12 rounded-full mr-4 shadow-sm" /> */}
            <Avatar src="/broken-image.jpg" />
            <div>
              <p className="text-lg m-2 font-semibold text-gray-800">{group}</p>
              {/* You can add more information about the group here */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
