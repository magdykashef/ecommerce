import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxStarRatingModule } from "ngx-star-rating";
import { ProductDetailsRoutingModule } from "./product-details-routing.module";
import { ProductDetailsComponent } from "./product-details.component";

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, ProductDetailsRoutingModule, NgxStarRatingModule],
})
export class ProductDetailsModule {}
