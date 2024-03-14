import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	DataTypes,
	ForeignKey,
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

export class Author extends Model<
	InferAttributes<Author>,
	InferCreationAttributes<Author>
> {
	declare authorId: CreationOptional<number>;
	declare firstName: string;
	declare lastName: string;
	declare addressId: CreationOptional<number>;
}

export class Address extends Model<
	InferAttributes<Address>,
	InferCreationAttributes<Address>
> {
	declare addressId: ForeignKey<Author["addressId"]>;
	declare address: string;
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

Author.init(
	{
		authorId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		addressId: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	},
	{
		modelName: "Author",
		tableName: "Author",
		timestamps: false,
		sequelize: sequelizeConnection,
	}
);

Address.init(
	{
		addressId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		modelName: "Address",
		tableName: "Address",
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
