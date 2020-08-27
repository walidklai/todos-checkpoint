import React from 'react'
import ProductTable from './components/ProductTable'

const products = [
  {name :50, price :'500', category :'electronics'},
  {name :'smartphone', price :'450', category :'electronics'},
  {name :'t-shirt', price :'25', category :'clothes'},
  {name :'monitor', price :'200', category :'electronics'},
  {name :'hat', price :'10', category :'clothes'},
  {name :'shoes', price :'55', category :'clothes'}
]
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {<tr>
          <ProductTable products={products}/>
        </tr>}
      </React.Fragment>
    )
  }
}
export default App