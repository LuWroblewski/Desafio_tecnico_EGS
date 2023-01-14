import Image from 'next/image';
import logo from '../img/Logotipo.png';
import { TablePeople } from '../components/tablePeople';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Home = () => {
  const [name, setName] = useState('');
  const [LastName, setLastName] = useState('');
  const [allPeoples, setAllPeoples] = useState('');

  useEffect(() => {
    const allPeoples = JSON.parse(localStorage.getItem('people') as string) || [];
    setAllPeoples(allPeoples);

    const lastPeople = JSON.parse(localStorage.getItem('LastPeople') as string) || [];
    console.log(lastPeople.name, lastPeople.LastName);

    setName(lastPeople.name);

    setLastName(lastPeople.LastName);
  }, []);

  return (
    <div className="menuPeoples">
      <div className="logo">
        <Link href="/Home">
          <Image className="imageMenu" src={logo} alt="logo" width={100} height={50} />
        </Link>
        <p className="lastPerson">
          {name} {LastName}
        </p>
      </div>
      <TablePeople posts={allPeoples} />
    </div>
  );
};

export default Home;
