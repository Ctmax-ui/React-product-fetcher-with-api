import { useState, useEffect } from 'react'

const useFetcher = (path, dependec) => {
    const [showProduct, setshowProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        async function getProducts() {
            try {
                setIsLoading(true)
                const product = await (await fetch(`https://api.escuelajs.co/api/v1/${path}`)).json();
                setshowProduct(product);

            } catch (err) {
                console.log(err);
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }
        getProducts()
    }, [path, dependec])

    return { showProduct, isLoading, error }
}

export default useFetcher