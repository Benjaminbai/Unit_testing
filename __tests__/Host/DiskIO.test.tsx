import '../../__mocks__/fakeDependencies'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount, render } from 'enzyme'
import DiskIO from '../../pages/Host/DiskIO'

import { render as RTLRender } from '@testing-library/react'
import API from '../../api/Host'

const params = {
    ip: "",
    tag: "",
    measurement: "",
    agg_func: "",
}

describe('<DiskIO />', () => {
    test('expect the DiskIO exist', () => {
        const DiskIOComponent = mount(<Router><DiskIO {...params} /></Router>)
        expect(DiskIOComponent.exists()).toBe(true)
    })

    test('expect DiskIO unmount', () => {
        const DiskIOComponent = mount(<Router><DiskIO {...params} /></Router>)
        DiskIOComponent.unmount()
        expect(() => {
            DiskIOComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const DiskIOComponent = render(<Router><DiskIO {...params} /></Router>)
        expect(DiskIOComponent).toMatchSnapshot()
    })

    test('detailRegistryHost api should be called if ip has value', () => {
        params.ip = "test"
        const spyFn = jest.spyOn(API, 'diskIORegistryTrend')
        RTLRender(<Router><DiskIO {...params} /></Router>)
        expect(spyFn).toBeCalled()
    })
})