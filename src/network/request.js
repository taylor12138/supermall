import axios from 'axios'
export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000,
    })
    // 2.axios网络拦截器
    // request拦截下来的config参数其实就是我们的网络请求的配置（但好像没有拦截下数据）
    instance.interceptors.request.use(config => {
        // 拦截完后必须把配置给人还回去，不然网络请求会发送失败
        return config;
    }, err => {
        console.log(err);
    });
    // response拦截下来的结果（包含数据）
    instance.interceptors.response.use(res => {
        // 拦截完后必须把配置给人还回去，不然网络请求无返回结果（undefined）
        //一般返回data就可以了(这个才比较有用)
        return res.data;
    }, err => {
        console.log(err);
    })

    // 3.发送网络请求
    return instance(config);
}