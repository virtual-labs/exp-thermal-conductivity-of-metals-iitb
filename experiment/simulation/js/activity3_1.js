let seq_container = [];
let seq = 0;
let valve;
var ta;
let first_motor_anim;
let second_motor_anim;
let third_motor_anim;
let first_sim;
let second_sim;
let third_sim;
let fourth_sim;
let fifth_sim;
let pump_power;
let heater_power;
let pump_text;
let heater_text;
let floater;
let tin;
let tout;
let timer;
let timer_text;
let heater_dsp;
let heater_temp = 0.0;
let can_start_timer = false;
let minutes = 0;
let seconds = 0;
let tout_value = 0;
let fr = '0 LPS';
let fr_text;
let tin_label;
let tout_label;
let temp_label;
//slider
let slider;
let btn_to_a3 = `<button id="panel1_btn" class="btn btn-primary" onclick="activity4();" style="position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
function activity3_1() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.addtoleftpannel(`<input type='range' min='0' max='4' step='1' value='0' id='float-slider1' style='position: absolute; top: 39.5vw; left: 25vw; width: 18vw;' />`);
    pp.showtitle('<p id="exp-title">Perform the experiment step by step</p>', 3);
    show_des();
    pp.addcanvas('mycanvas');
    canvas = pp.canvas;
    context = canvas.getContext('2d');
    rect = canvas.getBoundingClientRect();
    scene = new Scene();
    first_sim = new Chemistry.Custome_image(seq2_img, new Chemistry.Point(700, 450), 830, 641, canvas);
    seq_container.push(first_sim);
    load_scene_images();
    load_labels();
    window.onload = a3_windowresize;
    window.onresize = a3_windowresize;
    a3_windowresize();
    canvas.addEventListener('click', (e) => {
        let x = Math.round((e.clientX - rect.x) / lscale);
        let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
        console.log(x, y);
    });
}
function a3_windowresize() {
    //canvas size
    a3_canvas_size();
    //canvas mapping
    a3_canvas_mapping();
    //draw scene
    scene.draw();
    draw_all_seq();
}
function load_scene_images() {
    valve = new Chemistry.Custome_image(valve2, new Chemistry.Point(342, 370), 66, 19, canvas);
    pump_power = new Chemistry.Circle(new Chemistry.Point(850, 850), 30, canvas);
    heater_power = new Chemistry.Circle(new Chemistry.Point(1000, 850), 30, canvas);
    pump_power.color = 'red';
    heater_power.color = 'red';
    pump_text = new Chemistry.Geo_Text('P', new Chemistry.Point(840, 840), canvas);
    pump_text.font = '35%';
    heater_text = new Chemistry.Geo_Text('H', new Chemistry.Point(987, 840), canvas);
    heater_text.font = '35%';
    floater = new Chemistry.Custome_image(float_img, new Chemistry.Point(318, 465), 34, 30, canvas);
    tin = new Chemistry.Geo_Text('', new Chemistry.Point(461, 700), canvas);
    tin.font = '26%';
    tout = new Chemistry.Geo_Text('', new Chemistry.Point(649, 691), canvas);
    tout.font = '26%';
    heater_dsp = new Chemistry.Geo_Text('', new Chemistry.Point(931, 339), canvas);
    heater_dsp.font = '30%';
    scene.add(pump_power);
    scene.add(heater_power);
    scene.add(floater);
    scene.add(valve);
    scene.add(pump_text);
    scene.add(heater_text);
}
function load_labels() {
    fr_text = new Chemistry.Geo_Text('ν = 0.00 LPS', new Chemistry.Point(360, 580), canvas);
    tin_label = new Chemistry.Geo_Text('t_in', new Chemistry.Point(470, 750), canvas);
    tout_label = new Chemistry.Geo_Text('t_out', new Chemistry.Point(660, 646), canvas);
    temp_label = new Chemistry.Geo_Text('T', new Chemistry.Point(960, 385), canvas);
    fr_text.font = '24%';
    tin_label.font = "24%";
    tout_label.font = "24%";
    temp_label.font = "24%";
}
function a3_canvas_size() {
    canvas.width = window.innerWidth * 0.91;
    canvas.height = canvas.width * 1080.0 / 1920 * 0.85;
    lscale = canvas.width / 1920.0;
    document.getElementById('leftpannel').style.height = (canvas.height + 5) + "px";
    document.getElementById('leftpannel').style.margin = '0';
}
function a3_canvas_mapping() {
    context.translate(0, canvas.height);
    context.scale(1, -1);
}
function draw_all_seq() {
    scene.draw();
    for (let i = 0; i < seq_container.length; i++) {
        seq_container[i].draw();
    }
    if (seq == 0) {
        canvas.addEventListener('click', motor_event);
        pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">Click 'P' button to power on the motor</div>`, 3);
        show_des();
    }
    if (seq == 1 && seq_container[1].l < seq_container[1].l_last) {
        window.requestAnimationFrame(draw_all_seq);
    }
    else if (seq == 1) {
        seq = 2;
        second_motor_anim = new Chemistry.anim_image_x_dir(seq4_img, new Chemistry.Point(700, 450), 830, 641, canvas);
        seq_container.push(second_motor_anim);
        second_motor_anim.l = 400;
        second_motor_anim.width = 500;
        second_motor_anim.width_last = 210;
        second_motor_anim.startx = 0;
        draw_all_seq();
    }
    if (seq == 2 && seq_container[2].width > seq_container[2].width_last) {
        window.requestAnimationFrame(draw_all_seq);
    }
    else if (seq == 2) {
        seq = 3;
        third_motor_anim = new Chemistry.anim_image_y_dir_down(seq5_img, new Chemistry.Point(700, 450), 830, 641, canvas);
        seq_container.push(third_motor_anim);
        third_motor_anim.l = 300;
        third_motor_anim.l_last = 700;
        third_motor_anim.startx = 0;
        third_motor_anim.width = 0;
        draw_all_seq();
    }
    if (seq == 3 && seq_container[3].l < seq_container[3].l_last) {
        window.requestAnimationFrame(draw_all_seq);
    }
    else if (seq == 3) {
        canvas.addEventListener('click', open_inlet_valve);
        pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">Now Click on the red valve to open it.</div>`, 3);
        show_des();
    }
    if (seq == 4 && seq_container[4].l < seq_container[4].l_last) {
        window.requestAnimationFrame(draw_all_seq);
    }
    else if (seq == 4) {
        seq = 5;
        fr_text.text = 'v = 0.79 LPS';
        console.log('x-animation');
        third_sim = new Chemistry.anim_image_x_dir(seq7_img, new Chemistry.Point(700, 450), 830, 641, canvas);
        seq_container.push(third_sim);
        third_sim.l = 627;
        third_sim.width = 800;
        third_sim.width_last = 450;
        third_sim.startx = 0;
        draw_all_seq();
    }
    if (seq == 5 && seq_container[5].width > seq_container[5].width_last) {
        window.requestAnimationFrame(draw_all_seq);
    }
    else if (seq == 5) {
        seq = 6;
        console.log('y-animation');
        fourth_sim = new Chemistry.anim_image_y_dir_up(seq8_img, new Chemistry.Point(700, 450), 830, 641, canvas);
        seq_container.push(fourth_sim);
        fourth_sim.l = 1653 * lscale;
        fourth_sim.l_last = 2200 * lscale;
        fourth_sim.startx = 0;
        fourth_sim.width = 0;
        draw_all_seq();
    }
    if (seq == 6 && seq_container[6].l < seq_container[6].l_last) {
        window.requestAnimationFrame(draw_all_seq);
    }
    else if (seq == 6) {
        seq = 7;
        fifth_sim = new Chemistry.anim_image_x_dir(seq9_img, new Chemistry.Point(700, 450), 830, 641, canvas);
        seq_container.push(fifth_sim);
        fifth_sim.l = 627;
        fifth_sim.width = 900;
        fifth_sim.width_last = 200;
        fifth_sim.startx = 300;
        draw_all_seq();
    }
    if (seq == 7 && seq_container[7].width > seq_container[7].width_last) {
        window.requestAnimationFrame(draw_all_seq);
    }
    else if (seq == 7) {
        tin.text = table_1[0][2].toString();
        tout.text = table_1[0][2].toString();
        tout_value = table_1[0][2];
        show_in_out_temp();
        pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">Click the 'H' button to turn on the heater</div>`, 3);
        canvas.addEventListener('click', heater_on_event);
        show_des();
        seq = 8;
    }
    floater.draw();
    tin.draw();
    tout.draw();
    heater_dsp.draw();
    fr_text.draw();
    tin_label.draw();
    tout_label.draw();
    temp_label.draw();
}
function open_inlet_valve(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    if (x >= 312 && x <= 382) {
        if (y >= 343 && y <= 390) {
            valve.img = valve1;
            valve.stpt.x = 335;
            valve.stpt.y = 355;
            valve.stang = 50;
            // draw_all_seq();
            first_valve_animation();
        }
    }
}
function first_valve_animation() {
    canvas.removeEventListener('click', open_inlet_valve);
    seq = 4;
    second_sim = new Chemistry.anim_image(seq6_img, new Chemistry.Point(700, 450), 830, 641, canvas);
    seq_container.push(second_sim);
    second_sim.name = "second";
    second_sim.l = 200; // 290
    second_sim.l_last = 520; // 525
    second_sim.width = 1000; // 380
    second_sim.startx = 58;
    setTimeout(() => { delayed_float_animation(); }, 2500);
    draw_all_seq();
}
function delayed_float_animation() {
    if (floater.stpt.y < 555) {
        window.requestAnimationFrame(delayed_float_animation);
        floater.stpt.y++;
    }
}
function show_in_out_temp() {
}
function motor_event(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    if (x >= 810 && x <= 887) {
        if (y >= 811 && y <= 875) {
            pump_power.color = 'green';
            console.log('motor on event detected');
            // slider.value = '1';
            console.log('its here');
            slider = document.getElementById('float-slider1');
            slider.value = '1';
            motor_on_animation();
        }
    }
}
function motor_on_animation() {
    canvas.removeEventListener('click', motor_event);
    first_motor_anim = new Chemistry.anim_image(seq3_img, new Chemistry.Point(700, 450), 830, 641, canvas);
    seq_container.push(first_motor_anim);
    first_motor_anim.l = 50; // 290
    first_motor_anim.l_last = 350; // 525
    first_motor_anim.width = 0; // 38
    seq = 1;
    draw_all_seq();
}
function heater_on_event(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">Set the temperature using up and down buttons on temperature controller</div>`, 3);
    show_des();
    if (x >= 958 && x <= 1045) {
        if (y >= 804 && y <= 900) {
            canvas.removeEventListener('click', heater_on_event);
            heater_power.color = 'green';
            console.log(' heater event detected');
            timer = new Chemistry.Custome_image(timer_img, new Chemistry.Point(1529, 545), 290 * 1.5, 210 * 1.5, canvas);
            timer_text = new Chemistry.Geo_Text('00', new Chemistry.Point(1426, 547), canvas);
            timer_text.font = '75%';
            heater_dsp.text = '0.0';
            scene.add(timer);
            scene.add(timer_text);
            canvas.addEventListener('click', temp_set_inc);
            canvas.addEventListener('click', temp_set_dec);
            canvas.addEventListener('click', start_timer);
            draw_all_seq();
        }
    }
}
function temp_set_inc(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    if (x >= 994 && x <= 1038) {
        if (y >= 360 && y <= 394) {
            console.log('temp increase event detected');
            if (heater_temp == 0.0) {
                heater_temp = 120.00;
                heater_dsp.text = heater_temp.toString();
                can_start_timer = true;
                draw_all_seq();
            }
        }
    }
}
function temp_set_dec(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    if (x >= 994 && x <= 1038) {
        if (y >= 300 && y <= 335) {
            console.log('temp decrease event detected');
        }
    }
}
function start_timer(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    if (x >= 1322 && x <= 1442) {
        if (y >= 400 && y <= 511) {
            console.log('start event detected');
            if (can_start_timer) {
                canvas.removeEventListener('click', start_timer);
                console.log('passed');
                ta = setInterval(() => { run_timer_animation(); }, 10);
            }
        }
    }
}
function run_timer_animation() {
    if (true) {
        timer_text.text = minutes + ":" + seconds;
        draw_all_seq();
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            if (tout_value <= 33.25) {
                tout_value += 0.09032225;
                tout.text = tout_value.toFixed(2);
            }
            minutes++;
        }
    }
    if (minutes == 31 && seconds == 1) {
        canvas.addEventListener('click', stop_timer);
        pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">Now Stop The timer and note all the readings</div>`, 3);
        show_des();
    }
}
function stop_timer(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    if (x >= 1600 && x <= 1706) {
        if (y >= 400 && y <= 511) {
            canvas.removeEventListener('click', stop_timer);
            console.log('succefully stopped');
            pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">Note Down All the Values carefully, once done click on the next button below</div>` + btn_to_a3, 3);
            show_des();
            clearInterval(ta);
            fr_text.text = 'v = 0.79 LPS';
            draw_all_seq();
        }
    }
}
//activity3_1();
//# sourceMappingURL=activity3_1.js.map