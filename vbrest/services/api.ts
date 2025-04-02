import { Urls } from "@/constants/urls"
import axios from "axios"

export const getNews = async () => {
  try {
    const response = await axios.get(Urls.getNews)
    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message

      throw new Error(message)
    }
    throw new Error("Ошибка сети, попробуйте позже")
  }
}
