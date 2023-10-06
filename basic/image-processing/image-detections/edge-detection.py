# https://scikit-image.org/docs/stable/auto_examples/edges/plot_canny.html#sphx-glr-auto-examples-edges-plot-canny-py
# https://scikit-image.org/docs/stable/auto_examples/edges/plot_edge_filter.html#sphx-glr-auto-examples-edges-plot-edge-filter-py

import numpy as np
import matplotlib.pyplot as plt
from scipy import ndimage as ndi
from skimage.util import random_noise, compare_images
from skimage import feature
from skimage.io import imread, imshow
from skimage import filters
from skimage.data import camera
from skimage.color import rgb2gray

def showImage(img, grayscale=False):
	if grayscale:
		plt.imshow(img, cmap="gray")
	else:
		plt.imshow(img)
	plt.show()

# Generate noisy image of a square
image = imread('buildings.jpg')
# 
showImage(image)

image_gray = rgb2gray(image)
showImage(image_gray, True)

image_gray_noise = random_noise(image_gray, mode='speckle', mean=0.1)
showImage(image_gray_noise, True)


# Compute the Canny filter for two values of sigma
edges1 = feature.canny(image_gray_noise)
edges2 = feature.canny(image_gray_noise, sigma=3)

# display results
fig, ax = plt.subplots(nrows=1, ncols=3, figsize=(8, 3))

ax[0].imshow(image_gray_noise, cmap='gray')
ax[0].set_title('noisy image_gray_noise', fontsize=20)

ax[1].imshow(edges1, cmap='gray')
ax[1].set_title(r'Canny filter, $\sigma=1$', fontsize=20)

ax[2].imshow(edges2, cmap='gray')
ax[2].set_title(r'Canny filter, $\sigma=3$', fontsize=20)

for a in ax:
    a.axis('off')

fig.tight_layout()
plt.show()





# edge_roberts = filters.roberts(image)
# edge_sobel = filters.sobel(image)
# fig, axes = plt.subplots(ncols=2, sharex=True, sharey=True,
#                          figsize=(8, 4))

# axes[0].imshow(edge_roberts, cmap=plt.cm.gray)
# axes[0].set_title('Roberts Edge Detection')

# axes[1].imshow(edge_sobel, cmap=plt.cm.gray)
# axes[1].set_title('Sobel Edge Detection')

# for ax in axes:
#     ax.axis('off')

# plt.tight_layout()
# plt.show()


