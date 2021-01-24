from pytube import YouTube

link = "https://www.youtube.com/watch?v=Kbnp1BZylCM"
video = YouTube(link)

print(f"the video title is:\n{video.title} \n---------------------")
print(f"the video description is:\n{video.description} \n---------------------")
print(f"the video views are: {video.views} \n---------------------")
print(f"the video rating is: {video.rating} \n---------------------")
print(f"the video duration is:{video.length} seconds \n---------------------")


def finish():
    print("download done")

video.streams.get_highest_resolution().download(output_path="D:\Downloads")
video.register_on_complete_callback(finish())
