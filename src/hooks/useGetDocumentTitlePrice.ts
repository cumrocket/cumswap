import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { CUMMIES } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const cakePriceUsd = 0 // priceData ? parseFloat(priceData.data[CUMMIES.address].price) : 0

  const cakePriceUsdString = ''

  useEffect(() => {
    document.title = `CumSwap${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
