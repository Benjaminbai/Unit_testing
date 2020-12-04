import '../../__mocks__/fakeDependencies'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Pie from '../../components/Charts/Pie'

describe('<Pie />', () => {
    test('expect the Pie exist', () => {
        const PieComponent = mount(<Router><Pie /></Router>)
        expect(PieComponent.exists()).toBe(true)
    })

    test('expect Bar unmount', () => {
        const PieComponent = mount(<Router><Pie /></Router>)
        PieComponent.unmount()
        expect(() => {
            PieComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const PieComponent = render(<Router><Pie /></Router>)
        expect(PieComponent).toMatchSnapshot()
    })
})