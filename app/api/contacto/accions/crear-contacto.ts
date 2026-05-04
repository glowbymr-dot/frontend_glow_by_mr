import { joyeriaAPI } from "@/app/helpers/api/joyeriaApi";
import { CreateContactoInterface } from "../interface/create-contacto.interface";

export const crearContacto = async (data: CreateContactoInterface) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/contactos`;
  const response = await joyeriaAPI.post(url, { data });
  return response.data;
};
