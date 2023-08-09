const Distributors = require('../../model/distributorsModel');
const { customErrorMessages } = require('../../utils/helpers');
const distributorValidation = require('../../validations/distributorValidation');

const addDistributor = async (req, res) => {
  try {
    await distributorValidation.Create.validateAsync(req.body);
    const { location } = req.body;
    const org_location = {
      type: 'Point',
      coordinates: [Number(location.longitude), Number(location.latitude)],
    };
    const data = { ...req.body, location: org_location };

    const distributor = await Distributors.create(data);
    res.status(200).json({
      success: true,
      message: 'Distributor added successfully',
      data: distributor,
    });
  } catch (error) {
    const message = customErrorMessages(error);
    const status = error.isJoi ? 422 : 400;
    res.status(status).json({ success: false, message: message });
  }
};

module.exports = addDistributor;