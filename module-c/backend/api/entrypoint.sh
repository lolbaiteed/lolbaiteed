#!/bin/bash

echo "Checking for Prisma migrations.."

MIGRATIONS_COUNT=$(find prisma/migrations -type d -mindepth 1 2>/dev/null | wc -l)

if [ "$MIGRATIONS_COUNT" -eq "0" ]; then
  echo "No migrations files found: running 'prisma db push'..."
  npx prisma db push
else
  echo "Migration files found: running 'prisma migrate deploy'..."
  npx prisma migrate deploy
fi

echo "Starting the main api..."
exec npx ts-node src/index.ts
