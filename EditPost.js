import React from 'react'

export default function EditPost() {
  return (
    <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
     
    <form>
      <div className="form-group">
        <label htmlFor="title-register" className="text-muted mb-1">
          <small>title</small>
        </label>
        <input id="title" name="title" className="form-control" type="text" 
        
       autoComplete="off"  />
      </div>
      <div className="form-group">
        <label htmlFor="body-register" className="text-muted mb-1">
          <small>body</small>
        </label>
        <input id="body-register" name="body" className="form-control" type="text" 
                         autoComplete="off"  />
      </div>
     
      <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block"
      
     >
            Update
      </button>
    </form>
   
  
  </div>
  )
}
