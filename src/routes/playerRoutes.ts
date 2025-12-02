import { Router } from "express"; //Gerenciador de rotas do Express
import { getPlayer } from "../controllers/playersController";

const router = Router();

router.get("/players", getPlayer)

export default router; //Exportação do router para ser usado em outro arquivo