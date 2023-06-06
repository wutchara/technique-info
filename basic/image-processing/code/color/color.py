from PIL import Image

with Image.open("strawberry.jpg") as img:
    img.load()

cmyk_img = img.convert("CMYK")
gray_img = img.convert("L")  # Grayscale

cmyk_img.show()
gray_img.show()

# grayscale
print('img.getbands()', img.getbands())
# img.show()
cmyk_img.getbands()
gray_img.getbands()


red, green, blue = img.split()
print('red', red)
print('red,mode', red.mode)

zeroed_band = red.point(lambda _: 0)
red_merge = Image.merge(
    "RGB", (red, zeroed_band, zeroed_band)
)
green_merge = Image.merge(
    "RGB", (zeroed_band, green, zeroed_band)
)
blue_merge = Image.merge(
    "RGB", (zeroed_band, zeroed_band, blue)
)

# show images each colors
red_merge.show()
green_merge.show()
blue_merge.show()

