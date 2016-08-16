import AsyncFetchHandler from '../core/AsyncFetchHandler';
import * as URL from '../core/WS/URL';
import { POSTJSON } from '../core/WS/WSHandler';

export const UPLOAD_DESIGN = 'UPLOAD_DESIGN';
export const uploadDesign = (params) => (dispatch) => {
  const result = POSTJSON(URL.DesignListPath, params);
  result.then(data => {
    if (data.code === 0) {
      alert('上传成功');
    } else {
      alert('上传失败');
    }
  });
  AsyncFetchHandler(UPLOAD_DESIGN, result, dispatch);
};
