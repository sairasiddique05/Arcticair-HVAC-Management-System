import ServiceRequest from "../models/servicerequest.js";
import Invoice from "../models/invoice.js";
import User from "../models/user.js";

export const getMonthlyReports = async (req, res) => {
  try {
    const requests = await ServiceRequest.find();

    const invoices = await Invoice.find({
      status: "Paid",
    });

    const customers = await User.find({ role: "customer" });
    const technicians = await User.find({ role: "technician" });

    // Group service requests by month
    const monthlyData = {};

    requests.forEach((request) => {
      const date = new Date(request.createdAt);

      const monthKey = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;

      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = {
          month: date.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          }),
          revenue: 0,
          completedJobs: 0,
          newCustomers: 0,
        };
      }

      if (request.status === "Completed") {
        monthlyData[monthKey].completedJobs++;
      }
    });

    // Add paid invoice revenue
    invoices.forEach((invoice) => {
      const date = new Date(invoice.createdAt);

      const monthKey = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;

      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = {
          month: date.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          }),
          revenue: 0,
          completedJobs: 0,
          newCustomers: 0,
        };
      }

      monthlyData[monthKey].revenue += Number(invoice.amount || 0);
    });

    // Count customers according to registration month
    customers.forEach((customer) => {
      const date = new Date(customer.createdAt);

      const monthKey = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;

      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = {
          month: date.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          }),
          revenue: 0,
          completedJobs: 0,
          newCustomers: 0,
        };
      }

      monthlyData[monthKey].newCustomers++;
    });

    const reports = Object.entries(monthlyData)
      .sort((a, b) => b[0].localeCompare(a[0]))
      .map(([key, data]) => ({
        _id: key,
        ...data,
      }));

    // Overall statistics
    const totalRevenue = invoices.reduce(
      (total, invoice) => total + Number(invoice.amount || 0),
      0
    );

    const completedJobs = requests.filter(
      (request) => request.status === "Completed"
    ).length;

    res.json({
      summary: {
        totalRevenue,
        completedJobs,
        customers: customers.length,
        technicians: technicians.length,
      },
      monthlyReports: reports,
    });
  } catch (error) {
    console.log("Monthly report error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};