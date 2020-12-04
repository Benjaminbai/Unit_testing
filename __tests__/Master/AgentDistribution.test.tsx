import '../../__mocks__/fakeDependencies'
import React from 'react'
import { mount, render } from 'enzyme'
import AgentDistribution from '../../pages/Master/AgentDistribution'
import { BrowserRouter as Router } from 'react-router-dom'

import { render as RTLRender, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import API from '../../api/Master'

describe('<AgentDistribution />', () => {
    test('expect the AgentDistribution exist', () => {
        const AgentDistributionComponent = mount(<Router><AgentDistribution /></Router>)
        expect(AgentDistributionComponent.exists()).toBe(true)
    })

    test('expect AgentDistribution unmount', () => {
        const AgentDistributionComponent = mount(<Router><AgentDistribution /></Router>)
        AgentDistributionComponent.unmount()
        expect(() => {
            AgentDistributionComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const AgentDistributionComponent = render(<Router><AgentDistribution /></Router>)
        expect(AgentDistributionComponent).toMatchSnapshot()
    })

    test('registryTrend api', () => {
        const spyFn = jest.spyOn(API, 'distributionMaster')
        RTLRender(<Router><AgentDistribution /></Router>)
        expect(spyFn).toBeCalled()
    })

    test('back to list', () => {
        RTLRender(<Router><AgentDistribution /></Router>)
        userEvent.click(screen.getByText(/部署列表/i))
    })
})