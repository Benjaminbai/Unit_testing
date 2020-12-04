import '../../__mocks__/fakeDependencies'
import React from 'react'
import { mount, render } from 'enzyme'
import HostDetail from '../../pages/Host/HostDetail'
import { BrowserRouter as Router } from 'react-router-dom'

import { render as RTLRender } from '@testing-library/react'
import API from '../../api/Host'

describe('<HostDetail />', () => {
    test('expect the HostDetail exist', () => {
        const HostDetailComponent = mount(<Router><HostDetail /></Router>)
        expect(HostDetailComponent.exists()).toBe(true)
    })

    test('expect HostDetail unmount', () => {
        const HostDetailComponent = mount(<Router><HostDetail /></Router>)
        HostDetailComponent.unmount()
        expect(() => {
            HostDetailComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const HostDetailComponent = render(<Router><HostDetail /></Router>)
        expect(HostDetailComponent).toMatchSnapshot()
    })

    test('the count of tab should be five', () => {
        const HostDetailComponent = mount(<Router><HostDetail /></Router>)
        expect(HostDetailComponent.find('.ant-tabs-tab').length).toBe(5)
    })

    test('chart rendered', () => {
        const HostDetailComponent = mount(<Router><HostDetail /></Router>)
        expect(HostDetailComponent.find('DiskIO').exists()).toBe(true)
    })

    test('detailRegistryHost api', () => {
        const spyFn = jest.spyOn(API, 'detailRegistryHost')
        RTLRender(<Router><HostDetail /></Router>)
        expect(spyFn).toBeCalled()
    })
})