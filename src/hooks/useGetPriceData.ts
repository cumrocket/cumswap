import { useEffect, useState } from 'react'
import { CUMMIES } from '../constants'

type ApiResponse = {
  updated_at: number
  data: {
    name: string
    symbol: string
    price: string
    price_BNB: string
  }
}

// const api = 'https://api.pancakeswap.info/api/tokens'
const api = `https://api.pancakeswap.info/api/v2/tokens/${CUMMIES.address}`;

const useGetPriceData = () => {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api)
        const res: ApiResponse = await response.json()

        setData(res)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export default useGetPriceData
