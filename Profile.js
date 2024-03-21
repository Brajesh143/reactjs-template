import React,{useContext, useEffect,useState} from 'react'
import ExampleContext from "./ExampleContext"
import usersposts from "./postsjson"

export default function Profile() {

    const {userid} = useContext(ExampleContext)
    let[posts,setPosts]=useState([])

    useEffect(()=>{

        try
        {
        console.log(usersposts.filter((p)=>(p.userid == userid)))
        setPosts(usersposts.filter((p)=>(p.userid == userid)))
         console.log(posts)
 
        }
 
        catch(e){
         console.log(e)
        }
 
    },[])

  return (
    <div>

          {  posts.map(post=>
                     <li>
                            {post.title}
                    </li>
            )
          }
    </div>
  )
}
