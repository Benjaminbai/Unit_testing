import '../../__mocks__/fakeDependencies'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Bar from '../../components/Charts/Bar'

describe('<Bar />', () => {
    test('expect the Bar exist', () => {
        const BarComponent = mount(<Router><Bar /></Router>)
        expect(BarComponent.exists()).toBe(true)
    })

    test('expect Bar unmount', () => {
        const BarComponent = mount(<Router><Bar /></Router>)
        BarComponent.unmount()
        expect(() => {
            BarComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const BarComponent = render(<Router><Bar /></Router>)
        expect(BarComponent).toMatchSnapshot()
    })

    test('change option effect', () => {
        const fakeData = {
            data: {
                total: 100,
                cover: 50
            }
        }
        const BarComponent = shallow(<Router><Bar data={fakeData} /></Router>)
        expect(BarComponent.props().children.props.data.data.total).toEqual(100)
    })
})