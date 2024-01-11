import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'

type useAxiosProps = {
  axiosInstance: AxiosInstance
  method: string,
  url: string
  requestConfig?: AxiosRequestConfig
}

export type ApiResponse = {
  musics: MusicData[]
}

export type MusicData = {
  _id: string,
  user_id: string,
  title: string,
  artist: string,
  duration: number,
  thumbnail: string,
  storage_url: string,
  __v: number
}

export const useAxios = ({ axiosInstance, method, url, requestConfig }: useAxiosProps) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<ApiResponse | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
       const response = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
        })

        setData(response.data)
      } catch (error) {
        console.log(error.message)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [axiosInstance, method, requestConfig, url])
  return [data, loading, error]
}
