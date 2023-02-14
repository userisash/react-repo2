import React from 'react';

const Balloon = ({ color }) => (
  <div style={{ width: '80px', height: '100px', backgroundColor: color, borderRadius: '50%' }} />
);

const Child = ({ name, color }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
    <h3>{name}</h3>
    <Balloon color={color} />
  </div>
);

const Mother = () => {
  const kids = [    { name: 'Ori', color: 'red' },    { name: 'Ron', color: 'blue' },    { name: 'Sigalit', color: 'green' },    { name: 'Ruti', color: 'yellow' },    { name: 'Alon', color: 'purple' },  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto', width: '80%', gap: '15px', backgroundColor: 'lightblue' }}>
      <h1 style={{ textAlign: 'center' }}>A Tale of Five Balloons</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px' }}>
        {kids.map((kid, index) => (
          <Child key={index} name={kid.name} color={kid.color} />
        ))}
      </div>
    </div>
  );
};

export default Mother;

