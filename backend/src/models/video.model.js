import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
        videoFile: {
            type: String,
            reqiure: true,
        },
        thumbnail: {
            type: String,
            require: true,
        },
        title: {
            type: String,
            require: true,
        },
        discription: {
            type: String,
            require: true,
        },
        duration: {
            type: Number,
            require: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
