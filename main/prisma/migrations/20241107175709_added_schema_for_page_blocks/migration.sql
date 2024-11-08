-- DropIndex
DROP INDEX "User_email_key";

-- CreateTable
CREATE TABLE "PageSlices" (
    "blockid" TEXT NOT NULL,
    "pageid" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "content" TEXT,

    CONSTRAINT "PageSlices_pkey" PRIMARY KEY ("blockid")
);

-- CreateIndex
CREATE UNIQUE INDEX "PageSlices_pageid_order_key" ON "PageSlices"("pageid", "order");

-- AddForeignKey
ALTER TABLE "PageSlices" ADD CONSTRAINT "PageSlices_pageid_fkey" FOREIGN KEY ("pageid") REFERENCES "Pages"("pageid") ON DELETE RESTRICT ON UPDATE CASCADE;
