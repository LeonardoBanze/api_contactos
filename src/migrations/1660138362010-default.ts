import { MigrationInterface, QueryRunner } from "typeorm";

export class default1660138362010 implements MigrationInterface {
    name = 'default1660138362010'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phone" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
    }

}
