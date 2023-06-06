from skimage.io import imread
import matplotlib.pyplot as plt

# display image
image = imread('./image.png')
plt.imshow(image)
plt.show()


# counting the stars