import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	DataTypes,
} from "sequelize";
import { sequelizeConnection } from "../database/database";

export class Book extends Model<
	InferAttributes<Book>,
	InferCreationAttributes<Book>
> {
	declare bookId: CreationOptional<number>;
	declare title: string;
	declare author: string;
	declare description: string;
}

Book.init(
	{
		bookId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		author: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		modelName: "Book",
		tableName: "Books",
		timestamps: false,
		sequelize: sequelizeConnection,
	}
);

export const testDatabaseConnection = async () => {
	try {
		console.log("Gonna authenticate"); // <== to make sure console.log is working and not overrided!
		await sequelizeConnection.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};
