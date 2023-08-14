import React from 'react'
const getData=async()=>{
  const response=await axios.get('http://localhost:1337/api/populationtrackers')
  let resData=response.data.data;
  // console.log(resData)
  resData.forEach(item=>{
    console.log(item.length)
    const id=item.id;
    const attributes = item.attributes;
    console.log(`Item ID: ${id}`);
    console.log('Attributes:', attributes);
    console.log('Attributes:', attributes.fullaname)
    console.log('Attributes:', attributes.createdAt)
    console.log('Attributes:', attributes.hospitalname)
    console.log('Attributes:', attributes.mother)
    console.log('Attributes:', attributes.father)
    
    
  })

}
getData()
function Population() {
 
  return (
    <div>
      <h2>under constraction</h2>
    </div>
  )
}

export default Population
