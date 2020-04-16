require('source-map-support').install();

const test = require('tape');
const { createCanvas } = require('canvas');
const { ImageUtils } = require('../');

test('@gltf-transform/core::image-utils', t => {
	let canvas, ctx, buffer;

	canvas = createCanvas(100, 50);
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "#222222";
	buffer = canvas.toBuffer("image/png");
	t.deepEquals(ImageUtils.getSizePNG(buffer), {width: 100, height: 50}, 'gets PNG size');

	canvas = createCanvas(16, 32);
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "#222222";
	buffer = canvas.toBuffer("image/jpeg");
	t.deepEquals(ImageUtils.getSizeJPEG(buffer), {width: 16, height: 32}, 'gets JPEG size');

	t.end();
});
