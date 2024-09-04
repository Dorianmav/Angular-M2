import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../shared/services/categorie.service";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories: any[] = this.categoryService.categories;

  constructor(private categoryService: CategorieService) {
  }

  ngOnInit() {
    this.categoryService.getCategories();

  }

  goToQuizCategory(categoryId: number) {
    this.categoryService.goToQuizCategory(categoryId);
  }
}
