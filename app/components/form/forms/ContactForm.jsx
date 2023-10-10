'use client';
import useInput from '../../../custom-hooks/useInput';
import useFetch from '../../../custom-hooks/useFetch';
import Input from '../form-elements/Input';
import Textarea from '../form-elements/TextArea';
import styles from './ContactForm.module.css';
import { IoArrowBackOutline } from 'react-icons/io5';
import Link from 'next/link';
import Requeriments from '../form-elements/Requirements';
import Button from '../form-elements/Button';
import Form from './Form';

const ContactForm = () => {
  const { data, loading, error, request } = useFetch();
  const nameInput = useInput('nome', 'Nome');
  const emailInput = useInput('email', 'Email', 'email');
  const branchInput = useInput('ramo', 'Qual o ramo da empresa');
  const messageTextArea = useInput(
    'message',
    'Explique o tipo de solução que deseja'
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      name: nameInput.refe.current.value,
      email: emailInput.refe.current.value,
      branch: branchInput.refe.current.value,
      message: messageTextArea.refe.current.value,
    };

    const success = await request('/api/enviar-form', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    if (success) {
      nameInput.refe.current.value = '';
      emailInput.refe.current.value = '';
      branchInput.refe.current.value = '';
      messageTextArea.refe.current.value = '';
    }
  };

  return (
    <div className={styles.content}>
      <Form onSubmit={handleSubmit}>
        <Link href='/'>
          <IoArrowBackOutline size={20} />
        </Link>
        <h2>Informações de contato</h2>
        <Input {...nameInput} />
        <Input {...emailInput} />
        <Input {...branchInput} />
        <Textarea {...messageTextArea} />
        {data && <span>{data.message}</span>}
        {error && <span>{error}</span>}
        {loading ? <span>loading...</span> : <Button>Enviar</Button>}
      </Form>
      <Requeriments />
    </div>
  );
};

export default ContactForm;
