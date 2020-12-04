import '../../__mocks__/fakeDependencies'
import React from 'react'
import { mount, render } from 'enzyme'
import VersionManage from '../../pages/Versions/VersionManage'
import { BrowserRouter as Router } from 'react-router-dom'

import { render as RTLRender } from '@testing-library/react'
import API from '../../api/Version'

describe('<VersionManage />', () => {
    test('expect the VersionManage exist', () => {
        const VersionManageComponent = mount(<Router><VersionManage /></Router>)
        expect(VersionManageComponent.exists()).toBe(true)
    })

    test('expect VersionManage unmount', () => {
        const VersionManageComponent = mount(<Router><VersionManage /></Router>)
        VersionManageComponent.unmount()
        expect(() => {
            VersionManageComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const VersionManageComponent = render(<Router><VersionManage /></Router>)
        expect(VersionManageComponent).toMatchSnapshot()
    })

    test('versionAgentVersion api', () => {
        const spyFn = jest.spyOn(API, 'versionAgentVersion')
        RTLRender(<Router><VersionManage /></Router>)
        expect(spyFn).toBeCalled()
    })
})