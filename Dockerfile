# Use a minimal base image for the builder stage
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package.json package-lock.json ./

# Install production dependencies
RUN npm ci --production

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a minimal base image for the runner stage
FROM node:20-alpine AS runner

# Set the working directory
WORKDIR /app

# Set environment variables for Cloud Run
ENV NODE_ENV production
ENV PORT 8080

# Create a non-root user
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# Copy the built application from the builder stage
# Using Next.js standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Change ownership to the non-root user
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

# Expose the port
EXPOSE 8080

# Command to run the application
CMD ["node", "server.js"]