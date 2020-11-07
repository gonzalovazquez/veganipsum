import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import IconButton from '@material-ui/core/IconButton'
import Todo from './Todo'
import mockTodo from '../../mocks/todos'

describe('<Todo />', () => {
  const fieldProps = {
    todos: mockTodo,
    deleteTodo: jest.fn(),
  }
  const Composition = () => <Todo {...fieldProps} />

  it('renders a <Todo /> component without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Composition />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders a <Todo /> component with expected props', () => {
    const wrapper = mount(<Composition />)
    expect(wrapper.childAt(0).props().todos).toEqual(mockTodo)
  })

  it('should trigger onClick on key press', () => {
    const wrapper = mount(<Composition />)
    // Easy way to debug
    // console.log(wrapper.debug())
    wrapper.find(IconButton).at(0).simulate('click')
    expect(fieldProps.deleteTodo).toHaveBeenCalled()
  })
})
