import {Author} from './author';
import {Category} from './category';

export class Book {
  bookId: number;
  title: string;
  description: string;
  imgUrl: string;
  authorEntity: Author;
  categories: Category[];

}
