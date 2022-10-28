-- AlterTable
ALTER TABLE "comments" ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "deleted_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "posts" ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "deleted_at" DROP NOT NULL;
