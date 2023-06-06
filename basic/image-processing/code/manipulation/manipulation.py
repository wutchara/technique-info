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

###
# There are seven options that you can pass as arguments to .transpose():
# Image.FLIP_LEFT_RIGHT: Flips the image left to right, resulting in a mirror image
# Image.FLIP_TOP_BOTTOM: Flips the image top to bottom
# Image.ROTATE_90: Rotates the image by 90 degrees counterclockwise
# Image.ROTATE_180: Rotates the image by 180 degrees
# Image.ROTATE_270: Rotates the image by 270 degrees counterclockwise, which is the same as 90 degrees clockwise
# Image.TRANSPOSE: Transposes the rows and columns using the top-left pixel as the origin, with the top-left pixel being the same in the transposed image as in the original image
# Image.TRANSVERSE: Transposes the rows and columns using the bottom-left pixel as the origin, with the bottom-left pixel being the one that remains fixed between the original and modified versions
###
converted_img = img.transpose(Image.FLIP_TOP_BOTTOM)
converted_img.show()
