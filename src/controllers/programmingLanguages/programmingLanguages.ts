import { Request, Response } from 'express';
import programmingLanguages from '../../services/programmingLanguages';
import * as mapper from '../../models/_mapper/mapper';

const programmingLanguagesController = {
  async autoGenerator(req: Request, res: Response) {
    for (let index = 0; index < 10000; index++) {
      await programmingLanguages.create({
        name: (Math.random() + 1).toString(36).substring(7),
        released_year: (Math.random() + 1).toString(36).substring(7),
        githut_rank: (Math.random() + 1).toString(36).substring(7),
        pypl_rank: (Math.random() + 1).toString(36).substring(7),
        tiobe_rank: (Math.random() + 1).toString(36).substring(7)
      });
    }
    res.json({ job: 'done' });
  },
  async get(req: Request, res: Response) {
    try {
      res.json((await programmingLanguages.getAll()).map(mapper.toProgrammingLanguages));
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.json(err.message);
      }
    }
  },
  async getById(req: Request, res: Response) {
    try {
      res.json(mapper.toProgrammingLanguages(await programmingLanguages.getById(Number(req.params.id))));
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.json(err.message);
      }
    }
  },
  async create(req: Request, res: Response) {
    try {
      res.json(mapper.toProgrammingLanguages(await programmingLanguages.create(req.body)));
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.json(err.message);
      }
    }
  },

  async update(req: Request, res: Response) {
    try {
      res.json(mapper.toProgrammingLanguages(await programmingLanguages.update(Number(req.params.id), req.body)));
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.json(err.message);
      }
    }
  },

  async remove(req: Request, res: Response) {
    try {
      res.json(await programmingLanguages.remove(Number(req.params.id)));
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.json(err.message);
      }
    }
  }
};

export default programmingLanguagesController;
