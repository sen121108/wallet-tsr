import axios from "axios";


export const GetApiItem = ():Object => {
    let items:Object = {};
    const url = 'http://localhost:8888/items';
    axios.get(url).then((responce) => {
        items = responce.data
        console.log(items);
    }).catch((error) => {
        console.log(error.log);
    });
    return items;
}