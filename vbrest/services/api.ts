import { Urls } from "@/constants/urls"
import axios from "axios"

export const getNews = async () => {
  try {
    const response = await axios.get(Urls.getNews, {
      headers: { "Content-type": "application/json" },
    })
    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message

      throw new Error(message)
    }
    throw new Error("Ошибка сети, попробуйте позже")
  }
}

export const getNewsById = async (id:string) => {
  try {
    const response = await axios.get(`${Urls.newsById}${id}`, {
      headers: { "Content-type": "application/json" },
    })
    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message

      throw new Error(message)
    }
    throw new Error("Ошибка сети, попробуйте позже")
  }
}

export const getPosters = async () => {
  try {
    const response = await axios.get(Urls.getPosters, {
      headers: { "Content-type": "application/json" },
    })
    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message

      throw new Error(message)
    }
    throw new Error("Ошибка сети, попробуйте позже")
  }
}

export const searchByText = async (text: string) => {
  try {
    const response = await axios.get(`${Urls.searchByText}${text}`, {
      headers: { "Content-type": "application/json" },
    })
    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message

      throw new Error(message)
    }
    throw new Error("Ошибка сети, попробуйте позже")
  }
}