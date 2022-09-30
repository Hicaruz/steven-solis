import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import { firestore } from '../../tools/firebase'
import { collection, query, getDocs, where } from "firebase/firestore";
import { actFetchProductsRequest } from "../../actions/index"
const Products = () => {
    const navigate = useNavigate();

    const [isLoading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [searchParams] = useSearchParams();


    const gender = searchParams.get("gender")
    const campaign = searchParams.get("campaign")

    useEffect(() => {

        (async () => {
            setLoading(true);
            const wheres = []

            if (gender) {
                wheres.push(where("gender", "array-contains", gender))
            }
            if (campaign) {
                wheres.push(where("campaign", "==", campaign))
            }

            let q = query(collection(firestore, "products"), ...wheres)

            const querySnapshot = await getDocs(q);
            const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            actFetchProductsRequest(products)
            setProducts(products)
            setLoading(false);

        })()
    }, [gender, campaign])

    if (isLoading) {

        return <div className="text-center">Loading...</div>
    }

    return (
        <div>
            <div className="md:pt-2 px-2 md:px-10">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 place-content-center ">

                    {products.map((product, index) => {
                        return (
                            <>
                                <div key={index} onClick={() => navigate(`/product/${product.id}`)} className="image-container">
                                    <img className="product-holder" alt="product" src="https://firebasestorage.googleapis.com/v0/b/dev-stevensolis.appspot.com/o/background.png?alt=media&token=97cd7efb-872f-43e1-87e3-562eef3e1e97" />

                                    <img alt="product"
                                        className="m-auto w-[32rem] md:w-[24rem] z-40 cursor-pointer transition-all duration-500 transform hover:scale-125 drop-shadow-xl"
                                        src={product.image} />
                                    <h6 className="text-gray-500 text-center font-semibold text-sm md:text-base mt-0">
                                        {product.name}
                                    </h6>   
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products