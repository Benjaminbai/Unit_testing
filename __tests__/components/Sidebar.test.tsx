import '../../__mocks__/fakeDependencies'
import React from 'react'
import { mount, render } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar, { IProps } from '../../components/Sidebar/Sidebar'

const IProp: IProps = {
    breadItems: ['test1', 'test2'],
    children: []
}
describe('<Sidebar />', () => {
    test('expect the Sidebar exist', () => {
        const SidebarComponent = mount(<Router><Sidebar {...IProp} /></Router>)
        expect(SidebarComponent.exists()).toBe(true)
    })

    test('expect Sidebar unmount', () => {
        const SidebarComponent = mount(<Router><Sidebar {...IProp} /></Router>)
        SidebarComponent.unmount()
        expect(() => {
            SidebarComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const SidebarComponent = render(<Router><Sidebar {...IProp} /></Router>)
        expect(SidebarComponent).toMatchSnapshot()
    })

    test('menu render num', () => {
        const SidebarComponent = mount(<Router><Sidebar {...IProp} /></Router>)
        expect(SidebarComponent.find('.ant-breadcrumb').children().length).toEqual(2)
    })
})