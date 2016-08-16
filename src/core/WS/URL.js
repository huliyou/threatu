// let host = window.location.host;
// if (process.env.NODE_ENV === 'development') {
//   host = 'dev.shaka.hsohealth.com';
//   // host = 'localhost';
// }
// export const rootURL = `https://${host}/api/v1/`;
export const rootURL = 'http://localhost:8000/';

/**
 * 产品列表地址
 * @type {String}
 */
export const ProductListPath: string = 'products';

/**
 * DIY列表地址
 * @type {[type]}
 */
export const DIYListPath: string = 'DIYs';

/**
 * 设计列表地址
 * @type {[type]}
 */
export const DesignListPath: string = 'designs';
