import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { columns, data } from './Data.js';






const FormTwo = () => {
  const tableData = {
    columns,
    data,
  };
 
   
  return (
      
    
      <form className='m-5'>

   



    <button type="button" class="btn btn-secondary btn-sm mt-3" ><i class="fa fa-arrow-circle-left"></i> Back To Grid</button>
    <button type="button" class="btn btn-primary btn-sm mt-3" style={{marginLeft:"10px"}}><i class="fa fa-arrow-circle-right"></i> Execute Action</button>
    <button type="button" class="btn btn-primary btn-sm mt-3 float-right"><i class="fa fa-save"></i> Save</button>
    <button type="button" class="btn btn-secondary btn-sm mt-3" style={{marginLeft:"10px"}}><i class="fa fa-arrow-circle-down"></i>Notify</button>

    
   
<fieldset class="border p-4 border-primary mt-4">
   <legend  class="float-none w-auto p-2" style={{backgroundColor:"#344e41",fontSize:"10px",color:"#fff",borderRadius:"15px"}}>Site Technologies</legend>

    <div className="form-row">
      <div className="form-group col-md-6" style={{border:"1px solid gray"}}>
      <label htmlFor=""  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> --Existing Technology</label>

      <DataTableExtensions
      {...tableData}
    >
      <DataTable
        noHeader
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        highlightOnHover
        fixedHeaderScrollHeight=''
      />
    </DataTableExtensions>
     
      </div>
      <div className="form-group col-md-5  ml-3" style={{border:"1px solid gray"}}>
      <label htmlFor=""  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> --New Technology</label>

      <DataTableExtensions
      {...tableData}
    >
      <DataTable
        noHeader
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        highlightOnHover
        fixedHeaderScrollHeight=''
      />
    </DataTableExtensions>
     
      </div>
     
     
     
      
     
    </div>
    
    </fieldset>
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:" #f6bd60",fontSize:"10px",color:"#fff",borderRadius:"15px"}}>In-Progress</legend>

    <div className="form-row">
    <div className="form-group col-md-12  ml-3" >
      <label htmlFor=""  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Contractors</label>

      <DataTableExtensions
      {...tableData}
    >
      <DataTable
        noHeader
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        highlightOnHover
        fixedHeaderScrollHeight=''
      />
    </DataTableExtensions>
     
      </div>


      <div className="form-group col-md-4">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> RIOT/LEMMING</label>
        <select id="inputState" class="form-control">
        <option selected>(Select)........</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>      </div>
      <div className="form-group col-md-4">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> Existing Tech Checked(GC)</label>
        <div>
        <input style={{marginLeft:"10px"}} type="checkbox" class="formm-control"  />

        </div>

          </div>
          <div className="form-group col-md-4">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> Existing Tech KPI Notes</label>
       <div>
       <button type="submit" class="  btn btn-secondary" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><i class="fa fa-pencil"></i> Add Notes</button>
       <div style={{border:"1px solid black",marginTop:"20px"}}>
       <button type="submit" class="  btn btn-primary" style={{width:"50px",marginTop:"10px",marginLeft:"10px"}}><i class="fa fa-pencil"></i> </button>
       <button type="submit" class="  btn btn-danger" style={{width:"50px",marginLeft:"20px",marginTop:"10px"}}><i class="fa fa-trash"></i></button>
       <div style={{marginLeft:"28px"}}>
        <h6 style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Undefined</h6>
       </div>
       <div>
       <i  class="fa fa-clock-o m-2"> null by Administrator TTS Wireless</i>
       </div>


       </div>
       
       

       </div>

      

          </div>
          <div className="form-group col-md-5">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> RIOT Notes</label>
        <div>
        <button type="submit" class="  btn btn-secondary" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><i class="fa fa-pencil"></i> Add Notes</button>

        </div>
      </div>
      <div className="form-group col-md-7">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> RIOT Snapshot</label>
        
        <input type="file" className="form-control" id="inputEmail4" placeholder="" />
<div>
<button type="submit" class="  btn btn-light" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif" ,marginTop:"10px"}}>Total 0 File</button>
<button type="submit" class="  btn btn-primary float-right" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif" ,marginTop:"10px"}}><i class="fa fa-download"></i> Download All</button>
<button type="submit" class="  btn btn-secondary float-right mr-3" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif" ,marginTop:"10px"}}><i class="fa fa-trash"></i> Delete All</button>

