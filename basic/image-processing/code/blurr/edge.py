from PIL import Image, ImageFilter

filename = "buildings.jpg"
with Image.open(filename) as img:
    img.load()

img_gray = img.convert("L")
edges = img_gray.filter(ImageFilter.FIND_EDGES)
edges.show("edges")

img_gray_smooth = img_gray.filter(ImageFilter.SMOOTH)
edges_smooth = img_gray_smooth.filter(ImageFilter.FIND_EDGES)
edges_smooth.show("edges_smooth")


edge_enhance = img_gray_smooth.filter(ImageFilter.EDGE_ENHANCE)
edge_enhance.show("edge_enhance")

emboss = img_gray_smooth.filter(ImageFilter.EMBOSS)
emboss.show("emboss")
