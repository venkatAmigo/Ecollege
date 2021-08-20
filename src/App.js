import vvit_logo from './vvit_logo.png';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={vvit_logo} alt="logo" /> 
      <div class="bcca-breadcrumb">
        <div class="bcca-breadcrumb-item">Promotion</div>
        <div class="bcca-breadcrumb-item">Student Promotions</div>
        <div class="bcca-breadcrumb-item">Home </div>
      </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <fieldset>
            <legend>Forms</legend>
              <div class="items">
                <div class="items-body">
                  <div class="items-body-content">
                    <span>Import Student Data</span>
                    <i class="fa fa-angle-right"></i>
                  </div>
                  <div class="items-body-content">
                    <span>Manage Students</span>
                    <i class="fa fa-angle-right"></i>
                  </div>
                  <div class="items-body-content">
                    <span>Import Student Photos</span>
                    <i class="fa fa-angle-right"></i>
                  </div>
                  <div class="items-body-content">
                    <span>Nominal Roll  </span>
                    <i class="fa fa-angle-right"></i>
                  </div>
                  <div class="items-body-content">
                    <span>Student Academic year Mapping </span>
                    <i class="fa fa-angle-right"></i>
                  </div>
                  <div class="items-body-content">
                    <span>Student Promotions </span>
                    <i class="fa fa-angle-right"></i>
                  </div>
                </div>
            </div>
      </fieldset>
      </header>
      
    </div>
  );
}

export default App;
