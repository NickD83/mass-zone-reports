const Model = require("./Model");

class MassZone extends Model {
  static get tableName() {
    return "massZones";
  }
  // add relationMappings for `reports`

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

  static get relationMappings() {
    const { Report } = require("./index.js")
    return {
      reports: {
        relation: Model.HasManyRelation,
        modelClass: Report,
        join: {
          from: "massZones.id",   
          to: "reports.massZoneId"
        }
      }
    }
  }
}

module.exports = MassZone;