import { Optional } from 'sequelize/types';

export type CreateProgrammingLanguagesDTO = {
    name: string;
    released_year: string;
    githut_rank: string;
    pypl_rank: string;
    tiobe_rank: string;
}

export type UpdateProgrammingLanguagesDTO = Optional<CreateProgrammingLanguagesDTO, 'name'>