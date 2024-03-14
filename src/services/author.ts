import { Author } from "../models/book";

export const getAuthors = async () => {
	return Author.findAll();
};

export const getAuthor = async (authorId: number) => {
	return Author.findOne({
		where: { authorId },
	});
};

export const saveAuthor = async (author: Author) => {
	return Author.create<Author>(author);
};

export const updateAuthor = async (authorId: number, author: Author) => {
	return Author.update(author, {
		where: {
			authorId,
		},
	});
};

export const deleteAuthor = async (authorId: number) => {
	return Author.destroy({
		where: {
			authorId,
		},
	});
};
