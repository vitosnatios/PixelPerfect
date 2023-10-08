'use client';
import Input from './Input';
import useInput from '../../custom-hooks/useInput';
import useFetch from '../../custom-hooks/useFetch';
import { useRouter } from 'next/navigation';

import {IoArrowBackOutline} from "react-icons/io5"
import styles from './styles/login.module.css';
import Link from 'next/link';

const AdminForm = () => {
  const router = useRouter();
  const { loading, error, request } = useFetch();
  const nameInput = useInput('password', 'Senha', 'password');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await request('/api/logar', {
      method: 'POST',
      body: JSON.stringify(nameInput.refe.current.value),
    });
    if (success) router.refresh();
  };

  return (
    <div className={styles.content}>
     
      <form className={styles.form} onSubmit={handleSubmit}>
        <Link href="/"><IoArrowBackOutline  size={20}/></Link>
        <h1>Faça login para continuar</h1>
        <Input {...nameInput} refe={nameInput.refe} />
        {loading && <span>Loading...</span>}
        {error && <span>{error}</span>}
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default AdminForm;
