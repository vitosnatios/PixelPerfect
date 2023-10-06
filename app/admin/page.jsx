import { cookies } from 'next/headers';
import AdminForm from '../components/form/AdminForm';
import jwt from 'jsonwebtoken';
import AdminPageComponent from '../components/pages/AdminPageComponent';

const AdminPage = async () => {
  try {
    const token = cookies().get('jwt').value;
    const isLoggedIn = jwt.verify(token, process.env.JWT_SECRET);
    console.log(isLoggedIn);
    return <AdminPageComponent />;
  } catch (error) {
    return <AdminForm />;
  }
};

export default AdminPage;
