import {List, Map, fromJS} from 'immutable'
import {expect} from 'chai'

import {setOrganizations} from '../src/js/core/organizations'


describe('Organizations core module', () => {

  describe('setOrganizations', () => {

    let state
    const organizationsServerData = [{name: 'Inkdrop Labs'}, {name: 'Meus Pedidos'}]

    beforeEach(() => {
      state = Map()
    })

    it('should add organizations to the state and select the first one', () => {
      const organizations = List(organizationsServerData)
      const nextState = setOrganizations(state, organizations)

      expect(nextState.get('organizations')).to.equal(List([organizationsServerData[1]]))
      expect(nextState.get('selectedOrganization')).to.equal(organizationsServerData[0])
    })

    it('should add an empty list to the state if there are no organizations', () => {
      const organizations = List.of()
    })
  })
})
