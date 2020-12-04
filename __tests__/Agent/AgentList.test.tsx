import '../../__mocks__/fakeDependencies'
import React from 'react'
import { mount } from 'enzyme'
import AgentList from '../../pages/Agent/AgentList'
import { BrowserRouter as Router } from 'react-router-dom'
import { render as RTLRender, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import API from '../../api/Agent'

const AgentListComponent = mount(<Router><AgentList /></Router>)

describe('<AgentList />', () => {
    test('expect the AgentList exist', () => {
        expect(AgentListComponent.exists()).toBe(true)
    })

    test('expect AgentList unmount', () => {
        AgentListComponent.unmount()
        expect(() => {
            AgentListComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        expect(AgentListComponent).toMatchSnapshot()
    })

    test('api listRegistryAgent', () => {
        const spyFn = jest.spyOn(API, 'listRegistryAgent')
        RTLRender(<Router><AgentList /></Router>)
        userEvent.click(screen.getByText(/搜 索/i))
        expect(spyFn).toBeCalled()
    })
})

