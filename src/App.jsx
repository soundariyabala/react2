import React from 'react'
import Card from "./components/Card"

function App() {
  let data=[{
    title:"project one",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"},
    {
    title:"project two",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Nihil, dolorem!"},
    {
    title:"project three",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"},
    {
    title:"project four",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"},
    {
    title:"project five",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt,"},
    {
    title:"project six",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? "},]
  return <>


<div className="container">

 <h1 className="my-4">Page Heading
    <small>Secondary Text</small>
  </h1>
<div className="row">
    {
      data.map((e,i)=>{
   return <Card cardData={e}key={i}/>
      })
}
</div>

{/* pagination */}
    <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">3</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>

    </div>
    </>
  }

export default App
