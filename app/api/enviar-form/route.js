import sanitizeHtml from 'sanitize-html';
import { NextResponse } from 'next/server';
import { messagesCollection } from '../db-connection/messagesCollection';
import { err } from '../../utils/err';

export async function POST(request) {
  try {
    const form = await request.json();
    const validatedForm = validateForm(form);
    const collection = await messagesCollection();
    await collection.insertOne({ ...validatedForm });
    return NextResponse.json({ message: 'Enviado com sucesso.' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

const validateForm = (form) => {
  const { name, email, branch, message } = form;
  if (
    name.trim() === '' ||
    email.trim() === '' ||
    branch.trim() === '' ||
    message.trim() === ''
  ) {
    err('Por favor, preencha todos os campos.');
  }
  for (const key in form) {
    form[key] = sanitizeHtml(form[key]);
  }
  return form;
};
