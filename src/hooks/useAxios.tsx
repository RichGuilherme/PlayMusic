import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'

type useAxiosProps = {
  axiosInstance: AxiosInstance 
  method: string
  url: string
  requestConfig?: AxiosRequestConfig
}

export type ApiResponse = {
  musics: MusicData[]

  //Description data
  namePlayList: string
  descriptionPlaylist: string
  sumMusics: number
  sumDurations: number
  
  // user
  username: string
  email: string
  imagProfile: string
}

export type MusicData = {
  _id: string
  user_id: string
  title: string
  artist: string
  duration: number
  thumbnail: string
  storage_url: string
  __v: number
}

type AxiosMethod = 'get' | 'post' | 'put' | 'delete';

export const useAxios = ({ axiosInstance, method, url, requestConfig }: useAxiosProps) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<ApiResponse | null>(null)
  const [error, setError] = useState('')


  useEffect(() => {
    const fetchData = async () => {
      try {
       const response = await axiosInstance[method.toLowerCase() as AxiosMethod](url, {
          ...requestConfig,
        })

        setData(response.data)
      } catch (error) {
        if(axios.isAxiosError(error)){
          console.log(error.message)
          setError(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [axiosInstance, method, requestConfig, url])
  return {data, loading, error}
}
