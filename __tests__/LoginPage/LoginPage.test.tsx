import '../../__mocks__/fakeDependencies'
import React from 'react'
import { mount, render } from 'enzyme'
import LoginPage from '../../pages/LoginPage/LoginPage'
import { BrowserRouter as Router } from 'react-router-dom'

import { render as RTLRender, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import API from '../../api/LoginPage'

describe('<LoginPage />', () => {
    test('expect the LoginPage exist', () => {
        const LoginPageComponent = mount(<Router><LoginPage /></Router>)
        expect(LoginPageComponent.exists()).toBe(true)
    })

    test('expect LoginPage unmount', () => {
        const LoginPageComponent = mount(<Router><LoginPage /></Router>)
        LoginPageComponent.unmount()
        expect(() => {
            LoginPageComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const LoginPageComponent = render(<Router><LoginPage /></Router>)
        expect(LoginPageComponent).toMatchSnapshot()
    })

    test('userLogin api', () => {
        const spyFn = jest.spyOn(API, 'userLogin')
        RTLRender(<Router><LoginPage /></Router>)
        userEvent.click(screen.getByText(/登录/i))
        expect(spyFn).toBeCalled()
    })
})