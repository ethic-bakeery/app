import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contactMe: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    // Optional fields you might want
    phone: v.optional(v.string()),
    subject: v.optional(v.string()),
    createdAt: v.optional(v.number()), // You could store timestamp
    isRead: v.optional(v.boolean()),
  }).index("email", ["email"]), // Create an index on email for faster lookups
  users: defineTable({
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    state: v.string(),
    localGovernment: v.string(),
    skills: v.string(),
    interests: v.string(),
    experience: v.string(),
    rolePreference: v.string(),
    socialMedia: v.object({
      facebook: v.string(),
      twitter: v.string(),
      linkedin: v.string(),
    }),
    createdAt: v.number(),
  }),
});