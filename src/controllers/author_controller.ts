import { Request, Response } from "express";
import * as authorService from "../services/author";

export const getAuthors = async (req: Request, res: Response) => {
	const authors = await authorService.getAuthors();
	res.json(authors).status(200);
};

export const getAuthor = async (req: Request, res: Response) => {
	const authorId = req.params.authorId;
	const author = await authorService.getAuthor(Number(authorId));

	if (author) {
		res.json(author).status(200);
	} else {
		res.status(404).json("Not found");
	}
};

export const saveAuthor = async (req: Request, res: Response) => {
	const authorToBeSaved = req.body;
	try {
		const author = await authorService.saveAuthor(authorToBeSaved);
		res.status(201).json(author);
	} catch (error) {
		res.status(400).json({ message: (error as Error).message });
	}
};

export const updateAuthor = async (req: Request, res: Response) => {
	const authorUpdateData = req.body;
	const authorId = Number.parseInt(req.params.authorId);
	try {
		const author = await authorService.updateAuthor(authorId, authorUpdateData);
		res.status(204).json(author);
	} catch (error) {
		res.status(400).json({ message: (error as Error).message });
	}
};

export const deleteAuthor = async (req: Request, res: Response) => {
	const authorId = Number.parseInt(req.params.authorId);

	if (Number.isNaN(authorId) || !authorId) {
		res.status(400).json({ message: "Invalid Author Id" });
	} else {
		try {
			const result = await authorService.deleteAuthor(authorId);
			res.status(204).json(result);
		} catch (error) {
			res.status(400).json({ message: (error as Error).message });
		}
	}

	// await authorService
	// 	.deleteAuthor(authorId)
	// 	.then((author) => {
	// 		res.status(204).json(author);
	// 	})
	// 	.catch((error) =>
	// 		res.status(400).json({ message: (error as Error).message })
	// 	);
};
