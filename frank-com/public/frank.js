function jsonp(url) {
    return new Promise((resolve, reject) => {
        const random = "sunJSONPCallbackName" + Math.random()
        window[random] = (data) => {
            resolve(data)
        }
        const script = document.createElement("script")
        script.src = `${url}?callback=${random}`
        script.onload = () => {
            script.remove()
        }
        script.onerror = () => {
            reject("失败了!")
        }
        document.body.appendChild(script)
    })
}
jsonp("http://qq.com:9990/friends.js").then((res) => {
    console.log(res)
}, (res) => {
    console.log(res)
})