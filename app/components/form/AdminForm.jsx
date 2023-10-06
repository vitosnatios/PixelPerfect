'use client';
import Input from './Input';
import useInput from '../../custom-hooks/useInput';
import useFetch from '../../custom-hooks/useFetch';

const AdminForm = () => {
  const { data, loading, error, request } = useFetch();
  const nameInput = useInput('password', 'Senha', 'password');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await request('/api/logar', {
      method: 'POST',
      body: JSON.stringify(nameInput.refe.current.value),
    });
    console.log(data);
    console.log(error);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input {...nameInput} refe={nameInput.refe} />
        {loading && <span>Loading...</span>}
        {error && <span>{error}</span>}
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default AdminForm;
