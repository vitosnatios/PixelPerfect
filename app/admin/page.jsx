import { cookies } from 'next/headers';
import AdminForm from '../components/form/forms/AdminForm';
import jwt from 'jsonwebtoken';
import AdminPageComponent from '../components/pages/AdminPageComponent';

const AdminPage = async () => {
  try {
    const token = cookies().get('jwt').value;
    const isLoggedIn = jwt.verify(token, process.env.JWT_SECRET);
    return isLoggedIn ? <AdminPageComponent /> : <AdminForm />;
  } catch (error) {
    return <AdminForm />;
  }
};

export default AdminPage;
