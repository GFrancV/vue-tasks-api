import { Router } from "express";
import pkg from "../../package.json";

const router = Router();

router.get("/", (req, res) => {
	res.json({
		name: pkg.name,
		description: pkg.description,
		version: `v${pkg.version}`,
		author: pkg.author,
	});
});

export default router;
