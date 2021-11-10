const a = [5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,8,9];
const len = a.length;
let out = [];
let bb=[];
let b = a[len - 1];
if (b === 9) {
  let su = "";
  for (let i of a) {
    su += i;
  }
  
  let out1 = Number(su);
  out1 += 1;
  console.log(out1)
  su = out1.toString();

  for (let x of su) {
    bb.push(Number(x));
  }
//   console.log(bb)
} else {
  a[len - 1] = b + 1;
  let su = "";

  for (let i of a) {
    su += i;
  }
  for (let x of su) {
    out.push(Number(x));
  }
  console.log(out);
}


// let b=[];
// let su="";
// let out1=0;
// for (let i of a){
//     su+=i
// }
// out1=Number(su)
// out1+=1
// su=out1.toString()

// for (let x of su){
//     b.push(Number(x))
// }
// console.log(b)
