import React  from "react"


function CreatePost() {
  return (
      <form >
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input autoFocus name="title" id="post-title"
           className="form-control form-control-lg form-control-title" type="text"
           autoComplete="off" />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea  name="body" id="post-body" className="body-content tall-textarea form-control" type="text">

          </textarea>
        </div>

        <button className="btn btn-primary" >Save New Post</button>
      </form>
  )
}

export default CreatePost
