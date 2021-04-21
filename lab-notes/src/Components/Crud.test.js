import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Create from './Components/CreateNote'
import { prettyDOM } from '@testing-library/react'


test('renders content', () => {
  const stateNotesChange ={
  content: 'Component testing is done with react-testing-library',
  }

  const component = render(
  <Create stateNotesChange={stateNotesChange} />)
  const noteArea = component.container.querySelector('.noteArea')
  console.log(prettyDOM(noteArea))

})


