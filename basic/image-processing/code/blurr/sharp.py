from PIL import Image, ImageFilter

filename = "buildings.jpg"
with Image.open(filename) as img:
    img.load()

# sharp_img = img.filter(ImageFilter.SHARPEN)
# img.crop((300, 300, 500, 500)).show()
# sharp_img.crop((300, 300, 500, 500)).show()


smooth_img = img.filter(ImageFilter.SMOOTH)
img.crop((300, 300, 500, 500)).show()
smooth_img.crop((300, 300, 500, 500)).show()
