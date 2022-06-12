import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  heading = 'all products';
  product_id: string;
  products: Product[];
  queryParam: string;
  currentPage = 1;
  searchKeyword = '';
  category_id = '';
  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParam) => {
      this.searchKeyword = queryParam.searchKeyword || '';
      this.category_id = queryParam.category_id || '';
    });

    if (!this.searchKeyword && !this.category_id) {
      this.products = [
        {
          id: '1',
          name: 'Andora Chest Flap Pockets Solid Buttoned Shirt - Olive',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
        {
          id: '1',
          name: 'jacket',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          price: 400,
          discount: 50,
          quantity: 50,
          category_id: '5',
          category_name: 'cloths',
          images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          ],
          reviews: [{
            user_id: '1',
            user_name: 'ahmed',
            rating: 3,
            comment: 'very good material'
          }],
        },
      ];
    }

    if (this.searchKeyword !== '') {
      //TODO get products by category
      /*
      this.category_id = '';
      this.subscriptions.push(
      this.productService.searchProducts(this.searchKeyword).subscribe(
        (products: Product[]) => this.products = products,
        (error: string) => redirect to error page
        )
      );
      */
    }

    if (this.category_id !== '') {
      //TODO get products by searchKeyword
      /*
      this.searchKeyword = '';
      this.subscriptions.push(
        this.productService.searchProducts(this.category_id).subscribe(
        (products: Product[]) => this.products = products,
        (error: string) => redirect to error page
        )
      );
      */
    }
  }

  ellipsisText(text: string) {
    return text.substring(0, 50) + '...';
  }

  onAddToCardClick(product_id: string) {
    this.router.navigate(['/product-details', product_id]);
  }
}
