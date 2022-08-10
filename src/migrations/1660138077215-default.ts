import { MigrationInterface, QueryRunner } from "typeorm";

export class default1660138077215 implements MigrationInterface {
    name = 'default1660138077215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
