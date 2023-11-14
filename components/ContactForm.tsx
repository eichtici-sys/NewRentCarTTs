import React, { ChangeEvent, useRef, useState } from "react"
import { z } from "zod"
import { toast } from "react-toastify"

type FormState = {
  name: string
  mail: string
  phone: string
  issue: string
  message: string
}
type FormErrors = Record<string, string>
export default function ContactForm() {
  const initialForm = {
    name: "",
    mail: "",
    phone: "",
    issue: "",
    message: "",
  }
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const formContact = useRef<HTMLFormElement | null>(null)
  const styleInput =
    "h-[38px] rounded-md border-dimLabel border-[1px] outline-none px-4 font-rubik text-darkText font- focus:border-[2px] focus:border-secondary"

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault()
    try {
      formSchema.parse(form)
      setErrors({})
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message
          }
        })
        setErrors(fieldErrors)
      }
      toast.error("Ups!, el formulario esta incorrecto")
      return
    }

    //TODO CREAR EMAILJS
  }

  return (
    <>
      <div className="md:col-span-1 sm:col-span-2 col-span-1 md:px-8 sm:px-12 px-0 pt-3 mx-auto w-full">
        <div className="w-full h-full sm:max-w-[500px] sm:min-w-[380px] min-w-full bg-white rounded-xl mx-auto">
          <form onSubmit={handleSubmit} ref={formContact}>
            <div className="pt-6 pb-3 px-8">
              <h3 className="text-darkText font-rubik font-semibold text-[20px]">
                Déjanos tus datos
              </h3>
            </div>
            <div className="py-2 px-8 flex flex-col w-full gap-2">
              <label
                htmlFor="name"
                className="text-dimLabel font-rubik font-light text-[16px]"
              >
                Nombres:
              </label>
              <input
                type="text"
                id="name"
                className={styleInput}
                name="name"
                onChange={handleChange}
                value={form.name}
              />
              {errors.name && (
                <p className="font-rubik font-normal text-[12px] text-red-500">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="py-2 px-8 flex flex-col w-full gap-2">
              <label
                htmlFor="mail"
                className="text-dimLabel font-rubik font-light text-[16px]"
              >
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="mail"
                className={styleInput}
                name="mail"
                onChange={handleChange}
                value={form.mail}
              />
              {errors.mail && (
                <p className="font-rubik font-normal text-[12px] text-red-500">
                  {errors.mail}
                </p>
              )}
            </div>
            <div className="py-2 px-8 flex flex-col w-full gap-2">
              <label
                htmlFor="phone"
                className="text-dimLabel font-rubik font-light text-[16px]"
              >
                Teléfono:
              </label>
              <input
                type="text"
                id="phone"
                className={styleInput}
                name="phone"
                onChange={handleChange}
                value={form.phone}
              />
              {errors.phone && (
                <p className="font-rubik font-normal text-[12px] text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="py-2 px-8 flex flex-col w-full gap-2">
              <label
                htmlFor="issue"
                className="text-dimLabel font-rubik font-light text-[16px]"
              >
                Asunto:
              </label>
              <input
                type="text"
                id="issue"
                className={styleInput}
                name="issue"
                onChange={handleChange}
                value={form.issue}
              />
              {errors.issue && (
                <p className="font-rubik font-normal text-[12px] text-red-500">
                  {errors.issue}
                </p>
              )}
            </div>
            <div className="py-2 px-8 flex flex-col w-full gap-2">
              <label
                htmlFor="message"
                className="text-dimLabel font-rubik font-light text-[16px]"
              >
                Mensaje:
              </label>
              <textarea
                id="message"
                className={`h-[65x] rounded-md border-dimLabel border-[1px] outline-none px-4 py-1 font-rubik text-darkText font- focus:border-[2px] focus:border-secondary resize-none`}
                name="message"
                onChange={handleChange}
                value={form.message}
              />
              {errors.message && (
                <p className="font-rubik font-normal text-[12px] text-red-500">
                  {errors.message}
                </p>
              )}
            </div>
            <div className="py-5 px-8 flex flex-col w-full gap-2">
              <input
                type="submit"
                value="Enviar"
                className="blue-gradient w-full h-[38px] text-white rounded-md cursor-pointer font-semibold text-[16px]"
              />
            </div>
          </form>
          {/* {loading && (
            <div className="w-full flex flex-col justify-center items-center py-2">
              <BeatLoader
                loading={loading}
                size={10}
                color={`#0058c9`}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              <p className="font-normal font-rubik text-primary text-[13px]">
                Enviando Mensaje
              </p>
            </div>
          )} */}
          {/* {response && <Success />} */}
        </div>
      </div>
    </>
  )
}

const formSchema = z.object({
  name: z.string().trim().nonempty("El nombre es requerido"),
  mail: z.string().email("El correo electrónico no es válido"),
  phone: z
    .string()
    .refine(
      (value) => /^[+\d\s-]*\d{9,}$/.test(value),
      "Por favor ingrese un número de celular válido. Ej: +51999999999"
    ),
  issue: z.string().trim().nonempty("El Asunto es requerido"),
  message: z.string().trim().nonempty("El mensaje es requerido"),
})
