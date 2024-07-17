import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudinary url
            required: [true, 'videoFile is required']
        },
        thumbnail: {
            type: String, //cloudinary url
            required: [true, 'thumbnail is required']
        },
        title: {
            type: String, 
            required: [true, ' title is requried']
        },
        description: {
            type: String, 
            required: [true, 'description is required']
        },
        duration: {
            type: Number, 
            required: [true, 'duration is required']
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    }, 
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)



export const Video = mongoose.model("Video", videoSchema)