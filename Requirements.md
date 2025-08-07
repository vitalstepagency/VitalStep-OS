VitalStep OS - Master Requirements Document

🚀 Project Overview

VitalStep OS is an enterprise-grade, AI-integrated, multi-tenant SaaS platform built for digital agencies and their clients. It is composed of three vertically integrated pillars:

INTERNAL OPS HUB

CLIENT CONTROL CENTER

CLIENT-SIDE DASHBOARD

Each vertical is managed under a unified architecture built on Next.js 14 with App Router, PostgreSQL (Neon.tech), Tailwind CSS, ShadCN UI, and JWT-based RBAC authentication.

🛠️ Full CRM and Analytics Capability

This system doubles as a full-featured CRM and marketing analytics OS capable of handling:

Contact & Lead Management

Sales Pipelines and Stages

Marketing Attribution and UTM Reporting

Real-time Funnel Analytics

Revenue Tracking and Forecasting

Campaign ROI Dashboards

Behavioral Event Tracking (Page Views, Conversions, Steps)

Conversion Attribution (by Source, Offer, Funnel, Keyword)

Cross-channel Integrations (Meta Ads, Google Ads, Email, etc.)

Includes:

Revenue KPIs per funnel and campaign

Automated flagging of underperformance

Custom tag + persona filtering

Cross-client performance comparison

Predictive analytics using AI

📊 Core Stack

Framework: Next.js 14 (App Router)

Language: TypeScript

Database: PostgreSQL (Neon.tech)

ORM: Prisma

Auth: Clerk (JWT-based)

UI: Tailwind CSS + ShadCN UI

Hosting: Vercel

Storage: Google Cloud Storage

AI: OpenAI (GPT-4), Vapi

Automation: Zapier, n8n

Payments: Stripe

🧹 Global Architecture

VitalStep OS
├── /admin       → Internal-only: client control tower
├── /internal    → Internal-only: agency backend
├── /client/[id] → White-labeled client dashboard

🔐 Role Access Control

Role

Access

admin

All dashboards (internal + all clients)

team

Internal dashboard only

client

Only their own client dashboard

client_team

Scoped access to client dashboard sections

🔭 Tier Breakdown

1. 🔒 INTERNAL OPS HUB

Purpose: Manage operations, fulfillment, automations, and agency tools.

Modules:

Internal Task System (Kanban + Sprint)

Campaign Launcher Engine

Asset Library

SOP Builder + Execution Tracker

Team Management + Access Control

AI Prompt Builder + Prompt Library (Poppy AI)

Internal Automations (Zapier/n8n)

Executive Dashboard (KPIs, Revenue, Ops)

Auth:

Restricted to roles: admin, team

Staging toggle for dev + AI sandboxing

2. 🎛️ CLIENT CONTROL CENTER

Purpose: Admin panel to manage and oversee all clients.

Modules:

Global Client List View

Client CRM Profiles

Admin Access to Client Dashboards

Contract & Subscription Data (Stripe)

Snapshot Summaries & Campaign Health

AI Flag Scoring & Recommendations

Admin Session Hijack (Support Override Mode)

Global Notification Console (Event + Task Feed)

Auth:

Restricted to role: admin

3. 🌐 CLIENT-SIDE DASHBOARD

Purpose: A white-labeled, elegant experience for clients

Modules:

Onboarding Wizard (guided, multi-step)

ICP Builder (Avatar Input)

Funnel & Campaign Analytics

Real-time Performance Charts

Billing Portal (Stripe)

Resource Library & SOP Vault

AI Script & Campaign Generator (via Poppy AI)

Task Tracker + Milestone Progress

Feedback + Support Ticket Center

Auth:

Roles: client, client_team

📦 Shared System Modules

JWT Auth + Middleware Enforcement

Notifications (In-App, Slack, Email)

File Upload System (Google Cloud)

AI Toolkit (OpenAI-integrated, prompt aware)

Billing Engine (Stripe + Webhooks)

Data Reporting Engine (charts, tables, graphs)

Shared UI Components (Cards, Tables, Wizards)

Global Layout Framework (ShadCN + Tailwind)

Multi-tenant RBAC & Client Isolation Layer

🔐 Auth & Session Architecture

Use Clerk for identity and session management

On sign-in, store users in Neon DB with:

role

clientId (nullable for internal roles)

Enforce RBAC via middleware + server-side validation

Secure API routes with server-side auth guards

Use JWT tokens with role claims (admin/team/client)

🌉 External Integrations

Platform

Purpose

Clerk

User management + session JWT

Neon.tech

PostgreSQL DB (with Prisma ORM)

Stripe

Billing portal + subscription plans

OpenAI

AI script generation + Poppy AI engine

Vapi

AI Caller Agent per client

Zapier/n8n

Workflow automations


Google Cloud

File storage + upload infrastructure

Meta Ads API

Ad performance + spend analytics

Google Ads

Conversion data for funnel attribution

SendGrid

Transactional & alert email delivery

🌟 Final Output Summary

Modular, blazing-fast Next.js OS

Full CRM + Funnel Analytics Platform

Auth-first, role-gated experience

Fully scalable for multi-tenant SaaS

Internal + admin + client tiers separated by logic

World-class design system + AI-first functionality

Future-proofed for integrations + automation

⚙️ Future Enhancements (Post-MVP)

AI Report Generator + Scheduling

n8n Builder UI (in-app drag & drop workflows)

Real-time event system (via websockets)

Whitelabel control per client (logos, themes)

In-app product tour / onboarding guide

Visual funnel editor (Perspective-like overlay)

Funnel analytics + cohort forecasting

Role-based funnel + conversion permissioning