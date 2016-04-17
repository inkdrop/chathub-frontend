import {List} from 'immutable'


export function setOrganizations(state, organizations){
    return state.set('organizations', List(organizations))
}

export function selectOrganization(state, organizationId){
    const organizations = state.get('organizations')
    
}
