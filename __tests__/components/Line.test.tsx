import '../../__mocks__/fakeDependencies'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Line from '../../components/Charts/Line'

const Props = {
    data: []
};
describe('<Line />', () => {
    test('expect the Line exist', () => {
        const LineComponent = mount(<Router><Line {...Props} /></Router>)
        expect(LineComponent.exists()).toBe(true)
    })

    test('expect Line unmount', () => {
        const LineComponent = mount(<Router><Line {...Props} /></Router>)
        LineComponent.unmount()
        expect(() => {
            LineComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const LineComponent = render(<Router><Line {...Props} /></Router>)
        expect(LineComponent).toMatchSnapshot()
    })
})