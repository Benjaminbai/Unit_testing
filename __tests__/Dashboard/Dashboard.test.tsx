import '../../__mocks__/fakeDependencies'
import React from 'react'
import { mount, render } from 'enzyme'
import Dashboard from '../../pages/Dashboard/Dashboard'
import { BrowserRouter as Router } from 'react-router-dom'

import { render as RTLRender, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import API from '../../api/Dashboard'

afterEach(() => {
    jest.clearAllMocks()
})

describe('<Dashboard />', () => {
    test('expect the Dashboard exist', () => {
        const DashboardComponent = mount(<Router><Dashboard /></Router>)
        expect(DashboardComponent.exists()).toBe(true)
    })

    test('expect Dashboard unmount', () => {
        const DashboardComponent = mount(<Router><Dashboard /></Router>)
        DashboardComponent.unmount()
        expect(() => {
            DashboardComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const DashboardComponent = render(<Router><Dashboard /></Router>)
        expect(DashboardComponent).toMatchSnapshot()
    })

    test('chart rendered', () => {
        const DashboardComponent = mount(<Router><Dashboard /></Router>)
        expect(DashboardComponent.find('.echarts-for-react').length).toEqual(4)
    })

    test('there are five card in page', () => {
        const DashboardComponent = mount(<Router><Dashboard /></Router>)
        expect(DashboardComponent.find('Card').length).toEqual(5)
    })

    test('click card and redirect 1', () => {
        RTLRender(<Router><Dashboard /></Router>)
        userEvent.click(screen.getByText(/Agent 数量/i))
        expect(window.location.pathname).toBe('/agent/list')
    })

    test('click card and redirect 2', () => {
        RTLRender(<Router><Dashboard /></Router>)
        userEvent.click(screen.getByText(/Master 数量/i))
        expect(window.location.pathname).toBe('/master/list')
    })

    test('click card and redirect 3', () => {
        RTLRender(<Router><Dashboard /></Router>)
        userEvent.click(screen.getByText(/虚拟机/i))
        expect(window.location.pathname).toBe('/host/list')
    })

    test('click card and redirect 4', () => {
        RTLRender(<Router><Dashboard /></Router>)
        userEvent.click(screen.getByText(/物理机/i))
        expect(window.location.pathname).toBe('/host/list')
    })

    test('click card and redirect 5', () => {
        RTLRender(<Router><Dashboard /></Router>)
        userEvent.click(screen.getByText(/容器/i))
        expect(window.location.pathname).toBe('/host/list')
    })

    test('registryTrend api', () => {
        const spyFn = jest.spyOn(API, 'registryTrend')
        RTLRender(<Router><Dashboard /></Router>)
        userEvent.click(screen.getAllByText(/近7天/i)[0])
        expect(spyFn).toBeCalled()
        userEvent.click(screen.getAllByText(/近7天/i)[1])
        expect(spyFn).toBeCalled()
    })

    test('registryTrend api', () => {
        const spyFn = jest.spyOn(API, 'registryTrend')
        RTLRender(<Router><Dashboard /></Router>)
        userEvent.click(screen.getAllByText(/近一个月/i)[0])
        expect(spyFn).toBeCalled()
        userEvent.click(screen.getAllByText(/近一个月/i)[1])
        expect(spyFn).toBeCalled()
    })
})