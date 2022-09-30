import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { firestore } from '../../tools/firebase'
import { doc, query, getDoc } from "firebase/firestore";
import { actFetchProductsRequest, AddCart } from '../../actions'
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Products = (props) => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    const [size, setSize] = useState(null)
    const params = useParams();

    useEffect(() => {

        (async () => {


            const q = query(doc(firestore, `products/${params.id}`));
            const snapshot = await getDoc(q);
            const product = { id: snapshot.id, ...snapshot.data() }


            setProduct(product)
            setLoading(false);

        })()
    }, [params])

    if (isLoading) {
        return <div className="text-center">Loading...</div>
    }

    const stock = Object.values(product.sizes).reduce((total, item) => total + item, 0)

    return (
        <>
            <div className="pt-6 px-2 md:px-[13rem]">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    <div className="hidden md:flex col-start-1 col-end-1 h-100">
                        <div className="m-auto">
                            <h1 className="text-gray-400 font-semibold text-sm md:text-3xl text-right ">
                                {product.alias}
                            </h1>
                            <h6 className="text-gray-400 font-light text-sm md:text-xl text-right ">
                                Q{product.price}
                            </h6>
                        </div>
                    </div>
                    <div className="md:col-start-2 col-span-3 ">
                        {isLoading ?
                            <div className="animate-pulse text-center py-16">
                                <i className="fa-solid fa-shirt fa-10x"></i>
                            </div> :
                            <>
                                <img className="product-holder-individual hidden md:block" alt="background" src="https://firebasestorage.googleapis.com/v0/b/dev-stevensolis.appspot.com/o/background.png?alt=media&token=97cd7efb-872f-43e1-87e3-562eef3e1e97" />
                                <img className="product-holder-mobile md:hidden block" alt="background" src="https://firebasestorage.googleapis.com/v0/b/dev-stevensolis.appspot.com/o/background.png?alt=media&token=97cd7efb-872f-43e1-87e3-562eef3e1e97" />

                                <img alt="product" className="m-auto w-[32rem] md:w-[42rem] cursor-pointer transition-all duration-500 transform hover:scale-105 drop-shadow-lg" src={product.image} />

                                {/* <img className="absolute w-[32rem] md:w-[54rem] z-0 cursor-pointer top-0 " src={`/images/background.jpg`} /> */}
                            </>
                        }
                    </div>

                    <div className="md:flex md:pt-[12rem]">
                        <div className="md:hidden flex col-start-1 col-end-1 h-100">
                            <div className="m-auto">
                                <h1 className="text-gray-400 font-semibold text-2xl text-center ">
                                    {product.alias}
                                </h1>
                                <h6 className="text-gray-400 font-light text-sm md:text-xl text-center ">
                                    Q{product.price}
                                </h6>
                            </div>
                        </div>
                        <div className="m-auto text-gray-400 text-xs mt-6  ">
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
                                <b>COLOR <span className="text-gray-300">{product.color.toUpperCase()}</span></b>
                            </div>
                            <div className="py-2">
                                <b>TALLAS </b>
                                <div className="flex pt-1  gap-2.5 md:gap-1">

                                    <SizeButton size="xs" product={product} currentSize={size} setSize={setSize} />
                                    <SizeButton size="s" product={product} currentSize={size} setSize={setSize} />
                                    <SizeButton size="m" product={product} currentSize={size} setSize={setSize} />
                                    <SizeButton size="l" product={product} currentSize={size} setSize={setSize} />
                                    <SizeButton size="xl" product={product} currentSize={size} setSize={setSize} />

                                </div>
                                {
                                    stock === 0 ?

                                        <button type="button" className=" bg-gray-500 mt-2 py-2 px-6 font-semibold text-white w-full cursor-not-allowed" disabled>
                                            SIN STOCK
                                        </button>
                                        :
                                        (size === null ?
                                            <button type="button" className=" bg-black mt-2 py-2 px-6 font-semibold text-white w-full" disabled>
                                                SELECCIONA TALLA
                                            </button> :
                                            <button type="button" className=" bg-black mt-2 py-2 px-6 font-semibold text-white w-full"
                                                onClick={() => {
                                                    props.AddCart({
                                                        ...product,
                                                        id: product.id,
                                                        quantity: 1,
                                                        name: product.alias,
                                                        image: product.image,
                                                        price: product.price,
                                                        size: size,
                                                    })

                                                    navigate("/shop")
                                                }}>
                                                AGREGAR AL CARRITO
                                            </button>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



function SizeButton({ size, product, currentSize, setSize }) {

    return (
        <>
            {product.sizes[size] ?
                (currentSize === size ?
                    <button type="button" className="border border-gray-600 py-2 px-6 text-white bg-black" >
                        {size.toUpperCase()}
                    </button> :
                    <button type="button" className="border border-gray-600 py-2 px-6 text-gray-600" onClick={() => setSize(size)}>
                        {size.toUpperCase()}
                    </button>) :
                <button type="button" className="border border-gray-600 py-2 px-6 text-gray-600 crossed" >
                    {size.toUpperCase()}
                </button>
            }
        </>
    )
}
const mapStateToProps = state => {
    return {
        _products: state._todoProduct,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
        AddCart: item => dispatch(AddCart(item))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)

