
export type Book = {
    id: number,
    title: string,
    author: string,
    year: string
  };

export enum ActionType {
    ADD_BOOK = 'ADD_BOOK',
    DELETE_BOOK = 'DELETE_BOOK',
    EDIT_BOOK = 'EDIT_BOOK'
  }