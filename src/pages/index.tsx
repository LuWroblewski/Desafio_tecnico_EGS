import Link from 'next/link';

import { useState } from 'react';
import { ButtonForm } from '../components/button';
import { Post } from '../components/post';
import Image from 'next/image';
import logo from '../img/Logotipo.png';

const Menu = () => {
  const [name, setName] = useState('');
  const [LastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [Email, setEmail] = useState('');
  const [CPF, setCPF] = useState('');

  const handleclick = () => {
    const people = {
      name: name,
      LastName: LastName,
      date: date,
      Email: Email,
      CPF: CPF,
    };
    const peoples = JSON.parse(localStorage.getItem('people') as string) || [];
    peoples.push(people);
    localStorage.people = JSON.stringify(peoples);
    console.log(peoples);

    setName('');
    setLastName('');
    setDate('');
    setEmail('');
    setCPF('');
  };
  const lastPeople = () => {
    const people = {
      name: name,
      LastName: LastName,
      date: date,
      Email: Email,
      CPF: CPF,
    };
    const peoples = localStorage.setItem('LastPeople', `${JSON.stringify(people)}`);

    console.log(peoples);
  };

  return (
    <div className="Menu">
      <div className="logo">
        <Image className="image" src={logo} alt="logo" width={297} height={147} />
      </div>
      <form className="formPost">
        <h2 className="title">TESTE</h2>
        <h2 className="title">EGS SISTEMAS</h2>
        <Post type="text" placeholder="Nome" value={name} onChange={(e) => setName(e)} text={'Nome: '} />
        <Post
          type="text"
          placeholder="Sobrenome: "
          value={LastName}
          onChange={(e) => setLastName(e)}
          text={'Sobrenome'}
        />
        <Post type="date" placeholder={''} value={date} onChange={(e) => setDate(e)} text={'Data de nascimento: '} />
        <Post type="text" placeholder="Email" value={Email} onChange={(e) => setEmail(e)} text={'Email: '} />
        <Post type="text" placeholder="CPF" value={CPF} onChange={(e) => setCPF(e)} text={'CPF: '} />
        <Link href="/allPeoples">
          <ButtonForm
            onClick={() => {
              handleclick();
              lastPeople();
            }}
            text={'Enviar'}
          ></ButtonForm>
        </Link>
      </form>
    </div>
  );
};

export default Menu;
