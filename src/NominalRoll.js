import './NominalRoll.scss'
import vvit_logo from './vvit_logo.png';
function NominallRoll() {
    return (
        <div className="Content">
            <div class="row">
                <img src={vvit_logo} alt="logo" /> 
            </div>
             <div  class="row row-flex col-md-12">
                 <div class="col-md-8" style={{marginBottom:'20px'}}>
                    <fieldset  class="col-md-12" >
                    <legend >Selection Criterias</legend>
                    <select class="selectpicker selectbox" >
                        <option selected value="">Batch</option>
                        <option>2020</option>
                        <option>2021</option>
                    </select>  
                    <select class="selectpicker selectbox" >
                        <option selected value="">Course</option>
                        <option>B.Tech</option>
                        <option>M.Tech</option>
                    </select>  
                    <select class="selectpicker selectbox">
                        <option selected value="">Branch</option>
                        <option>CSE</option>
                        <option>CIVIL</option>
                        <option>ECE</option>
                        <option>EEE</option>
                        <option>MECH</option>
                    </select>  
                    <select class="selectpicker selectbox" >
                        <option selected value="">Sem</option>
                        <option>1-1</option>
                        <option>1-2</option>
                        <option>2-1</option>
                        <option>2-2</option>
                        <option>3-1</option>
                        <option>3-2</option>
                        <option>4-1</option>
                        <option>4-2</option>
                    </select>  
                    <select class="selectpicker selectbox" >
                        <option selected value="">Section</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>  
                    <button class="btn btn-primary">Show Students</button>
                    </fieldset> 
                </div>
                <div class="col-md-2" style={{marginBottom:'20px'}}>
                    <fieldset class="col-md-12" >
                    <legend>Strength Details</legend>
                    <table>
                        <tr>
                            <th>Male</th>
                            <th>Female</th>
                            <th>Total</th> 
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </table>
                    </fieldset>
                </div>
                <div class="col-md-2" style={{marginBottom:'20px'}}>
                    <fieldset class="col-md-12" style={{paddingLeft:'15px'}} >
                        <legend>Export</legend>
                        <div class="btn-group" data-toggle="buttons">
                            <label class="btn btn-warning btn-rounded active btn-md form-check-label">
                            <input class="form-check-input" type="radio" checked autocomplete="off"/> Pdf
                            </label>

                            <label class="btn btn-warning btn-rounded btn-md form-check-label">
                            <input class="form-check-input" type="radio" autocomplete="off"/> Excel
                            </label>

                            <label class="btn btn-warning btn-rounded btn-md form-check-label">
                            <input class="form-check-input" type="radio" autocomplete="off"/> Word
                            </label>
                           
                        </div>
                        <i class="fa fa-share" style={{fontSize:'18px',color:'red',marginLeft:'5px'}}></i>
                    </fieldset>
                </div>
            </div>
            <div class="row row-flex col-md-12">
                <fieldset class="col-md-12" style={{margin:'0px 20px 0px 20px'}}>
                <legend>Students List</legend>
                <table class="table table-bordered table-responsive-stack">
                    <tr class="tableHeader">
                        <td >S.No</td>
                        <td >HT.No</td>
                        <td  >Adm No</td>
                        <td  >Name</td>
                        <td  >Father Name</td>
                        <td  >Gender</td>
                        <td  >Dob</td>
                        <td  >Parent Mobile</td>
                        <td  >Admission Date</td>
                    </tr>
                    <tr>
                        <td  >1</td>
                        <td  >17BQ5A0505</td>
                        <td  >275645</td>
                        <td  >SEELAM VENKATA REDDY</td>
                        <td  >SEELAM AJAY REDDY</td>
                        <td  >MALE</td>
                        <td  >30/04/1999</td>
                        <td  >9553660590</td>
                        <td  >15/07/2017</td>
                    </tr>
                    <tr>
                        <td  >1</td>
                        <td  >17BQ5A0505</td>
                        <td  >275645</td>
                        <td  >SEELAM VENKATA REDDY</td>
                        <td  >SEELAM AJAY REDDY</td>
                        <td  >MALE</td>
                        <td  >30/04/1999</td>
                        <td  >9553660590</td>
                        <td  >15/07/2017</td>
                    </tr>
                </table>
                </fieldset>
            </div>
            
        </div>
    );
}

export default NominallRoll;