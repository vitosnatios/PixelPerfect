import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { err } from '../../utils/err';
import sanitizeHtml from 'sanitize-html';

export async function POST(request) {
  try {
    const userPassword = await request.json();
    const validatedUserPassword = validatePassword(userPassword);
    const hashedPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      Number(process.env.BCRYPT_SALT)
    );
    const isRightPassword = await bcrypt.compare(
      validatedUserPassword,
      hashedPassword
    );
    if (!isRightPassword) err('Senha incorreta.');
    return NextResponse.json({ message: 'Logado com sucesso.' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

const validatePassword = (password) => {
  if (password.trim() === '') {
    err('O password está vazio.');
  }
  password = sanitizeHtml(password);
  return password;
};
