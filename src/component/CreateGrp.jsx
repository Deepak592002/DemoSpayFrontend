import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
const CreateGrp = () => {
    const[selectedUser,setSelectedUser]=useState([])
    const groups=["Dvs","Spikewell","Nist","Nist","Nist","Nist","Nist","Nist","Nist"]
    function userSelect(){
        setSelectedUser(prevUsers => [...prevUsers,<Badge color="secondary" overlap="circular" badgeContent=" "> <Avatar src="/broken-image.jpg" /></Badge>])
        console.log(selectedUser)
    }
  return (
    <>
    <div className="p-4 border  bg-yellow-400 rounded-md">
                {selectedUser.length !== 0?
                    <div className="flex justify-between my-1 ">
              
 
                        <div  className="flex items-center gap-2 py-2 users--flow">
                            {selectedUser}
                        </div>
                  
                </div>
                
                : <div></div>}
      <p className="text-left font-semibold mb-2">Contacts on Spay</p>
      <ul>
        {groups.map((group, index) => (
            <li key={index} onClick={userSelect} className="flex items-center py-2 border-b hover:bg-yellow-600 rounded p-2">
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
    </>
  );
};

export default CreateGrp;
