import ProgrammingLanguages, { ProgrammingLanguagesInput, ProgrammingLanguagesOutput } from '../../models/programmingLanguages';
const programmingLanguages = {
    async create(payload: ProgrammingLanguagesInput): Promise<ProgrammingLanguagesOutput> {
        const programmingLanguages = await ProgrammingLanguages.create(payload);
        return programmingLanguages;
    },
    async update(id: number, payload: Partial<ProgrammingLanguagesInput>): Promise<ProgrammingLanguagesOutput> {
        const programmingLanguages = await ProgrammingLanguages.findByPk(id);
        if (!programmingLanguages) {
            throw new Error('not found');
        }
        const updatedProgrammingLanguages = await (programmingLanguages as ProgrammingLanguages).update(payload);
        return updatedProgrammingLanguages;
    },
    async getById(id: number): Promise<ProgrammingLanguagesOutput> {
        const programmingLanguages = await ProgrammingLanguages.findByPk(id);
        if (!programmingLanguages) {
            throw new Error('not found');
        }
        return programmingLanguages;
    },
    async deleteById(id: number): Promise<boolean> {
        const deletedProgrammingLanguagesCount = await ProgrammingLanguages.destroy({
            where: { id }
        });
        return !!deletedProgrammingLanguagesCount;
    }
    ,
    async getAll(): Promise<ProgrammingLanguagesOutput[]> {
        return await ProgrammingLanguages.findAll();
    }
};

export default programmingLanguages;