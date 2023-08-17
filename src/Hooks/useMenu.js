import { useEffect, useState } from "react";

const useMenu = ()=>{
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(false);

    // from database
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data =>{
            setMenu(data);
            setLoading(true);
        } )
    },[])

    return[menu, loading]
}
export default useMenu;