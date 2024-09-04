import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../shared/services/categorie.service";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories: any[] = this.categoryService.categories;
  filteredCategories: any[] = this.categories;
  searchCategory = '';

  constructor(private categoryService: CategorieService) {
  }

  ngOnInit() {
    this.categoryService.getCategories();

  }

  goToQuizCategory(categoryId: number) {
    this.categoryService.goToQuizCategory(categoryId);
  }

  searchCategoryByName() {
    console.log(this.searchCategory)
    this.filteredCategories = this.categories.filter(
      (category) => category.categoryLabel.toLowerCase().includes(this.searchCategory.toLowerCase())
    );
  }

  clearSearch() {
    this.searchCategory = '';
    this.filteredCategories = this.categories;
  }
}
