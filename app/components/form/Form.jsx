'use client';
import useInput from '../../custom-hooks/useInput';
import useFetch from '../../custom-hooks/useFetch';
import Input from './Input';
import Textarea from './Textarea';

const Form = () => {
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
    await request('/api/enviar-form', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    if (data) {
      nameInput.refe.current.value = '';
      emailInput.refe.current.value = '';
      branchInput.refe.current.value = '';
      messageTextArea.refe.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input {...nameInput} />
      <Input {...emailInput} />
      <Input {...branchInput} />
      <Textarea {...messageTextArea} />
      {data && <span>{data.message}</span>}
      {error && <span>{error}</span>}
      {loading ? <span>loading...</span> : <button>Enviar</button>}
    </form>
  );
};

export default Form;
