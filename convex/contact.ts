// convex/contact.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submitContact = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const contactId = await ctx.db.insert("contactMe", {
      name: args.name,
      email: args.email,
      message: args.message,
      createdAt: Date.now(),
      isRead: false,
    });
    
    console.log("Contact form submission created:", contactId);
    return contactId;
  },
});