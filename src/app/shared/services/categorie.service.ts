import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  categories: any[] = [];
  playerName: string = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
    this.playerName = this.authService.user?.username || '';
    console.log(this.playerName);
  }

  getCategories() {
    this.http.get('http://localhost:3000/categories').subscribe((categories: any) => {
      for (const category of categories) {
        this.categories.push({
          id: category.id,
          categoryLabel: category.categoryLabel
        });
      }
    });
  }

  getCategorieById(id: number) {
    let temp = this.categories.find((c) => c.id === id);
    console.log(temp);
    return temp;
  }

  goToQuizCategory(categoryId: number) {
    this.router.navigate([`categorie/${categoryId}/quizz`]);
  }

}
