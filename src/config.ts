/** 环境变量 */
const ENV = import.meta.env;  // vite是以这种方式获取环境变量
 
/** 基础域名 */
export const SOURCE_URL = ENV.VITE_SOURCE_URL;
export const BASE_URL = ENV.VITE_BASE_API;
 
/** 基础服务地址 */
export const URL = BASE_URL + '/api';
 
/** 超时时间 */
export const TIMEOUT = 6000;