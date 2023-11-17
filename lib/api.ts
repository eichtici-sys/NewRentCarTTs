export type FormState = {
  name: string
  mail: string
  phone: string
  issue: string
  message: string
}
export const sendContactForm = async (data: FormState) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to send message")
    }

    return await response.json()
  } catch (error) {
    console.error("Error sending contact form:", error)
    throw error
  }
}
