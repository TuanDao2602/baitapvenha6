//bài 1Bài 1: Viết chương trình cộng hai số
// Ý tưởng cho bài này như sau: trước tiên cần viết một hàm công hai số và nó có
// có hai tham số truyền vào, lúc này hai tham số đó chúng ta sẽ sử dụng hàm
// prompt() để lấy. Lưu ý khi lấy dữ liệu từ người dùng thì bạn nên sử dụng hàm
// parseInt() or ép kiểu Number để chuyển sang kiểu number nhé, nếu không nó sẽ
// hiểu là cộng hai chuỗi nên dẫn đến kết quả sai.
// Sử dụng Return
// function tonghaiso(a,b){
//     let sum =a +b;
//     return sum;
// } let c = Number(prompt(' nhập vào số a'));
//   let d = Number(prompt('nhập vào số b'));
//   let z = tonghaiso(c, d);
// console.log(z);
 

//bài 2 Tính tổng các số lẻ trong mảng. Sử dụng Return

// let arr = [1,2,3,4,5,6]
// function tongSoLe(){
//     let tong= 0 ;
//     for(i=0;i<=arr.length-1;i++){
//         if(arr[i]%2===1){
//         tong=tong+arr[i]
//     }
// }return tong;
// }console.log(tongSoLe());

// Bài 1:Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
// function binhphuong(){
//     let a =Number(prompt('nhập vào 1 số tự nhiên'))
//     tich= a*a;
//     return tich
// }console.log(binhphuong());

//Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
// function hinhtron(){
//     let chuVi=0;
//     let dienTich =0
//     let R = Number(prompt('nhập vào BÁN kính của hình tròn'));
//      chuVi= chuVi+ 2*R*3.14;
//      dienTich= dienTich+ R*R*3.14
//      console.log(chuVi);
//     console.log( dienTich);
// }hinhtron();

// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây
// dựng được.
//  function giaiThua(){
//     let a=1;
//     let n = Number(prompt('nhập vào 1 số nguyên '));
//     for(i=1;i<=n;i++){
//         a=a*i;
//     }return a;
//  }console.log(giaiThua());

// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm
// trả về true, ngược lại trả về false.
// let n = Number(prompt('nhập vào 1 kí tự bất kì'));
// function checkSo(a){
//     return(Number.isInteger(a));
// }console.log(checkSo(n));


// Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
// let a = prompt('nhập vào 3 số cách nhau bởi dấu phẩy').split(',');
// function  soSanh(arr){
//     let min= Number(arr[0]);
//     for(i=0; i<=arr.length-1; i++){
//         if(min>Number(arr[i])){
//             min=Number(arr[i])
//         }
//     }return min
// }console.log(soSanh(a))

// Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương
// không. Nếu là nguyên dương trả về true, ngược lại trả về false.
// let a = Number(prompt('nhập vào '));
// function kiemTra(n){
//     return(n>0&&Number.isInteger(n))
// }console.log(kiemTra(a));


// Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
// let a =prompt(`nhập vào 2 số nguyên bất kì`).split(' ');
// let arr=[];
// function doiCho(b){
//     for(i=b.length-1;i>=0;i--){
//         arr.push(b[i]);
//     }  return arr;
// }console.log(doiCho(a));

//Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
// let userInput =prompt('nhập vào mảng số nguyên bất kì').split(' ');
// let arr=[];
// function doiCho(b){
//     for(i=0;i<b.length; i++){
//         arr.unshift(b[i]);
//     }return arr;
// }console.log(doiCho(userInput));

// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ
// đó có nằm trong mảng không. Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -
// 1.
// let arr = prompt('nhập vào chuỗi kí tự');
// let a = prompt(' nhập vào kí tự');
// let check = 0;
// function kiemTra(b){
//     for(i=0;i<=b.length-1;i++){
//         if(a ===arr[i]){
//             check=check+1
//         }
//     }if(check>0){
//         alert(`số bạn nhập lặp lại ${check} lần`);
//     }else{
//         alert(`số bạn nhập không có trong mảng`)
//     }
// }kiemTra(arr);