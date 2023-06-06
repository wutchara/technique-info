from PIL import Image, ImageFilter

filename = "buildings.jpg"
with Image.open(filename) as img:
    img.load()

blur_img = img.filter(ImageFilter.BLUR)
# blur_img.show()

# img.crop((300, 300, 500, 500)).show()
# blur_img.crop((300, 300, 500, 500)).show()

img.filter(ImageFilter.BoxBlur(5)).show()
img.filter(ImageFilter.BoxBlur(20)).show()
img.filter(ImageFilter.GaussianBlur(20)).show()
