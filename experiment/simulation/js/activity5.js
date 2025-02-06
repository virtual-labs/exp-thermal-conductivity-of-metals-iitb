var main_table_element;
var act5_ob_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="complete_main_table();" style="
position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
var act5_plot_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="activity6();" style="
position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
var act5_table = `   
<div style='height: 100%; overflow: auto;'>
 <div style="text-align: center; padding: 2% 0; font-size: 4vw;">
Physical Properties at Mean Temperature
</div>

<div>
<table class="table" style='overflow: auto; height: 40vw;'>
    <tbody id="act5-table-2">
      <tr>
        <td style="padding: 2% 2% !important; font-size: 2.2vw;" scope="row">Diameter of Test Specimen, d (cm)</td>
        <td id="assign_diameter" style="padding: 2% 2% !important; font-size: 2.2vw;"></td>
        
      </tr>
      <tr>
        <td style="padding: 2% 2% !important; font-size: 2.2vw;" scope="row">Length of Heat Exchanger, L (cm)</td>
        <td id="assign_ht_length" style="padding: 2% 2% !important; font-size: 2.2vw;"></td>
      </tr>
      <tr>
        <td style="padding: 2% 2% !important; font-size: 2.2vw;" scope="row">Metal</td>
        <td id="assign_metal" style="padding: 2% 2% !important; font-size: 2.2vw;" colspan="2"></td>
        
      </tr>

      <tr>
      <td style="padding: 2% 2% !important; font-size: 2.2vw;" scope="row">Cross Sectional Area, A (cm<sup>2</sup>)</td>
      <td id="assign_cs_area" style="padding: 2% 2% !important; font-size: 2.2vw;" colspan="2"></td>
      
    </tr>
    </tbody>
  </table>
</div>

</div>
`;
var ob_btn_5 = `<button id="panel1_btn" class="btn btn-primary" onclick="act5_show_values();" style="
position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
function activity5() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showdescription('<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.5vw;">Now, Click on next to see Density and Heat capacity values</p>', 3);
    pp.addtorightpannel(ob_btn_5, 3);
    pp.showscore("300", 3);
    pp.showtitle("Selected Values", 3);
    // document.getElementById('hide_panel1').click();
    pp.addtoleftpannel(act5_table);
    document.getElementById('assign_diameter').innerText = diameter.toString();
    document.getElementById('assign_ht_length').innerText = ht_length.toString();
    document.getElementById('assign_metal').innerText = metal.toString();
    document.getElementById('assign_cs_area').innerText = cs_area.toString();
    // var bsOffcanvas = new bootstrap.Offcanvas(
    //     document.getElementById("offcanvasRight3")
    //   );
    //   bsOffcanvas.show();
}
var act5_ob2_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="table_calculations();" style="
position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
function act5_show_values() {
    document.getElementById('panel1_btn').remove();
    let tbody = document.getElementById('act5-table-2');
    let tr1 = document.createElement('tr');
    let tr2 = document.createElement('tr');
    tr1.innerHTML = `
    <td style="padding: 2% 2% !important; font-size: 2.2vw;" scope="row">Density, &rho; (kg/m<sup>-3</sup>)</td>
    <td style="padding: 2% 2% !important; font-size: 2.2vw;" colspan="2">1000</td>
    `;
    tr2.innerHTML = `
    <td style="padding: 2% 2% !important; font-size: 2.2vw;" scope="row">Heat Capacity, C<sub>p</sub> (J/kg-K)</td>
    <td style="padding: 2% 2% !important; font-size: 2.2vw;" colspan="2">4186.8</td>
    `;
    tbody.append(tr1);
    tbody.append(tr2);
    pp.showdescription('<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.5vw;">Click next to start the calculations</p>', 3);
    pp.addtorightpannel(act5_ob2_btn, 3);
}
var all_properties_without_table = `
<div style='height: 100%; overflow: auto;'>
<div id="left-props" class="row" style="font-size: calc(2vw + 5px);">
    <div class="col-4">Diamneter of Test Specimen, d (cm)</div>
    <div class="col-2">${diameter}</div>
    <div class="col-4">Length of Heat Exchanger, L (cm)</div>
    <div class="col-2">${ht_length}</div>
</div>

<br>

<div class="row" style="font-size: calc(2vw + 5px);">
    <div class="col-4">Metal</div>
    <div class="col-2">${metal}</div>
    <div class="col-4">Cross Sectional Area, A (cm<sup>2</sup>)</div>
    <div class="col-2">${cs_area}</div>
