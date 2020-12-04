import '../../__mocks__/fakeDependencies'
import React from 'react'
import { mount, render } from 'enzyme'
import SearchForm from '../../pages/Host/SearchForm'
import { BrowserRouter as Router } from 'react-router-dom'

import { render as RTLRender } from '@testing-library/react'
import API from '../../api/Host'

const params = {
    handleSubmit: function () { },
    status: "",
    machine_type: ""
}
describe('<SearchForm />', () => {
    test('expect the SearchForm exist', () => {
        const SearchFormComponent = mount(<Router><SearchForm onSubmit={params.handleSubmit} status={params.status} machineType={params.machine_type} /></Router>)
        expect(SearchFormComponent.exists()).toBe(true)
    })

    test('expect SearchForm unmount', () => {
        const SearchFormComponent = mount(<Router><SearchForm onSubmit={params.handleSubmit} status={params.status} machineType={params.machine_type} /></Router>)
        SearchFormComponent.unmount()
        expect(() => {
            SearchFormComponent.instance()
        }).toThrow()
    })

    // 快照
    test('the source code changed or not', () => {
        const SearchFormComponent = render(<Router><SearchForm onSubmit={params.handleSubmit} status={params.status} machineType={params.machine_type} /></Router>)
        expect(SearchFormComponent).toMatchSnapshot()
    })

    test('kernel_versions api', () => {
        const spyFn = jest.spyOn(API, 'kernel_versions')
        RTLRender(<Router><SearchForm onSubmit={params.handleSubmit} status={params.status} machineType={params.machine_type} /></Router>)
        expect(spyFn).toBeCalled()
    })

    test('sys_dist_versions api', () => {
        const spyFn = jest.spyOn(API, 'sys_dist_versions')
        RTLRender(<Router><SearchForm onSubmit={params.handleSubmit} status={params.status} machineType={params.machine_type} /></Router>)
        expect(spyFn).toBeCalled()
    })
})