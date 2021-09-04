var LCFill = function(lc) {
    var self = this;

    return {
        usesSimpleAPI: false,
        name: 'Fill',
        iconName: 'fill',

        didBecomeActive: function(lc) {
            self.unsubscribeFunc = lc.on('lc-pointerdown', function(pt) {
                //convert hsla to rgba
                let hsla = lc.getColor('secondary').slice(5,-1).split(', ');
                let hue = Number(hsla.shift());
                let alpha = Number(hsla.pop()) * 255;
                hsla = hsla.map(v => Number(v.slice(0,-1)/100)); //turn remaining percentages into decimals
                let sat = hsla.shift();
                let light = hsla.shift();

                var t1, t2;
                hue = hue / 60;
                if (light <= 0.5) {
                    t2 = light * (sat + 1);
                } else {
                    t2 = light + sat - (light * sat);
                }
                t1 = light * 2 - t2;
                let red = LCFillHueToRgb(t1, t2, hue + 2) * 255;
                let green = LCFillHueToRgb(t1, t2, hue) * 255;
                let blue = LCFillHueToRgb(t1, t2, hue - 2) * 255;

                //get image of filled pixels
                let filledData = LCFillFloodFill(lc.canvas, lc.ctx, pt, [red, green, blue, alpha].map(n => Math.round(n)));

                //create a canvas to put the filled color on
                let filling = document.createElement('canvas');
                let fillCtx = filling.getContext('2d');
                filling.width = lc.canvas.width;
                filling.height = lc.canvas.height;
                fillCtx.putImageData(filledData, 0, 0);
                
                //put the canvas with the filled color onto the LC canvas
                let img = new Image();
                img.onload = () => {
                    lc.saveShape(LC.createShape('Image', {
                        x: -lc.position.x/lc.scale,
                        y: -lc.position.y/lc.scale,
                        scale: 1/lc.scale,
                        image: img
                    }));
                };
                img.src = filling.toDataURL();
            });
        },

        willBecomeInactive: function(lc) {
            self.unsubscribeFunc();
        }
    };
};

function LCFillHueToRgb(t1, t2, hue) {
    if (hue < 0) hue += 6;
    if (hue >= 6) hue -= 6;
    if (hue < 1) return (t2 - t1) * hue + t1;
    else if (hue < 3) return t2;
    else if (hue < 4) return (t2 - t1) * (4 - hue) + t1;
    else return t1;
}

function LCFillFloodFill(canvas, ctx, pt, color) {
    //flood fill algorithm with imagedata of LC canvas
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height); //get the LC's canvas to find out which pixels to fill
    let filledData = ctx.createImageData(imageData); //create an empty image data to put the filled pixels on
    let matchStartColor = pixelPos => (imageData.data[pixelPos] == startColor[0] && imageData.data[pixelPos+1] == startColor[1] && imageData.data[pixelPos+2] == startColor[2] && imageData.data[pixelPos+3] == startColor[3]);
    let colorPixel = pixelPos => {
        imageData.data[pixelPos] = color[0];
        imageData.data[pixelPos+1] = color[1];
        imageData.data[pixelPos+2] = color[2];
        imageData.data[pixelPos+3] = color[3];
        filledData.data[pixelPos] = color[0];
        filledData.data[pixelPos+1] = color[1];
        filledData.data[pixelPos+2] = color[2];
        filledData.data[pixelPos+3] = color[3];
    };

    pt.rawX = Math.floor(pt.rawX)
    pt.rawY = Math.floor(pt.rawY)
    let pixelStack = [[pt.rawX, pt.rawY]];
    let startPos = (pt.rawY*canvas.width + pt.rawX) * 4;
    let startColor = imageData.data.slice(startPos, startPos+4);
    if (imageData.data[startPos] == color[0] && imageData.data[startPos+1] == color[1] && imageData.data[startPos+2] == color[2] && imageData.data[startPos+3] == color[3]) return imageData;

    while (pixelStack.length) {
        var newPos, x, y, pixelPos, reachLeft, reachRight;
        newPos = pixelStack.shift();
        x = newPos[0];
        y = newPos[1];

        pixelPos = (y*canvas.width + x) * 4;
        while (y-- >= 0 && matchStartColor(pixelPos)) {
            pixelPos -= canvas.width * 4;
        }
        pixelPos += canvas.width * 4;
        y++;
        reachLeft = false;
        reachRight = false;
        while (y++ < canvas.height-1 && matchStartColor(pixelPos)) {
            colorPixel(pixelPos);

            if(x > 0) {
                if(matchStartColor(pixelPos - 4)){
                    if (!reachLeft) {
                        pixelStack.push([x - 1, y]);
                        reachLeft = true;
                    }
                } else if (reachLeft) {
                    reachLeft = false;
                }
            }
            
            if (x < canvas.width-1) {
                if (matchStartColor(pixelPos + 4)) {
                    if (!reachRight) {
                        pixelStack.push([x + 1, y]);
                        reachRight = true;
                    }
                } else if (reachRight) {
                    reachRight = false;
                }
            }
                    
            pixelPos += canvas.width * 4;
        }
    }
    return filledData;
}