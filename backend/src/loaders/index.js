import expressLoader from "./express";
import mariadb from "./mariadb";
import Logger from "./logger";
import swaggerLoader from "./swagger";

export default async function (app) {
	try {
		const conn = await mariadb.getConnection();
		Logger.info("💿DB Loaded and Pool created📀");
	} catch {
		Logger.error("💣Cannot Load DB and Create Pool");
	}

	expressLoader(app);
	Logger.info("🚅Express loaded");

	swaggerLoader(app);

	// more loaders

	// ... Initialize agenda.js
	// ... or Redis, or Whatedver
}
