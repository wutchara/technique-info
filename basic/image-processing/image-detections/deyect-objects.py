import matplotlib.pyplot as plt
from skimage.io import imread, imshow
from skimage.color import rgb2gray
from skimage.morphology import dilation, area_closing
from scipy.ndimage import median_filter
from skimage.feature import blob_dog, blob_log, blob_doh
from math import sqrt
from skimage.measure import label, regionprops


def showImage(img, grayscale=False):
	if grayscale:
		plt.imshow(img, cmap="gray")
	else:
		plt.imshow(img)
	plt.show()

# =========================
# Convert to grey sacle
# =========================

original_image = imread('candies.jpeg')
showImage(original_image)

image_gray = rgb2gray(original_image) # grayscale image
showImage(image_gray, True)


im_bw = image_gray < 0.55 # finding the appropriate threshold to binarize our image
showImage(im_bw, True)
# print(im_bw)

# =========================
# Theshole
# =========================
def dilate(im,num):
    """
    Performs dilation morphology num times.
    """
    for i in range(num):
        im = dilation(im)
    return im

def area_close(im, num):
    """
    Performs area_closing morphology num times.
    """
    for i in range(num):
        im = area_closing(im)
    return im

im_cleaned = dilate(im_bw, 5)
# showImage(im_cleaned)
im_cleaned = area_close(im_cleaned, 40)
# showImage(im_cleaned)
im_cleaned = median_filter(im_cleaned, size=21)
showImage(im_cleaned, True)

# =========================
# Detect objects
# Compute radii in the 3rd column.
# =========================
# 
blobs_log = blob_log(im_cleaned, max_sigma=30, num_sigma=10, threshold=.1)
blobs_log[:, 2] = blobs_log[:, 2] * sqrt(2)

blobs_dog = blob_dog(im_cleaned, max_sigma=30, threshold=.1)
blobs_dog[:, 2] = blobs_dog[:, 2] * sqrt(2)

blobs_doh = blob_doh(im_cleaned, max_sigma=30, threshold=.01)

blobs_list = [blobs_log, blobs_dog, blobs_doh]
colors = ['yellow', 'lime', 'red']
titles = ['Laplacian of Gaussian', 'Difference of Gaussian',
          'Determinant of Hessian']
sequence = zip(blobs_list, colors, titles)

fig, axes = plt.subplots(1, 3, figsize=(9, 3), sharex=True, sharey=True)
ax = axes.ravel()

for idx, (blobs, color, title) in enumerate(sequence):
    ax[idx].set_title(title)
    ax[idx].imshow(im_cleaned)
    for blob in blobs:
        y, x, r = blob
        c = plt.Circle((x, y), r, color=color, linewidth=2, fill=False)
        ax[idx].add_patch(c)
    ax[idx].set_axis_off()

plt.tight_layout()
plt.show()

# =========================
# Connect components
# =========================
def showImageDetected(img):
	img_label = label(img) # label objects
	regions = regionprops(img_label) # get region properties

	plt.figure(figsize=(12,5))

	# create bounding box
	for props in regions:
	    minr, minc, maxr, maxc = props.bbox
	    bx = (minc, maxc, maxc, minc, minc)
	    by = (minr, minr, maxr, maxr, minr)
	    plt.plot(bx, by, '-r', linewidth=0.5)

	plt.imshow(img_label)
	plt.axis('off')
	plt.title('Detected Objects\nCount: {}'.format(len(regions)))
	showImage(img_label)

showImageDetected(im_cleaned)
