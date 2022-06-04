src_dir = "your/source/dir"
dst_dir = "your/destination/dir"
for jpgfile in glob.iglob(os.path.join(src_dir, "*.jpg")):
  shutil.copy(jpgfile, dst_dir)

from PIL import Image
from IPython.display import display
print("Original Image")
im = Image.open("img.jpg")
display(im)
resized_im = im.resize((round(im.size[0]*0.5), round(im.size[1]*0.5)))
print("Resized Image")
display(resized_im)
resized_im.save('resized.jpg') 


