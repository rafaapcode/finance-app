"use server";
import { Response } from "./type";

export async function login(formdata: FormData): Promise<Response<unknown>> {
  try {
    const email = formdata.get('email');
    const password = formdata.get('password');
    console.log(email, password);
    return {
      status: false,
      message: 'Bem Vindo !',
      data: {
        email,
        password
      }
    }
  } catch (error) {
    if(error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Error desconhecido', error);
    }
    return {
      status: true,
      message: 'Ocorreu um erro ao fazer o login'
    }
  }
}