</div>
       
      </div>
      <div className="form-group col-md-4">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>E911/CBN Validate</label>
       
        <select id="inputState" class="form-control">
        <option selected>(Select)</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>    
      
      </div>
      
      <div className="form-group col-md-12 " >
       
     <hr style={{border:"1px solid black"}} ></hr>
      </div>
      <div className="form-group col-md-5">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> CBN Notes</label>
        <div>
        <button type="submit" class="  btn btn-secondary" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><i class="fa fa-pencil"></i> Add Notes</button>

        </div>
      </div>
      <div className="form-group col-md-7">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> CBN Snapshot</label>
        
        <input type="file" className="form-control" id="inputEmail4" placeholder="" />
<div>
<button type="submit" class="  btn btn-light" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif" ,marginTop:"10px"}}>Total 0 File</button>
<button type="submit" class="  btn btn-primary float-right" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif" ,marginTop:"10px"}}><i class="fa fa-download"></i> Download All</button>
<button type="submit" class="  btn btn-secondary float-right mr-3" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif" ,marginTop:"10px"}}><i class="fa fa-trash"></i> Delete All</button>

</div>
       
      </div>
      <div className="form-group col-md-5">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}> Notes General</label>
        <div>
        <button type="submit" class="  btn btn-secondary" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><i class="fa fa-pencil"></i> Add Notes</button>

        </div>
      </div>
      <div className="form-group col-md-7">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Upload File</label>
        
        <input type="file" className="form-control" id="inputEmail4" placeholder="" />
<div>
<button type="submit" class="  btn btn-light" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif" ,marginTop:"10px"}}>Total 0 File</button>
<button type="submit" class="  btn btn-primary float-right" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif" ,marginTop:"10px"}}><i class="fa fa-download"></i> Download All</button>
<button type="submit" class="  btn btn-secondary float-right mr-3" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif" ,marginTop:"10px"}}><i class="fa fa-trash"></i> Delete All</button>

</div>
       
      </div>
      <div className="form-group col-md-4">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>SSP_Report_Pre_48_Hours_Needed</label>
        <div>
        <input style={{marginLeft:"10px"}} type="checkbox" class="formm-control"  />

        </div>

          </div>
          <div className="form-group col-md-4">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>SSP_Pre_48_Hours_Report Completed</label>
        <div>
        <input style={{marginLeft:"10px"}} type="checkbox" class="formm-control"  />

        </div>

          </div>
     
    </div>
    
    </fieldset>
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:" #ff0054",fontSize:"10px",color:"#fff",fontFamily:"Georgia, 'Times New Roman', Times, serif",borderRadius:"15px"}}>External Alarms</legend>

    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><span style={{color:"red"}}>*</span>External Alarm</label>
        {/* <input type="Text" className="form-control" id="inputEmail4" placeholder="" /> */}
        <p>Create dattable </p>

      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Notes For Ext Alarm</label>
        <div>
        <button type="submit" class="  btn btn-secondary" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><i class="fa fa-pencil"></i> Add Notes</button>

        </div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputPassword4" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}><span style={{color:"red"}}>*</span>External Alarm Simulated</label>
        <select id="inputState" class="form-control">
        <option selected>(Select)........</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>       </div>
    
      <div className="form-group col-md-5">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Upload File</label>
        
        <input type="file" className="form-control" id="inputEmail4" placeholder="" />
<div>
<button type="submit" class="  btn btn-light" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif" ,marginTop:"10px"}}>Total 0 File</button>
<button type="submit" class="  btn btn-primary float-right" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif" ,marginTop:"10px"}}><i class="fa fa-download"></i> Download All</button>
<button type="submit" class="  btn btn-secondary float-right mr-3" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif" ,marginTop:"10px"}}><i class="fa fa-trash"></i> Delete All</button>

