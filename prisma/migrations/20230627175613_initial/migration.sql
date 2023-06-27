-- CreateTable
CREATE TABLE "competitions" (
    "competition_id" SERIAL NOT NULL,
    "competition_name" TEXT NOT NULL,
    "season_name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "competitions_pkey" PRIMARY KEY ("competition_id")
);

-- CreateTable
CREATE TABLE "teams" (
    "team_id" SERIAL NOT NULL,
    "team_name" TEXT NOT NULL,
    "team_country" TEXT NOT NULL,
    "team_initials" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("team_id")
);

-- CreateTable
CREATE TABLE "matches" (
    "match_id" SERIAL NOT NULL,
    "match_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "home_goals" INTEGER NOT NULL DEFAULT 0,
    "visitor_goals" INTEGER NOT NULL DEFAULT 0,
    "odd" DOUBLE PRECISION,
    "strategy" TEXT,
    "result" TEXT,
    "review" TEXT,
    "stake" DOUBLE PRECISION,
    "round" INTEGER NOT NULL DEFAULT 0,
    "leverageId" INTEGER,
    "competition_id" INTEGER,
    "home_team_id" INTEGER NOT NULL,
    "visitor_team_id" INTEGER NOT NULL,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("match_id")
);

-- CreateTable
CREATE TABLE "Leverage" (
    "leverageId" SERIAL NOT NULL,
    "description" TEXT,
    "result" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Leverage_pkey" PRIMARY KEY ("leverageId")
);

-- CreateTable
CREATE TABLE "result" (
    "resultId" SERIAL NOT NULL,
    "monthly" TEXT NOT NULL,
    "result" TEXT,

    CONSTRAINT "result_pkey" PRIMARY KEY ("resultId")
);

-- CreateIndex
CREATE UNIQUE INDEX "matches_round_home_team_id_visitor_team_id_key" ON "matches"("round", "home_team_id", "visitor_team_id");

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_leverageId_fkey" FOREIGN KEY ("leverageId") REFERENCES "Leverage"("leverageId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_competition_id_fkey" FOREIGN KEY ("competition_id") REFERENCES "competitions"("competition_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_home_team_id_fkey" FOREIGN KEY ("home_team_id") REFERENCES "teams"("team_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_visitor_team_id_fkey" FOREIGN KEY ("visitor_team_id") REFERENCES "teams"("team_id") ON DELETE RESTRICT ON UPDATE CASCADE;
