import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuiz } from '../models/IQuiz';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuiz(url: string) {
    return this.http.get<IQuiz>(url);
  }

  getAllQuizData() {
    return [
      { id: 1, classId: 1, name: 'Giữa kỳ 1 - Đề 1', data: 'data/lop1/giuaky1-de1.json' },
      { id: 2, classId: 1, name: 'Giữa kỳ 1 - Đề 2', data: 'data/lop1/giuaky1-de2.json' },
      { id: 3, classId: 1, name: 'Cuối kỳ 1 - Đề 1', data: 'data/lop1/cuoiky1-de1.json' },
      { id: 4, classId: 1, name: 'Giữa kỳ 2 - Đề 1', data: 'data/lop1/giuaky2-de1.json' },
      { id: 5, classId: 1, name: 'Cuối kỳ 2 - Đề 1', data: 'data/lop1/cuoiky2-de1.json' },
      { id: 6, classId: 2, name: 'Giữa kỳ 1 - Đề 1', data: 'data/lop2/giuaky1-de1.json' },
      { id: 7, classId: 2, name: 'Cuối kỳ 1 - Đề 1', data: 'data/lop2/cuoiky1-de1.json' },
      { id: 8, classId: 2, name: 'Giữa kỳ 2 - Đề 1', data: 'data/lop2/giuaky2-de1.json' },
      { id: 9, classId: 2, name: 'Cuối kỳ 2 - Đề 1', data: 'data/lop2/cuoiky2-de1.json' },
      { id: 10, classId: 3, name: 'Giữa kỳ 1 - Đề 1', data: 'data/lop3/giuaky1-de1.json' },
      { id: 11, classId: 3, name: 'Cuối kỳ 1 - Đề 1', data: 'data/lop3/cuoiky1-de1.json' },
      { id: 12, classId: 3, name: 'Giữa kỳ 2 - Đề 1', data: 'data/lop3/giuaky2-de1.json' },
      { id: 13, classId: 3, name: 'Cuối kỳ 2 - Đề 1', data: 'data/lop3/cuoiky2-de1.json' },
      { id: 14, classId: 4, name: 'Giữa kỳ 1 - Đề 1', data: 'data/lop4/giuaky1-de1.json' },
      { id: 15, classId: 4, name: 'Cuối kỳ 1 - Đề 1', data: 'data/lop4/cuoiky1-de1.json' },
      { id: 16, classId: 4, name: 'Giữa kỳ 2 - Đề 1', data: 'data/lop4/giuaky2-de1.json' },
      { id: 17, classId: 4, name: 'Cuối kỳ 2 - Đề 1', data: 'data/lop4/cuoiky2-de1.json' },
      { id: 18, classId: 5, name: 'Giữa kỳ 1 - Đề 1', data: 'data/lop5/giuaky1-de1.json' },
      { id: 19, classId: 5, name: 'Cuối kỳ 1 - Đề 1', data: 'data/lop5/cuoiky1-de1.json' },
      { id: 20, classId: 5, name: 'Giữa kỳ 2 - Đề 1', data: 'data/lop5/giuaky2-de1.json' },
      { id: 21, classId: 5, name: 'Cuối kỳ 2 - Đề 1', data: 'data/lop5/cuoiky2-de1.json' },
    ];
  }

  getQuizDataById(id: number) {
    return this.getAllQuizData().find(item => item.id === id);
  }
}
