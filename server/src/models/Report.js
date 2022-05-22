const Model = require("./Model.js");

class Report extends Model {
  static get tableName() { 
    return "reports"; 
  }

  static get jsonSchema() { 
    return { 
      type: "object", 
      required: ["reportDate", "reportText"], 
      properties: {
        reportDate: { type: ["integer", "string"] }, 
        reportText: { type: ["string"] },
      },
    };
  }

static get relationMappings() {  
  const { User, MassZone } = require("./index.js");
  return {
    MassZone: { 
      relation: Model.BelongsToOneRelation,
      modelClass: MassZone,
      join: { 
        from: "reports.massZoneId", 
        to: "massZones.id", 
      }, 
    },
    user: { 
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: { 
        from: "reports.userId", 
        to: "users.id", 
      }
    }
  }
}

}

module.exports = Report;