</div>

<br>

<div class="row" style="font-size: calc(2vw + 5px);">
    <div class="col-4">Density, &rho (kg/m<sup>-3</sup>)</div>
    <div class="col-2">${density}</div>
    <div class="col-4">Heat Capacity, C<sub>p</sub> (J/kg-K)</div>
    <div class="col-2">${cp}</div>
</div>

<br>

<br>


<div class="row" style="font-size: calc(2vw + 5px);">
<div class="col-3">m = (v x $rho;) / (1000 x 60)</div>
<div class="col-3"> &Delta;T = T - ((t<sub>i</sub> + t<sub>o</sub>)/2)</div>
<div class="col-3">Q = m x C<sub>p</sub> x (t<sub>o</sub> - t<sub>i</sub>)</div>
</div>
<div class="col-3">K = (Q x (L/100))/(&Delta;T x A)</div>
</div>

<br><br>

</div>
`;
var main_table = `
<div id="act5-main-table" class="table-responsive" style='height: 100%; overflow: auto;'>
<table  class="table" style="height: 100vh !important;">
    <thead>
      <tr>
        <th scope="col">Sr No.</th>
        <th scope="col">&nu;</th>
        <th scope="col">T (&#8451;)</th>
        <th scope="col">t<sub>i</sub> (&#8451;)</th>
        <th scope="col">t<sub>o</sub> (&#8451;)</th>
        <th scope="col">m kg/s x 10<sup>-3</sup></th>
        <th scope="col">Q W</th>
        <th scope="col">&Delta;T K</th>
        <th scope="col">K W/m-K</th>
        <th id="a5-temp" scope="col">Check</th>
        
      </tr>
    </thead>
    <tbody id="table-5-body">
      <tr>
          <td>1</td>
          <td>${table_1[0][0]}</td>
          <td>${table_1[0][1]}</td>
          <td>${table_1[0][2]}</td>
          <td>${table_1[0][3]}</td>
          <td><input id="mt-1" type="text" class="form-control" name="" id=""></td>
          <td><input id="mt-2" type="text" class="form-control" name="" id=""></td>
          <td><input id="mt-3" type="text" class="form-control" name="" id=""></td>
          <td><input id="mt-4" type="text" class="form-control" name="" id=""></td>
          <td><input class="btn btn-primary" onclick="act5_verify_obtable();" value="verify" style="width: 100%" type="button"></td>
      </tr>
    </tbody>
    </table>

    </div>
    
`;
function table_calculations() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle('<p>Calculate K</p>', 3);
    var all_properties = `

<div style="max-height: 80%; overflow-y: auto !important;">
<table class="table" style="height: 30% !important;">
    <thead>
      <tr>
        <th style="padding: 2% 2% !important; font-size: 12px;" scope="col">Properties</th>
        <th style="padding: 2% 2% !important; font-size: 12px;" scope="col">values</th>
       
      </tr>

    </thead>
    <tbody>
      <tr>
        <td style="padding: 2% 2% !important; font-size: 12px" scope="row">Diamneter of Test Specimen, d (cm)</td>
        <td style="padding: 2% 2% !important; font-size: 12px">${diameter}</td>
        
      </tr>
      <tr>
        <td style="padding: 2% 2% !important; font-size: 12px" scope="row">Length of Heat Exchanger, L (cm)</td>
        <td style="padding: 2% 2% !important; font-size: 12px">${ht_length}</td>
      </tr>
      <tr>
        <td style="padding: 2% 2% !important; font-size: 12px" scope="row">Metal</td>
        <td style="padding: 2% 2% !important; font-size: 12px" colspan="2">${metal}</td>
        
      </tr>

      <tr>
        <td style="padding: 2% 2% !important; font-size: 12px" scope="row">Cross Sectional Area, A (cm<sup>2</sup>)</td>
        <td style="padding: 2% 2% !important; font-size: 12px" colspan="2">${cs_area}</td>
        
      </tr>

      <tr>
      <td style="padding: 2% 2% !important; font-size: 12px" scope="row">Density, &rho; (kg/m<sup>-3</sup>)</td>
      <td style="padding: 2% 2% !important; font-size: 12px" colspan="2">${density}</td>
      
    </tr>


    <tr>
    <td style="padding: 2% 2% !important; font-size: 12px" scope="row">Heat Capacity, C<sub>p</sub> (J/kg-K)</td>
    <td style="padding: 2% 2% !important; font-size: 12px" colspan="2">${cp}</td>
    
  </tr>
    </tbody>
  </table>

  <br>

  <div class="row" style="font-size: calc(0.7vw + 4px);"> 
  <div class="col-6">m = (v x &rho;) / (1000 x 60)</div>  
  <div class="col-6">&Delta;T = T - ((t<sub>i</sub> + t<sub>o</sub>)/2)</div>
  <div class="col-6">Q = m x C<sub>p</sub> x (t<sub>o</sub> - t<sub>i</sub>)</div> 
  <div class="col-6">K = (Q x (L/100))/(&Delta;T x A)</div>
  </div>
  </div>
  

</div>


  

`;
    pp.addtorightpannel(all_properties, 3);
    pp.addtoleftpannel(main_table);
    //   pp.addtoleftpannel(all_properties_without_table);
}
function act5_verify_obtable() {
    let val1 = document.getElementById("mt-1");
    let val2 = document.getElementById("mt-2");
    let val3 = document.getElementById("mt-3");
    let val4 = document.getElementById("mt-4");
    console.log(main_table_data[0][4], main_table_data[0][5], main_table_data[0][6], (main_table_data[0][5] * (ht_length / 100)) / (main_table_data[0][6] * cs_area));
    // console.log(Q.value, To.value, Ti.value, ti.value, to.value);
    if (!verify_values(parseFloat(val1.value), main_table_data[0][4])) {
        alert("please correct the m value");
        return;
    }
    if (!verify_values(parseFloat(val2.value), main_table_data[0][5])) {
        alert("please correct the Q value");
        return;
    }
    if (!verify_values(parseFloat(val3.value), main_table_data[0][6])) {
        alert("please correct the delta T value");
        return;
    }
    if (!verify_values(parseFloat(val4.value), (main_table_data[0][5] * (ht_length / 100)) / (main_table_data[0][6] * cs_area))) {
        alert("please correct the K value");
        return;
    }
    pp.addtorightpannel(act5_ob_btn, 3);
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
    bsOffcanvas.show();
}
function complete_main_table() {
    document.getElementById('hide_panel3').click();
    pp.clearleftpannel();
    pp.addtoleftpannel(main_table);
    let tb = document.getElementById('table-5-body');
    tb.innerHTML = ``;
    document.getElementById('a5-temp').remove();
    for (let i = 0; i < 4; i++) {
        let row = document.createElement('tr');
        main_table_data[i] = [];
        main_table_data[i][0] = i + 1;
        main_table_data[i][1] = table_1[i][0];
        main_table_data[i][2] = table_1[i][1];
        main_table_data[i][3] = table_1[i][2];
        main_table_data[i][4] = table_1[i][3];
        main_table_data[i][5] = ((table_1[i][0] * density) * Math.pow(10, (3))) / (1000 * 60);
        main_table_data[i][7] = main_table_data[i][2] - ((main_table_data[i][4] + main_table_data[i][3]) / 2);
        main_table_data[i][6] = (main_table_data[i][5] * cp * (main_table_data[i][4] - main_table_data[i][3])) / 1000;
        console.log(main_table_data[i][6]);
        main_table_data[i][8] = ((main_table_data[i][6] * ht_length) / 100) / (main_table_data[i][7] * cs_area);
        row.innerHTML = `
        <td>${i + 1}</td>
        <td>${main_table_data[i][1].toFixed(2)}</td>
        <td>${main_table_data[i][2].toFixed(1)}</td>
        <td>${main_table_data[i][3].toFixed(1)}</td>
        <td>${main_table_data[i][4].toFixed(1)}</td>
        <td>${main_table_data[i][5].toFixed(2)}</td>
        <td>${(main_table_data[i][6]).toFixed(2)}</td>
        <td>${(main_table_data[i][7]).toFixed(2)}</td>
        <td>${(main_table_data[i][8]).toFixed(2)}</td>
        `;
        tb.append(row);
    }
    console.log(main_table_data);
    document.getElementById('panel1_btn').remove();
    pp.addtorightpannel(act5_plot_btn, 3);
    main_table_element = document.getElementById('act5-main-table');
}
var label = [];
var data = [];
var data1 = [];
var pol;
//activity5();
//# sourceMappingURL=activity5.js.map