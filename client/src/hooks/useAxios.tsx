import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useEffect, useRef, useState } from 'react'

interface useApiAxiosProps {
  axiosInstance: AxiosInstance
  method: string
  url: string
  requestConfig?: AxiosRequestConfig
}

interface Cache {
  [url: string]: AxiosResponse;
}

type AxiosMethod = 'get' | 'post' | 'put' | 'delete';

export const useApiHook = <T extends Cache,>({ axiosInstance, method, url, requestConfig }: useApiAxiosProps) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState('')
  const effectRun = useRef(false)
  
  useEffect(() => {
    const controller = new AbortController()


    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axiosInstance[method.toLowerCase() as AxiosMethod](url, {
          ...requestConfig,
          signal: controller.signal
        })
        
        setData(response.data)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message)
          setError(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    if (effectRun.current) {
      fetchData()
    }

    return () => {
      controller.abort()
      effectRun.current = true
    }
  }, [axiosInstance, method, requestConfig, url])

  return { data, loading, error }
}

