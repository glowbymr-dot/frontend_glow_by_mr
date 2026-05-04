import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  handleSubmit: (e: FormEvent<Element>) => void;
  formData: {
    nombre: string;
    email: string;
    telefono: string;
    mensaje: string;
  };
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  isLoading: boolean;
}

interface Errors {
  nombre?: string;
  email?: string;
  mensaje?: string;
}

const FormContact = ({
  handleSubmit,
  formData,
  handleChange,
  isLoading,
}: Props) => {
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio";
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();

    if (validateForm()) {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <Label htmlFor="nombre" className="text-gray-700 mb-2 block">
          Nombre completo *
        </Label>
        <Input
          id="nombre"
          type="text"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          className={`border-gray-300 focus:border-[#A0714C] focus:ring-[#A0714C] ${
            errors.nombre ? "border-red-500 focus:border-red-500" : ""
          }`}
        />
        {errors.nombre && (
          <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-gray-700 mb-2 block">
          Correo electrónico *
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleChange}
          className={`border-gray-300 focus:border-[#A0714C] focus:ring-[#A0714C] ${
            errors.email ? "border-red-500 focus:border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <Label htmlFor="telefono" className="text-gray-700 mb-2 block">
          Teléfono
        </Label>
        <Input
          id="telefono"
          type="tel"
          placeholder="+504 1234-5678"
          value={formData.telefono}
          onChange={handleChange}
          className="border-gray-300 focus:border-[#A0714C] focus:ring-[#A0714C]"
        />
      </div>

      <div>
        <Label htmlFor="mensaje" className="text-gray-700 mb-2 block">
          Mensaje *
        </Label>
        <Textarea
          id="mensaje"
          placeholder="Cuéntanos en qué podemos ayudarte..."
          rows={5}
          value={formData.mensaje}
          onChange={handleChange}
          className={`border-gray-300 focus:border-[#A0714C] focus:ring-[#A0714C] ${
            errors.mensaje ? "border-red-500 focus:border-red-500" : ""
          }`}
        />
        {errors.mensaje && (
          <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-linear-to-r from-[#A0714C] to-[#B17953] hover:from-[#8B613B] hover:to-[#9A6A45] text-white font-semibold py-6 rounded-xl transition-all duration-300"
      >
        {isLoading ? (
          "Enviando..."
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Enviar mensaje
          </>
        )}
      </Button>
    </form>
  );
};

export default FormContact;
