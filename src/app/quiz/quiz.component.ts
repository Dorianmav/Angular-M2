import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../shared/services/quiz.service";
import {CategorieService} from "../shared/services/categorie.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  @Input() category: any;
  categoryId: number = 0;
  categorieName = "";

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private categorieService: CategorieService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizService.playerName = params['playerName'];
      this.quizService.categoryId = params['categoryId'];
      this.playerName = params['playerName'];
      this.categoryId = params['categoryId'];
    });

    this.categorieName = this.categorieService.getCategorieById(this.categoryId)?.categoryLabel || '';
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
