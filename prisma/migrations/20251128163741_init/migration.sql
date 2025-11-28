-- CreateTable
CREATE TABLE "Wagon" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "Wagon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Wagon_number_key" ON "Wagon"("number");
