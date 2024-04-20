import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import { useEffect, useState } from 'react'

interface useAxiosProps {
  axiosInstance: AxiosInstance 
  method: string
  url: string
  requestConfig?: AxiosRequestConfig
}

type AxiosMethod = 'get' | 'post' | 'put' | 'delete';

const useApiHook = <T,> ({ axiosInstance, method, url, requestConfig }: useAxiosProps) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState('')


  useEffect(() => {
    const fetchData = async () => {
      try {
       const response: AxiosResponse<T> = await axiosInstance[method.toLowerCase() as AxiosMethod](url, {
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

export default useApiHook