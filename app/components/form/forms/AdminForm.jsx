'use client';
import Input from '../form-elements/Input';
import useInput from '../../../custom-hooks/useInput';
import useFetch from '../../../custom-hooks/useFetch';
import { useRouter } from 'next/navigation';
import { IoArrowBackOutline } from 'react-icons/io5';
import Link from 'next/link';
import Button from '../form-elements/Button';
import Form from './Form';
import styles from './AdminForm.module.css';

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
      <Form className={styles.form} onSubmit={handleSubmit}>
        <Link href='/'>
          <IoArrowBackOutline size={20} />
        </Link>
        <h1>Faça login para continuar</h1>
        <Input {...nameInput} refe={nameInput.refe} />
        {loading && <span>Loading...</span>}
        {error && <span>{error}</span>}
        <Button>Entrar</Button>
      </Form>
    </div>
  );
};

export default AdminForm;
