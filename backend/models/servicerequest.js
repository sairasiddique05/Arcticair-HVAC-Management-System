import mongoose from "mongoose";

const serviceRequestSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    serviceType: {
      type: String,
      required: true,
    },

    preferredDate: {
      type: Date,
      required: true,
    },

    preferredTime: {
      type: String,
      required: true,
    },

    propertyType: {
      type: String,
      enum: ["Residential", "Commercial"],
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    isEmergency: {
      type: Boolean,
      default: false,
    },

    images: [
      {
        type: String,
      },
    ],

    status: {
      type: String,
      enum: [
        "Pending",
        "Assigned",
        "In Progress",
        "Completed",
        "Cancelled",
      ],
      default: "Pending",
    },

    assignedTechnician: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    serviceReport: {
  type: String,
  default: "",
},

workPerformed: {
  type: String,
  default: "",
},

partsUsed: {
  type: String,
  default: "",
},

recommendation: {
  type: String,
  default: "",
},

completedAt: {
  type: Date,
},

workPerformed: {
  type: String,
  default: "",
},

partsUsed: {
  type: String,
  default: "",
},

recommendations: {
  type: String,
  default: "",
},

  },
  {
    timestamps: true,
  }
);

export default mongoose.model("ServiceRequest", serviceRequestSchema);