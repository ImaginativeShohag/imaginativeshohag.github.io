const padding = 64;

for (let element of document.getElementsByClassName('img-viewer')) {
    const viewer = new Viewer(element, {
        inline: false,
        navbar: false,
        toolbar: false,
        viewed() {
            if (window.innerWidth >= this.viewer.image.naturalWidth && window.innerHeight >= this.viewer.image.naturalHeight) {
                viewer.zoomTo(1);
            } else {
                viewer.zoomTo(
                    Math.min((window.innerWidth - padding) / this.viewer.image.naturalWidth, (window.innerHeight - padding) / this.viewer.image.naturalHeight)
                );
            }
        },
    });
}