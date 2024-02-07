import { DataTypes, Model, Optional } from 'sequelize';
import db from '../db/db';
interface ProgrammingLanguagesAttributes {
    id: number;
    name: string;
    released_year: string;
    githut_rank: string;
    pypl_rank: string;
    tiobe_rank: string;
}
export type ProgrammingLanguagesInput = Optional<ProgrammingLanguagesAttributes, 'id'>
export type ProgrammingLanguagesOutput = Required<ProgrammingLanguagesAttributes>

class ProgrammingLanguages extends Model<ProgrammingLanguagesAttributes, ProgrammingLanguagesInput> implements ProgrammingLanguagesAttributes {
    public id!: number;
    public name!: string;
    public released_year!: string;
    public githut_rank!: string;
    public pypl_rank!: string;
    public tiobe_rank!: string;
}

ProgrammingLanguages.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    },
    released_year: {
        type: DataTypes.STRING
    },
    pypl_rank: {
        type: DataTypes.STRING
    },
    tiobe_rank: {
        type: DataTypes.STRING
    },
    githut_rank: {
        type: DataTypes.STRING
    }
}, {
    sequelize: db,
    modelName: 'programming_languages',
    timestamps:false
});

export default ProgrammingLanguages;