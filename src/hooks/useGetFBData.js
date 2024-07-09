import { useEffect, useState } from 'react'
import { db,collection, query,where,getDocs } from '../utils/firebase'

const useGetFBData = (collectionName, hookQuery) => {
  const [data, setData] = useState(null)

  const fetchData = async() => {
    try {
      let q = query(collection(db, collectionName))
      let dataQuery = q
      if (hookQuery){
        const { field,operation,value} = hookQuery
        dataQuery = q = query(q, where(field, operation, value));
      }
  
        const querySnapshot = await getDocs(dataQuery)

        if (querySnapshot.size > 0) {
            const fetchedData = {}
            querySnapshot.forEach(doc => {
                const documentData = doc.data()
                const documentKey = doc.id

                fetchedData[documentKey] = documentData
            })

            setData(fetchedData)
        } else {
            setData(null)
        }
    } catch (error) {
      console.error('Error fetching data from Firebase:', error)
    }
  }

  useEffect(() => {
    

    fetchData()
  }, [collectionName, query])

  return data
}

export default useGetFBData
