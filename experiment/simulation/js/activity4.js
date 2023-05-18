var obs_table = `


<table class="table" style="height: 100%">
<thead>
  <tr>
    <th scope="col">Obs No.</th>
    <th scope="col">v (LPS)</th>
    <th scope="col">T (&#8451;)</th>
    <th scope="col">t<sub>i</sub> (&#8451;)</th>
    <th scope="col">t<sub>o</sub> (&#8451;)</th>
    <th id="act4-tab1-checked" scope="col">Check</th>
    
  </tr>
</thead>
<tbody id="table-1-body">
<tr>
    <td>1</td>
    <td><input id="v-input" type="number" name="" id=""></td>
    <td><input  id="t-input" type="number" name="" id=""></td>
    <td><input  id="ti-input" type="number" name="" id=""></td>
    <td><input  id="to-input" type="number" name="" id=""></td>
    <td><input id="tab1-verify-btn" onclick="act4_verify_tab1();" class="btn btn-primary" value="Verify" type="button" name="" id=""></td>
</tr>
</tbody>
</table>
`;
// var ob_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="add_area_field();" style="
// position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
var act4_btn_1 = `<button id="panel1_btn" class="btn btn-primary" onclick="complete_tab1();" style="
position: absolute; bottom: 12vh; width: 90%;">Next</button>`;
var act4_btn_2 = `<button id="panel1_btn" class="btn btn-primary" onclick="activity5();" style="
position: absolute; bottom: 12vh; width: 90%;">Next</button>`;
function activity4() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    if (document.getElementById('panel1_btn')) {
        document.getElementById('panel1_btn').remove();
    }
    // pp.addtoleftpannel(button);
    // pp.addtoleftpannel(button);
    // pp.addtoleftpannel(button);
    pp.addoffcanvas(3);
    pp.showtitle("Observation Table", 3);
    pp.showdescription('<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.0vw;">Enter all the readings in the table columns</p>', 3);
    // document.getElementById('hide_panel3').click();
    pp.showscore(200, 3);
    pp.addtoleftpannel(obs_table);
    // complete_tab1();
}
function complete_tab1() {
    let table_body = document.getElementById('table-1-body');
    table_body.innerHTML = ``;
    close_offcanvas();
    document.getElementById('panel1_btn').remove();
    pp.addtorightpannel(act4_btn_2, 3);
    document.getElementById('act4-tab1-checked').remove();
    for (let i = 0; i < table_1.length; i++) {
        let row = document.createElement('tr');
        let val1 = std_deviation(table_1[i][0]);
        let val2 = std_deviation(table_1[i][1]);
        let val3 = std_deviation(table_1[i][2]);
        let val4 = std_deviation(table_1[i][3]);
        ;
        if (i == 0) {
            val1 = table_1[i][0];
            val2 = table_1[i][1];
            val3 = table_1[i][2];
            val4 = table_1[i][3];
        }
        table_1[i][0] = val1;
        table_1[i][1] = val2;
        table_1[i][2] = val3;
        table_1[i][3] = val4;
        row.innerHTML = `
        <td>${i + 1}</td>
        <td>${val1.toFixed(2)}</td>
        <td>${val2.toFixed(1)}</td>
        <td>${val3.toFixed(1)}</td>
        <td>${val4.toFixed(1)}</td>
        `;
        table_body.append(row);
    }
}
function act4_verify_tab1() {
    let val1 = document.getElementById('v-input');
    let val2 = document.getElementById('t-input');
    let val3 = document.getElementById('ti-input');
    let val4 = document.getElementById('to-input');
    if (!verify_values(parseFloat(val1.value), table_1[0][0])) {
        alert('Incorrect v value');
        return;
    }
    if (!verify_values(parseFloat(val2.value), table_1[0][1])) {
        alert('Incorrect T value');
        return;
    }
    if (!verify_values(parseFloat(val3.value), table_1[0][2])) {
        alert('Incorrect ti value');
        return;
    }
    if (!verify_values(parseFloat(val4.value), table_1[0][3])) {
        alert('Incorrect to value');
        return;
    }
    console.log('success');
    pp.showdescription('<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.0vw;">Great!! Values are correct. Click next to load complete table</p>', 3);
    pp.addtorightpannel(act4_btn_1, 3);
    trigger_offcavnas();
}
//# sourceMappingURL=activity4.js.map