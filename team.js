function findz() {

    let p22
    let p32

    p22=parseFloat(document.getElementById("idp22").value);
    p32=parseFloat(document.getElementById("idp32").value);    

    let q32=-(p32/p22)
    document.getElementById("idq32").value=q32;

}


function findi(){

    let q11
    let q12
    let q13
    let q21
    let q22
    let q23
    let q31
    let q32
    let q33

    let m11
    let m12
    let m13
    let m21
    let m22
    let m23
    let m31
    let m32
    let m33

    


    q11=parseFloat(document.getElementById("idq11").value);
    q12=parseFloat(document.getElementById("idq12").value);
    q13=parseFloat(document.getElementById("idq13").value);
    q21=parseFloat(document.getElementById("idq21").value);
    q22=parseFloat(document.getElementById("idq22").value);
    q23=parseFloat(document.getElementById("idq23").value);
    q31=parseFloat(document.getElementById("idq31").value);
    q32=parseFloat(document.getElementById("idq32").value);
    q33=parseFloat(document.getElementById("idq33").value);
    
    
    m11=parseFloat(document.getElementById("idm11").value);
    m12=parseFloat(document.getElementById("idm12").value);
    m13=parseFloat(document.getElementById("idm13").value);
    m21=parseFloat(document.getElementById("idm21").value);
    m22=parseFloat(document.getElementById("idm22").value);
    m23=parseFloat(document.getElementById("idm23").value);
    m31=parseFloat(document.getElementById("idm31").value);
    m32=parseFloat(document.getElementById("idm32").value);
    m33=parseFloat(document.getElementById("idm33").value);
    
    
    
    
    

    
    let i11=(q11*m11)+(q12*m21)+(q13*m31)
    document.getElementById("idi11").value=i11;

    let i12=(q11*m12)+(q12*m22)+(q13*m32)
    document.getElementById("idi12").value=i12;

    let i13=(q11*m13)+(q12*m23)+(q13*m33)
    document.getElementById("idi13").value=i13;


    let i21=(q21*m11)+(q22*m21)+(q23*m31)
    document.getElementById("idi21").value=i21;

    let i22=(q21*m12)+(q22*m22)+(q23*m32)
    document.getElementById("idi22").value=i22;

    let i23=(q21*m13)+(q22*m23)+(q23*m33)
    document.getElementById("idi23").value=i23;


    let i31=(q31*m11)+(q32*m21)+(q33*m31)
    document.getElementById("idi31").value=i31;

    let i32=(q31*m12)+(q32*m22)+(q33*m32)
    document.getElementById("idi32").value=i32;
    
    let i33=(q31*m13)+(q32*m23)+(q33*m33)
    document.getElementById("idi33").value=i33;

}
function findx() {
    let a21
    let a11
    
    a11=parseFloat(document.getElementById("ida11").value);
    a21=parseFloat(document.getElementById("ida21").value);
    let e21=-(a21/a11)
    document.getElementById("ide21").value=e21;
}


function finds() {
    let a11
    let a31
    
    a11=parseFloat(document.getElementById("ida11").value);
    a31=parseFloat(document.getElementById("ida31").value);
    let n31=-(a31/a11)
    document.getElementById("idn31").value=n31;

}

function findxy() { 
    let a21
    let a11
    let a31

    a11=parseFloat(document.getElementById("ida11").value);
    a21=parseFloat(document.getElementById("ida21").value);
    a31=parseFloat(document.getElementById("ida31").value);

    let m21=-(a21/a11)
    document.getElementById("idm21").value=m21;

    
    let m31=-(a31/a11)
    document.getElementById("idm31").value=m31;

}

