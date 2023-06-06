from PIL import Image
filename = "buildings.jpg"

with Image.open(filename) as img:
    img.load()


print('type', type(img))
print('isInstance', isinstance(img, Image.Image))
print('img.format', img.format)
print('img.size', img.size)
print('img.mode', img.mode)
img.show(title="Original")
print('================')


# crop image
# (x, y, x2, y2)
cropped_img = img.crop((100, 100, 300, 500))
print('cropped_img.size', cropped_img.size)
cropped_img.show()


# reduce size
low_res_img = cropped_img.reduce(4)
cropped_img.save("cropped_image.jpg")
low_res_img.save("low_resolution_cropped_image.png")
