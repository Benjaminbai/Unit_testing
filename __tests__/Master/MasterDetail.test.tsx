import '../../__mocks__/fakeDependencies'
import React from 'react'
import { mount, render } from 'enzyme'
import MasterDetail from '../../pages/Master/MasterDetail'
import { BrowserRouter as Router } from 'react-router-dom'

import { render as RTLRender, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import API from '../../api/Master'

describe('<MasterDetail />', () => {
    test('expect the MasterDetail exist', () => {
        const MasterDetailComponent = mount(<Router><MasterDetail /></Router>)
        expect(MasterDetailComponent.exists()).toBe(true)
    })

    test('expect MasterDetail unmount', () => {
        const MasterDetailComponent = mount(<Router><MasterDetail /></Router>)
        MasterDetailComponent.unmount()
        expect(() => {
            MasterDetailComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const MasterDetailComponent = render(<Router><MasterDetail /></Router>)
        expect(MasterDetailComponent).toMatchSnapshot()
    })

    test('chart rendered', () => {
        const MasterDetailComponent = mount(<Router><MasterDetail /></Router>)
        expect(MasterDetailComponent.find('.echarts-for-react').length).toEqual(2)
    })

    test('detailMaster api', () => {
        const spyFn = jest.spyOn(API, 'detailMaster')
        RTLRender(<Router><MasterDetail /></Router>)
        expect(spyFn).toBeCalled()
    })

    test('detailTrend api', () => {
        const spyFn = jest.spyOn(API, 'detailTrend')
        RTLRender(<Router><MasterDetail /></Router>)
        userEvent.click(screen.getByText(/今日/i))
        expect(spyFn).toBeCalled()
    })

    test('detailTrend api', () => {
        const spyFn = jest.spyOn(API, 'detailTrend')
        RTLRender(<Router><MasterDetail /></Router>)
        userEvent.click(screen.getByText(/近7天/i))
        expect(spyFn).toBeCalled()
    })

    test('back to list', () => {
        RTLRender(<Router><MasterDetail /></Router>)
        userEvent.click(screen.getByText(/部署列表/i))
        expect(window.location.pathname).toBe('/list')
    })
})