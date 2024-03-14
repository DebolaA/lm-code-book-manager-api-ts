import { CONFIG } from "./../config";
import { Dialect, Sequelize } from "sequelize";

// TODO: This should be external config
let connectionStr = "";
let sequel;

if (process.env.NODE_ENV !== "test") {
	connectionStr = `postgres://${CONFIG.dbUserName}:${CONFIG.dbPassword}@localhost:${CONFIG.dbPort}/${CONFIG.dbName}`;
	sequel = new Sequelize(
		CONFIG.dbName ?? "MISSING_DB_NAME_CONFIG",
		CONFIG.dbUserName ?? "MISSING_DB_USERNAME_CONFIG",
		CONFIG.dbPassword ?? "MISSING_DB_PASSWORD_CONFIG",
		{
			host: CONFIG.dbHost ?? "MISSING_DB_HOST_CONFIG_config",
			port: parseInt(CONFIG.dbPort as string) ?? "MISSING_DB_PORT_CONFIG",
			dialect: (CONFIG.dbDialect as Dialect) ?? "postgres",
			logging: (...msg) => console.log(msg),
		}
	);
} else {
	connectionStr = "sqlite::memory:";
	sequel = new Sequelize(connectionStr);
}

export let sequelizeConnection = sequel;
