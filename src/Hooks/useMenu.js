import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const useMenu = ()=>{
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(false);

    // // from database
    // useEffect(()=>{
    //     fetch('https://ars-restaurant-db.vercel.app/menu')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setMenu(data);
    //         setLoading(true);
    //     } )
    // },[])


    // axios use kori nai tai res.json() use kora lage.
    // axios use korle json e convert e kore dey tai json kora lage na
    // useQuery use korlam cz refetch kora lagbe pore tai.
    
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        // enabled: !loading,
        queryFn: async() =>{
            const res = await fetch('https://ars-restaurant-db.vercel.app/menu');
            return res.json();
        }
    })

    return[menu, loading, refetch]
}
export default useMenu;