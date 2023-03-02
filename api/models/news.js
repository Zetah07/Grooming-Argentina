const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const newsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        img: {
            public_id: {
                type: String
            },
            url:{
                type:String
            }
        },
        category: {
            type: Array,
            required: true,
            default: []
        },
        link: {
            type: String,
        },
        provinceOrLocation: {
            type: String,
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

newsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('new', newsSchema);