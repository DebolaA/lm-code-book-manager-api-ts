import { saveAuthor, updateAuthor } from "./../services/author";
import express from "express";
import * as booksController from "../controllers/books_controller";
import * as authorController from "../controllers/author_controller";

export const router = express.Router();
router.get("/books", booksController.getBooks);
router.get("/books/:bookId", booksController.getBook);
router.post("/books", booksController.saveBook);

// User Story 4 - Update Book By Id Solution
router.put("/books/:bookId", booksController.updateBook);

// User Story 5 - Delete Book By Id Solution
router.delete("/books/:bookId", booksController.deleteBook);

//User Story 6 - Get all Authors form the Authors table
router.get("/authors", authorController.getAuthors);
router.get("/authors/:authorId", authorController.getAuthor);
router.post("/authors", authorController.saveAuthor);
router.put("/authors/:authorId", authorController.updateAuthor);
router.delete("/authors/:authorId", authorController.deleteAuthor);
