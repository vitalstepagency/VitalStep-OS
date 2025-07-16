-- CreateTable
CREATE TABLE "company_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "companyName" TEXT,
    "industry" TEXT,
    "position" TEXT,
    "companySize" TEXT,
    "annualRevenue" TEXT,
    "objectives" TEXT,
    "challenges" JSONB,
    "timeline" TEXT,
    "budget" TEXT,
    "referralSource" TEXT,
    "brandColors" JSONB,
    "logo" TEXT,
    "customWelcomeMessage" TEXT,
    "onboardingCompleted" BOOLEAN NOT NULL DEFAULT false,
    "onboardingStep" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "onboarding_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "step" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "onboarding_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_metrics" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "companyProfileId" TEXT NOT NULL,
    "revenue" DOUBLE PRECISION DEFAULT 0,
    "campaigns" INTEGER DEFAULT 0,
    "conversionRate" DOUBLE PRECISION DEFAULT 0,
    "satisfaction" DOUBLE PRECISION DEFAULT 0,
    "loginCount" INTEGER NOT NULL DEFAULT 0,
    "lastLoginAt" TIMESTAMP(3),
    "sessionDuration" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "client_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_profiles_userId_key" ON "company_profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "company_profiles_clientId_key" ON "company_profiles"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "client_metrics_userId_companyProfileId_key" ON "client_metrics"("userId", "companyProfileId");
