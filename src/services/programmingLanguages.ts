import programmingLanguagesDal from '../db/dal/programmingLanguages';
import { ProgrammingLanguagesInput, ProgrammingLanguagesOutput } from '../models/programmingLanguages';

const programmingLanguages = {
  async getAll() {
    return programmingLanguagesDal.getAll();
  },
  async getById(id: number): Promise<ProgrammingLanguagesOutput> {
    return programmingLanguagesDal.getById(id);
  },
  async create(payload: ProgrammingLanguagesInput): Promise<ProgrammingLanguagesOutput> {
    return programmingLanguagesDal.create(payload);
  },
  async update(id: number, payload: Partial<ProgrammingLanguagesInput>): Promise<ProgrammingLanguagesOutput> {
    return programmingLanguagesDal.update(id, payload);
  },
  async remove(id: number): Promise<boolean> {
    return programmingLanguagesDal.deleteById(id);
  }
};

export default programmingLanguages;
