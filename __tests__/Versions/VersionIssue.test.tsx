import '../../__mocks__/fakeDependencies'
import React from 'react'
import { mount, render } from 'enzyme'
import VersionIssue from '../../pages/Versions/VersionIssue'
import { BrowserRouter as Router } from 'react-router-dom'

import { render as RTLRender, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<VersionIssue />', () => {
    test('expect the VersionIssue exist', () => {
        const VersionIssueComponent = mount(<Router><VersionIssue /></Router>)
        expect(VersionIssueComponent.exists()).toBe(true)
    })

    test('expect VersionIssue unmount', () => {
        const VersionIssueComponent = mount(<Router><VersionIssue /></Router>)
        VersionIssueComponent.unmount()
        expect(() => {
            VersionIssueComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const VersionIssueComponent = render(<Router><VersionIssue /></Router>)
        expect(VersionIssueComponent).toMatchSnapshot()
    })

    test('back to list', () => {
        RTLRender(<Router><VersionIssue /></Router>)
        userEvent.click(screen.getByText(/版本列表/i))
        expect(window.location.pathname).toBe('/versions/list')
    })
})