import ServiceRequest from "../models/ServiceRequest.js";


//Service Request

export const createRequest = async (req, res) => {
  try {
    const {
      customer,
      serviceType,
      preferredDate,
      preferredTime,
      propertyType,
      address,
      description,
      isEmergency,
      images,
    } = req.body;

    const request = await ServiceRequest.create({
      customer,
      serviceType,
      preferredDate,
      preferredTime,
      propertyType,
      address,
      description,
      isEmergency,
      images,
    });

    res.status(201).json({
      success: true,
      message: "Service Request Submitted Successfully",
      request,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllRequests = async (req, res) => {
  try {
    const requests = await ServiceRequest.find()
      .populate("customer", "name email phone")
      .populate("assignedTechnician", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(requests);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const assignTechnician = async (req, res) => {
  try {
    const { technicianId } = req.body;

    const request = await ServiceRequest.findByIdAndUpdate(
      req.params.id,
      {
        assignedTechnician: technicianId,
        status: "Assigned",
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      request,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTechnicianRequests = async (req, res) => {
  try {
    const requests = await ServiceRequest.find({
      assignedTechnician: req.params.id,
    })
      .populate("customer", "name email phone")
      .sort({ createdAt: -1 });

    res.status(200).json(requests);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getSingleRequest = async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id)
      .populate("customer", "name email phone")
      .populate("assignedTechnician", "name email");

    if (!request) {
      return res.status(404).json({
        message: "Request not found",
      });
    }

    res.status(200).json(request);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const startJob = async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        message: "Request not found",
      });
    }

    request.status = "In Progress";

    await request.save();

    res.status(200).json({
      success: true,
      message: "Job Started Successfully",
      request,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const submitServiceReport = async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        message: "Request not found",
      });
    }

    const {
      serviceReport,
      workPerformed,
      partsUsed,
      recommendation,
    } = req.body;

    request.serviceReport = serviceReport;
    request.workPerformed = workPerformed;
    request.partsUsed = partsUsed;
    request.recommendation = recommendation;

    request.status = "Completed";
    request.completedAt = new Date();

    await request.save();

    res.status(200).json({
      success: true,
      message: "Service Report Submitted",
      request,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const submitReport = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      workPerformed,
      partsUsed,
      recommendations,
      jobStatus,
    } = req.body;

    const request = await ServiceRequest.findById(id);

    if (!request) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    request.workPerformed = workPerformed;
    request.partsUsed = partsUsed;
    request.recommendations = recommendations;
    request.status = jobStatus;

    await request.save();

    res.status(200).json({
      success: true,
      message: "Service Report Submitted",
      request,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const uploadPhotos = async (req, res) => {
  try {
    const { id } = req.params;
    const { images } = req.body;

    const request = await ServiceRequest.findById(id);

    if (!request) {
      return res.status(404).json({
        message: "Request not found",
      });
    }

    request.images = images;

    await request.save();

    res.status(200).json({
      success: true,
      message: "Photos uploaded successfully",
      request,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getCustomerRequests = async (req, res) => {
  try {
    const { customerId } = req.params;

    const requests = await ServiceRequest.find({
      customer: customerId,
    })
      .populate("assignedTechnician", "name email phone")
      .sort({ createdAt: -1 });

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const getAllReports = async (req, res) => {
  try {
    const reports = await ServiceReport.find()
      .populate({
        path: "request",
        populate: {
          path: "customer",
          select: "name email phone",
        },
      })
      .populate("technician", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(reports);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getReportById = async (req, res) => {
  try {
    const report = await ServiceReport.findById(req.params.id)
      .populate({
        path: "request",
        populate: {
          path: "customer",
          select: "name email phone",
        },
      })
      .populate("technician", "name email");

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    res.status(200).json(report);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};