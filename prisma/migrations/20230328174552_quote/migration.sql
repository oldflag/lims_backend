-- CreateTable
CREATE TABLE "Quote" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "collaboratorId" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "poNum" TEXT,
    "memo" TEXT,
    "quoteDate" TIMESTAMPTZ(0),
    "invoiceNum" TEXT,
    "confirmNum" TEXT,
    "lineNum" TEXT,
    "catalogNum" TEXT,
    "serialNum" TEXT,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_collaboratorId_fkey" FOREIGN KEY ("collaboratorId") REFERENCES "Collaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
