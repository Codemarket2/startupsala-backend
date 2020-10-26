const DB = require("../../utils/DB");
const Amenities = require("./utils/amenitiesModel");
DB();

exports.handler = async (event) => {
  try {
    switch (event.type) {
      case "getOneAmenities":
        return await Amenities.findById(event.arguments.id);
      case "getOneAmenitiesBySlug":
        return await Amenities.findOne({
          $or: [
            { slug: event.arguments.slug, published: true },
            { slug: event.arguments.slug, userId: event.arguments.userId },
          ],
        });
      case "getAllAmenities":
        return await Amenities.find();
      case "createOneAmenities":
        return await Amenities.create(event.arguments);
      case "updateOneAmenities":
        return await Amenities.findByIdAndUpdate(
          event.arguments.id,
          event.arguments,
          {
            new: true,
            runValidators: true,
          }
        );
      case "deleteOneAmenities":
        return await Amenities.findByIdAndDelete(event.arguments.id);
      default:
        return null;
    }
  } catch (error) {
    throw error;
  }
};