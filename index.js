var res=0
var o=0
var time=30
var question=document.getElementById('b3')
function myfunction1() {
    console.log()
    var s=document.getElementById('b2')
    if(v==0){
        mytime()
    }
    
    s.innerHTML="Score : "+score+" pts";
    const a=Math.floor(Math.random()*100).toString()
    const b=Math.floor(Math.random()*100).toString()
    var arr=["+","*","-","/","%"]
    var c=arr[Math.floor(Math.random()*arr.length)]
    
    b3.style.textAlign = "center";
    b3.innerHTML=a+c+b+"=?"
    
    if(c=='+'){
        res=(+a + +b)
    }
    if(c=='-'){
        res=a-b;
    }
    if(c=='*'){
        res=a*b;
    }
    if(c=='/'){
        res=Math.floor(a/b);
    }
    if(c=='%'){
        res=a%b;
    }
    var res1=res-1
    var res2=res+1
    var res3=res-10
    var res4=res+10

    var ans=[res1,res2,res3,res4]
    var  op=["op1","op2","op3","op4"]
    o=op[Math.floor(Math.random()*op.length)]
    var op1=document.getElementById('b4')
    var op2=document.getElementById('b5')
    var op3=document.getElementById('b6')
    var op4=document.getElementById('b7')
    var o1=ans[Math.floor(Math.random()*ans.length)]
    var o2=ans[Math.floor(Math.random()*ans.length)]
    var o3=ans[Math.floor(Math.random()*ans.length)]
    var o4=ans[Math.floor(Math.random()*ans.length)]
    if(o=="op1"){
        op1.innerHTML=res
        op2.innerHTML=o2
        op3.innerHTML=o3
        op4.innerHTML=o4
        
    }
    if(o=="op2"){
         op2.innerHTML=res
         op1.innerHTML=o2
         op3.innerHTML=o3
         op4.innerHTML=o4
    }
    if(o=="op3"){
        op3.innerHTML=res
        op2.innerHTML=o2
        op1.innerHTML=o1
        op4.innerHTML=o4

    }
    if(o=="op4"){
        op4.innerHTML=res
        op2.innerHTML=o2
        op3.innerHTML=o3
        op1.innerHTML=o1

    }

}

function mytime() {
    var time1=30
    var t=document.getElementById('b1')
    var timer=setInterval(function(){
        if(v==1){
            
            ti=30-time1
            time1=time1+ti
            v=0 
        }
        else if(time1<0 ){
            clearInterval(timer)
            var time2=3
            var timer1=setInterval(function(){
                if(time2<0){
                    clearInterval(timer1)
                    window.location.href = 'end.html';
                }
                b3.innerHTML=score+" pts"
                b3.style.backgroundColor="red"
                b1.style.display="none"
                b2.style.display="none"
                b4.style.display="none"
                b5.style.display="none"
                b6.style.display="none"
                b7.style.display="none"
                time2-=1;
        },1000);

        }
        else{
            t.innerHTML="Time Left : "+time1+"seconds";
            time1-=1;
        }
    },1000)
}
function check1() {
    if(o=="op1"){
        console.log("correct")
        score+=1
        console.log(score)
        //mytime(99)
        v=1
        //mytime()
        myscore()
        //window.location.href = 'start.html';
    }
    else{
        console.log(score)
        v=0
        var time1=3
        var timer=setInterval(function(){
                if(time1<0){
                    clearInterval(timer)
                    window.location.href = 'end.html';
                }
                b3.innerHTML=score+" pts"
                b3.style.backgroundColor="red"
                b1.style.display="none"
                b2.style.display="none"
                b4.style.display="none"
                b5.style.display="none"
                b6.style.display="none"
                b7.style.display="none"
                time1-=1;
        },1000)
        console.log("wrong")
        //var score=10
        
        
    }
}
function check2() {
    if(o=="op2"){
        console.log("correct")
        score+=1
        console.log(score)
        //mytime(99)
        v=1
        //mytime()
        myscore()
        //window.location.href = 'start.html';
        
    }
    else{
        console.log(score)
        //var score=10
        v=0
        var time1=3
        var timer=setInterval(function(){
                if(time1<0){
                    clearInterval(timer)
                    window.location.href = 'end.html';
                }
                b3.innerHTML=score+" pts"
                b3.style.backgroundColor="red"
                b1.style.display="none"
                b2.style.display="none"
                b4.style.display="none"
                b5.style.display="none"
                b6.style.display="none"
                b7.style.display="none"
                time1-=1;
        },1000)
        console.log("wrong")
    }
}
function check3() {
    if(o=="op3"){
        console.log("correct")
        score+=1
        console.log(score)
        //mytime(99)
        v=1
        //mytime()
        myscore()
        //window.location.href = 'start.html';
    }
    else{
        console.log(score)
        v=0
        var time1=3
        var timer=setInterval(function(){
                if(time1<0){
                    clearInterval(timer)
                    window.location.href = 'end.html';
                }
                b3.innerHTML=score+" pts"
                b3.style.backgroundColor="red"
                b1.style.display="none"
                b2.style.display="none"
                b4.style.display="none"
                b5.style.display="none"
                b6.style.display="none"
                b7.style.display="none"
                time1-=1;
        },1000)
        console.log("wrong")
        //var score=10
    }
}
function check4() {
    if(o=="op4"){
        console.log("correct")
        score+=1
        console.log(score)

        //mytime(99)
        v=1
        //mytime()
        myscore()
        //window.location.href = 'start.html';
    }
    else{
       console.log(score)
        v=0
        var time1=3
        var timer=setInterval(function(){
                if(time1<0){
                    clearInterval(timer)
                    window.location.href = 'end.html';
                }
                b3.innerHTML=score+" pts"
                b3.style.backgroundColor="red"
                b1.style.display="none"
                b2.style.display="none"
                b4.style.display="none"
                b5.style.display="none"
                b6.style.display="none"
                b7.style.display="none"
                time1-=1;
        },1000)
        console.log("wrong")
        //var score=10    
    }
}
function score() {
    var time1=3
        var timer=setInterval(function(){
                if(time1<0){
                    clearInterval(timer)
                    window.location.href = 'end.html';
                }
                b3.innerHTML=score+" pts"
                b3.style.backgroundColor="red"
                b1.style.display="none"
                b2.style.display="none"
                b4.style.display="none"
                b5.style.display="none"
                b6.style.display="none"
                b7.style.display="none"
                time1-=1;
        },1000)
    
}
function myfunction() {
   
    window.location.href = 'start.html';
    
}
function myfunction2() {
    window.location.href = 'index.html';
}
var score=0
var v=0