</div>
       
      
   </div>
   </div>
    
    </fieldset>

    <fieldset class="border p-4 border-danger mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:"#6a040f",fontSize:"10px",color:"#fff",borderRadius:"15px"}}>In-Progress Check-Ins</legend>

    <div className="form-row">
      <div className="form-group col-md-10">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Contractor Check Ins</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}
        <p> datatable create</p>

      </div>
     
    
     
    
     
    </div>
    
    </fieldset>
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:"#118ab2",fontSize:"10px",color:"#fff",borderRadius:"15px"}}>Escalation Issues</legend>

    <div className="form-row">
      <div className="form-group col-md-7">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Escalation List</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}
        <p>datatable cfreate</p>

      </div>
     
    
     
    
     
    </div>
    
    </fieldset>
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:"#003566",fontSize:"10px",color:"#fff",borderRadius:"15px"}}> Issues List (NEW)</legend>

    <div className="form-row">
      <div className="form-group col-md-7">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Issues List</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}
        <p>datatable cfreate</p>

      </div>
     
    
     
    
     
    </div>
    
    </fieldset>
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:"#240046",fontSize:"10px",color:"#fff",borderRadius:"15px"}}>PAG Managers</legend>

    <div className="form-row">
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Project Code</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}

      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Sub-Vender</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}

      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Stabilization Required</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}

      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>CR/TT</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}

      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>POR Data</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}
<div>
    <a style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}} href=''>Show POR Widget</a>
</div>


      </div>
     
    
  
     
  
     
    
     
    </div>
    
    
    </fieldset>
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:" #003e1f",fontSize:"10px",color:"#fff",borderRadius:"15px"}}> Drive-SSV Report</legend>

    <div className="form-row">
      <div className="form-group col-md-7">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>SSV Drives</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}
        <p>datatable cfreate</p>

      </div>
     
    
     
    
     
    </div>
    
    </fieldset>
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:"#8c2f39",fontSize:"10px",color:"#fff",borderRadius:"15px"}}> Issues List (NEW)</legend>

    <div className="form-row">
      <div className="form-group col-md-7">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Issues List</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}
        <p>datatable cfreate</p>

      </div>
     
    
     
    
     
    </div>
    
    </fieldset>
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:"#461220",fontSize:"10px",color:"#fff",borderRadius:"15px"}}>SSV TMO Approval</legend>

    <div className="form-row">
      <div className="form-group col-md-4">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>SSV Submitted Date</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}

      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>SSV  Approval Date</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}

      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>SSV  Report TMO Approval</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}

      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail4"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>SSV Comments</label>
        {/* <input type="Text" className="form-control"  placeholder="" /> */}

      </div>
     
     
    
  
     
  
     
    
     
    </div>
    
    
    </fieldset>
    <fieldset class="border p-4 border-primary mt-4"   >
   <legend  class="float-none w-auto p-2" style={{backgroundColor:" #eb5e28",fontSize:"10px",color:"#fff",borderRadius:"15px"}}>SST- Post Launch</legend>

    <div className="form-row">
    <div className="form-group col-md-4">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>SST-Immediate Post Integration completed</label>
        <div>
        <input style={{marginLeft:"10px"}} type="checkbox" class="formm-control"  />

        </div>

          </div>
          <div className="form-group col-md-4">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>SST - Post 7 Days-KPIs</label>
        <div>
        <input style={{marginLeft:"10px"}} type="checkbox" class="formm-control"  />

        </div>

          </div>
          <div className="form-group col-md-4">
        <label for="inputState"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>SST -Date</label>
       <div>        <input style={{marginLeft:"10px"}} type="datetime-local" class="formm-control"  />
</div>
        

       

          </div>
     
    
  
     
     
  
     
    
     
    </div>
    
    </fieldset>
    <button type="button" class="btn btn-secondary btn-sm mt-3" ><i class="fa fa-arrow-circle-left"></i> Back To Grid</button>
<button type="button" class="btn btn-primary btn-sm mt-3" style={{marginLeft:"10px"}}><i class="fa fa-arrow-circle-right"></i> Execute Action</button>
<button type="button" class="btn btn-primary btn-sm mt-3 float-right"><i class="fa fa-save"></i> Save</button>
<button type="button" class="btn btn-secondary btn-sm mt-3" style={{marginLeft:"10px"}}><i class="fa fa-arrow-circle-down"></i>Notify</button>



  </form>
    
  
      

  )
}

export default FormTwo