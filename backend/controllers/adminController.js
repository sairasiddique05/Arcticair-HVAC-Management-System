import User from "../models/user.js";
import ServiceRequest from "../models/servicerequest.js";
import Invoice from "../models/invoice.js";

export const getAdminStats = async (req, res) => {
  try {

    const totalCustomers = await User.countDocuments({
      role: "customer",
    });

 
    const activeTechnicians = await User.countDocuments({
      role: "technician",
    });

  
    const serviceRequests = await ServiceRequest.countDocuments();


    const revenueResult = await Invoice.aggregate([
      {
        $match: {
          status: "Paid",
        },
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$amount",
          },
        },
      },
    ]);

    const totalRevenue =
      revenueResult.length > 0 ? revenueResult[0].total : 0;

    res.json({
      totalCustomers,
      activeTechnicians,
      serviceRequests,
      totalRevenue,
    });
  } catch (error) {
    console.error("Admin stats error:", error);

    res.status(500).json({
      message: "Failed to fetch admin statistics",
    });
  }
};