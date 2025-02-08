FROM node:18-alpine AS base

# Add build argument for environment
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN if [ "$NODE_ENV" = "production" ]; then \
        npm ci --legacy-peer-deps; \
    else \
        npm install --legacy-peer-deps; \
    fi

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Create public directory in builder stage
RUN mkdir -p /app/public

ENV NEXT_TELEMETRY_DISABLED 1

# Set base URL based on environment
ARG BASE_URL=https://tails-and-paws.com
ENV NEXT_PUBLIC_BASE_URL=${BASE_URL}

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Use different commands for dev and prod
CMD if [ "$NODE_ENV" = "production" ]; then \
        npm start; \
    else \
        npm run dev; \
    fi