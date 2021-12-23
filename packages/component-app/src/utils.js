// Any top-level-await operation
let data = await new Promise((resolve) => {
  resolver(123)
})

function getData() {
  return data
}

export default getData