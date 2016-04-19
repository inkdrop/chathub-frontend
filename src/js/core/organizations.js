import {List} from 'immutable'


export function setOrganizations(state, organizations){
    return state.set('organizations', List(organizations.skip(1)))
        .set('selectedOrganization', organizations.first())
}
