import "dotenv/config";
import app from "./app";

import indexRoutes from "./router/index.routes";

app.use(indexRoutes);

app.listen(process.env.APP_PORT);
console.log(`Listen on port ${process.env.APP_PORT}`);
