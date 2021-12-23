import React from 'react';
import getData from 'component-app/utils'

console.log('getData', getData)

function App() {
  return <>data is: {getData()}</>
}

export default App