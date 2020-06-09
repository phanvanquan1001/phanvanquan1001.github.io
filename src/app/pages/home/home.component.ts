import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { faBook, faCalculator, faGraduationCap, faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faBook = faBook;
  faCalculator = faCalculator;
  faGraduationCap = faGraduationCap;
  faFileAlt = faFileAlt;
  listOfQuiz1: any[];
  listOfQuiz2: any[];
  listOfQuiz3: any[];
  listOfQuiz4: any[];
  listOfQuiz5: any[];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.listOfQuiz1 = this.quizService.getAllQuizData().filter(item => item.classId === 1);
    this.listOfQuiz2 = this.quizService.getAllQuizData().filter(item => item.classId === 2);
    this.listOfQuiz3 = this.quizService.getAllQuizData().filter(item => item.classId === 3);
    this.listOfQuiz4 = this.quizService.getAllQuizData().filter(item => item.classId === 4);
    this.listOfQuiz5 = this.quizService.getAllQuizData().filter(item => item.classId === 5);
  }

}
