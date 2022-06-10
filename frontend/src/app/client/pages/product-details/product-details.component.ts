import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent {
  count = 1;
  bigArr = [];
  // new = localStorage.setItem("cart", null);
  product = {
    _id: 1,
    _name: "Sneakers",
    _category: "SNEAKER COMPANY",
    _price: 300,
    _discount: 50,
    _rating: 4.5,
    _description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    quantity: this.count,
    images: [
      { _image: "assets/images/image-product-1.jpg" },
      { _image: "assets/images/image-product-2.jpg" },
      { _image: "assets/images/image-product-3.jpg" },
      { _image: "assets/images/image-product-4.jpg" },
    ],
  };

  minus() {
    this.count <= 1 ? (this.count = 1) : (this.count -= 1);
    this.product.quantity = this.count;
  }
  plus() {
    this.count += 1;
    this.product.quantity = this.count;
  }
  add() {
    if (this.count > 0) {
      if (JSON.parse(localStorage.getItem("cart")) === null) {
        this.bigArr.push(this.product);
        localStorage.setItem("cart", JSON.stringify(this.bigArr));
      }
      //  else {
      //   let newId = this.product._id;
      //   let newcart = JSON.parse(localStorage.getItem("cart"));
      //   newcart.forEach((e) => {
      //     if (e._id != newId) {
      //       newcart.push(this.product);
      //       localStorage.setItem("cart", JSON.stringify(newcart));
      //     }
      //   });
      // }
    }
  }
  changeImg(props) {
    document.getElementById("bigimg").setAttribute("src", props._image);
  }
}
