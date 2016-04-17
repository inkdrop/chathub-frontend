import {List, Map} from 'immutable'
import {expect} from 'chai'

import {setOrganizations} from '../src/js/core/organizations'


describe('organizations logic', () => {

    describe('setOrganizations', () => {

        it('add the organizations to the state', () => {
            const state = Map()
            const organizations = List.of('Inkdrop Labs', 'Meus Pedidos')
            const nextState = setOrganizations(state, organizations)

            expect(nextState).to.equal(Map({
                organizations: List.of('Inkdrop Labs', 'Meus Pedidos')
            }))
        })
    })
})
