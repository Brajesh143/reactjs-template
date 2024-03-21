import React from "react"
import {Link}  from 'react-router-dom'


function HeaderLoggedOut(props) {


  return (
    <div className="flex-row my-3 my-md-0">
      <a href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <Link  className="mr-2"> 
        <img className="small-header-avatar" src="https://www.google.com/imgres?imgurl=https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&imgrefurl=https://unsplash.com/s/photos/profile&h=563&w=1000&tbnid=iFGbyOKU4Q8RAM&tbnh=115&tbnw=204&usg=AI4_-kRyOWJteEfHiwYAX9-gYtVCQFE4Gw&vet=1&docid=b5C9ViMmmhpq-M" />
       </Link> 
      <a className="btn btn-sm btn-success mr-2" href="/create-post">
        Create Post
      </a>
      <button  
      
      className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  )
}

export default HeaderLoggedOut
