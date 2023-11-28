// Đồng hồ trang trí
function TimeNow() {
      let time_now = document.getElementById('time-now');
      let date = new Date();
      /* let date_year = date.getFullYear();
      let date_month = date.getMonth() + 1;
      let date_day = date.getDate(); */
      let date_hour = date.getHours();
      if(date_hour < 10) {
            date_hour = date_hour.toString();
            date_hour = 0 + date_hour
      } else {
            date_hour = date_hour.toString();
      }
      let date_minute = date.getMinutes();
      if(date_minute < 10) {
            date_minute = date_minute.toString();
            date_minute = 0 + date_minute
      } else {
            date_minute = date_minute.toString();
      }
      let date_second = date.getSeconds();
      if(date_second < 10) {
            date_second = date_second.toString();
            date_second = 0 + date_second
      } else {
            date_second = date_second.toString();
      }
      let timeNowTemp = `${date_hour}:${date_minute}:${date_second}`;
      time_now.innerHTML = timeNowTemp;
}
function showTimeNow() {
      setInterval(TimeNow,1000);
}
// Tạo tài khoản ADMIN
function createAdmin() {
      if(localStorage.getItem('userlist') == null) {
            var userlist = [];
            var admin = {
                  username: 'admin',
                  password: 'admin',
                  fullname: 'Dương Văn Minh Vi',
                  sdt:'0772912452',
                  email:'dvmv2017@gmail.com',
                  value:100,
            }
            userlist.push(admin);
            localStorage.setItem('userlist',JSON.stringify(userlist));
      } else {
            var userlist = JSON.parse(localStorage.getItem('userlist'));
            let flag = false;
            for (let i = 0; i < userlist.length; i++) {
                  if(userlist[i].username == 'admin') {
                        flag = true;
                  }
            }
            if(flag == false) {
                  var admin = {
                        username: 'admin',
                        password: 'admin',
                        fullname: 'Dương Văn Minh Vi',
                        sdt:'0772912452',
                        email:'dvmv2017@gmail.com',
                        value:100,
                  }
                  userlist.push(admin);
                  localStorage.setItem('userlist',JSON.stringify(userlist));
            }
      }
}
// Tạo sản phẩm
function createProduct() {
      if (localStorage.getItem('product') == null){
          var productArray = [
            {productID: 100,img: "IMG/100.jpg",name: "Nam GA-700-1ADR",price: 2114000,brand: "G-SHOCK",},
            {productID: 101,img: "IMG/101.jpg",name: "Nam GA-800-1ADR",price: 990000,brand: "G-SHOCK",},
            {productID: 102,img: "IMG/103.jpg",name: "Nam GA-2100GB-1ADR ",price: 3533000,brand: "G-SHOCK",},
            {productID: 103,img: "IMG/104.jpg",name: "Nam GA-2100SB-1ADR ",price: 3316000,brand: "G-SHOCK",},
            {productID: 104,img: "IMG/105.jpg",name: "Forgotten Future Nam DW-5600FF-8DR",price: 2764000,brand: "G-SHOCK",},
            {productID: 105,img: "IMG/106.jpg",name: "Forgotten Future Nam GA-700FF-8ADR  ",price: 3178000,brand: "G-SHOCK",},
            {productID: 106,img: "IMG/107.jpg",name: "Forgotten Future  Nam GA-2200FF-8ADR",price: 4224000,brand: "G-SHOCK",},
            {productID: 108,img: "IMG/108.jpg",name: "Nữ GMA-S2100BA-4ADR",price: 2902000,brand: "G-SHOCK",},
            {productID: 109,img: "IMG/109.jpg",name: "Nam GA-2100-1A1DR",price: 2902000,brand: "G-SHOCK",},
            {productID: 110,img: "IMG/110.jpg",name: "Nam GW-A1100R-4ADR ",price: 16680000,brand: "G-SHOCK",},
            {productID: 111,img: "IMG/111.webp",name: "Cosmograph Daytona",price: 1937733000,brand: "ROLEX",},
            {productID: 112,img: "IMG/112.webp",name: "Lady-Datejust",price: 407394000,brand: "ROLEX",},
            {productID: 113,img: "IMG/113.webp",name: "RETROGRADE DAY-DATE",price: 1280000000, brand: "VACHERON", },
            {productID: 114,img: "IMG/114.webp",name: "DUAL TIME", price: 1260000000,brand: "VACHERON",},
            {productID: 115,img: "IMG/115.webp",name: "TRIPLE CALENDRIER 1942",price: 625000000, brand: "VACHERON",},
            {productID: 116,img: "IMG/116.webp",name: "QUARTZ",price: 850000000,brand: "VACHERON", },
            {productID: 117,img: "IMG/117.webp", name: "GMT-Master II",price: 410005500,brand: "ROLEX",},
            {productID: 118,img: "IMG/118.webp",name: "Sky-Dweller",price: 1062880500,brand: "ROLEX",},
            {productID: 119,img: "IMG/119.webp",name: "Day-Date 40",price: 1577346000,brand: "ROLEX",},
            {productID: 120,img: "IMG/120.webp",name: "Datejust 36",price: 221977500,brand: "ROLEX",},
            {productID: 121,img: "IMG/121.webp",name: "Air-King",price: 185416500,brand: "ROLEX",},
            {productID: 122,img: "IMG/122.webp",name: "Rolex Deapsea",price: 360387000,brand: "ROLEX",},
            {productID: 123,img: "IMG/123.webp",name: "OVERSEAS CHRONOGRAPH",price: 925000000,brand: "VACHERON",},
            {productID: 124,img: "IMG/124.webp",name: "Day-Date 36",price: 1462400000,brand: "ROLEX",},
            {productID: 125,img: "IMG/125.webp",name: "Oyster Perpetual 31",price: 141021000,brand: "ROLEX",},
            {productID: 126,img: "IMG/126.webp",name: "Datejust 31",price: 396498000,brand: "ROLEX",},
            {productID: 127,img: "IMG/127.webp",name: "RETROGRADE DAY-DATE",price: 1600000000,brand: "VACHERON",},
            {productID: 128,img: "IMG/128.jpg",name: "Nam GM-5600-1DR",price: 4352000,brand: "G-SHOCK",},
            {productID: 129,img: "IMG/129.jpg",name: "GNam GM-2100-1ADR ",price: 5803000,brand: "G-SHOCK",},
            {productID: 130,img: "IMG/130.webp",name: "Explorer 36",price: 292488000,brand: "ROLEX",},
            {productID: 131,img: "IMG/131.webp",name: "AMERICAN 1921",price: 865000000,brand: "VACHERON",},
            {productID: 132,img: "IMG/132.webp",name: "OVERSEAS SELF-WINDING",price: 1570000000,brand: "VACHERON",},
            {productID: 133,img: "IMG/133.webp",name: "SELF-WINDING",price: 329000000,brand: "VACHERON",},
            {productID: 134,img: "IMG/134.webp",name: "OVERSEAS SELF-WINDING",price: 1140000000,brand: "VACHERON",},
            {productID: 135,img: "IMG/135.webp",name: "MOON PHASE",price: 2120000000,brand: "VACHERON",},
            {productID: 136,img: "IMG/136.webp",name: "DUAL TIME",price: 800000000,brand: "VACHERON",},
            {productID: 137,img: "IMG/137.webp",name: "CO‑AXIAL MASTER CHRONOMETER",price: 147200000,brand: "OMEGA",},
            {productID: 138,img: "IMG/138.webp",name: "AQUA TERRA 150M",price: 368000000,brand: "OMEGA",},
            {productID: 139,img: "IMG/139.webp",name: "BULLHEAD ",price: 2256000000,brand: "OMEGA",},
            {productID: 140,img: "IMG/140.webp",name: "CO‑AXIAL MASTER CHRONOMETER",price: 190350000,brand: "OMEGA",},
            {productID: 141,img: "IMG/141.webp",name: "DARK SIDE OF THE MOON",price: 251450000,brand: "OMEGA",},
            {productID: 142,img: "IMG/142.webp",name: "DARK SIDE OF THE MOON",price: 175075000,brand: "OMEGA",},
            {productID: 143,img: "IMG/143.webp",name: "PLANET OCEAN 600M",price: 166850000,brand: "OMEGA",},
            {productID: 144,img: "IMG/144.webp",name: "PLOPROF 1200M",price: 296100000,brand: "OMEGA",},
            {productID: 145,img: "IMG/145.webp",name: "PRESTIGE",price: 116325000,brand: "OMEGA",},
            {productID: 146,img: "IMG/146.webp",name: "RACING ",price: 150400000,brand: "OMEGA",},
            {productID: 147,img: "IMG/147.webp",name: "TOURBILLON",price: 4551950000,brand: "OMEGA",},
          ];
          localStorage.setItem('product',JSON.stringify(productArray));
      }
  }
