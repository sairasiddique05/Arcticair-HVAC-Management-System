import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    serviceType: {
      type: String,
      required: true,
    },

    propertyType: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    preferredDate: {
      type: Date,
    },

    propertySize: {
      type: String,
    },

    description: {
      type: String,
    },

    amount: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Quote", quoteSchema);