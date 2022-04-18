import {appActions, appInitialState, AppInitialStateType, appReducer} from "./appReducer";


let state: AppInitialStateType

beforeEach(() => {
    state = appInitialState
})

test('change app status should work correctly', () => {
    const action = appActions.changeStatus({status: 'loading', message: 'product is loading'})
    const newState = appReducer(state, action)
    expect(newState.status).toBe('loading')
    expect(newState.message).toBe('product is loading')
})