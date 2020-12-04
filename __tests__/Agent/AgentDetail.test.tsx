import '../../__mocks__/fakeDependencies'
import React from 'react'
import { mount, render } from 'enzyme'
import AgentDetail from '../../pages/Agent/AgentDetail'
import { BrowserRouter as Router } from 'react-router-dom'

import { render as RTLRender, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import API from '../../api/Agent'


describe('<AgentDetail />', () => {
    test('expect the AgentDetail exist', () => {
        const AgentDetailComponent = mount(<Router><AgentDetail /></Router>)
        expect(AgentDetailComponent.exists()).toBe(true)
    })

    test('expect AgentDetail unmount', () => {
        const AgentDetailComponent = mount(<Router><AgentDetail /></Router>)
        AgentDetailComponent.unmount()
        expect(() => {
            AgentDetailComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const AgentDetailComponent = render(<Router><AgentDetail /></Router>)
        expect(AgentDetailComponent).toMatchSnapshot()
    })

    test('chart rendered', () => {
        const AgentDetailComponent = mount(<Router><AgentDetail /></Router>)
        expect(AgentDetailComponent.find('.echarts-for-react').length).toEqual(2)
    })

    test('registryTrend api', () => {
        const spyFn = jest.spyOn(API, 'registryTrend')
        RTLRender(<Router><AgentDetail /></Router>)
        userEvent.click(screen.getByText(/今日/i))
        expect(spyFn).toBeCalled()
        userEvent.click(screen.getByText(/近7天/i))
        expect(spyFn).toBeCalled()
    })
})