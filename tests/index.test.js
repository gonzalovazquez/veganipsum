import React from 'react'
import ReactDOM from 'react-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { shallow, mount } from 'enzyme'
import App from '../pages/index'
import mockTodo from '../mocks/todos'

describe('<IndexPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('App loads with inital state of []', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(Typography)).toHaveLength(2)
  })

  it('should call fetch onclick', () => {
    const mockSuccessResponse = mockTodo
    const mockJsonPromise = Promise.resolve(mockSuccessResponse) // 2
    const mockFetchPromise = Promise.resolve({ // 3
      json: () => mockJsonPromise,
    })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise) // 4

    const wrapper = shallow(<App />)
    wrapper.find(Button).at(0).simulate('click')

    expect(global.fetch).toHaveBeenCalledTimes(1)
  })

  afterAll(() => {
    global.fetch.mockClear()
    delete global.fetch
  })
})
