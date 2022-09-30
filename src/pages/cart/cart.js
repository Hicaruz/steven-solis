import React from 'react'
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../../actions';

function Cart({ items, DeleteCart }) {





    let ListCart = [];
    let TotalCart = 0;

    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price, tonggia) {
        return Number(price * tonggia).toLocaleString('en-US');
    }


    return (
        <div className="row">

            <div className="flex md:flex-row flex-col justify-end" id="cart">
                <div className=" w-full md:pl-10 pl-4 pr-10 md:pr-4  py-8 bg-white overflow-y-auto overflow-x-hidden h-100" id="scroll">
                    {ListCart.map((product, key) => {
                        return (
                            <div className="md:flex items-center  py-8 border-b border-gray-200">
                                <div className="w-1/4">
                                    <img src={product.image} alt="product" className="w-full h-full object-center object-cover" />
                                </div>
                                <div className="md:pl-3 md:w-3/4">
                                    <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{product.id.slice(0, 5)}</p>
                                    <div className="flex items-center justify-between w-full pt-1">
                                        <p className="text-base font-black leading-none text-gray-800">{product.name}</p>

                                    </div>
                                    <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                    <p className="w-96 text-xs leading-3 text-gray-600">{product.description}</p>
                                    <div className="flex items-center justify-between pt-5 pr-6">
                                        <div className="flex itemms-center" onClick={() => DeleteCart(key)}>
                                            {/* <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p> */}
                                            <p className="text-xs leading-3 underline text-red-500  cursor-pointer">Remove</p>
                                        </div>
                                        <p className="text-base font-black leading-none text-gray-800">${TotalPrice(product.price, product.quantity)}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
                <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full border-l h-full">
                    <div className="flex flex-col md:h-[500px] px-14 md:py-20 pb-5 justify-between overflow-y-auto">
                        {/* <div>
                                <div className="flex items-center justify-between pt-16">
                                    <p className="text-base leading-none text-gray-800">Subtotal</p>
                                    <p className="text-base leading-none text-gray-800">$9,000</p>
                                </div>
                                <div className="flex items-center justify-between pt-5">
                                    <p className="text-base leading-none text-gray-800">Shipping</p>
                                    <p className="text-base leading-none text-gray-800">$30</p>
                                </div>
                        
                            </div> */}
                        <div>
                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-10">
                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">${Number(TotalCart).toLocaleString('en-US')}</p>
                            </div>
                            <button  className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
const mapStateToProps = state => {
    //  console.log(state)
    return {
        items: state._todoProduct
    }
}

export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(Cart)
