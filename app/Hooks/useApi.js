import { useState } from 'react'


export default useApi = (apiFunc, ...otherParams) => {
  const [data, setData] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const request = async (values) => {
    setLoading(true)
    setError(false)
    setData("")
    const response = await apiFunc(values)
    setLoading(false)

    if (!response.ok) return setError('There Was A Problem Retriving Data');

    setError(false)
    setData(response.data)
  }

  return { request, data, error, loading };
}



