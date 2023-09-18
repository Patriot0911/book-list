import { IState } from "./filterReducer";

const BASEURL = 'http://localhost:3000';

const getFetchUrl = (state: IState): string => {
    let params = '?';
    if(state.activated === 'activated')
        params += `activated=true`;
    if(state.activated === 'deactivated')
        params += `activated=false`;
    if(state.search.length > 3)
        params += `${params.length > 1 ? '&':''}title=${state.search}`;
    return `${BASEURL}/books${params.length > 1 ? params : ''}`;
};

export default getFetchUrl;