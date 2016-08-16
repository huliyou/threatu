/**
 * Created by wangxiaodan on 16/7/12.
 */
export const isDisabled = (id, editing) => {
  if (id) {
    if (editing) {
      return false;
    }
    return true;
  }
  return false;
};

