'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  if (username === 'admin' && password === 'admin1234') {
    cookies().set('admin_session', 'true', { 
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 // 1 day
    });
    return { success: true };
  }

  return { error: 'Invalid username or password' };
}

export async function logout() {
  cookies().delete('admin_session');
  redirect('/admin/login');
}