// Đăng xuất ADMIN
function logoutAdmin() {
      var ans = confirm('Bạn có chắc muốn đăng xuất không ?');
      if (ans == true) {
            localStorage.removeItem('userlogin');
            customAlert('Bạn đã đăng xuất thành công !','success');
            setTimeout(function(){
                  window.location.href = '/index.html'; 
            }, 500);
      } 
}
function homepageAdmin () {
      window.location.href = "/index.html"
}
var content_product_table = document.getElementById('content-product-table');
var addProductContainer = document.getElementById('addProduct-container-img');
function addProductAdmin_showIMG() {
      let addProductIMG = document.getElementById('addproduct-img');
      if(addProductIMG.value !== "") {
            addProductContainer.innerHTML = '<img id="showIMGNow"src="'+addProductIMG.value+'" alt="">';
      } else {
            addProductContainer.innerHTML = '';
      }
}
var PageProduct = document.getElementById('numberOfPageProduct') 
function showListPageProductAdmin() {
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPageAdmin(productArray).length //? = 5
      let PageProductTemp = '';
      for(let i = 0; i < pageOfProduct; i++) {
            PageProductTemp += '<button onclick="showProductAdmin('+i+'),scrollToTop()" class="numberPage">'+(i+1)+'</button>'
      }
      PageProduct.innerHTML = PageProductTemp;
}
showListPageProductAdmin();
function showProductAdmin(i) {
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPageAdmin(productArray);
      var tableProduct = '<tr><th>ID</th> <th>Ảnh</th> <th>Tên sản phẩm</th> <th>Giá</th> <th>Option</th></tr>';
      for(let j = 0; j < pageOfProduct[i].length; j++) {      
            tableProduct += '<tr><td class="table-id">'+pageOfProduct[i][j].productID+'</td><td><img src="'+pageOfProduct[i][j].img+'" alt=""></td><td class="table-name">'+pageOfProduct[i][j].name+'</td><td class="table-price">'+currency(pageOfProduct[i][j].price)+'</td><td><button class="option-btn-admin" onclick="deleteProduct('+pageOfProduct[i][j].productId+')">Xóa</button><br><button class="option-btn-admin" onclick="changeProductAdmin('+pageOfProduct[i][j].productId+')">Sửa</button></td></tr>';
      }
      content_product_table.innerHTML = tableProduct;
      /* ------ */
}
function changeProductAdmin(id) {
      let productArray = JSON.parse(localStorage.getItem('product'));

      var addProductName = document.getElementById('addproduct-name');
      var addProductImg = document.getElementById('addproduct-img');
      var addProductPrice = document.getElementById('addproduct-price');
      var i;
      for (i = 0; i < productArray.length; i++) {
            if(productArray[i].productId == id) {
                  break;
            }
      }
      addProductName.value = productArray[i].name;
      addProductPrice.value = productArray[i].price;
      addProductImg.value = productArray[i].img;
      addProductAdmin_showIMG()
}
function addProductAdmin() {
      let flag = false;
      let productArray = JSON.parse(localStorage.getItem('product'));
      
      var productId = productArray[(productArray.length) - 1].productId + 1;
      var addProductName = document.getElementById('addproduct-name');
      var addProductImg = document.getElementById('addproduct-img');
      var addProductPrice = document.getElementById('addproduct-price');
      
            if (addProductName.value == '' || addProductPrice.value == '') {
                  customAlert('Thông tin sản phẩm không hợp lệ','warning')
            } else {
                  customAlert('Thêm sản phẩm thành công','success')
                  var productTemp = {
                        productId:productId,
                        img:addProductImg.value,
                        name:addProductName.value,
                        price:parseInt(addProductPrice.value),
                  }
                  for(let i = 0; i < productArray.length; i++) {
                        if(productArray[i].img == addProductImg.value) {
                              flag = true;
                              productArray[i] = productTemp;
                              
                              localStorage.setItem('product',JSON.stringify(productArray));
                              let pageOfProduct = divideProductPage(productArray);
                              addProductAdmin_format();
                              showProductAdmin(pageOfProduct.length-1);
                        }
                  }
                  if(flag == false) {
                        productArray.push(productTemp);
                        localStorage.setItem('product',JSON.stringify(productArray));
                        let pageOfProduct = divideProductPage(productArray);
                        addProductAdmin_format();
                        showProductAdmin(pageOfProduct.length-1);
                  }
            }
}
function addProductAdmin_format() {
      var addProductName = document.getElementById('addproduct-name');
      var addProductImg = document.getElementById('addproduct-img');
      var addProductPrice = document.getElementById('addproduct-price');

      addProductName.value = '';
      addProductImg.value = '';
      addProductPrice.value = '';
      addProductAdmin_showIMG()
}
function deleteProduct(ProductIdDelete) {
      let ans = confirm("Bạn có muốn xóa sản phẩm này ?");
      if(ans == true) {
            let productArray = JSON.parse(localStorage.getItem('product'));
            for (let i = 0; i < productArray.length; i++) {
                  if(productArray[i].productId == ProductIdDelete) {
                        productArray.splice(i,1);
                  }
            }
            localStorage.setItem('product',JSON.stringify(productArray));
            customAlert('Bạn đã xóa sản phẩm thành công','success');
            showProductAdmin(0);
      }
}
function customAlert(message,type) {
	if (type =='success') {
		document.getElementById("customalert").style.backgroundColor = '#4CAF50';
	}
	if (type =='warning') {
		document.getElementById("customalert").style.backgroundColor = '#f44336';
	}
	document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function(){ x.className = x.classList.remove("show"); }, 500);
}
function currency(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' đ';
}
function opencontent(id) {
      closecontent();
      var temp = document.getElementById(id);
      temp.style.display = 'block';
}
function closecontent() {
      let product = document.getElementById('content-product-admin');
      let order = document.getElementById('content-order-admin');
      let user = document.getElementById('content-user-admin');
      product.style.display = 'none';
      order.style.display = 'none';
      user.style.display = 'none';
}
// Đơn hàng
function showBillAdmin() {
      console.log('don hang')
      if(JSON.parse(localStorage.getItem('bill')) == null) {
            let billContent = document.getElementById('content-order-admin')
            billContent.innerHTML = '<h1 style="margin: 30px auto;">Danh sách đơn hàng</h1><h4>Không có đơn hàng</h4>'
      } else {
            let billArray = JSON.parse(localStorage.getItem('bill'));
            var billTableTemp = '<tr><th>Ngày Đặt Hàng</th><th>Khách Hàng</th><th>Giá</th><th>Trạng Thái</th><th>Quản lý</th></tr>';

            for (let i = 0; i < billArray.length; i++) {
                  billTableTemp += '<tr onclick="onclickTagTr(event,'+billArray[i].id+')"><td class="table-td">'+billArray[i].time+'</td><td class="table-name table-td">'+billArray[i].customer.fullname+'</td><td class="table-price table-td">'+currency(billArray[i].totalprice)+'</td>'
                  if(billArray[i].status == "Chưa xử lý") {
                        billTableTemp +='<td style="color:red;" class="table-td">'+billArray[i].status+'</td>'
                  } else {
                        billTableTemp +='<td style="color:blue;" class="table-td">'+billArray[i].status+'</td>'
                  }
                  billTableTemp += '<td class="delete-bill-btn">Xóa</td></tr>';
            }
            let billContent = document.getElementById('content-order-admin')
            billContent.innerHTML = '<h1 style="margin: 30px auto;">Danh sách đơn hàng</h1><table border="1" id="content-order-table">'+billTableTemp+'</table>';
      }
}
function onclickTagTr(event,id) {
      if(event.target.tagName == "TD" && event.target.classList.contains('delete-bill-btn')) {
            removeItemBill(id);
      } else {
            showBillDetail(id);
      }
}
function removeItemBill(id) {
      let ans = confirm("Bạn có muốn xóa đơn hàng này ?");
      if(ans == true) {
            let billArray = JSON.parse(localStorage.getItem('bill'));
            let i ;
            for (i = 0; i < billArray.length; i++) {
                  if(billArray[i].id == id) 
                        billArray.splice(i,1);
            }
            localStorage.setItem('bill',JSON.stringify(billArray));
            showBillAdmin();
      }
}
let modal_bill_detail = document.getElementById('modal-billDetail');
function showBillDetail(id) {
      let billArray = JSON.parse(localStorage.getItem('bill'));
      let billDetail = document.getElementById('billDetail');
      /* let heightPage = document.body.offsetHeight;
      modal_bill_detail.style.height = (heightPage+1)+ 'px'; */

      modal_bill_detail.style.display = 'block';
      billDetail.style.display = 'block';
      var i;
      for (i = 0; i < billArray.length; i++) {
            if(billArray[i].id == id) {
                  break;
            }
      }
      let billDetailTemp = '<button id="close_billdetail" onclick="closeBillDetail()" type="button"><i class="fa-solid fa-xmark"></i></button><h2>Chi tiết đơn hàng</h2><h5>Thông tin đơn hàng :</h5><p>'+billArray[i].info+'</p><h5>Tên khách hàng :</h5><p>'+billArray[i].customer.fullname+'</p><h5>Số điện thoại :</h5><p>'+billArray[i].customer.phone+'</p><h5>Tổng giá tiền :</h5><p>'+currency(billArray[i].totalprice)+'</p><h5>Tình trạng :</h5><p id="billdetail-status">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Đã xử lý</button></p>'
      billDetail.innerHTML = billDetailTemp;
      billDetailcolorStatus(i)
}
function billDetailcolorStatus(i) {
      let billArray = JSON.parse(localStorage.getItem('bill'));
      let billdetailStatus = document.getElementById('billdetail-status');
      if(billArray[i].status == "Chưa xử lý") {
            billdetailStatus.style.color = "red"; 
      } else {
            billdetailStatus.style.color = 'blue'; 
      }
}
function billComplete(i) {
      let billArray = JSON.parse(localStorage.getItem('bill'));
      if(billArray[i].status == 'Chưa xử lý') {
            billArray[i].status = "Đã xử lý";
            localStorage.setItem('bill',JSON.stringify(billArray));
            showBillAdmin();
            let billdetailStatus = document.getElementById('billdetail-status');
            billdetailStatus.innerHTML = '<p id="+billdetail-status+">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Chưa xử lý</button></p>'
            billDetailcolorStatus(i)
      } else {
            billArray[i].status = "Chưa xử lý";
            localStorage.setItem('bill',JSON.stringify(billArray));
            showBillAdmin();
            let billdetailStatus = document.getElementById('billdetail-status');
            billdetailStatus.innerHTML = '<p id="+billdetail-status+">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Đã xử lý</button></p>'
            billDetailcolorStatus(i)
      }
}
function closeBillDetail() {
      let billDetail = document.getElementById('billDetail');
      billDetail.style.display = 'none';
      modal_bill_detail.style.display = 'none';
}
// quản lý khách hàng
var manageUser = document.getElementById('content-user-admin');
function showUserList() {
      let userlist = JSON.parse(localStorage.getItem('user'));
      let manageUser = document.getElementById('content-user-admin');
      
      let manageUserTemp = '<tr><th>STT</th><th>Họ tên khách hàng</th><th>Tên đăng nhập</th><th>Mật khẩu</th><th>Ngày đăng ký</th><th>Xóa</th></tr>'

      for (let i = 1; i < userlist.length; i++) {
            manageUserTemp += '<tr><td>'+(i)+'</td><td>'+userlist[i].fullname+'</td><td>'+userlist[i].username+'</td><td>'+userlist[i].password+'</td><td>'+userlist[i].datesignup+'</td><td><button id="removeUser" onclick="removeUser('+i+')">Xóa</button></td></tr>'
      }
      manageUser.innerHTML = '<h1 style="margin: 30px auto;">Danh sách khách hàng</h1><table border="1" id="content-order-table">'+manageUserTemp+'</table>'
}
function removeUser(i) {
      let ans = confirm('Bạn có chắc muốn xóa người dùng này ?');
      if(ans == true) {
            let userlist = JSON.parse(localStorage.getItem('userlist'));
            userlist.splice(i,1);
            localStorage.setItem('userlist',JSON.stringify(userlist));
            customAlert('Bạn đã xóa sản phẩm thành công','success');
            showUserList();
      }
}
// hàm chia trang sản phẩm
function divideProductPageAdmin(array) {
      let pageOfProduct = [];
      let productArray = array;
      let pageOfProductTemp = []
      let dem = 0;
      for(let i = 0; i < productArray.length; i++) {
            pageOfProductTemp.push(productArray[i]);
            dem++;
            if(dem == 10) {
                  pageOfProduct.push(pageOfProductTemp);
                  pageOfProductTemp = [];
                  dem = 0;
            }
      }
      pageOfProduct.push(pageOfProductTemp); //? thêm những sản phẩm còn dư khi tạo trang (VD: 22sp : 10 = 2 dư 2)
      /* console.log(pageOfProduct); */
      return pageOfProduct;
}
function scrollToTop() {
      window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth' // Điều này làm cho cuộn mượt hơn
          });
}