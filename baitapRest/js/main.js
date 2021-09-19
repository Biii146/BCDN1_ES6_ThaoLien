let getELE = (id)=>{
    return document.getElementById(id);
}

let calcSum = (numbLenght,...scores)=>{
    let sum = 0;
    let average = 0;
    scores.forEach((number)=>{
        sum += number;
        average = sum/numbLenght;
    });
    return average;
}

// Tính điểm của khối lớp 1
let caclAver1 = () => {
    let toan = parseFloat(getELE("inpToan").value);
    let ly = parseFloat(getELE("inpLy").value);
    let hoa = parseFloat(getELE("inpHoa").value);
    
    let average1 = calcSum(3,toan,ly,hoa);
    console.log(average1);
    getELE("tbKhoi1").innerHTML = average1.toFixed(2);
}
getELE("btnKhoi1").onclick = caclAver1;

// Tính điểm của khối lớp 2
let caclAver2 = () => {
    let van = parseFloat(getELE("inpVan").value);
    let su = parseFloat(getELE("inpSu").value);
    let dia = parseFloat(getELE("inpDia").value);
    let anh = parseFloat(getELE("inpEnglish").value);

    
    let average2 = calcSum(4,van,su,dia,anh);
    getELE("tbKhoi2").innerHTML = average2.toFixed(2);
}
getELE("btnKhoi2").onclick = caclAver2;
