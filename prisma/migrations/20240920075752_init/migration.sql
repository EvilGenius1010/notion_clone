-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Pages" (
    "title" TEXT,
    "pageid" TEXT NOT NULL,
    "userOwner" TEXT NOT NULL,
    "content" TEXT,

    CONSTRAINT "Pages_pkey" PRIMARY KEY ("pageid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Pages" ADD CONSTRAINT "Pages_userOwner_fkey" FOREIGN KEY ("userOwner") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
