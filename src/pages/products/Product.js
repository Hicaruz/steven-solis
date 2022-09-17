import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { firestore } from '../../tools/firebase'
import { doc, query, getDoc } from "firebase/firestore";

const Products = () => {

    const [isLoading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    const params = useParams();

    console.log(params); // 👉️ {userId: '4200'}
    useEffect(() => {

        (async () => {


            const q = query(doc(firestore, `products/${params.id}`));
            const snapshot = await getDoc(q);
            const product = { id: snapshot.id, ...snapshot.data() }
            console.log(product)
            setProduct(product)
            setLoading(false);

        })()
    }, [params])

    if (isLoading) {
        return <>loading...</>
    }

    return (
        <>
            <div className="pt-6 px-2 md:px-[13rem]">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    <div className="col-start-1 col-end-1 flex h-100">
                        <div className="m-auto">
                            <h1 className="text-gray-400 font-semibold text-sm md:text-3xl text-right ">
                                FALTA NOMBRE
                            </h1>
                            <h6 className="text-gray-400 font-light text-sm md:text-xl text-right ">
                                FALTA PRECIO
                            </h6>
                        </div>
                    </div>
                    <div className="md:col-start-2 col-span-3 ">
                        {isLoading ?
                            <div className="animate-pulse text-center py-16">
                                <i className="fa-solid fa-shirt fa-10x"></i>
                            </div> :
                            <>
                                <img alt="product" className="m-auto w-[32rem] md:w-[42rem] cursor-pointer transition-all duration-500 transform hover:scale-105 drop-shadow-lg" src={product.image} />

                                {/* <img className="absolute w-[32rem] md:w-[54rem] z-0 cursor-pointer top-0 " src={`/images/background.jpg`} /> */}
                            </>
                        }
                    </div>

                    <div className="flex h-100">

                        <div className="m-auto text-gray-400 text-sm ">
                            <div className="py-2">

                                <b className="pt-2">
                                    DESCRIPCIÓN
                                </b>
                                <div className=" font-light text-xs">
                                    {product.description}
                                </div>
                            </div>

                            <div className="py-2">
                                <b>
                                    DETALLES
                                </b>
                                <div className=" font-light text-xs">
                                    {product.details}
                                </div>
                            </div>
                            <div className="py-2">
                                <b>COLOR </b><span>{product.color}</span>
                            </div>
                            <div className="py-2">
                                <b>TALLAS </b>
                                <div className="flex pt-1 gap-1">

                                    <SizeButton size="xs" product={product} />
                                    <SizeButton size="s" product={product} />
                                    <SizeButton size="m" product={product} />
                                    <SizeButton size="l" product={product} />
                                    <SizeButton size="xl" product={product} />

                                </div>
                                {
                                    product.stock === 0 ?

                                        <button type="button" className=" bg-gray-500 mt-2 py-2 px-6 font-semibold text-white w-full cursor-not-allowed" disabled>
                                            SIN STOCK
                                        </button>
                                        :
                                        <button type="button" className=" bg-black mt-2 py-2 px-6 font-semibold text-white w-full">
                                            AGREGAR AL CARRITO
                                        </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



function SizeButton({ size, product }) {

    return (
        <>
            {product.sizes[size] ?
                <button type="button" className="border border-gray-600 py-2 px-6 text-gray-600" >
                    {size.toUpperCase()}
                </button> :
                <button type="button" className="border border-gray-600 py-2 px-6 text-gray-400 line-through" >
                    {size.toUpperCase()}
                </button>
            }
        </>
    )
}
export default Products