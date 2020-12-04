import '../../__mocks__/fakeDependencies'
import React from 'react'
import { mount, render } from 'enzyme'
import ClusterTable from '../../pages/Master/ClusterTable'
import { BrowserRouter as Router } from 'react-router-dom'

import { render as RTLRender, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import API from '../../api/Master'

describe('<ClusterTable />', () => {
    test('expect the ClusterTable exist', () => {
        const ClusterTableComponent = mount(<Router><ClusterTable /></Router>)
        expect(ClusterTableComponent.exists()).toBe(true)
    })

    test('expect ClusterTable unmount', () => {
        const ClusterTableComponent = mount(<Router><ClusterTable /></Router>)
        ClusterTableComponent.unmount()
        expect(() => {
            ClusterTableComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const ClusterTableComponent = render(<Router><ClusterTable /></Router>)
        expect(ClusterTableComponent).toMatchSnapshot()
    })

    test('distributionMaster api', () => {
        const spyFn = jest.spyOn(API, 'distributionMaster')
        RTLRender(<Router><ClusterTable /></Router>)
        expect(spyFn).toBeCalled()
    })

})