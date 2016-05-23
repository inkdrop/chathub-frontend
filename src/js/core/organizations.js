import {List} from 'immutable'


export function setOrganizations(state, organizations){
  return state.set('organizations', List(organizations.skip(1)))
    .set('selectedOrganization', organizations.first())
}

export function getSelectedOrganization(state){
  return state.get('selectedOrganization', {})
}

export function setSelectedOrganization(state, organization){
  return state.set('selectedOrganization', organization)
}
