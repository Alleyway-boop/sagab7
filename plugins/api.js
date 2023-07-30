export default function ({ $axios, redirect }) {
    $axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    $axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    $axios.defaults.withDirectives = false;
    // 根据环境变量设置baseUrl
    if (process.env.NODE_ENV == 'development') {
        $axios.defaults.baseURL = 'https://gitee.com';//开发环境baseurl
    } else if (process.env.NODE_ENV == 'debug') {
        $axios.defaults.baseURL = 'http://xxx.com:8000/';//测试环境baseurl
    } else if (process.env.NODE_ENV == 'product') {
        $axios.defaults.baseURL = 'http://xxx.com:8000/';//生产环境baseurl
    }
    $axios.onRequest(config => {
        console.log(config)
    })

    $axios.onResponse(response => {
        console.log(response)
    })

    $axios.onRequestError(err => {
        console.log(err)
    })

    $axios.onResponseError(err => {
        console.log(err)
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })
}
