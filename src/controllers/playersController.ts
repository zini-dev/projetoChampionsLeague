import { Request, Response } from "express"; //Importação do express
import { getPlayerService } from "../services/playersService";

export const getPlayer = async (req: Request, res: Response) => {

        const data = await getPlayerService();

        res.status(200).json(data)
    };