/*
  Warnings:

  - You are about to drop the column `owner` on the `Wagon` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Wagon` table. All the data in the column will be lost.
  - Added the required column `barPackage` to the `Wagon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `capacity` to the `Wagon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volume` to the `Wagon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Wagon" DROP COLUMN "owner",
DROP COLUMN "type",
ADD COLUMN     "barPackage" DECIMAL(10,3) NOT NULL,
ADD COLUMN     "capacity" DECIMAL(10,3) NOT NULL,
ADD COLUMN     "ownerId" INTEGER,
ADD COLUMN     "typeId" INTEGER,
ADD COLUMN     "volume" DECIMAL(10,3) NOT NULL;

-- CreateTable
CREATE TABLE "WagonType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "WagonType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WagonOwner" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "WagonOwner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsideStation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "InsideStation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutsideStation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "OutsideStation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cargo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nationalCode" TEXT NOT NULL,
    "internationalCode" TEXT NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WagonType_name_key" ON "WagonType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "WagonOwner_name_key" ON "WagonOwner"("name");

-- CreateIndex
CREATE UNIQUE INDEX "InsideStation_name_key" ON "InsideStation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "OutsideStation_name_key" ON "OutsideStation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "OutsideStation_code_key" ON "OutsideStation"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Cargo_name_key" ON "Cargo"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Cargo_nationalCode_key" ON "Cargo"("nationalCode");

-- CreateIndex
CREATE UNIQUE INDEX "Cargo_internationalCode_key" ON "Cargo"("internationalCode");

-- CreateIndex
CREATE INDEX "Wagon_typeId_idx" ON "Wagon"("typeId");

-- CreateIndex
CREATE INDEX "Wagon_ownerId_idx" ON "Wagon"("ownerId");

-- AddForeignKey
ALTER TABLE "Wagon" ADD CONSTRAINT "Wagon_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "WagonType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wagon" ADD CONSTRAINT "Wagon_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "WagonOwner"("id") ON DELETE SET NULL ON UPDATE CASCADE;
