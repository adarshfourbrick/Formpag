import React from 'react';
import Button from 'react-bootstrap/Button';


const History = () => {
  return (
    <form className='m-5'>
    <button type="button" class="btn btn-primary btn-sm mt-3" style={{marginLeft:"10px"}} ><i class="fa fa-caret-down"></i> Expand To All</button>

    
{/* <fieldset class="border p-4 border-primary mt-4">
   <legend  class="float-none w-auto p-2" style={{backgroundColor:" blue",fontSize:"13px",color:"#fff"}}>Assignment</legend>

    <div className="form-row">
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><span style={{color:"red"}}>*</span>Market</label>
        <select id="inputState" class="form-control">
        <option selected>(Select)........</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>
      </div>
      <div className="form-group col-md-3"> 
        <label htmlFor="inputPassword4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><span style={{color:"red"}}>*</span>Group</label>
        <select id="inputState" class="form-control">
        <option selected>(Select)........</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><span style={{color:"red"}}>*</span>Owener</label>
        <select id="inputState" class="form-control">
        <option selected>(Select)........</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Priority</label>
        <select id="inputState" class="form-control">
        <option selected>(Select)........</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Email</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="" />
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Follower</label>
        <select id="inputState" class="form-control">
        <option selected>(Select)........</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>      </div>
    </div>
    
    </fieldset> */}
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:" blue",fontSize:"10px",color:"#fff",borderRadius:"15px"}}>Project</legend>

    <div className="form-row">
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><span style={{color:"red"}}>*</span> Site-ID</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="" />

      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputPassword4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><span style={{color:"red"}}>*</span> Project</label>
        <select id="inputState" class="form-control">
        <option selected>(Select)........</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> Sub-Project</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="" />
      </div>
      <div className="form-group col-md-3">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> <span style={{color:"red"}}>*</span> Development Or Operations Work</label>
        <select id="inputState" class="form-control">
        <option selected>(Select)........</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>      </div>
    
     
    </div>
    <div >
   <button type="button" class="btn btn-light btn-sm mt-5" style={{marginLeft:"10px"}} ><i class="fa fa-save"></i> Save</button>

<button type="button" class="btn btn-light btn-sm mt-5" style={{marginLeft:"10px"}} ><i class="fa fa-close"></i> Cancel</button>

   </div>
    
    </fieldset>
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:" blue",fontSize:"10px",color:"#fff",fontFamily:"Georgia, 'Times New Roman', Times, serif",borderRadius:"15px"}}>Preliminary</legend>

    <div className="form-row">
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><span style={{color:"red"}}>*</span>Vender</label>
        <input type="Text" className="form-control" id="inputEmail4" placeholder="" />

      </div>
      <div className="form-group col-md-2">
        <label htmlFor="inputPassword4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><span style={{color:"red"}}>*</span>Equipment Vender</label>
        <select id="inputState" class="form-control">
        <option selected>(Select)........</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>       </div>
      <div className="form-group col-md-2">
        <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Integrater</label>
        <input type="Text" className="form-control" id="inputEmail4" placeholder="" />
      </div>
      <div className="form-group col-md-2">
        <label for="inputState" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> <span style={{color:"red"}}>*</span> Cluster</label>
        <input type="Text" className="form-control"  placeholder="" />
    </div>
      <div className="form-group col-md-2">
        <label for="inputState" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> <span style={{color:"red"}}>*</span> County</label>
        <input type="Text" className="form-control"  placeholder="" />
     </div>


      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><span style={{color:"red"}}>*</span>Cluster Engineer</label>
        <input type="Text" className="form-control" id="inputEmail4" placeholder="" />

      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputPassword4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><span style={{color:"red"}}>*</span> Cluster Engineer Email</label>
        <input type="Text" className="form-control"  placeholder="" />
    </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> FOPS Tech Email</label>
        <input type="Text" className="form-control" id="inputEmail4" placeholder="" />
      </div>
      <div className="form-group col-md-3">
        <label for="inputState" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> <span style={{color:"red"}}>*</span>FOPS Phone</label>
        <input type="tel" className="form-control"  placeholder="" />
</div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><span style={{color:"red"}}>*</span> FOPS Manager Email</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="" />

      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputPassword4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><span style={{color:"red"}}>*</span>RF Design Engineer</label>
        <input type="Text" className="form-control"  placeholder="" />
     </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> Site Dev PM</label>
        <input type="Text" className="form-control" id="inputEmail4" placeholder="" />
      </div>
      <div className="form-group col-md-3">
        <label for="inputState" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> <span style={{color:"red"}}>*</span> Site Dev PM Email</label>
        <input type="Email" className="form-control"  placeholder="" />
