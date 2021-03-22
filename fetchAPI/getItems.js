export default function callAPI() { 
    return new Promise((resolve, reject) => {

        const url = `http://localhost:3000/items`
        fetch(url, {
            method: "GET"
        })
            //.then((response))
            .then((response) => response.json())
            .then((res) => {
                //console.log(res)
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}