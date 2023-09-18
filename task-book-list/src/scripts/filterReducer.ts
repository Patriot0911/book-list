type TActiveStates = 'activated' | 'deactivated' | 'all';

export interface IState {
    search: string;
    activated: TActiveStates;
};

export interface IActions {
    type: string;
    params: string;
};

export const filterReducer = (state: IState, actions: IActions) :IState => {
    switch(actions.type) {
        case 'changeSearch':
            return {
                ...state,
                search: actions.params as string
            };
        case 'changeFilter':
        {
            // console.log(actions.params);
            return {
                ...state,
                activated: actions.params as TActiveStates
            };
        }
        default:
            return {
                search: '',
                activated: 'all'
            };
    }
}