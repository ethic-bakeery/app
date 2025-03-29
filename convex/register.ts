import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const registerUser = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const userId = await ctx.db.insert("users", {
      ...args,
      createdAt: Date.now(),
    });
    
    return userId;
  },
});