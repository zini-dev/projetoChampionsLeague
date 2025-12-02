import { Request, Response } from "express"; //Importação do express

export const getPlayer = (req: Request, res: Response) => {
        res.status(200).json({ player: "Neymar Jr" })
    };