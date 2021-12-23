// Any top-level-await operation
const data = await new Promise((resolve) => {
  resolver(123)
})

function getData() {
  return data
}

export default getData