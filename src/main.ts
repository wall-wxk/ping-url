import {
    getLoadTime,
    getStatus,
} from './utils/check';
import {
    isUrl
} from './utils/is'
interface Tresult{
    status: boolean;
    time: number;
}

let protocol = 'http'; // 默认协议
const protocolList: string[] = ['http', 'https'];
interface TconfigOption{
    protocol: string;
}
/**
 * 设置默认协议
 * @param prot 协议名
 */
function config({
    protocol: prot
}: TconfigOption){
    if(!protocolList.includes(prot)){
        throw new Error(`protocolList not includes ${prot}`);
    }
    protocol = prot;
    return protocol;
}
/**
 * 检查url是否能访问，并返回检测数据
 * @param url 检测的url
 */
function check(url){
    return new Promise(async (resolve, reject) => {
        if(!isUrl(url)){
            reject({
                status: false,
                msg: `url is not correct!`
            });
            return;
        }
        if(!url.includes('http://') && !url.includes('https://')){
            url = `${protocol}://${url}`;
        }

        let result: Tresult = {
            status: false,
            time: -1
        };
        const status = await getStatus(url) as boolean;
        const time = await getLoadTime(url) as number;
    
        result.status = status;
        result.time = time;
        
        resolve(result);
    });
}
export default {
    check: (url: string) => check(url),
    config: (prot: TconfigOption) => config(prot)
};