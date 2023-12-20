import React from 'react';
import Container from "./container";

const Awards = () => {
  const awards = [
    {
      title: 'C++ Developer Certification',
      date: '09/2023',
      issuer: 'W3 Schools & Udemy',
      verificationLink: "verify.w3schools.com/1NVHQ2DJ6I"
    },
    {
      title: 'Fortran Certification',
      date: '09/2023',
      issuer: 'W3 Schools',
    },
    {
      title: 'Heartland Gaming Expo',
      date: '2019',
      description: '5th Place in Game Creation Category',
    },
    {
      title: 'Guinness World Record Holder',
      date: 'Expected 12/24',
      description: 'Generated $500+ for Charity',
    },
    {
      title: 'TCC Intramural Badminton Champion',
      date: '2022',
      description: 'First place in the TCC Intramural Badminton Tournament',
    },
    {
      title: '1st Place Midtown Showdown (Disc Golf)',
      date: 'Expected 05/23',
      description: '1st Place in Intermediate Division',
    },
    {
      title: 'Best Dog Owned by a Web Developer',
      date: '02/2023-Current',
      description: 'My dog is the best dog ever, and he says I am pretty cool too.',
    },
    {
      title: 'Tallest Person in the Room',
      date: 'Pretty much always',
      description: 'I am 6\' 5" tall, so I am usually the tallest person in the room.',
    },

  ];

  const colors = ['bg-gray-700', 'bg-blue-700', 'bg-green-700', 'bg-orange-700', 'bg-pink-700', 'bg-purple-700'];

  return (
    <Container className="w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {awards.map((award, index) => (
          <div key={index} className={`flex flex-col justify-between w-full h-full ${colors[index % colors.length]} px-14 rounded-2xl py-14`}>
            <h1 className="text-3xl font-bold leading-normal">{award.title}</h1>
            <p className="text-xl">{award.date}</p>
            {award.issuer && <p>Issuer: {award.issuer}</p>}
            {award.description && <p>{award.description}</p>}
            {award.verificationLink && <a href={award.verificationLink} className="text-red-500 underline">Verification Link</a>}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Awards;