function findp() {
    let a11
    let a12
    let a13
    let a21
    let a22
    let a23
    let a31
    let a32
    let a33
    // let m11
    // let m12
    // let m13
    let m21
    // let m22
    // let m23
    let m31
    // let m32
    // let m33

    a11=parseFloat(document.getElementById("ida11").value);
    a12=parseFloat(document.getElementById("ida12").value);
    a13=parseFloat(document.getElementById("ida13").value);
    a21=parseFloat(document.getElementById("ida21").value);
    a22=parseFloat(document.getElementById("ida22").value);
    a23=parseFloat(document.getElementById("ida23").value);
    a31=parseFloat(document.getElementById("ida31").value);
    a32=parseFloat(document.getElementById("ida32").value);
    a33=parseFloat(document.getElementById("ida33").value);
    // m11=parseFloat(document.getElementById("idm11").value);
    // m12=parseFloat(document.getElementById("idm12").value);
    // m13=parseFloat(document.getElementById("idm13").value);
    m21=parseFloat(document.getElementById("idm21").value);
    // m22=parseFloat(document.getElementById("idm22").value);
    // m23=parseFloat(document.getElementById("idm23").value);
    m31=parseFloat(document.getElementById("idm31").value);
    // m32=parseFloat(document.getElementById("idm32").value);
    // m33=parseFloat(document.getElementById("idm33").value);

    var m11=
    document.getElementById("idm11").value;

    var m12=
    document.getElementById("idm12").value;

    var m13=
    document.getElementById("idm13").value;


    // var m21=
    // document.getElementById("idm21").value;

    var m22=
    document.getElementById("idm22").value;

    var m23=
    document.getElementById("idm23").value;

    // var m31=
    // document.getElementById("idm31").value;

    var m32=
    document.getElementById("idm32").value;

    var m33=
    document.getElementById("idm33").value;


    
    let p11=(m11*a11)+(m12*a21)+(m13*a31)
    document.getElementById("idp11").value=p11;

    let p12=(m11*a12)+(m12*a22)+(m13*a32)
    document.getElementById("idp12").value=p12;

    let p13=(m11*a13)+(m12*a23)+(m13*a33)
    document.getElementById("idp13").value=p13;


    let p21=(m21*a11)+(m22*a21)+(m23*a31)
    document.getElementById("idp21").value=p21;

    let p22=(m21*a12)+(m22*a22)+(m23*a32)
    document.getElementById("idp22").value=p22;

    let p23=(m21*a13)+(m22*a23)+(m23*a33)
    document.getElementById("idp23").value=p23;


    let p31=(m31*a11)+(m32*a21)+(m33*a31)
    document.getElementById("idp31").value=p31;

    let p32=(m31*a12)+(m32*a22)+(m33*a32)
    document.getElementById("idp32").value=p32;
    
    let p33=(m31*a13)+(m32*a23)+(m33*a33)
    document.getElementById("idp33").value=p33;

    

}
function findi(){

    let q11
    let q12
    let q13
    let q21
    let q22
    let q23
    let q31
    let q32
    let q33

    let m11
    let m12
    let m13
    let m21
    let m22
    let m23
    let m31
    let m32
    let m33

    


    q11=parseFloat(document.getElementById("idq11").value);
    q12=parseFloat(document.getElementById("idq12").value);
    q13=parseFloat(document.getElementById("idq13").value);
    q21=parseFloat(document.getElementById("idq21").value);
    q22=parseFloat(document.getElementById("idq22").value);
    q23=parseFloat(document.getElementById("idq23").value);
    q31=parseFloat(document.getElementById("idq31").value);
    q32=parseFloat(document.getElementById("idq32").value);
    q33=parseFloat(document.getElementById("idq33").value);
    
    
    m11=parseFloat(document.getElementById("idm11").value);
    m12=parseFloat(document.getElementById("idm12").value);
    m13=parseFloat(document.getElementById("idm13").value);
    m21=parseFloat(document.getElementById("idm21").value);
    m22=parseFloat(document.getElementById("idm22").value);
    m23=parseFloat(document.getElementById("idm23").value);
    m31=parseFloat(document.getElementById("idm31").value);
    m32=parseFloat(document.getElementById("idm32").value);
    m33=parseFloat(document.getElementById("idm33").value);
    
    
    
    
    

    
    let i11=(q11*m11)+(q12*m21)+(q13*m31)
    document.getElementById("idi11").value=i11;

    let i12=(q11*m12)+(q12*m22)+(q13*m32)
    document.getElementById("idi12").value=i12;

    let i13=(q11*m13)+(q12*m23)+(q13*m33)
    document.getElementById("idi13").value=i13;


    let i21=(q21*m11)+(q22*m21)+(q23*m31)
    document.getElementById("idi21").value=i21;

    let i22=(q21*m12)+(q22*m22)+(q23*m32)
    document.getElementById("idi22").value=i22;

    let i23=(q21*m13)+(q22*m23)+(q23*m33)
    document.getElementById("idi23").value=i23;


    let i31=(q31*m11)+(q32*m21)+(q33*m31)
    document.getElementById("idi31").value=i31;

    let i32=(q31*m12)+(q32*m22)+(q33*m32)
    document.getElementById("idi32").value=i32;
    
    let i33=(q31*m13)+(q32*m23)+(q33*m33)
    document.getElementById("idi33").value=i33;

}
