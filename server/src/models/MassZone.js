const Model = require("./Model");

class MassZone extends Model {
  static get tableName() {
    return "massZones";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["zoneName"],
      properties: {
        zoneName: { type: "string" },
        zoneInfo: { type: "string" },
      }
    }
  }
}

module.exports = MassZone;