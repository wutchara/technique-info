import matplotlib.pyplot as plt
from skimage.io import imread, imshow
from skimage.color import rgb2gray
from skimage.morphology import dilation, area_closing
from scipy.ndimage import median_filter
from skimage.feature import blob_dog, blob_log, blob_doh
from math import sqrt
from skimage.measure import label, regionprops


def showImage(img):
	plt.imshow(img)
	plt.show()

# =========================
# Convert to grey sacle
# =========================

original_image = imread('img.png')
showImage(original_image)

im = rgb2gray(original_image) # grayscale image
showImage(im)

im_bw = im < 0.5 # finding the appropriate threshold to binarize our image
showImage(im_bw)
# print(im_bw)

# =========================
# Theshole
# =========================
# def dilate(im,num):
#     """
#     Performs dilation morphology num times.
#     """
#     for i in range(num):
#         im = dilation(im)
#     return im

# def area_close(im, num):
#     """
#     Performs area_closing morphology num times.
#     """
#     for i in range(num):
#         im = area_closing(im)
#     return im

# im_cleaned = dilate(im_bw,5)
# im_cleaned = area_close(im_cleaned, 40)
# im_cleaned = median_filter(im_cleaned, size=21)
# showImage(im_cleaned)

# =========================
# Detect objects
# =========================

# LoG => Laplacian of Gaussian
# blobs_log = blob_log(im_bw, max_sigma=30, num_sigma=10, threshold=.1)
# blobs_log[:, 2] = blobs_log[:, 2] * sqrt(2)# Compute radii in the 3rd column.
# showImage(blobs_log)

# # DoG => Difference of Gaussian
# blobs_dog = blob_dog(im_bw, max_sigma=30, threshold=.1)
# blobs_dog[:, 2] = blobs_dog[:, 2] * sqrt(2)
# showImage(blobs_dog)

# # DoH => Determinant of Hessian
# blobs_doh = blob_doh(im_bw, max_sigma=30, threshold=.01)
# showImage(blobs_doh)

# =========================
# Connect components
# =========================
# img_label = label(im_cleaned) # label objects
# regions = regionprops(img_label) # get region properties

# plt.figure(figsize=(12,5))

# # create bounding box
# for props in regions:
#     minr, minc, maxr, maxc = props.bbox
#     bx = (minc, maxc, maxc, minc, minc)
#     by = (minr, minr, maxr, maxr, minr)
#     plt.plot(bx, by, '-r', linewidth=0.5)

# plt.imshow(img_label)
# plt.axis('off')
# plt.title('Detected Objects\nCount: {}'.format(len(regions)))
