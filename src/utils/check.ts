/**
 * 检测网址访问延时时长
 * 
 * @param url 网址
 */
export function getLoadTime(url: string){
    return new Promise(resolve => {
        let img = document.createElement('img');
        img.style.display = "none";
        img.src=`${url}/?v=${Math.random()}`;
        const timeStart = new Date();

        img.onerror = function(){
            const timeEnd = new Date();
            resolve(timeEnd.getTime() - timeStart.getTime());
        }
        img.onload = function(){
            const timeEnd = new Date();
            resolve(timeEnd.getTime() - timeStart.getTime());
        }

        document.body.appendChild(img);
    });
}

/**
 * 检测网址是否有效
 * 
 * @param url 网址
 */
export function getStatus(url: string){
    return new Promise((resolve, reject) => {
        let link = document.createElement('link');
        link.rel="stylesheet";
        link.type="text/css"
        link.href = url;

        link.onload = function(){
            resolve(true);
        }
        link.onerror = function(){
            resolve(false);
        }

        document.body.appendChild(link);
    })
}