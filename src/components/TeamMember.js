import React from 'react';

const TeamMember = ({ name, designation, imageUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-8 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mb-4" />
      <div className="text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{designation}</p>
      </div>
    </div>
  );
};

export default TeamMember;
