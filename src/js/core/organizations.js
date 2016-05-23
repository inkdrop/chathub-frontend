import {List} from 'immutable'


export function setOrganizations(state, organizations){
  if(organizations.size > 0){
    return state.set('organizations', List(organizations.skip(1)))
      .set('selectedOrganization', organizations.first())
  } else {
    return state.set('organizations', List([]))
      .set('selectedOrganization', null)
  }
}

export function getSelectedOrganization(state){
  return state.get('selectedOrganization', null)
}

export function setSelectedOrganization(state, organization){
  return state.set('selectedOrganization', organization)
}
