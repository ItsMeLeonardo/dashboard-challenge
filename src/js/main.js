fetch('../../data.json')
  .then(res => res.json())
  .then(res =>  console.log(res))