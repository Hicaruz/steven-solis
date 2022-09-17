import React from "react"
import { auth } from '../../tools/firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Collections = () => {
    const navigate = useNavigate();


    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(() => {
            navigate("/")

        })
    }

    return (
        <>
            <div className="px-2 md:px-8">
                <div className="relative py-16 0">
                    <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                            <div className="rounded-xl bg-white shadow-xl">
                                <div className="p-6 sm:p-16">
                                    <div className="space-y-4">
                                        <h2 className="mb-8 text-2xl  font-bold">Registrate para ser parte <br /><strong className="text-black">del Futuro.</strong></h2>
                                    </div>
                                    <div className="mt-16 grid space-y-4">
                                        <button
                                            onClick={loginWithGoogle}
                                            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:border-black focus:bg-blue-50 active:bg-blue-100">
                                            <div className="relative flex items-center space-x-4 justify-center">
                                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">Registrate con Google</span>
                                            </div>
                                        </button>
                                        <span className="text-center text-gray-400">proximamente</span>
                                        <button disabled className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 focus:bg-blue-50 active:bg-blue-100">
                                            <div className="relative flex items-center space-x-4 justify-center">
                                                <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="absolute left-0 w-5" alt="Facebook logo" />
                                                <span className="block w-max font-semibold tracking-wide text-gray-400 text-sm transition duration-300  sm:text-base">Registrate con Facebook</span>
                                            </div>
                                        </button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Collections