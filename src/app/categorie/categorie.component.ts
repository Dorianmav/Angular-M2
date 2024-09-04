import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../shared/services/categorie.service";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories: any[] = this.categoryService.categories;
  selectedCategory: any;
  filteredCategories: any[] = this.categories;
  searchCategory = '';

  constructor(private categoryService: CategorieService) {
  }

  ngOnInit() {
    this.categoryService.getCategories();
    console.log(this.filteredCategories);
  }

  goToQuizCategory(categoryId: number) {
    this.categoryService.goToQuizCategory(categoryId);
    //this.selectedCategory = this.categoryService.getCategorieById(categoryId);
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
