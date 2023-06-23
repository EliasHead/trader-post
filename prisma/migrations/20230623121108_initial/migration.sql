-- CreateTable
CREATE TABLE "competitions" (
    "competition_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "competition_name" TEXT NOT NULL,
    "season_name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "teams" (
    "team_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "team_name" TEXT NOT NULL,
    "team_country" TEXT NOT NULL,
    "team_initials" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "matches" (
    "match_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "match_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "home_goals" INTEGER NOT NULL DEFAULT 0,
    "visitor_goals" INTEGER NOT NULL DEFAULT 0,
    "odd" REAL,
    "strategy" TEXT,
    "result" TEXT,
    "review" TEXT,
    "stake" REAL,
    "round" INTEGER NOT NULL DEFAULT 0,
    "leverageId" INTEGER,
    "competition_id" INTEGER,
    "home_team_id" INTEGER NOT NULL,
    "visitor_team_id" INTEGER NOT NULL,
    CONSTRAINT "matches_leverageId_fkey" FOREIGN KEY ("leverageId") REFERENCES "Leverage" ("leverageId") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "matches_competition_id_fkey" FOREIGN KEY ("competition_id") REFERENCES "competitions" ("competition_id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "matches_home_team_id_fkey" FOREIGN KEY ("home_team_id") REFERENCES "teams" ("team_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "matches_visitor_team_id_fkey" FOREIGN KEY ("visitor_team_id") REFERENCES "teams" ("team_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Leverage" (
    "leverageId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT,
    "result" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "result" (
    "resultId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "monthly" TEXT NOT NULL,
    "result" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "matches_round_home_team_id_visitor_team_id_key" ON "matches"("round", "home_team_id", "visitor_team_id");
