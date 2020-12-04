import '../../__mocks__/fakeDependencies'
import React from 'react'
import { mount, render } from 'enzyme'
import Host from '../../pages/Host/Host'
import { BrowserRouter as Router } from 'react-router-dom'

import { render as RTLRender, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import API from '../../api/Host'

describe('<Host />', () => {
    test('expect the Host exist', () => {
        const HostComponent = mount(<Router><Host /></Router>)
        expect(HostComponent.exists()).toBe(true)
    })

    test('expect Host unmount', () => {
        const HostComponent = mount(<Router><Host /></Router>)
        HostComponent.unmount()
        expect(() => {
            HostComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const HostComponent = render(<Router><Host /></Router>)
        expect(HostComponent).toMatchSnapshot()
    })

    test('the SearchForm component should be render', () => {
        const HostComponent = render(<Router><Host /></Router>)
        expect(HostComponent.find('form').length).toBe(1)
    })

    test('trigger detailRegistryHost api', () => {
        const spyFn = jest.spyOn(API, 'hostRegistryHost')
        RTLRender(<Router><Host /></Router>)
        userEvent.click(screen.getByText(/搜 索/i))
        expect(spyFn).toBeCalled()
    })

    test('detailRegistryHost api', () => {
        const spyFn = jest.spyOn(API, 'hostRegistryHost')
        RTLRender(<Router><Host /></Router>)
        expect(spyFn).toBeCalled()
    })
})