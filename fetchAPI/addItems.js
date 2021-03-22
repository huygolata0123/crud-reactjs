export default function addItem(payload) {
    console.log("payload", payload)
    return new Promise((resolve, reject) => {

        const url = 'http://localhost:3000/items'
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(payload)
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