</div>
      <div className="form-group col-md-6">
        <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Configuration</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> Releted File</label>
        <input type="file" className="form-control"  placeholder="" />
        <button type="submit" class="  btn btn-dark" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif" ,marginTop:"5px",border:"1px solid dark",textDecoration:"underline"}}>Total 1 File</button>
       <br></br>
        <button type="submit" class="  btn btn-primary" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif",marginTop:"10px"}}><i class="fa fa-download"></i> Download All</button>
        <button type="submit" class="  btn btn-dark" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif",marginLeft:"30px",marginTop:"10px"}}><i class="fa fa-trash"></i> Delete All</button>

      </div>
     

     

      
   
     
      

    
  
      
     
    
  
   </div>
   <div className="form-group col-md-2">
   <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Notes</label>

   <button type="submit" class=" form-control btn btn-dark" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><i class="fa fa-pencil"></i> Add Notes</button>
   

   </div>


   <div >
   <button type="button" class="btn btn-light btn-sm mt-5" style={{marginLeft:"10px"}} ><i class="fa fa-save"></i> Save</button>

<button type="button" class="btn btn-light btn-sm mt-5" style={{marginLeft:"10px"}} ><i class="fa fa-close"></i> Cancel</button>

   </div>
     
    
    
    </fieldset>
{/* 
    <fieldset class="border p-4 border-danger mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:" brown",fontSize:"13px",color:"#fff"}}>Escalation List</legend>

    <div className="form-row">
      <div className="form-group col-md-10">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Escalation info all levels</label>
        <input type="Text" className="form-control"  placeholder="" />

      </div>
     
    
     
    
     
    </div>
    
    </fieldset> */}
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:" blue",fontSize:"10px",color:"#fff",borderRadius:"15px"}}>Supported Activities</legend>

    <div className="form-row">
      <div className="form-group col-md-7">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>TAG</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}

      </div>
     
      <div className="form-group col-md-3">
   <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Get Supported Activities</label>

   {/* <button type="submit" class=" form-control btn btn-dark" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><i class="fa fa-edit"></i> Get Supported Activities</button> */}
   

   </div>
     
    
     
    </div>
    
    </fieldset>
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:" blue",fontSize:"10px",color:"#fff",borderRadius:"15px"}}>Supported Activities</legend>

    <div className="form-row">
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Project Code</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}

      </div>
     
      <div className="form-group col-md-3">
   <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Sub-Vendor</label>

   

   </div>
   <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Stabilization Required</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}

      </div>
     
      <div className="form-group col-md-3">
   <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><i class="fa fa-info-circle"></i> CR/TT</label>

   

   </div>
   <div className="form-group col-md-3">
   <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>POR Data</label>

   

   </div>
     
    
     
    </div>
    
    </fieldset>
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:" blue",fontSize:"10px",color:"#fff",borderRadius:"15px"}}>FOPS Tech</legend>

    <div className="form-row">
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>FOPS Group</label>
        <input type="Text" className="form-control"  placeholder="" />

      </div>
     
    
   <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>FOPS Tech</label>
        <select id="inputState" class="form-control">
        <option selected>(Select)</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>       
      </div>
     
      
     
  
     
    
     
    </div>
    <div >
   <button type="button" class="btn btn-light btn-sm mt-5" style={{marginLeft:"10px"}} ><i class="fa fa-save"></i> Save</button>

<button type="button" class="btn btn-light btn-sm mt-5" style={{marginLeft:"10px"}} ><i class="fa fa-close"></i> Cancel</button>

   </div>
    
    </fieldset>
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:" blue",fontSize:"10px",color:"#fff",borderRadius:"15px"}}>Is Market In MOP</legend>

    <div className="form-row">
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Is Market In MOP</label>
        <input type="Text" className="form-control"  placeholder="" />

      </div>
     
    
  
     
     
  
     
    
     
    </div>
    <div >
   <button type="button" class="btn btn-light btn-sm mt-5" style={{marginLeft:"10px"}} ><i class="fa fa-save"></i> Save</button>

<button type="button" class="btn btn-light btn-sm mt-5" style={{marginLeft:"10px"}} ><i class="fa fa-close"></i> Cancel</button>

   </div>
    
    </fieldset>
    {/* <button type="button" class="btn btn-primary btn-sm mt-3" ><i class="fa fa-arrow-circle-left"></i> Back To Grid</button>
<button type="button" class="btn btn-secondary btn-sm mt-3" style={{marginLeft:"10px"}}><i class="fa fa-arrow-circle-right"></i> Execute Action</button>
<button type="button" class="btn btn-primary btn-sm mt-3 float-right"><i class="fa fa-save"></i> Save</button> */}


  </form>
  )
}

export default History