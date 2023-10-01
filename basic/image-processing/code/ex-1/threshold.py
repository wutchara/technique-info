from PIL import Image, ImageFilter
filename_cat = "cat.jpg"

with Image.open(filename_cat) as img_cat:
    img_cat.load()


img_cat = img_cat.crop((800, 0, 1650, 1281))
img_cat.show()


img_cat_gray = img_cat.convert("L")
# img_cat_gray.show()
threshold = 100
img_cat_threshold = img_cat_gray.point(
    lambda x: 255 if x > threshold else 0
)
# img_cat_threshold.show()

# erosion operation removes the pixels from the object boundaries. 
def erode(cycles, image):
    for _ in range(cycles):
        image = image.filter(ImageFilter.MinFilter(3))
    return image

# dilation operation adds pixels to the boundaries of the object in an image
def dilate(cycles, image):
    for _ in range(cycles):
        image = image.filter(ImageFilter.MaxFilter(3))
    return image


# find a cat
step_1 = erode(12, img_cat_threshold)
# step_1.show()
step_2 = dilate(55, step_1)
# step_2.show()
cat_mask = erode(55, step_2)
# cat_mask.show()
cat_mask = cat_mask.convert("L")
cat_mask = cat_mask.filter(ImageFilter.BoxBlur(10))
# cat_mask.show()
blank = img_cat.point(lambda _: 0)
cat_segmented = Image.composite(img_cat, blank, cat_mask)
cat_segmented.show()


# Add the cat into other image
filename_monastery = "monastery.jpg"
with Image.open(filename_monastery) as img_monastery:
    img_monastery.load()

print('img_monastery', img_monastery.size)
img_monastery.paste(
    img_cat.resize((img_cat.width // 5, img_cat.height // 5)),
    (600, 400),
    cat_mask.resize((cat_mask.width // 5, cat_mask.height // 5)),
)
img_monastery.show()
