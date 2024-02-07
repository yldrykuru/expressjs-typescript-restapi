import { ProgrammingLanguagesOutput } from '../programmingLanguages';

export const toProgrammingLanguages = (programmingLanguage: ProgrammingLanguagesOutput): ProgrammingLanguagesOutput => {
    return {
        id: programmingLanguage.id,
        name: programmingLanguage.name,
        released_year: programmingLanguage.released_year,
        githut_rank: programmingLanguage.githut_rank,
        pypl_rank: programmingLanguage.pypl_rank,
        tiobe_rank: programmingLanguage.tiobe_rank
    };
};