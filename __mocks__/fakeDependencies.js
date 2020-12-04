jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');

    return {
        __esModule: true,
        ...originalModule,
        useLocation: jest.fn().mockReturnValue({
            pathname: '',
            search: '',
            hash: '',
            state: null,
            key: '',
        }),
        useHistory: () => ({
            push: jest.fn(),
            location: {}
        }),
        Redirect: jest.fn().mockReturnValue({}),
    }
})
window.matchMedia = jest.fn().mockImplementation((query) => {
    const obj = {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };

    return obj;
})

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useLayoutEffect: jest.requireActual('react').useEffect
}))