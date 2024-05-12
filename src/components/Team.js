// import React from 'react';
// import TeamMember from './TeamMember'; // Assuming TeamMember component is in the same directory

// const Team = () => {
//     const teamMembers = [
//         { name: 'John Doe', designation: 'CEO', imageUrl: '../images/team/developer.jpg' },
//         { name: 'Jane Smith', designation: 'CTO', imageUrl: 'jane-smith.jpg' },
//         // Add more team members as needed
//     ];

//     return (
//         <div className="container mx-auto py-8">
//             <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Team</h2>
//             <div className='flex justify-center'>
//                 <div className='w-24 border-b-4 border-blue-900'></div>
//             </div>
//             <div>
//             <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We have built our client relations on trust over the years</h2>
//             </div>
//             <div className="flex flex-wrap">


//                 {teamMembers.map((member, index) => (
//                     <TeamMember
//                         key={index}
//                         name={member.name}
//                         designation={member.designation}
//                         imageUrl={member.imageUrl}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Team;
