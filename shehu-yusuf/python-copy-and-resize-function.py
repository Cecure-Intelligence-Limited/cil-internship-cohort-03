from PIL import Image
import glob
import shutil

source_img = 'C:/Users/Shehu/Pictures/ysf.jpg'
destination_img = 'C://Users//Shehu//Documents/my_copy_image.jpg'
height = 450
weight = 500

def copy_and_resize_pic(image):
    
    for image in glob.glob(source_img):
        shutil.copy(image, destination_img)

    picture = Image.open(destination_img)
    resize_picture = picture.resize((height, weight))
    
    return resize_picture

copy_and_resize_pic(source_img)
