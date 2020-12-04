import { setCookie, getCookie, deleteCookie } from '../../utils'

describe('test utils function', () => {
    test('setCookie', () => {
        setCookie('ben', 'benjamin')
        expect(document.cookie).toEqual("ben=benjamin")
    })

    test('setCookie', () => {
        const value = getCookie('ben')
        expect(value).toEqual("benjamin")
    })

    test('deleteCookie', () => {
        const value = deleteCookie('ben')
        expect(value).toEqual(undefined)
    })
})