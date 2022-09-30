import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { firestore } from '../../tools/firebase'
import { collection, query, getDocs } from "firebase/firestore";

const Collections = () => {
    const [isLoading, setLoading] = useState(true)
    const [collections, setCollections] = useState([])
    const navigate = useNavigate();



    useEffect(() => {

        (async () => {
            setLoading(true);

            let q = query(collection(firestore, "campaigns"));

            const querySnapshot = await getDocs(q);
            const collections = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

            setCollections(collections)
            setLoading(false);

        })()
    }, [])

    if (isLoading) {

        return <div className="text-center">Loading...</div>
    }

    return (
        <>
            <div className="pt-6 px-2 md:px-8">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-2 place-content-center ">
                    {collections.map(collection => (
                        <>
                            <div className="text-center cursor-pointer transition-all duration-500 transform hover:scale-105" onClick={() => navigate(`/shop?campaign=${collection.id}`)}>
                                <img className="m-auto " src={collection.image} width="70%" alt="mobile" />
                                <span className="font-extrabold	mt-5">{collection.name.toUpperCase()}</span>

                            </div>
                        </>
                    ))}

         
                </div>
            </div>

            <h3 className="md:hidden block text-center pt-6">
            </h3>
        </>
    )
}

export default Collections