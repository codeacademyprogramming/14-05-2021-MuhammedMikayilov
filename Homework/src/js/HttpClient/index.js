export class HttpClient {
    baseUrl;

    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    async get(url){
        return fetch(`${this.baseUrl}/${url}`).then(resp=>resp.json())
    }

    async post({url, body, header = {}}){
        return fetch(`${this.baseUrl}/${url}`, {
                method:"POST",
                body: JSON.stringify(body),
                headers
        })
        .then(res=> res.body.json())
    }
    async put({url, body, header = {}}){
        return fetch(`${this.baseUrl}/${url}`, {
                method:"PUT",
                body: JSON.stringify(body),
                headers
        })
        .then(res=> res.body.json())
    }

}