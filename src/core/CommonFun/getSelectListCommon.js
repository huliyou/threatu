/**
 * Created by wangxiaodan on 16/7/12.
 */
import * as BasicAction from '../../actions/BasicAction';


// hospital
export const getHospitalList = (dispatch) => (params) => {
  dispatch(BasicAction.getHospitals(params));
};

// department
export const getDepartmentList = (dispatch) => (params) => {
  dispatch(BasicAction.getDepartments(params));
};

// dept
export const getDeptList = (dispatch) => (params) => {
  dispatch(BasicAction.getDepts(params));
};

// user role : 2, 4, 8 , 32
export const getUserList = (dispatch) => (params) => {
  dispatch(BasicAction.getUsers(params));
};

// mrc role: 32,
export const getMrcUserList = (dispatch) => (params) => {
  dispatch(BasicAction.getMrcUser(params));
};

// Owner user  role: 24
export const getStaffList = (dispatch) => (params) => {
  dispatch(BasicAction.getStaff(params));
};

// leader role: 16
export const getLeaderList = (dispatch) => (params) => {
  dispatch(BasicAction.getLeader(params));
};

// template
export const getTemplateList = (dispatch) => (departmentId, type, params) => {
  dispatch(BasicAction.getTemplates(departmentId, type, params));
};

// studio
export const getStudioList = (dispatch) => (params) => {
  dispatch(BasicAction.getStudios(params));
};
