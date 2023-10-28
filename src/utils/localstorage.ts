 
export const setLocalStorage = (key: string, value?: string, hours?: number) => {
    value = JSON.stringify(value);
    // 设置过期原则
    if (!value) {
        localStorage.removeItem(key)
    } else {
        let Hours = hours || 24; // 以小时为单位，默认24小时
        let exp = new Date();
        localStorage[key] = JSON.stringify({
            value,
            expires: exp.getTime() + Hours * 1000 * 60 * 60,//失效时间
        })
    }
}
export const getLocalStorage = (key: string) => {
    try {
        let ls = JSON.parse(localStorage[key]);
        if (!ls || ls.expires < Date.now()) {
            return ''
        } else {
            return JSON.parse(ls.value)
        }
    } catch (e) {
        // 兼容其他localstorage
        return localStorage[key]
    }
}