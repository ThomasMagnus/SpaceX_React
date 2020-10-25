import FetchData from "../services/getdata";
import {useEffect, useState} from "react";

const fetchData = new FetchData();

const useLaunches = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData.getLaunches()
            .then(launches => setData([...launches]))
    }, [])

    const getLaunch = id => data.find(item => item.id === id)

    return {data, getLaunch}
}

export default useLaunches;
