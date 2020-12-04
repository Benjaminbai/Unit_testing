import '../../__mocks__/fakeDependencies'
import React from 'react'
import { mount, render } from 'enzyme'
import MasterList from '../../pages/Master/MasterList'
import { BrowserRouter as Router } from 'react-router-dom'

import { render as RTLRender, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<MasterList />', () => {
    test('expect the MasterList exist', () => {
        const MasterListComponent = mount(<Router><MasterList /></Router>)
        expect(MasterListComponent.exists()).toBe(true)
    })

    test('expect MasterList unmount', () => {
        const MasterListComponent = mount(<Router><MasterList /></Router>)
        MasterListComponent.unmount()
        expect(() => {
            MasterListComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const MasterListComponent = render(<Router><MasterList /></Router>)
        expect(MasterListComponent).toMatchSnapshot()
    })

    test('jump to distribution', () => {
        RTLRender(<Router><MasterList /></Router>)
        userEvent.click(screen.getByText(/Agent 分布/i))
        expect(window.location.pathname).toBe('/distribution')
    })
})