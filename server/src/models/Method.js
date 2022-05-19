const Model = require("./Model");

class Method extends Model {
  static get tableName() {
    return "methods";
  }

  static get jsonSchema() {
    return { 
      type: "object",
      required: ["method", "startDate", "endDate"],
      properties: {
        method: { type: "string" },
        startDate: { type: "string" },
        endDate: { type: "string"},
      }
    }
  }
}

module.exports = Method;