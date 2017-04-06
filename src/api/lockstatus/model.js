import mongoose, { Schema } from 'mongoose'

const lockstatusSchema = new Schema({
  status: {
    type: String
  }
}, {
  timestamps: true
})

lockstatusSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Lockstatus', lockstatusSchema)

export const schema = model.schema
export default model
