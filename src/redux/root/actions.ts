import { Action } from 'redux';
import { IFrameParams } from '../../lib/IFrameSupport';

export enum RootActionType {
    ROOT_START_HOSTED_ENVIRONMENT = '@kbase-ui-components:root-start-hosted-environment',
    ROOT_START_DEVELOPMENT_ENVIRONMENT = '@kbase-ui-components:root-start-development-environment'
}

export interface StartHostedEnvironment extends Action {
    type: RootActionType.ROOT_START_HOSTED_ENVIRONMENT;
    params: IFrameParams;
}

export interface StartDevelopmentEnvironment extends Action {
    type: RootActionType.ROOT_START_DEVELOPMENT_ENVIRONMENT;
}

export function startHostedEnvironment(params: IFrameParams): StartHostedEnvironment {
    return {
        type: RootActionType.ROOT_START_HOSTED_ENVIRONMENT,
        params
    };
}

export function startDevelopmentEnvironment(): StartDevelopmentEnvironment {
    return {
        type: RootActionType.ROOT_START_DEVELOPMENT_ENVIRONMENT
    };
}

// export function startHostedEnvironment(params: IFrameParams) {
//     return async (dispatch: ThunkDispatch<RootStoreState, void, Action>, getState: () => RootStoreState> => {
//         // set up the hosted environment -- really just the channel id.

//     }
// }
