import Issue from "../models/issueModal.js";

export const createIssue = async (req, res) => {
  try {
    const { title, category, location, description } = req.body;

    console.log("req.user in createIssue:", req.user); // For debugging
    // console.log("req.user._id:", req.user?._id); // For debugging

    if (!req.user || !req.user._id) {
      console.log("User authentication failed"); // For debugging
      return res
        .status(401)
        .json({ message: "User not authenticated or invalid user data" });
    }

    const newIssue = new Issue({
      title,
      category,
      location,
      description,
      author: req.user._id,
      images: req.files ? req.files.map((file) => file.path) : [],
    });

    // console.log("newIssue before save:", newIssue); // For debugging

    const savedIssue = await newIssue.save();
    res
      .status(201)
      .json({ message: "Issue reported successfully", issue: savedIssue });
  } catch (error) {
    console.error("Error creating issue:", error);
    res
      .status(500)
      .json({ message: "Error reporting issue", error: error.message });
  }
};

// -------------------------------------------------------------------------------------------------

// to get all of your issues your reported
export const getMyReports = async (req, res) => {
  try {
    const issues = await Issue.find({ author: req.user._id })
      .select("title category status createdAt")
      .sort("-createdAt");
    res.status(200).json(issues);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching reports", error: error.message });
  }
};

// -------------------------------------------------------------------------------------------------

// To display all the details of any issue you want
export const getIssueDetails = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }
    res.status(200).json(issue);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching issue details", error: error.message });
  }
};

// ------------------------------------------------------------------------------------------------------

export const updateIssueStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const issue = await Issue.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }
    res
      .status(200)
      .json({ message: "Issue status updated successfully", issue });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating issue status", error: error.message });
  }
};
