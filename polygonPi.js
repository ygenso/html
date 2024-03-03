var myfunc = function(){
    let side = document.getElementById("inputs").value;
    let r = 1;
    //頂角
    let veretical_angle = 360/side;
    //底角
    let base_angle = (180-veretical_angle)/2;
    //底辺
    let base_length = 2*r* Math.cos(base_angle * (Math.PI / 180));
    let all_base_length = base_length * side;
    var pai = all_base_length / (2*r);
    //表示
    var mydiv = document.getElementById("ijou");
    mydiv.innerHTML = pai;
    let base_length2 = 2*r* Math.tan((veretical_angle / 2) * Math.PI / 180);
    let all_base_length2 = base_length2 * side;
    let pai2 = all_base_length2 / (2*r);
    var mydiv = document.getElementById("ika");
    mydiv.innerHTML = pai2;
}
