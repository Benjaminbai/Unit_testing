import '../../__mocks__/fakeDependencies'
import React, { Children } from 'react'
import { shallow, mount, render } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Card, { ICard } from '../../components/Card/Card'

const Iprops: ICard = {
    icon: "",
    title: "ben",
    value: "",
    linkTo: "",
    hoverable: false,
}

describe('<Card />', () => {
    test('expect the Card exist', () => {
        const CardComponent = mount(<Router><Card {...Iprops} /></Router>)
        expect(CardComponent.exists()).toBe(true)
    })

    test('expect Card unmount', () => {
        const CardComponent = mount(<Router><Card {...Iprops} /></Router>)
        CardComponent.unmount()
        expect(() => {
            CardComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const CardComponent = render(<Router><Card {...Iprops} /></Router>)
        expect(CardComponent).toMatchSnapshot()
    })

    test('find title', () => {
        const CardComponent = mount(<Router><Card {...Iprops} /></Router>)
        expect(CardComponent.find('.xui-card').childAt(1).childAt(0).text()).toEqual('ben')
    })
})