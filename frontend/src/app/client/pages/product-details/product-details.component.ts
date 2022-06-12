import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements  OnInit {
  // @ViewChild("showComment") showComment: ElementRef<HTMLDivElement>;
  // ngAfterViewInit() {} AfterViewInit,

  count = 1;
  bigArr = [];
  selectedImage = "";

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
    reviews: [
      {
        user_id: 20,
        user_name: "Ahmed",
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium",
      },
      {
        user_id: 20,
        user_name: "Mahmoud",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium",
      },
    ],
  };

  ngOnInit(): void {
    this.selectedImage = this.product.images[0]._image;
  }

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

  // submitFeedBack(comment: string) {
  //   // if (comment === "") return;
  //   this.showComment.nativeElement.classList.replace("d-none", "d-block");
  // }
}
