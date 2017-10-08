(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 60,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/bird.png", id:"bird"},
		{src:"images/hat.png", id:"hat"},
		{src:"images/prod.png", id:"prod"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bird = function() {
	this.initialize(img.bird);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,218);


(lib.hat = function() {
	this.initialize(img.hat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,124);


(lib.prod = function() {
	this.initialize(img.prod);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,142);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bird, null, new cjs.Matrix2D(1,0,0,1,-133.7,-83.1)).s().p("AiMBUQAVhSAyg9QBFhYBYAdQA5ATgCBXQgDBVg5AdQgpAVhbADIgMAAQhaAAALgqg");
	this.shape.setTransform(0.7,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-12.2,28.6,25.3);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bird, null, new cjs.Matrix2D(1,0,0,1,-116.8,-187.1)).s().p("AmjE0Igwh0QgbhFgagpIgKgQQgGgKAAgIQgBgKAHgSQAehOA2hDQA3hCBHguQAQgLBBgXQA/gXAVgDQBQgOBMAEQB7AHBPAyQAbARA5ADQA3ACAbATIBGAyQA9AsAHALQATAgAHAmQAIAkgGAmQgDAdgPAoQgaBGgjAmQgPAQgYATIgrAgIgdAYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.8,-30.9,107.6,61.8);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bird, null, new cjs.Matrix2D(1,0,0,1,-42.1,-55.8)).s().p("AoyInICOxTINyAAIA6C8QA4C4gQA0QgUA7gXBXQgUBOgMAiQgnBshwB4QijBikKA8QjJAticAAQg6AAg0gGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.4,-55.8,112.8,111.6);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcBPIgBgCIAAgCIgBgDIgBgDIgHgTIgiAAIgIAUIgBAEIgBACIAAABIgBACIgYAAIACgGIADgFIADgKIAlhhIAOAAIAjBgIADAJIADAGIAEAHgAAKAdIgKgdIgKAdIAUAAgAgTg8QgIgHgBgLIAOAAQACAFAEADQAEACAEABQAFgBADgCQAEgDABgFIAPAAQgBALgIAHQgIAGgLAAQgLAAgIgGg");
	this.shape.setTransform(44,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARA2IgFgGIgDgDIgageIAHgPIACAAIABAAQAIAAAHgEQAHgGgBgJQABgKgIgHQgHgGgLAAIgHAAIAABRIABAIIABAKIgYAAIAAgJIABgHIAAhTIgBgDIAAgGIAAgDIgBgGIAKgBIAIgBIAJgBQAKAAAGACQAHACAGACQAKAHAFAJQAGAKAAAMQAAAIgDAHQgDAEgEAGQgEADgEACIgLAEIAQAQIAHAGIALAKIgQARIgIgKg");
	this.shape_1.setTransform(33.9,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoA7IAAh2IBPAAIgHAXIgJgBIgHAAIgKAAIgYAAIAAAZIAWAAIAHAAIAIAAIALgBIgHAVIgpAAIAAAeIAbAAIAFAAIAEAAIAJAAIAOgBIgGAWg");
	this.shape_2.setTransform(23.7,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglA9IABgJIAAgGIAAhmIAKgDIAIgBIAJAAQAJAAAFABQAGACAGAEQAKAFAFALQAGAJAAANQAAANgGAIQgFAJgLAGQgKAFgLAAIgFAAIgEAAIAAAUIAAAGIAAAEIABAFgAgOAFIAFABIAEAAQAIAAAHgGQAGgFAAgKQABgGgDgFQgDgEgFgEIgGgDIgLgBIgDAAg");
	this.shape_3.setTransform(13.4,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYA5QgLgGgJgKQgIgIgEgLQgEgKAAgMQAAgJADgKQADgJAGgIQAGgIAIgGQAIgEAJgEQAJgCAIAAQANAAAMAEQALAGAJAKQAIAIAEALQAEALAAAKQAAARgIAOQgIAOgOAJQgPAHgQABQgMgBgMgEgAgUgiQgJAFgFAJQgGAJAAALQAAALAGAJQAFAKAKAFQAJAGAKAAQALAAAKgGQAJgFAFgKQAGgJAAgLQAAgKgGgJQgFgJgKgGQgJgFgLgBQgKABgKAFg");
	this.shape_4.setTransform(1.1,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNA6QgMgEgIgHQgJgJgGgLQgFgMAAgNQAAgQAJgPQAIgPAOgIQAOgJAQAAQAIAAAHACQAIACAGADIAHAEIAIAIIgNARQgGgGgFgDQgEgEgFgBQgFgBgGAAQgKAAgJAGQgJAFgFAKQgGAKAAAKQAAALAFAJQAGAKAIAFQAJAFAKAAQAJABAIgEQAHgEAJgIIAOASQgJAGgHAFQgIADgHACQgHADgIAAQgKAAgLgFg");
	this.shape_5.setTransform(-11.7,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVA4QgLgGgKgLIAPgQQAIAKAGAEQAIAEAGAAQAJgBAGgEQAFgEAAgGQAAgFgDgEQgEgDgIgDIgQgFIgJgEQgEgCgDgBQgFgEgDgGQgDgHAAgIQAAgKAFgIQAFgIAJgEQAIgFAKAAQAHAAAGACIAOAGIAFAFIAGAHIgNARIgJgJQgEgEgEgBIgIgBQgGAAgEAEQgFAEgBAGIABAEIADADIAEADIAGACIAKAEQAJACAHAEQAGADAEACQAFAFACAGQACAGAAAGQAAALgFAIQgGAIgIAFQgKAFgMAAQgLAAgMgGg");
	this.shape_6.setTransform(-23,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoA7IAAh2IBPAAIgHAXIgJgBIgHAAIgKAAIgYAAIAAAZIAWAAIAHAAIAIAAIALgBIgHAVIgpAAIAAAeIAbAAIAFAAIAEAAIAJAAIAOgBIgGAWg");
	this.shape_7.setTransform(-32.4,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaA+IgJgBIgKgDIAAgIIABgHIAAgIIAAhNIAAgDIAAgHIAAgCIgBgEQAHgCAGAAIAPgBQAPAAALAFQANAFAIALQAIAJAEAKQAEALAAAKQAAANgFAMQgFANgJAIQgJAIgLAEQgKAEgOAAIgJAAgAgXAqIALAAIAHgBIAFgCQAMgGAGgJQAHgKAAgNQAAgLgGgKQgFgJgLgFQgHgGgNAAIgGAAg");
	this.shape_8.setTransform(-43.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-12.8,103.2,25.6);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B9322").s().rr(-72,-16,144,32,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-16,144,32);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#644423").s().p("AgiA1IAAhpIBDAAIgFAOIguAAIAAAeIAVAAIAIAAIAGAAIAHAAIgEAMIgmAAIAAAjIAdAAIAFAAIAHAAIAMgBIgEAPg");
	this.shape.setTransform(28.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#644423").s().p("AgHA1IABgKIAAgFIAAgDIAAhDIAAgJIAAgFIAAgGIAOAAIAAAHIgBAGIAAAFIAABFIAAAGIAAAGIABAGg");
	this.shape_1.setTransform(21.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#644423").s().p("AgIBCIAFgHIABgEIgBgFIgFgFIAIgGQAFADABAEQACADAAAEQABAFgDAEQgDAEgDAEgAgIAjIABgFIAAgDIAAgFIAAgDIAAhLIgNAAIgEAAIgFAAIgEAAIgFABIAEgOIBJAAIgFAOIgLgBIgGAAIgCAAIgJAAIAABNIAAAHIAAACIAAABIAAACIAAACg");
	this.shape_2.setTransform(16,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#644423").s().p("AAdA1IgOgmIgdAAIgOAmIgQAAIAohpIAJAAIAoBpgAAKABIgKgbIgKAbIAUAAg");
	this.shape_3.setTransform(7.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#644423").s().p("AgEA3IgihYIgCgGIgCgDIgCgGIAQgFIABAEIABADIAAADIACAFIAYBDIAZhFIABgDIACgHIARAAIgDAIIgDAEIgBAEIgjBZg");
	this.shape_4.setTransform(-1.8,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#644423").s().p("AgbAwQgMgHgHgNQgHgMgBgQQAAgJAEgLQAEgKAIgIQAIgIAKgEQAKgEAKAAQAQAAAMAHQAMAIAIAMQAHANAAAOQAAAPgIANQgHAMgMAHQgNAIgPAAQgOAAgNgHgAgTgjQgJAGgGAJQgFAKAAAKQAAAMAFAJQAGAKAJAFQAJAGAKAAQALgBAKgFQAJgGAFgJQAGgKAAgLQAAgKgGgKQgFgJgJgGQgJgFgMAAQgKAAgJAFg");
	this.shape_5.setTransform(-12.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#644423").s().p("AAeA1Ig0hKIAAA7IAAAFIAAAFIABAFIgRAAIABgGIAAgDIAAgFIAAgDIAAhYIAJAAIA0BIIAAg3IAAgDIAAgFIgBgEIAAgFIAQAAIgBAJIAAAEIAAADIAABZg");
	this.shape_6.setTransform(-23.6,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#644423").s().p("AgHA1IABgKIAAgFIAAgDIAAhDIAAgJIAAgFIgBgGIAPAAIgBAHIAAAGIAAAFIAABFIAAAGIAAAGIAAAGg");
	this.shape_7.setTransform(-30.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,-11.4,68.9,22.9);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#644423").ss(1,0,0,3,true).p("AGQBuIsfAAIAAjbIMfAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-12,82,24);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A962B").s().p("AiBATIAAglIEDAAIAAAlg");
	this.shape.setTransform(-13,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-2,26,4);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D921E").s().p("Ag1BPIAAidIBpAAIgKAdIgLAAIgKAAIgOAAIgfAAIAAAhIAeAAIAIAAIALAAIAPgCIgJAdIg3AAIAAAoIAlAAIAFAAIAHAAIALgBIASgBIgHAeg");
	this.shape.setTransform(46.8,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D921E").s().p("AgcBLQgPgIgOgPIAVgVQAKAMAJAGQAJAFAKAAQALAAAIgGQAHgFAAgJQAAgGgFgFQgFgEgKgEIgWgHIgMgFIgJgEQgHgGgEgJQgEgJAAgKQAAgNAHgLQAGgKAMgGQAMgGANAAQAJAAAKACQAJADAHAFIAIAGIAIAKIgRAWIgNgMIgKgGQgFgCgFAAQgJAAgGAFQgHAGAAAIIABAGQABACADACIAFADIAIADIAOAFQAMAEAJAEQAIAEAFAEQAHAHADAHQADAIAAAJQAAAOgHALQgHALgNAGQgMAGgQAAQgQAAgPgHg");
	this.shape_1.setTransform(32.5,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D921E").s().p("AgcBLQgPgIgOgPIAVgVQAKAMAJAGQAJAFAKAAQALAAAIgGQAHgFAAgJQAAgGgFgFQgFgEgKgEIgWgHIgMgFIgJgEQgHgGgEgJQgEgJAAgKQAAgNAHgLQAGgKAMgGQAMgGANAAQAJAAAKACQAJADAHAFIAIAGIAIAKIgRAWIgNgMIgKgGQgFgCgFAAQgJAAgGAFQgHAGAAAIIABAGQABACADACIAFADIAIADIAOAFQAMAEAJAEQAIAEAFAEQAHAHADAHQADAIAAAJQAAAOgHALQgHALgNAGQgMAGgQAAQgQAAgPgHg");
	this.shape_2.setTransform(19.3,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D921E").s().p("Ag1BPIAAidIBpAAIgKAdIgLAAIgKAAIgOAAIgfAAIAAAhIAeAAIAIAAIALAAIAPgCIgJAdIg3AAIAAAoIAlAAIAFAAIAHAAIALgBIASgBIgHAeg");
	this.shape_3.setTransform(6.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D921E").s().p("AApBPIhEhfIAAA7IAAALIAAALIABAOIggAAIABgKIAAgHIAAgIIAAiEIASAAIBEBgIAAhHIAAgFIAAgJIgBgLIAeAAIAACdg");
	this.shape_4.setTransform(-8.3,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D921E").s().p("AggBJQgQgIgIgOQgJgPAAgUIAAhEIAAgEIgBgKIAAgGIAAgJIAfAAIAAAQIAAALIAAA/IAAANIABAIIADAHQAFAIAJAEQAJAFAJAAQAKAAAIgEQAIgDAFgHQADgFABgGQACgHAAgKIAAhEIgBgEIAAgJIAAgEIgBgIIAfAAIAAALIgBAKIAABHQAAAOgCAKQgCAKgEAIQgJANgOAIQgPAHgSABQgTgBgPgIg");
	this.shape_5.setTransform(-24.6,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D921E").s().p("Ag1BPIAAidIBpAAIgKAdIgLAAIgKAAIgOAAIgfAAIAAAhIAeAAIAIAAIALAAIAPgCIgJAdIg3AAIAAAoIAlAAIAFAAIAHAAIALgBIASgBIgHAeg");
	this.shape_6.setTransform(-39.4,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D921E").s().p("AgXBnIgJgDIAIgbIAFACIAFABQAFAAAEgDQADgDACgEIACgHIABgLIAAiIIAAgCIgBgEIAAgIIAfAAIAAAEIAAAEIgBAFIAAADIAAB0IAAAVIgCAPQgBAGgDAEQgGANgMAHQgJAIgPAAIgHgBg");
	this.shape_7.setTransform(-52,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-16.3,110.3,32.7);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D921E").s().p("AAWBIIgGgIIgEgFIgkgoIAKgTIACAAIABAAQANAAAJgGQAIgIAAgNQAAgNgKgIQgJgIgPgBIgJABIAABsIAAALIABAOIgfAAIAAgNIAAgJIAAhvIAAgEIAAgIIAAgEIgBgIIANgDIALgBIALAAQAOAAAIACQAKACAIAEQANAIAHANQAIANAAAQQAAALgEAJQgDAHgIAHIgKAHQgFADgJACIAWAVIAIAJIARAOIgXAVIgLgNg");
	this.shape.setTransform(28.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D921E").s().p("AgPBPIABgMIABgKIAAgMIAAhfIAAgGIgBgLIAAgFIAAgGIAeAAIgBAMIgBAKIAAAJIAABqIAAAIIABAMg");
	this.shape_1.setTransform(17.5,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D921E").s().p("AABAUIgkA6IgmAAIA5hRIgxg/IAYgTIApA4IAhgzIAnAAIg2BMIA4BGIgaAUg");
	this.shape_2.setTransform(6.5,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D921E").s().p("AgPBPIABgMIABgKIAAgMIAAhfIAAgGIgBgLIAAgFIAAgGIAeAAIgBAMIgBAKIAAAJIAABqIAAAIIABAMg");
	this.shape_3.setTransform(-4.7,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D921E").s().p("AgyBPIAAiVIAAgCIAAgDIAAgBIgBgCIAhAAIgBANIgBALIAAALIAABeIAmAAIAKgBIAJAAIAGAAIAJgBIgJAeg");
	this.shape_4.setTransform(-14.2,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D921E").s().p("Ag1BPIAAidIBpAAIgKAdIgLAAIgKAAIgOAAIgfAAIAAAhIAeAAIAIAAIALAAIAPgCIgJAdIg3AAIAAAoIAlAAIAFAAIAHAAIALgBIASgBIgHAeg");
	this.shape_5.setTransform(-27.4,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-16.3,73.6,32.7);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#644423").s().p("AgTAkQgJgGgFgJQgFgJAAgMQAAgKAFgKQAGgJAJgFQAJgGAKAAQAJAAAIAEQAJAEAFAIIAEAIIACAJIABAKIg9AAQACALAGAFQAGAGAIABQAIAAAGgEQAHgDAGgIIAMAKIgJAJIgIAGIgLADIgLACQgKAAgJgFgAAVgJIgCgHIgEgEIgGgEIgIgBQgGAAgFADQgGAFgEAIIApAAIAAAAg");
	this.shape.setTransform(38.8,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#644423").s().p("AgTAoIABgFIAAgFIAAgJIAAggIAAgBIAAgBIAAgCIgBgJIgDgKIAOgFIACAFIABADIABAEQADgGACgCQAEgDAFABIAGAAIAHAEIgFAPIgGgCIgEgBQgGAAgCAFQgCAGAAAKIAAAXIAAAGIABALg");
	this.shape_1.setTransform(31.8,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#644423").s().p("AAQAeQgFAFgFACQgFACgEAAQgJABgHgEQgGgEgDgGQgEgHgBgIQABgIAEgFQAEgGAGgEQAIgDAJAAQADAAAEACQAFACADACIgBgGIgCgFQgCgCgEgCIgHgBIgGAAIgFACIgJAFIgGgOIAJgEIAJgDIAJgBQAMABAJAHQAJAJgBAOIAAAPIAAABIABAKIACAIIACAKIgOAFgAgMABQgFAEAAAGQAAAHAFADQAEAFAHAAQAGAAAFgFQAEgEABgGQgBgGgEgEQgFgCgGAAQgHAAgEACg");
	this.shape_2.setTransform(24.5,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#644423").s().p("AASAgQgFAEgGABQgFACgEAAQgJAAgIgEQgHgEgEgHIgDgIIgBgMIAAgrIARAAIgBAJIAAAHIAAAJIAAAVQAAAIAFAFQAEAEAHABIAGgCIALgGIAAgpIAAgHIgBgEIAAgEIARAAIAAAIIAAAGIAAAGIAAAjIAAAHIAEAMIgOAFg");
	this.shape_3.setTransform(16.3,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#644423").s().p("AgIA7IABgLIABgHIAAgFIAAhIIAAgEIgBgGIAAgMIAQAAIgBALIAAAHIgBADIAABLIAAAKIABAFIAAAGg");
	this.shape_4.setTransform(9.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#644423").s().p("AgUAkQgJgGgFgKQgFgJgBgLQABgKAFgKQAFgJAKgFQAJgGAKAAQALAAAKAFQAJAGAFAIQAGAJAAAMQAAAKgGAKQgFAJgJAGQgKAGgLAAQgKAAgKgFgAgMgWQgFAEgEAGQgDAGAAAGQAAAHAEAFQADAHAGADQAFAEAGAAQAHAAAFgEQAGgDAEgHQADgGAAgGQAAgGgDgHQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(2.8,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#644423").s().p("AgkA4IABgLIAAgHIAAgEIAAhHIAAgCIAAgDIAAgFIANgFIAKgCIAJgBQAIAAAIAEQAIADAGAGQAFAGADAHQACAHAAAIQAAAMgFAHQgFAJgJAGQgJAFgJAAIgKgBIgJgEIAAAbIAAAFIAAACIAAACgAgLgoIgIACIAAAqIAJAFQAEABAFAAQAJAAAHgHQAGgFAAgLQAAgNgHgHQgIgHgKAAIgHAAg");
	this.shape_6.setTransform(-6.5,3.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#644423").s().p("AAQAIIgFAAIgUAAIgGAAIgBAAIgDAAIAAgPIADAAIACAAIAFAAIATAAIAEAAIAEAAIACAAIAAAPIgEAAg");
	this.shape_7.setTransform(-14.1,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#644423").s().p("AgHA3IABgMIAAgHIAAgnIAAgDIAAgFIgBgKIAQAAIgBAMIAAAIIAAAlIAAADIAAAFIABAEIAAAHgAgGgjQgEgDAAgFQAAgEAEgEQADgDADAAQAEAAADAEQAEADAAAEQAAAFgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_8.setTransform(-19.1,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#644423").s().p("AgGAvQgFgHAAgOIAAgiIgKAAIAAgPIAKAAIAAgIIgBgHIAAgGIAAgJIAPAAIAAAIIgBAHIAAAGIAAAJIATAAIAAAPIgTAAIAAAcIABAMQAAAEACACQACABADAAIADAAIAFgCIAEAOIgHADIgGAAQgJAAgGgHg");
	this.shape_9.setTransform(-24.1,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#644423").s().p("AASAoIAAgIIABgHIABgGIAAgaQAAgIgFgEQgFgFgIAAQgDAAgEACQgFACgEAEIAAApIAAAHIABAIIgSAAIABgFIAAgGIAAgGIAAglIAAgGIgBgGIgEgIIAPgFIABAEIACADQAGgEAEgBQAFgBAFAAQAJAAAIADQAGAEAFAIQADADAAAFIABAMIAAAgIAAAGIAAAFg");
	this.shape_10.setTransform(-31.2,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#644423").s().p("AAQAeQgEAFgFACQgGACgFAAQgIABgGgEQgHgEgDgGQgFgHAAgIQAAgIAFgFQADgGAIgEQAGgDAKAAQACAAAGACQAEACACACIgBgGIgBgFQgCgCgEgCIgIgBIgFAAIgGACIgJAFIgFgOIAJgEIAJgDIAJgBQANABAIAHQAIAJAAAOIAAAPIAAABIABAKIABAIIAEAKIgPAFgAgNABQgEAEAAAGQAAAHAEADQAFAFAIAAQAFAAAFgFQAEgEABgGQgBgGgEgEQgFgCgGAAQgHAAgFACg");
	this.shape_11.setTransform(-39.7,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-12.6,91.5,25.3);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#644423").s().p("AgTAkQgJgGgFgJQgFgJAAgMQAAgKAFgKQAGgJAJgFQAJgGAKAAQAJAAAIAEQAJAEAFAIIAEAIIACAJIABAKIg9AAQACALAGAFQAGAGAIABQAIAAAGgEQAHgDAGgIIAMAKIgJAJIgIAGIgLADIgLACQgKAAgJgFgAAVgJIgCgHIgEgEIgGgEIgIgBQgGAAgFADQgGAFgEAIIApAAIAAAAg");
	this.shape.setTransform(69.2,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#644423").s().p("AgHA3IABgMIAAgHIAAgnIAAgDIAAgFIgBgKIAQAAIgBAMIAAAIIAAAlIAAADIAAAFIABAEIAAAHgAgGgjQgEgDAAgFQAAgEAEgEQADgDADAAQAEAAADAEQAEADAAAEQAAAFgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_1.setTransform(62.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#644423").s().p("AgHBEIAGgIIABgEIgCgFQgBgDgEgDIAKgIIAHAIQACAEAAAFQAAAFgDAEQgDAFgGAFgAgGAcQgFgHAAgOIAAgiIgKAAIAAgPIAKAAIAAgIIgBgHIAAgGIAAgJIAPAAIAAAIIgBAHIAAAGIAAAJIATAAIAAAPIgTAAIAAAcIABAMQAAAEACACQACABADAAIADAAIAFgCIAEAOIgHADIgGAAQgJAAgGgHg");
	this.shape_2.setTransform(57.4,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#644423").s().p("AgQAkQgJgGgGgJQgFgJAAgLQAAgKAGgKQAFgKAJgFQAKgGAKAAIAJABQAFABAFADIAKAHIgJANQgFgFgFgCQgEgCgGAAQgGAAgGADQgFAEgEAGQgDAGAAAFQAAAHADAGQADAGAGADQAFAEAFAAQAGAAAGgDQAGgDAGgHIALAMQgGAGgGADQgGAEgFABQgFACgHAAQgJAAgJgFg");
	this.shape_3.setTransform(50.9,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#644423").s().p("AgTAkQgJgGgFgJQgFgJAAgMQAAgKAFgKQAGgJAJgFQAJgGAKAAQAJAAAIAEQAJAEAFAIIAEAIIACAJIABAKIg9AAQACALAGAFQAGAGAIABQAIAAAGgEQAHgDAGgIIAMAKIgJAJIgIAGIgLADIgLACQgKAAgJgFgAAVgJIgCgHIgEgEIgGgEIgIgBQgGAAgFADQgGAFgEAIIApAAIAAAAg");
	this.shape_4.setTransform(41.7,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#644423").s().p("AgGAvQgFgHAAgOIAAgiIgKAAIAAgPIAKAAIAAgIIgBgHIAAgGIAAgJIAPAAIAAAIIgBAHIAAAGIAAAJIATAAIAAAPIgTAAIAAAcIABAMQAAAEACACQACABADAAIADAAIAFgCIAEAOIgHADIgGAAQgJAAgGgHg");
	this.shape_5.setTransform(34.2,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#644423").s().p("AgUAkQgJgGgFgKQgFgJgBgLQABgKAFgKQAFgJAKgFQAJgGAKAAQALAAAKAFQAJAGAFAIQAGAJAAAMQAAAKgGAKQgFAJgJAGQgKAGgLAAQgKAAgKgFgAgMgWQgFAEgEAGQgDAGAAAGQAAAHAEAFQADAHAGADQAFAEAGAAQAHAAAFgEQAGgDAEgHQADgGAAgGQAAgGgDgHQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(26.9,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#644423").s().p("AgTAoIABgFIAAgFIAAgJIAAggIAAgBIAAgBIAAgCIgBgJIgDgKIAOgFIACAFIABADIABAEQADgGACgCQAEgDAFABIAGAAIAHAEIgFAPIgGgCIgEgBQgGAAgCAFQgCAGAAAKIAAAXIAAAGIABALg");
	this.shape_7.setTransform(19.7,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#644423").s().p("AgkA9IABgKIAAgHIAAhkIAKgCIAIgBIAIgBQAMABALAFQALAFAGAKQAGAKAAANQAAAMgGAHQgGAKgJAGQgKAFgKABIgEgBIgHAAIgEAAIAAAYIAAACIAAAEIABAHgAgTgsIAAA0IAGABIAGAAQAHAAAGgDQAHgEAEgDQAEgGAAgIQgBgNgIgIQgJgIgMAAIgFAAIgFAAg");
	this.shape_8.setTransform(12,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#644423").s().p("AgEAoIAAgjIgmAAIAAgKIAmAAIAAgjIAJAAIAAAjIAmAAIAAAKIgmAAIAAAjg");
	this.shape_9.setTransform(-1,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#644423").s().p("AgTAkQgJgGgFgJQgFgJAAgMQAAgKAFgKQAGgJAJgFQAJgGAKAAQAJAAAIAEQAJAEAFAIIAEAIIACAJIABAKIg9AAQACALAGAFQAGAGAIABQAIAAAGgEQAHgDAGgIIAMAKIgJAJIgIAGIgLADIgLACQgKAAgJgFgAAVgJIgCgHIgEgEIgGgEIgIgBQgGAAgFADQgGAFgEAIIApAAIAAAAg");
	this.shape_10.setTransform(-13.8,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#644423").s().p("AgTAoIABgFIAAgFIAAgJIAAggIAAgBIAAgBIAAgCIgBgJIgDgKIAOgFIACAFIABADIABAEQADgGACgCQAEgDAFABIAGAAIAHAEIgFAPIgGgCIgEgBQgGAAgCAFQgCAGAAAKIAAAXIAAAGIABALg");
	this.shape_11.setTransform(-20.9,1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#644423").s().p("AAQAeQgFAFgFACQgFACgEAAQgJABgHgEQgGgEgDgGQgEgHgBgIQABgIAEgFQAEgGAGgEQAIgDAJAAQADAAAEACQAFACADACIgBgGIgCgFQgCgCgEgCIgHgBIgGAAIgFACIgJAFIgGgOIAJgEIAJgDIAJgBQAMABAJAHQAJAJgBAOIAAAPIAAABIABAKIACAIIACAKIgOAFgAgMABQgFAEAAAGQAAAHAFADQAEAFAHAAQAGAAAFgFQAEgEABgGQgBgGgEgEQgFgCgGAAQgHAAgEACg");
	this.shape_12.setTransform(-28.1,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#644423").s().p("AgTAoIABgFIAAgFIAAgJIAAggIAAgBIAAgBIAAgCIgBgJIgDgKIAOgFIACAFIABADIABAEQADgGACgCQAEgDAFABIAGAAIAHAEIgFAPIgGgCIgEgBQgGAAgCAFQgCAGAAAKIAAAXIAAAGIABALg");
	this.shape_13.setTransform(-34.5,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#644423").s().p("AAQAeQgEAFgGACQgFACgFAAQgIABgHgEQgGgEgEgGQgDgHAAgIQAAgIADgFQAFgGAGgEQAIgDAIAAQAEAAAEACQAFACACACIgBgGIgBgFQgCgCgEgCIgIgBIgFAAIgFACIgJAFIgGgOIAJgEIAIgDIAJgBQAOABAIAHQAJAJAAAOIAAAPIAAABIAAAKIABAIIADAKIgNAFgAgNABQgEAEAAAGQAAAHAEADQAFAFAHAAQAGAAAFgFQAFgEAAgGQAAgGgFgEQgFgCgGAAQgHAAgFACg");
	this.shape_14.setTransform(-41.8,2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#644423").s().p("AgkA4IABgLIAAgHIAAgEIAAhHIAAgCIAAgDIAAgFIANgFIAKgCIAJgBQAIAAAIAEQAIADAGAGQAFAGADAHQACAHAAAIQAAAMgFAHQgFAJgJAGQgJAFgJAAIgKgBIgJgEIAAAbIAAAFIAAACIAAACgAgLgoIgIACIAAAqIAJAFQAEABAFAAQAJAAAHgHQAGgFAAgLQAAgNgHgHQgIgHgKAAIgHAAg");
	this.shape_15.setTransform(-50.3,3.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#644423").s().p("AgTAkQgJgGgFgJQgFgJAAgMQAAgKAFgKQAGgJAJgFQAJgGAKAAQAJAAAIAEQAJAEAFAIIAEAIIACAJIABAKIg9AAQACALAGAFQAGAGAIABQAIAAAGgEQAHgDAGgIIAMAKIgJAJIgIAGIgLADIgLACQgKAAgJgFgAAVgJIgCgHIgEgEIgGgEIgIgBQgGAAgFADQgGAFgEAIIApAAIAAAAg");
	this.shape_16.setTransform(-59.8,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#644423").s().p("AAWA6IgDgDIgFgGIgFgGIgegiIADgGIAHABIAEAAQALAAAIgFQAHgIABgMQgBgIgEgGQgEgGgHgDQgGgEgKAAIgEABIgGAAIAABbIAAAHIAAADIAAAEIgRAAIABgFIAAgEIAAgHIAAgEIAAhWIAAgLIAIgCIAHgBIAJAAQALAAAGACQAHABAGAEQAJAFAFAJQAFAKAAALQAAAQgJAIQgIAKgQACIAUAUIAGAFIAFAEIAHAGIgNAMIgFgFg");
	this.shape_17.setTransform(-69,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.1,-12.6,152.3,25.3);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#644423").s().p("AgHAiQgDgEAAgEQAAgFADgDQAEgDADAAQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAQgDAAgEgDgAgGgRQgDgDAAgEQAAgFADgDQADgDADgBQAFABADADQADADAAAFQAAAFgDACQgDADgFAAQgDAAgDgDg");
	this.shape.setTransform(91.5,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#644423").s().p("AgTAkQgJgGgFgJQgFgJAAgMQAAgKAFgKQAGgJAJgFQAJgGAKAAQAJAAAIAEQAJAEAFAIIAEAIIACAJIABAKIg9AAQACALAGAFQAGAGAIABQAIAAAGgEQAHgDAGgIIAMAKIgJAJIgIAGIgLADIgLACQgKAAgJgFgAAVgJIgCgHIgEgEIgGgEIgIgBQgGAAgFADQgGAFgEAIIApAAIAAAAg");
	this.shape_1.setTransform(84.5,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#644423").s().p("AgLA3IgLgFIgFgEIgHgHIAMgKQAFAHAFADQAGAEAGAAQAFAAAFgCQAFgCACgEQACgCABgDIACgMQgFAEgFABQgFACgGAAQgKAAgKgGQgJgFgFgJQgFgHgBgMQABgMAFgJQAFgKAKgFQAJgGAKAAIAMABIAMAEIAPAHIgDAKIgBAFIAAAGIAAAJIAAAHIABAHIAAANIABADIAAACQAAATgKAKQgKAKgSAAIgLgCgAgHgnQgFACgEAFQgDADgCAFQgCAFAAAFQAAAHADAGQAEAEAFAEQAGADAGAAQAFAAAFgCQAGgBAEgDIgBgKIAAgIIAAgJIABgNIgKgEIgJgBQgEAAgFACg");
	this.shape_2.setTransform(74.7,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#644423").s().p("AAQAeQgEAFgGACQgFACgFAAQgIABgHgEQgGgEgEgGQgDgHAAgIQAAgIADgFQAFgGAGgEQAIgDAIAAQAEAAAEACQAFACACACIgBgGIgBgFQgCgCgEgCIgIgBIgFAAIgFACIgJAFIgGgOIAJgEIAIgDIAJgBQAOABAIAHQAJAJAAAOIAAAPIAAABIAAAKIABAIIADAKIgNAFgAgNABQgEAEAAAGQAAAHAEADQAFAFAHAAQAGAAAFgFQAFgEAAgGQAAgGgFgEQgFgCgGAAQgHAAgFACg");
	this.shape_3.setTransform(65.8,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#644423").s().p("AAQAIIgFAAIgUAAIgGAAIgCAAIgCAAIAAgPIADAAIACAAIAFAAIASAAIAGAAIACAAIADAAIAAAPIgEAAg");
	this.shape_4.setTransform(59,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#644423").s().p("AgHA3IABgMIAAgHIAAgnIAAgDIAAgFIgBgKIAQAAIgBAMIAAAIIAAAlIAAADIAAAFIABAEIAAAHgAgGgjQgEgDAAgFQAAgEAEgEQADgDADAAQAEAAADAEQAEADAAAEQAAAFgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_5.setTransform(54,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#644423").s().p("AgGAvQgFgHAAgOIAAgiIgKAAIAAgPIAKAAIAAgIIgBgHIAAgGIAAgJIAPAAIAAAIIgBAHIAAAGIAAAJIATAAIAAAPIgTAAIAAAcIABAMQAAAEACACQACABADAAIADAAIAFgCIAEAOIgHADIgGAAQgJAAgGgHg");
	this.shape_6.setTransform(49,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#644423").s().p("AASAoIABgIIAAgHIABgGIAAgaQgBgIgEgEQgFgFgIAAQgDAAgEACQgFACgEAEIAAApIAAAHIABAIIgSAAIABgFIAAgGIAAgGIAAglIAAgGIgBgGIgDgIIAOgFIABAEIACADQAGgEAFgBQAEgBAFAAQAJAAAIADQAGAEAFAIQADADAAAFIABAMIAAAgIAAAGIABAFg");
	this.shape_7.setTransform(41.9,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#644423").s().p("AAQAeQgFAFgEACQgGACgEAAQgJABgGgEQgHgEgDgGQgFgHAAgIQAAgIAFgFQADgGAIgEQAHgDAJAAQADAAAFACQAEACADACIgBgGIgCgFQgCgCgEgCIgHgBIgGAAIgGACIgJAFIgFgOIAJgEIAJgDIAJgBQAMABAJAHQAJAJgBAOIAAAPIAAABIABAKIACAIIADAKIgPAFgAgMABQgFAEAAAGQAAAHAFADQAEAFAIAAQAFAAAFgFQAEgEABgGQgBgGgEgEQgFgCgGAAQgHAAgEACg");
	this.shape_8.setTransform(33.4,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#644423").s().p("AgTAkQgJgGgFgJQgFgJAAgMQAAgKAFgKQAGgJAJgFQAJgGAKAAQAJAAAIAEQAJAEAFAIIAEAIIACAJIABAKIg9AAQACALAGAFQAGAGAIABQAIAAAGgEQAHgDAGgIIAMAKIgJAJIgIAGIgLADIgLACQgKAAgJgFgAAVgJIgCgHIgEgEIgGgEIgIgBQgGAAgFADQgGAFgEAIIApAAIAAAAg");
	this.shape_9.setTransform(21.1,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#644423").s().p("AASAoIAAgIIABgHIAAgGIAAgaQABgIgFgEQgFgFgIAAQgDAAgFACQgEACgEAEIAAApIAAAHIAAAIIgRAAIAAgFIABgGIAAgGIAAglIAAgGIgCgGIgDgIIAQgFIABAEIABADQAGgEAEgBQAFgBAEAAQAKAAAHADQAIAEAEAIQACADABAFIABAMIAAAgIAAAGIABAFg");
	this.shape_10.setTransform(11.7,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#644423").s().p("AASAgQgFAEgFABQgFACgFAAQgJAAgHgEQgIgEgEgHIgDgIIgBgMIAAgrIARAAIgBAJIAAAHIAAAJIAAAVQAAAIAEAFQAFAEAIABIAGgCIAKgGIAAgpIAAgHIAAgEIAAgEIARAAIgBAIIgBAGIAAAGIAAAjIACAHIADAMIgOAFg");
	this.shape_11.setTransform(3.2,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#644423").s().p("AgHA3IABgMIAAgHIAAgnIAAgDIAAgFIgBgKIAQAAIgBAMIAAAIIAAAlIAAADIAAAFIABAEIAAAHgAgGgjQgEgDAAgFQAAgEAEgEQADgDADAAQAEAAADAEQAEADAAAEQAAAFgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_12.setTransform(-3.6,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#644423").s().p("AgHBEIAGgIIABgEIgCgFQgBgDgEgDIAKgIIAHAIQACAEAAAFQAAAFgDAEQgDAFgGAFgAgGAcQgFgHAAgOIAAgiIgKAAIAAgPIAKAAIAAgIIgBgHIAAgGIAAgJIAPAAIAAAIIgBAHIAAAGIAAAJIATAAIAAAPIgTAAIAAAcIABAMQAAAEACACQACABADAAIADAAIAFgCIAEAOIgHADIgGAAQgJAAgGgHg");
	this.shape_13.setTransform(-8.6,2.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#644423").s().p("AgQAkQgJgGgGgJQgFgJAAgLQAAgKAGgKQAFgKAJgFQAKgGAKAAIAJABQAFABAFADIAKAHIgJANQgFgFgFgCQgEgCgGAAQgGAAgGADQgFAEgEAGQgDAGAAAFQAAAHADAGQADAGAGADQAFAEAFAAQAGAAAGgDQAGgDAGgHIALAMQgGAGgGADQgGAEgFABQgFACgHAAQgJAAgJgFg");
	this.shape_14.setTransform(-15.1,2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#644423").s().p("AAQAeQgEAFgGACQgFACgFAAQgIABgHgEQgGgEgEgGQgDgHAAgIQAAgIADgFQAFgGAGgEQAIgDAIAAQAEAAAEACQAFACACACIgBgGIgBgFQgCgCgEgCIgIgBIgFAAIgFACIgJAFIgGgOIAJgEIAIgDIAJgBQAOABAIAHQAJAJAAAOIAAAPIAAABIAAAKIABAIIADAKIgNAFgAgNABQgEAEAAAGQAAAHAEADQAFAFAHAAQAGAAAFgFQAFgEAAgGQAAgGgFgEQgFgCgGAAQgHAAgFACg");
	this.shape_15.setTransform(-23.8,2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#644423").s().p("AAQAuQgFAFgFACQgFACgEAAQgJAAgHgDQgGgEgEgHQgDgGAAgIQAAgIADgHQAEgGAHgEQAHgCAJAAQADAAAFABQAFABACADIAAgFIgCgEQgCgDgEgBIgIgBIgFAAIgFACIgJAFIgGgOIAJgFIAIgCIAJgBQAOAAAIAIQAJAIAAAMIAAASIAAAAIAAAKIACAJIACAKIgNAFgAgMARQgFAEAAAGQAAAGAFAEQAEAEAHAAQAGAAAFgEQAEgEABgGQgBgHgEgDQgFgEgGAAQgHAAgEAEgAgKggQgGgDgEgFIgEgGIgDgJIAPAAQADAGADADQADADAEgBQAFABADgDQADgCADgHIAPAAIgDAJIgEAGQgEAFgGADQgGACgGAAQgFAAgGgCg");
	this.shape_16.setTransform(-35.6,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#644423").s().p("AgIA7IABgLIABgHIAAgFIAAhIIAAgEIgBgGIAAgMIAQAAIgBALIAAAHIgBADIAABLIAAAKIABAFIAAAGg");
	this.shape_17.setTransform(-41.6,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#644423").s().p("AgLA8IgLgEIgPgGIABgEIAAgEIAAgGIAAhSIAAgGIgBgHIASAAIgBAJIAAAEIAAACIAAAdIAKgEIAJAAQAHAAAIADQAIADAGAHQAFAFACAFQADAHAAAIQAAAMgGAJQgFAKgJAFQgJAFgKAAIgKAAgAgJgDIgLADIAAAoIAKAEIAIABQAFAAAHgDQAFgEAEgGQADgGAAgHQAAgHgDgGQgDgGgFgBQgHgDgFAAIgIABg");
	this.shape_18.setTransform(-48.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#644423").s().p("AASAgQgFAEgFABQgGACgEAAQgJAAgHgEQgIgEgEgHIgDgIIgBgMIAAgrIARAAIgBAJIAAAHIAAAJIAAAVQAAAIAEAFQAFAEAIABIAFgCIALgGIAAgpIAAgHIAAgEIAAgEIAQAAIAAAIIgBAGIAAAGIAAAjIABAHIAEAMIgOAFg");
	this.shape_19.setTransform(-57.2,2.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#644423").s().p("AgPA3QgKgFgFgJQgFgJgBgMQABgMAFgIQAFgIAKgFQAJgGAKAAIAHABIAIACIAAgiIAAgBIAAgDIAAgGIASAAIgBAKIgBAHIAABeIgLAGIgKADIgJABQgLAAgJgGgAgHgBQgGABgDAGQgEAGAAAIQAAAHADAGQAEAGAGADQAGAEAGAAIAHgBIAHgDIAAgrIgHgDIgHgBQgGAAgGAEg");
	this.shape_20.setTransform(-66.6,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#644423").s().p("AASAgQgFAEgGABQgEACgFAAQgJAAgIgEQgHgEgEgHIgDgIIgBgMIAAgrIARAAIgBAJIAAAHIAAAJIAAAVQAAAIAFAFQAEAEAHABIAHgCIAKgGIAAgpIAAgHIgBgEIAAgEIASAAIgBAIIAAAGIAAAGIAAAjIABAHIADAMIgOAFg");
	this.shape_21.setTransform(-78.9,2.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#644423").s().p("AgVA2QgOgIgJgOQgIgOAAgRQAAgRAJgOQAIgOAOgJQAOgIAQAAQAIAAAIACQAGABAHAEIAGADIAHAGIgKANQgJgHgHgDQgHgEgJAAQgLABgLAGQgKAHgGAKQgHALABAMQgBANAHALQAGAKAJAGQAKAGAMAAQAKAAAIgEQAJgDAIgJIAKAOIgQAKQgGAEgHACQgHABgJAAQgPAAgOgIg");
	this.shape_22.setTransform(-89.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,-12.6,194.9,25.3);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#644423").s().p("AgLA/IAAgKIABgJIAAgJIAAhLIAAgEIAAgJIgBgDIAAgGIAXAAIAAAKIgBAIIAAAHIAABUIAAAGIABAKg");
	this.shape.setTransform(71.4,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#644423").s().p("AgZA6QgMgGgHgMQgHgMAAgPIAAg1IAAgFIgBgHIAAgEIAAgIIAZAAIgBAMIAAAJIAAAxIABALIABAHIACAFQAEAGAHAEQAHADAHAAQAIAAAGgCQAGgDAEgFQACgEACgFIABgOIAAg2IAAgCIgBgHIAAgEIAAgGIAYAAIAAAJIAAAIIAAA4QAAALgCAHQgCAJgEAFQgGALgMAHQgLAFgPABQgOAAgMgHg");
	this.shape_1.setTransform(61.8,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#644423").s().p("AgnA/IAAh2IAAgBIAAgDIAAgBIgBgCIAaAAIgBALIgBAJIAAAIIAABKIAeAAIAIAAIAHAAIAEgBIAIAAIgHAYg");
	this.shape_2.setTransform(50.3,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#644423").s().p("AgZA6QgMgGgHgMQgHgMAAgPIAAg1IAAgFIgBgHIAAgEIAAgIIAZAAIgBAMIAAAJIAAAxIABALIABAHIACAFQAEAGAHAEQAHADAHAAQAIAAAGgCQAGgDAEgFQACgEACgFIABgOIAAg2IAAgCIgBgHIAAgEIAAgGIAYAAIAAAJIAAAIIAAA4QAAALgCAHQgCAJgEAFQgGALgMAHQgLAFgPABQgOAAgMgHg");
	this.shape_3.setTransform(37.9,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#644423").s().p("AAgA/Ig2hMIAAAvIABAIIAAAJIABAMIgZAAIAAgIIABgGIAAgGIAAhpIAOAAIA1BMIAAg4IAAgEIAAgHIgBgJIAYAAIAAB9g");
	this.shape_4.setTransform(24.9,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#644423").s().p("AgqA/IAAh9IBTAAIgIAYIgIgBIgIAAIgLAAIgZAAIAAAbIAYAAIAGgBIAIAAIANgBIgIAWIgrAAIAAAgIAdAAIAEAAIAFAAIAJAAIAPgBIgGAYg");
	this.shape_5.setTransform(14,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#644423").s().p("AgNA/IABgMIABgIIAAgHIAAhLIgQAAIgEAAIgGAAIgLABIAHgYIBaAAIgKAYIgKgBIgHAAIgMAAIAABmg");
	this.shape_6.setTransform(3.2,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#644423").s().p("AAfA/IgCgEIAAgCIgCgCIgBgDIgHgUIglAAIgHAVIgCAEIgBACIAAABIgBADIgaAAIAEgHIADgGIADgKIAmhmIAPAAIAlBkIAFAKIACAHIAEAIgAAMAKIgMgfIgLAfIAXAAg");
	this.shape_7.setTransform(-11.4,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#644423").s().p("AASA5IgFgGIgEgEIgcggIAIgPIACAAIABAAQAKAAAGgFQAHgFAAgLQAAgKgIgHQgHgGgLAAIgIAAIAABWIAAAIIABALIgYAAIAAgKIAAgIIAAhXIAAgDIAAgGIAAgEIgBgGIAKgCIAJgBIAJAAQALAAAGABQAIACAGAEQAKAGAGAKQAGAKAAANQAAAIgDAHQgDAGgFAFIgIAGIgMAEIARARIAHAHIANAKIgSARIgIgKg");
	this.shape_8.setTransform(-22.1,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#644423").s().p("AgoBBIABgKIABgGIAAhsIALgDIAIgBIAKgBQAIAAAFACQAIACAGADQAKAGAHAMQAFAKAAANQAAANgGAJQgGAKgLAGQgLAGgMAAIgEAAIgFAAIAAAVIAAAGIAAAEIAAAGgAgPAFIAGABIADAAQAKAAAGgGQAIgGAAgKQAAgFgEgGQgDgGgEgDQgEgCgDgBQgFgCgHAAIgDAAg");
	this.shape_9.setTransform(-33,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#644423").s().p("AgZA6QgMgGgHgMQgHgMAAgPIAAg1IAAgFIgBgHIAAgEIAAgIIAZAAIgBAMIAAAJIAAAxIABALIABAHIACAFQAEAGAHAEQAHADAHAAQAIAAAGgCQAGgDAEgFQACgEACgFIABgOIAAg2IAAgCIgBgHIAAgEIAAgGIAYAAIAAAJIAAAIIAAA4QAAALgCAHQgCAJgEAFQgGALgMAHQgLAFgPABQgOAAgMgHg");
	this.shape_10.setTransform(-45.4,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#644423").s().p("AgVA7QgNgGgLgMIAQgRQAJAKAHAEQAIAFAHAAQAIgBAGgEQAGgEAAgHQAAgFgDgEQgFgDgIgDIgRgGIgKgEIgHgDQgFgEgDgHQgDgIAAgHQAAgLAFgIQAFgIAJgGQAKgEAKAAQAIAAAGACQAIACAGAFIAGAEIAGAHIgNASIgKgKIgJgFIgHgBQgHAAgFAFQgFAEAAAGIABAFIADADIADADIAHACIAKAEQAKADAHAEQAGADAFACQAFAFACAHQADAGAAAGQAAAMgGAIQgGAJgJAFQgKAFgMAAQgMAAgMgGg");
	this.shape_11.setTransform(-57.6,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#644423").s().p("AAfA/IgCgEIAAgCIgBgCIgCgDIgHgUIglAAIgHAVIgCAEIgBACIAAABIgBADIgaAAIAEgHIADgGIADgKIAnhmIAOAAIAmBkIADAKIADAHIAEAIgAAMAKIgMgfIgLAfIAXAAg");
	this.shape_12.setTransform(-68.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-13.3,152.5,26.7);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#644423").s().p("AgLA/IAAgKIABgJIAAgJIAAhLIAAgEIAAgJIgBgDIAAgGIAXAAIAAAKIgBAIIAAAHIAABUIAAAGIABAKg");
	this.shape.setTransform(91.1,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#644423").s().p("AgLA/IAAgKIABgJIAAgJIAAhLIAAgEIAAgJIgBgDIAAgGIAXAAIAAAKIgBAIIAAAHIAABUIAAAGIABAKg");
	this.shape_1.setTransform(85.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#644423").s().p("AASA5IgFgGIgEgEIgcggIAIgPIACAAIABAAQAKAAAGgFQAHgFAAgLQAAgKgIgHQgHgGgLAAIgIAAIAABWIAAAIIABALIgYAAIAAgKIAAgIIAAhXIAAgDIAAgGIAAgEIgBgGIAKgCIAJgBIAJAAQALAAAGABQAIACAGAEQAKAGAGAKQAGAKAAANQAAAIgDAHQgDAGgFAFIgIAGIgMAEIARARIAHAHIANAKIgSARIgIgKg");
	this.shape_2.setTransform(77.9,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#644423").s().p("AAeBUIgBgDIAAgCIgBgDIgBgDIgIgUIglAAIgHAVIgCAEIgBACIAAACIgBACIgaAAIAEgHIADgGIADgJIAnhnIAPAAIAlBkIADALIADAGIAEAIgAAMAfIgMgfIgLAfIAXAAgAgVg/QgHgIgDgMIARAAQABAGAEADQAEADAFAAQAEAAAFgDQADgDACgGIAQAAQgCAMgIAIQgIAGgMAAQgMAAgJgGg");
	this.shape_3.setTransform(66.2,-2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#644423").s().p("AgZA6QgMgGgHgMQgHgMAAgPIAAg1IAAgFIgBgHIAAgEIAAgIIAZAAIgBAMIAAAJIAAAxIABALIABAHIACAFQAEAGAHAEQAHADAHAAQAIAAAGgCQAGgDAEgFQACgEACgFIABgOIAAg2IAAgCIgBgHIAAgEIAAgGIAYAAIAAAJIAAAIIAAA4QAAALgCAHQgCAJgEAFQgGALgMAHQgLAFgPABQgOAAgMgHg");
	this.shape_4.setTransform(53.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#644423").s().p("AgoA/IAAh2IAAgBIAAgDIAAgBIAAgCIAaAAIgBALIAAAJIAAAIIAABKIAdAAIAIAAIAHAAIAFgBIAHAAIgHAYg");
	this.shape_5.setTransform(42.1,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#644423").s().p("AgZA7QgNgGgJgJQgIgJgFgMQgEgLAAgMQAAgKAEgKQADgKAGgJQAGgIAJgFQAIgGAKgDQAKgDAIAAQAOAAAMAFQAMAGAKALQAIAIAEAMQAFALAAALQAAASgJAOQgJAPgPAJQgPAIgRABQgNgBgMgFgAgVglQgKAGgFAKQgGAJAAAMQAAALAGAKQAFAKAKAGQAKAGALAAQAMAAAKgGQAJgGAGgKQAGgKAAgLQAAgLgGgKQgGgKgKgGQgKgFgLAAQgLAAgKAFg");
	this.shape_6.setTransform(29.2,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#644423").s().p("AgnBBIABgKIAAgGIAAhsIALgDIAIgBIAKgBQAJAAAFACQAHACAFADQAMAGAGAMQAFAKABANQgBANgGAJQgGAKgLAGQgLAGgMAAIgEAAIgFAAIAAAVIAAAGIAAAEIAAAGgAgPAFIAGABIADAAQAJAAAHgGQAHgGAAgKQAAgFgCgGQgDgGgFgDQgEgCgDgBQgEgCgIAAIgDAAg");
	this.shape_7.setTransform(16.8,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#644423").s().p("AASA5IgFgGIgEgEIgcggIAIgPIACAAIABAAQAKAAAGgFQAHgFAAgLQAAgKgIgHQgHgGgLAAIgIAAIAABWIAAAIIABALIgYAAIAAgKIAAgIIAAhXIAAgDIAAgGIAAgEIgBgGIAKgCIAJgBIAJAAQALAAAGABQAIACAGAEQAKAGAGAKQAGAKAAANQAAAIgDAHQgDAGgFAFIgIAGIgMAEIARARIAHAHIANAKIgSARIgIgKg");
	this.shape_8.setTransform(2.5,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#644423").s().p("AgZA7QgNgGgJgJQgIgJgFgMQgEgLAAgMQAAgKAEgKQADgKAGgJQAGgIAJgFQAIgGAKgDQAKgDAIAAQAOAAAMAFQAMAGAKALQAIAIAEAMQAFALAAALQAAASgJAOQgJAPgPAJQgPAIgRABQgNgBgMgFgAgVglQgKAGgFAKQgGAJAAAMQAAALAGAKQAFAKAKAGQAKAGALAAQAMAAAKgGQAJgGAGgKQAGgKAAgLQAAgLgGgKQgGgKgKgGQgKgFgLAAQgLAAgKAFg");
	this.shape_9.setTransform(-10.7,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#644423").s().p("AgoA/IAAh2IAAgBIAAgDIAAgBIAAgCIAaAAIgBALIAAAJIAAAIIAABKIAdAAIAIAAIAHAAIAEgBIAIAAIgHAYg");
	this.shape_10.setTransform(-22.8,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#644423").s().p("AgqA/IAAh9IBTAAIgIAYIgJgBIgIAAIgLAAIgYAAIAAAbIAXAAIAHgBIAJAAIALgBIgHAWIgrAAIAAAgIAdAAIAEAAIAGAAIAIAAIAPgBIgGAYg");
	this.shape_11.setTransform(-33.2,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#644423").s().p("AgNA/IABgMIABgIIAAgHIAAhLIgQAAIgEAAIgGAAIgLABIAHgYIBaAAIgKAYIgKgBIgHAAIgMAAIAABmg");
	this.shape_12.setTransform(-44,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#644423").s().p("AgOA9QgMgEgJgIQgJgJgGgMQgFgMgBgOQABgRAIgQQAJgPAPgKQAOgJASAAQAIAAAHACQAIACAHAEIAIAEIAIAIIgOASIgLgJQgFgEgFgBIgLgBQgLAAgJAGQgKAGgGAKQgFAKAAALQAAAMAFAKQAFAJAKAGQAJAFAKABQAKAAAIgEQAJgEAJgJIAOATQgJAHgIAEQgHAFgJACQgHACgIAAQgLAAgMgFg");
	this.shape_13.setTransform(-55.3,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#644423").s().p("AgqA/IAAh9IBTAAIgIAYIgJgBIgIAAIgLAAIgYAAIAAAbIAXAAIAHgBIAJAAIALgBIgHAWIgrAAIAAAgIAdAAIAEAAIAGAAIAIAAIAPgBIgGAYg");
	this.shape_14.setTransform(-66.6,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#644423").s().p("AgrA/IAAgMIAAgKIAAhnIBXAAIgJAXIgIAAIgGAAIgJAAIgGAAIgaAAIAAAcIAYAAIAOAAIAGAAIAKAAIgHAUIgvAAIAAAhIAAAEIABAJIAAADIAAAFg");
	this.shape_15.setTransform(-77.3,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#644423").s().p("AgqA/IAAh9IBTAAIgIAYIgJgBIgHAAIgMAAIgYAAIAAAbIAXAAIAHgBIAJAAIALgBIgHAWIgrAAIAAAgIAdAAIAEAAIAGAAIAIAAIAPgBIgGAYg");
	this.shape_16.setTransform(-88,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-13.3,192,26.7);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#644423").s().p("AhmCkIADgaIAAgPIAAkTIAbgGIAWgDIAYgCQAXAAAQAFQASAEAOAIQAbARAPAaQAPAcABAhQgBAigPAXQgQAagbAQQgbAOghABIgMAAIgNgCIAAA1IAAAPIABAMIACAOgAgpAOIAPABIAJAAQAaAAASgPQARgQABgaQAAgPgHgNQgIgPgMgIQgKgHgKgDQgMgDgSABIgJAAg");
	this.shape.setTransform(44.8,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#644423").s().p("AhCCWQgfgOgYgaQgVgWgLgdQgLgcABgfQAAgbAJgZQAIgaAPgVQAQgVAWgPQAVgOAZgIQAXgHAYAAQAkAAAfAOQAeANAZAbQAUAXALAdQALAcAAAeQAAAugWAmQgWAlgmAWQgmAWgsAAQgiAAgggPgAg3heQgZAPgPAXQgOAZAAAfQAAAdAPAZQAOAZAaAPQAYAPAeABQAegBAZgPQAZgPAPgZQAPgZAAgdQAAgdgPgZQgQgZgZgPQgZgOgdgBQgeAAgZAPg");
	this.shape_1.setTransform(12.3,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#644423").s().p("AgiCgIACgfIABgVIABgQIAAjBIgpAAIgJAAIgPABIgcABIAQg8IDnAAIgXA8IgagBIgSgBIgeAAIAAEFg");
	this.shape_2.setTransform(-18.7,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#644423").s().p("Ag5CWQgfgPgbgeIApgrQAUAaASAKQATALAVAAQAXAAAPgMQAPgLAAgRQABgNgKgJQgKgJgXgGIgsgPQgRgGgJgFQgIgFgJgFQgOgLgHgSQgJgSAAgUQAAgbAOgVQANgVAYgMQAXgMAcAAQATAAATAFQASAGAPAKQAIAFAHAIQAHAGAKANIgjAsQgOgQgLgIQgKgJgLgEQgJgDgLAAQgTAAgNALQgNAKgBARQAAAGADAFQACAFAEAEQAFAEAGACQAGADAKAEIAeAJQAZAHARAJQAQAIALAKQAMAOAHAPQAGAPAAARQgBAdgNAVQgPAWgXANQgZAMggAAQghAAgfgPg");
	this.shape_3.setTransform(-45,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.7,-30.7,119.5,61.4);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A962B").s().p("AgxAyIAAhjIBjAAIAABjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,10,10);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABRALQgEgEAAgHQAAgFAEgFQAFgFAHAAQAGAAAEADQAEADACAEIAAABIgHAAQgDgFgGAAQgEAAgDADQgDAEAAACQAAAEADADQADADAEAAQAGAAADgFIAHAAIAAABQgCAEgEADQgEADgGAAQgHAAgFgFgACPAQIAAgeIAWAAIAAAGIgPAAIAAAIIAMAAIAAACIgMAAIAAAHIAPAAIAAAHgAAiAQIgNgSIAAASIgGAAIAAgeIAGAAIANARIAAgRIAGAAIAAAegAgYAQIgDgIIgLAAIgDAIIgHAAIAMgeIAHAAIAMAegAgkADIAHAAIgEgJgAhZAQIgGgOIgHAAIAAAOIgGAAIAAgeIAQAAQAEAAADADQACADAAADQAAAFgGACIAHAOgAhmAAIAJAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgDIgDAAIgJAAgAikAQIAAgeIAWAAIAAAGIgQAAIAAAIIANAAIAAACIgNAAIAAAOg");
	this.shape.setTransform(16.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.6,33.2,3.3);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwAWQgKgJABgNQgBgMAKgJQAJgJANAAQALAAAIAGQAHAFACAJIABACIgMAAQgFgLgMAAQgHAAgGAGQgGAGAAAHQAAAIAGAGQAGAGAHAAQAMAAAFgLIAMAAIgBACQgCAJgHAFQgIAGgLAAQgNAAgJgJgAh7AWQgJgJAAgNQAAgMAJgJQAJgJAOAAQAOAAAIAJQAKAJAAAMQAAANgKAJQgJAJgNAAQgOAAgJgJgAhygNQgGAGABAHQgBAIAGAGQAGAGAIAAQAIAAAGgGQAFgGAAgIQAAgHgFgGQgGgGgIAAQgIAAgGAGgAC0AdIgLgXIgPAAIAAAXIgMAAIAAg5IAhAAQAHAAAGAFQAEAFABAIQAAAFgEAFQgDADgFABIANAZgACagCIASAAQAEAAACgCQACgDAAgDQAAgDgCgDQgCgCgEAAIgSAAgABTAdIAAg5IArAAIAAAKIgfAAIAAAPIAWAAIAAAJIgWAAIAAANIAfAAIAAAKgAA0AdIAAgXIgZAAIAAAXIgLAAIAAg5IALAAIAAAZIAZAAIAAgZIAMAAIAAA5gAibAdIgMgXIgOAAIAAAXIgMAAIAAg5IAgAAQAIAAAGAFQAEAFAAAIQAAAFgDAFQgDADgFABIANAZgAi1gCIATAAQADAAACgCQACgDAAgDQAAgDgCgDQgCgCgDAAIgTAAg");
	this.shape.setTransform(19.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.1,38.9,6.3);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABKAaQgHgGgBgJIANAAQABAKANAAQAFAAADgDQADgCAAgDQAAgEgEgCIgIgDIgBAAQgNgDgDgBQgGgEAAgIQAAgIAGgFQAGgFAKAAQAKAAAGAFQAGAEABAJIgMAAQgCgIgJAAQgLAAAAAHQAAABAAABQABAAAAABQAAAAAAABQABAAAAABIAMADQALADAEACQAHADAAAJQAAAJgHAFQgGAFgLAAQgMAAgGgFgAAMAdIAAg5IArAAIAAAKIgfAAIAAAPIAWAAIAAAJIgWAAIAAANIAfAAIAAAKgAghAdIgVg5IANAAIAPAqIAPgqIALAAIgUA5gAhcAdIAAgXIgXgiIAOAAIAPAZIAPgZIANAAIgWAiIAAAXg");
	this.shape.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.1,23.3,6.3);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A962B").s().p("AnZCBIAAkBIOzAAIAAEBg");
	this.shape.setTransform(47.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13,94.9,26);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4A6QgYgZAAghQAAggAYgZQAXgYAhAAQAiAAAXAYQAYAZAAAgQAAAigYAYQgXAYgiAAQghAAgXgYgAgvgwQgVAUAAAcQAAAcAVAVQATAUAcAAQAcAAAVgUQAVgVAAgcQAAgcgVgUQgVgUgcAAQgcAAgTAUgAgDA6IAAgvQAAgNAFgMQAJgMAOgFQAAAOgIANQgHAJgMAHQAGAMAMAIQAMAHAPAAQgIAJgLAFQgMAFgMAAgAgtAjQgMgQAAgTIABgLIABAAQARABAMALQAMANgBASIAAAYQgSgFgMgQgAAcAZQgKgDgGgHQAPgKAFgQQAFgQgDgTQgTAFgNALQgMANgEARQgGgIgKgGQgLgHgMgBQAIgQAOgKQAPgJAQAAQASAAAQAKQALAIAHANQAGANABANQAAAPgIANIgFAAQgJAAgJgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-8.2,16.4,16.5);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1EEEE").s().p("AgSfPMAAAg+dIAlAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-200,4,400);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D921E").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.4,4.4);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D921E").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.4,4.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D921E").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.4,4.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D921E").s().p("AgXB7QgKgJAAgPQAAgQAKgJQAKgKANAAQAOAAAKALQAKAKAAAOQAAAPgKAJQgKAJgOABQgOgBgJgJgAgbAzIgCi3IA+AAIgDC3g");
	this.shape.setTransform(131.9,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D921E").s().p("AA2CEIgVg8IhBAAIgOAnIgCAHIgCAGIgBADIgBAFIhFAAIANgdIALgbIBNjPIApAAIBVDmIAHAPIAJASgAAQAXIgQg3IgRA3IAhAAg");
	this.shape_1.setTransform(113.2,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D921E").s().p("AgfCEIABgaIABgVIAAgTIAAiLIAAgQIAAgTIgBgXIA/AAIgCAXIgBATIAAASIAACKIAAAOIABASIABAhg");
	this.shape_2.setTransform(94.4,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D921E").s().p("AAtCIIgCgDIgJgLIgJgLIg6hAIAKg3IASgBQAFgCAGgDQAGgFAFgIQAEgIAAgKQAAgNgHgIQgHgJgMgGIgLgCIgSAAIAAClIAAAOIABAOIABAOIg+AAIAAgLIABgIIABgVIAAgLIAAivIAAgMIgCgTIAWgEIATgDIAVgBQAWAAANADQAQAEANAHQAXANANAWQAMAWAAAaQAAAQgFAPQgFANgJAKQgEAGgJAGQgIAGgNAGIAbAcIALAJIARAQIAHAGIAGAEIgtAtIgFgGg");
	this.shape_3.setTransform(77.9,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D921E").s().p("AA2CEIgVg8IhBAAIgOAnIgCAHIgCAGIgBADIgBAFIhFAAIANgdIALgbIBNjPIApAAIBVDmIAHAPIAJASgAAQAXIgQg3IgRA3IAhAAg");
	this.shape_4.setTransform(52.8,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D921E").s().p("AgrB+QgXgJgQgQQgNgPgHgUQgGgWAAgaIAAhvIgBgJIgBgMIgCgVIBCAAIgBAOIgBALIAAAMIAABiIAAAZIABALIABAGQAEARANAKQAMAJASAAQATgBAMgIQANgHAFgOIACgJIABgPIAAgZIAAhhIAAgHIgCgNIAAgHIgBgKIA/AAIAAANIgBALIAAATIAABhQAAAWgBAOQgBAOgDALQgDAKgGAJQgNAYgZANQgZANggAAQgYABgWgKg");
	this.shape_5.setTransform(26.2,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D921E").s().p("AhYCEIAAjbIAAgWIAAgMIgCgKIBDAAIgCAcIgBAXIgBAVIAACEIA6AAIAMgBIATgBIALgBIASgBIgSA/g");
	this.shape_6.setTransform(2.2,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D921E").s().p("AhEB2QgegTgTgfQgSgfgBglQABgRAFgSQAEgRAJgPQATghAggSQAfgSAlAAQARAAAPAEQAQAEAPAJQAiAUATAfQASAfABAlQgBAlgSAfQgTAfgfATQgfASglABQglgBgfgSgAgnhDQgSAKgKARQgKASAAAWQAAARAGAPQAGAPAOAMQAKAJAOAFQANAGAOAAQAVgBASgLQASgKAKgSQAMgSAAgVQAAgVgMgSQgLgRgRgLQgSgLgVAAQgVAAgSALg");
	this.shape_7.setTransform(-25.1,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8D921E").s().p("AhXCHIABgMIABgGIABgMIAAgGIAAjfIAWgGIASgDIAUgBQAhAAAZAMQAaANAOAWQAOAWAAAfQAAAZgKAUQgKAUgVAPQgNAIgNAEQgOAFgOAAIgQAAIAAAeIgBAYIABAGIACAMgAgXAEIAFAAQANABAFgCQAHgCAFgCQAIgGAFgIQADgKAAgJQAAgTgMgLQgOgKgTgBIgCAAIgEAAg");
	this.shape_8.setTransform(-50.7,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8D921E").s().p("AgcCDQgSgGgQgLIgPgLIgSgSIAqgqQAQATAOAIQANAIAOgBQAOAAAJgGQAJgHAAgKIgBgHIgFgFIgHgFIgNgGIgbgKQgOgEgKgFQgKgFgHgGQgMgKgHgPQgGgPgBgRQAAgXAMgSQAMgSATgLQAUgKAXAAQAPAAAOAEQAPAFANAHQAGAEAHAGIAPARIglAtIgSgSQgHgGgHgDQgHgDgIABQgKAAgIAGQgJAHAAAIQAAAIAJAGQAKAGARAFQAqAMAVATQAVAWAAAeQAAAZgMASQgLAUgUALQgUAKgZABQgQAAgUgGg");
	this.shape_9.setTransform(-84.9,-0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8D921E").s().p("AhEB2QgfgTgSgfQgSgfgBglQAAgRAGgSQAEgRAJgPQAUghAfgSQAfgSAlAAQARAAAPAEQAQAEAPAJQAiAUASAfQATAfAAAlQAAAlgTAfQgSAfgfATQgfASglABQglgBgfgSgAgnhDQgSAKgJARQgLASgBAWQAAARAHAPQAGAPANAMQAMAJANAFQAOAGANAAQAUgBATgLQASgKALgSQALgSAAgVQAAgVgLgSQgMgRgRgLQgTgLgUAAQgVAAgSALg");
	this.shape_10.setTransform(-110.5,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8D921E").s().p("AgpCoQgHgBgLgEIAPg3IALACIAIABQAHAAAFgDQAHgDADgGQACgEABgGIAAgXIAAi/IAAgJIAAgRIgBgHIgBgLIA9AAIAAAOIgBAMIAAAQIAAC5QABAZgEARQgEAQgGANQgMAUgTAKQgQALgWAAQgJAAgIgCg");
	this.shape_11.setTransform(-134.7,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.1,-27.2,280.3,54.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D921E").s().p("AhDBkIAAjHICEAAIgMAlIgOAAIgMgBIgSAAIgnAAIAAAqIAlAAIALAAIANAAIATgBIgLAjIhFAAIAAA0IAuAAIAHAAIAIgBIAOgBIAXgCIgJAng");
	this.shape.setTransform(57.8,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D921E").s().p("AgVBkIACgUIAAgNIABgJIAAh5IgZAAIgHAAIgJABIgRABIAKgmICPAAIgOAmIgQgCIgLAAIgTAAIAACjg");
	this.shape_1.setTransform(40.8,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D921E").s().p("AANARIgMAAIgHAAIgNAAIgRABIAAgkIALABIALAAIAOABIAUAAIARgBIAAAjIgYgBg");
	this.shape_2.setTransform(27.9,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D921E").s().p("AAwCFIgCgGIgBgDIgBgDIgCgFIgMgfIg7AAIgMAgIgCAHIgBACIgBADIgBAEIgpAAIAGgLIADgJIAGgQIA9iiIAZAAIA6CgIAGAQIAEAKIAGAMgAASAxIgSgyIgRAyIAjAAgAghhlQgNgMgDgTIAaAAQADAKAFAEQAGAFAJgBQAIABAGgFQAFgEAEgKIAZAAQgDATgNAMQgNALgTAAQgUAAgNgLg");
	this.shape_3.setTransform(13.8,-3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D921E").s().p("AAdBaIgJgJIgGgHIgtgyIAMgYIAEAAIABAAQAQAAALgIQALgJAAgQQAAgRgNgLQgLgKgTAAIgMAAIAACJIAAANIABARIgmAAIABgPIAAgMIAAiLIAAgGIgBgJIAAgGIAAgJIAPgDIANgCIAQgBQAQAAAKADQANADALAFQAPAKAKAQQAJARAAATQAAANgEAMQgFAKgJAIQgGAFgGAEQgHADgMAEIAbAaIAMALIATARIgbAbIgNgRg");
	this.shape_4.setTransform(-3,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D921E").s().p("AAwCFIgCgGIgBgDIgBgDIgCgFIgMgfIg7AAIgMAgIgCAHIgBACIgBADIgBAEIgpAAIAGgLIADgJIAGgQIA9iiIAZAAIA6CgIAGAQIAEAKIAGAMgAASAxIgSgyIgRAyIAjAAgAghhlQgNgMgDgTIAaAAQADAKAFAEQAGAFAJgBQAIABAGgFQAFgEAEgKIAZAAQgDATgNAMQgNALgTAAQgUAAgNgLg");
	this.shape_5.setTransform(-21.4,-3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D921E").s().p("Ag/BmIACgQIAAgJIAAisIARgDIANgDIAPAAQAOAAAKADQALACAKAFQAQAKAKARQAJASAAAUQAAAVgKAPQgJAQgRAJQgRAKgVAAIgGAAIgJgBIAAAhIABAJIAAAHIABAJgAgZAJIAJABIAGAAQAPAAAMgKQAKgKABgQQAAgKgFgHQgEgJgIgGQgGgEgGgCQgHgCgMAAIgFAAg");
	this.shape_6.setTransform(-38.5,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D921E").s().p("AAwBkIgCgGIgBgDIgBgEIgCgEIgMggIg7AAIgMAhIgCAGIgBADIgBACIgBAFIgpAAIAGgMIADgJIAGgPIA9ijIAZAAIA6CgIAGAQIAEAKIAGANgAASAPIgSgyIgRAyIAjAAg");
	this.shape_7.setTransform(-56.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-19.9,135.1,39.9);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D921E").s().p("AgXBhQgTgHgOgMQgQgOgIgTQgJgUAAgVQABgdANgZQAOgYAXgPQAYgOAbAAQANAAANADQANADALAGIALAHIANAMIgWAcQgJgJgIgFQgIgFgIgDQgIgCgKAAQgRAAgQAKQgPAJgJAQQgJAQAAASQAAAUAJAPQAIAPAPAJQAPAJARAAQAPAAANgGQANgGAPgPIAWAeQgOAMgNAHQgMAHgMADQgMADgOAAQgRAAgTgHg");
	this.shape.setTransform(83.3,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D921E").s().p("AgTBkIACgQIAAgOIAAgOIAAh4IAAgHIAAgNIgBgGIAAgJIAmAAIgBAQIgBAMIAAAMIAACFIAAALIABAPg");
	this.shape_1.setTransform(68.7,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D921E").s().p("AAzBkIhWh5IAABLIAAANIABAPIABASIgnAAIABgNIAAgKIAAgKIAAimIAWAAIBWB5IAAhZIAAgHIgBgKIAAgPIAlAAIAADHg");
	this.shape_2.setTransform(54.6,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D921E").s().p("Ag/BkIAAi8IAAgCIAAgDIAAgCIgBgEIApAAIgBASIgBAOIgBANIAAB2IAwAAIANAAIAMgBIAGgBIAMAAIgLAmg");
	this.shape_3.setTransform(37.4,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D921E").s().p("AgTBkIACgQIAAgOIAAgOIAAh4IAAgHIAAgNIgBgGIAAgJIAmAAIgBAQIgBAMIAAAMIAACFIAAALIABAPg");
	this.shape_4.setTransform(24.2,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D921E").s().p("AhJBkIgGgPIBjiVIgtAAIgPAAIgLABIgOABIAAglICJAAIAIAPIhlCVIA9AAIAHAAIALgBIASgCIAAAmg");
	this.shape_5.setTransform(10.8,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D921E").s().p("Ag/BkIAAi8IAAgCIAAgDIAAgCIgBgEIApAAIgBASIgBAOIgBANIAAB2IAwAAIANAAIAMgBIAGgBIAMAAIgLAmg");
	this.shape_6.setTransform(-11.1,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D921E").s().p("AgpBcQgTgKgLgTQgKgSAAgZIAAhVIgBgGIgBgMIAAgHIAAgLIAnAAIAAATIAAAOIAABPIAAAQQAAAHACAEIADAIQAGAKALAGQALAFAMAAQANAAAKgEQAKgEAGgJQAEgGABgIQACgIAAgMIAAhXIAAgFIgBgKIAAgGIgBgJIAnAAIgBANIAAAMIAABaQAAASgCAMQgDAMgGAKQgKARgSAKQgTAJgXAAQgYAAgTgKg");
	this.shape_7.setTransform(-30.6,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8D921E").s().p("AAzBkIhWh5IAABLIAAANIABAPIABASIgnAAIABgNIAAgKIAAgKIAAimIAWAAIBWB5IAAhZIAAgHIgBgKIAAgPIAlAAIAADHg");
	this.shape_8.setTransform(-51.1,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8D921E").s().p("AhDBkIAAjHICEAAIgMAlIgOAAIgMgBIgSAAIgnAAIAAAqIAlAAIALAAIANAAIATgBIgLAjIhFAAIAAA0IAuAAIAHAAIAIgBIAOgBIAXgCIgJAng");
	this.shape_9.setTransform(-68.4,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8D921E").s().p("AgVBkIACgUIAAgNIABgJIAAh5IgZAAIgHAAIgJABIgRABIAKgmICPAAIgOAmIgQgCIgLAAIgTAAIAACjg");
	this.shape_10.setTransform(-85.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.3,-19.9,190.7,39.9);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D921E").s().p("AAwCFIgCgGIgBgDIgBgDIgCgFIgMgfIg7AAIgMAgIgCAHIgBACIgBADIgBAEIgpAAIAGgLIADgJIAGgQIA9iiIAZAAIA6CgIAGAQIAEAKIAGAMgAASAxIgSgyIgRAyIAjAAgAghhlQgNgMgDgTIAaAAQADAKAFAEQAGAFAJgBQAIABAGgFQAFgEAEgKIAZAAQgDATgNAMQgNALgTAAQgUAAgNgLg");
	this.shape.setTransform(55.6,-3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D921E").s().p("AgXBhQgTgHgOgMQgQgOgIgTQgJgUAAgVQABgdANgZQAOgYAXgPQAYgOAbAAQANAAANADQANADALAGIALAHIANAMIgWAcQgJgJgIgFQgIgFgIgDQgIgCgKAAQgRAAgQAKQgPAJgJAQQgJAQAAASQAAAUAJAPQAIAPAPAJQAPAJARAAQAPAAANgGQANgGAPgPIAWAeQgOAMgNAHQgMAHgMADQgMADgOAAQgRAAgTgHg");
	this.shape_1.setTransform(36.6,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D921E").s().p("AAwBkIgCgGIgBgDIgBgEIgCgEIgMggIg7AAIgMAhIgCAGIgBADIgBACIgBAFIgpAAIAGgMIADgJIAGgPIA9ijIAZAAIA6CgIAGAQIAEAKIAGANgAASAPIgSgyIgRAyIAjAAg");
	this.shape_2.setTransform(17.2,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D921E").s().p("AgVBkIACgUIAAgNIABgJIAAh5IgZAAIgHAAIgJABIgRABIAKgmICPAAIgOAmIgQgCIgLAAIgTAAIAACjg");
	this.shape_3.setTransform(0.4,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D921E").s().p("AAwBkIgCgGIgBgDIgBgEIgCgEIgMggIg7AAIgMAhIgCAGIgBADIgBACIgBAFIgpAAIAGgMIADgJIAGgPIA9ijIAZAAIA6CgIAGAQIAEAKIAGANgAASAPIgSgyIgRAyIAjAAg");
	this.shape_4.setTransform(-16.6,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D921E").s().p("AgTBkIACgQIAAgOIAAgOIAAh4IAAgHIAAgNIgBgGIAAgJIAmAAIgBAQIgBAMIAAAMIAACFIAAALIABAPg");
	this.shape_5.setTransform(-36,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D921E").s().p("AgTB8QAGgIACgFQACgFAAgEQAAgEgCgFQgDgFgFgGIAUgPQAKAIAFAIQAEAHAAAJQAAAKgGAIQgFAIgLAJgAgVBBIACgTIAAgNIABgKIAAh4IgZAAIgHAAIgJAAIgRABIAKglICPAAIgOAlIgQgBIgLAAIgTAAIAACig");
	this.shape_6.setTransform(-48.2,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D921E").s().p("AgTCGIABgQIABgMIAAgQIAAh3IAAgHIgBgOIAAgFIAAgKIAmAAIgBARIgBAMIgBALIAACGIABAKIABAPgAAIhVIgIgPIgGAPIgdAAIAIgSIAFgOIAFgQIAjAAIAEAPIAFANIAIAUg");
	this.shape_7.setTransform(-60.3,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.8,-19.9,133.7,39.9);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D921E").s().p("AAwCFIgCgGIgBgDIgBgDIgCgFIgMgfIg7AAIgMAgIgCAHIgBACIgBADIgBAEIgpAAIAGgLIADgJIAGgQIA9iiIAZAAIA6CgIAGAQIAEAKIAGAMgAASAxIgSgyIgRAyIAjAAgAghhlQgNgMgDgTIAaAAQADAKAFAEQAGAFAJgBQAIABAGgFQAFgEAEgKIAZAAQgDATgNAMQgNALgTAAQgUAAgNgLg");
	this.shape.setTransform(46.3,-3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D921E").s().p("AAzBkIhWh5IAABLIAAANIABAPIABASIgnAAIABgNIAAgKIAAgKIAAimIAWAAIBWB5IAAhZIAAgHIgBgKIAAgPIAlAAIAADHg");
	this.shape_1.setTransform(27.5,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D921E").s().p("AAwBkIgCgGIgBgDIgBgEIgCgEIgMggIg7AAIgMAhIgCAGIgBADIgBACIgBAFIgpAAIAGgMIADgJIAGgPIA9ijIAZAAIA6CgIAGAQIAEAKIAGANgAASAPIgSgyIgRAyIAjAAg");
	this.shape_2.setTransform(8.7,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D921E").s().p("AgcBoIgRgDIgVgFIADgGIABgGIAAgIIAAiuIASgDIAOgCIAOgBQATAAAQAIQAQAHAJAMQAJAMABARQAAAMgGAJQgGAKgMAIQAJAEAFAEQAGACAEAEQAGAIADAJQAEAJAAAKQgBATgKAOQgKAPgSAIQgRAIgWAAIgRgBgAgaBEIAIABIAHABQASgBAMgIQALgIAAgOQAAgLgHgHQgIgHgOgCIgJgCIgSAAgAgahDIAAAtIAGAAIAFAAIAPgBIAIgDQAFgDACgFQADgEAAgGQAAgLgJgGQgJgHgOAAIgFAAIgHABg");
	this.shape_3.setTransform(-8.4,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D921E").s().p("AAdBaIgIgJIgHgHIgtgyIAMgYIAEAAIACAAQAPAAALgIQALgJAAgQQAAgRgMgLQgMgKgTAAIgMAAIAACJIAAANIABARIgmAAIABgPIAAgMIAAiLIAAgGIgBgJIAAgGIAAgJIAOgDIAOgCIAQgBQAQAAALADQAMADAKAFQARAKAJAQQAJARAAATQAAANgEAMQgFAKgJAIQgGAFgGAEQgHADgLAEIAaAaIAMALIATARIgbAbIgNgRg");
	this.shape_4.setTransform(-24.7,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D921E").s().p("AgpBcQgTgKgLgTQgKgSAAgZIAAhVIgBgGIgBgMIAAgHIAAgLIAnAAIAAATIAAAOIAABPIAAAQQAAAHACAEIADAIQAGAKALAGQALAFAMAAQANAAAKgEQAKgEAGgJQAEgGABgIQACgIAAgMIAAhXIAAgFIgBgKIAAgGIgBgJIAnAAIgBANIAAAMIAABaQAAASgCAMQgDAMgGAKQgKARgSAKQgTAJgXAAQgYAAgTgKg");
	this.shape_5.setTransform(-44.7,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-19.9,115,39.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D921E").s().p("AAwBkIgCgGIgBgDIgBgEIgCgEIgMggIg7AAIgMAhIgCAGIgBADIgBACIgBAFIgpAAIAGgMIADgJIAGgPIA9ijIAZAAIA6CgIAGAQIAEAKIAGANgAASAPIgSgyIgRAyIAjAAg");
	this.shape.setTransform(64.9,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D921E").s().p("AhDBkIAAjHICEAAIgMAlIgOAAIgMgBIgSAAIgnAAIAAAqIAlAAIALAAIANAAIATgBIgLAjIhFAAIAAA0IAuAAIAHAAIAIgBIAOgBIAXgCIgJAng");
	this.shape_1.setTransform(48.1,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D921E").s().p("AAcBaIgIgJIgFgHIgtgyIAMgYIACAAIACAAQARAAAKgIQALgJAAgQQAAgRgNgLQgLgKgTAAIgMAAIAACJIAAANIACARIgnAAIABgPIAAgMIAAiLIAAgGIgBgJIAAgGIgBgJIAPgDIAPgCIAOgBQARAAAKADQANADALAFQAQAKAJAQQAJARAAATQAAANgFAMQgEAKgJAIQgFAFgIAEQgGADgMAEIAbAaIAMALIAUARIgcAbIgOgRg");
	this.shape_2.setTransform(31.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D921E").s().p("AAwBkIgCgGIgBgDIgBgEIgCgEIgMggIg7AAIgMAhIgCAGIgBADIgBACIgBAFIgpAAIAGgMIADgJIAGgPIA9ijIAZAAIA6CgIAGAQIAEAKIAGANgAASAPIgSgyIgRAyIAjAAg");
	this.shape_3.setTransform(12.7,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D921E").s().p("AgpBcQgTgKgLgTQgKgSAAgZIAAhVIgBgGIgBgMIAAgHIAAgLIAnAAIAAATIAAAOIAABPIAAAQQAAAHACAEIADAIQAGAKALAGQALAFAMAAQANAAAKgEQAKgEAGgJQAEgGABgIQACgIAAgMIAAhXIAAgFIgBgKIAAgGIgBgJIAnAAIgBANIAAAMIAABaQAAASgCAMQgDAMgGAKQgKARgSAKQgTAJgXAAQgYAAgTgKg");
	this.shape_4.setTransform(-7,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D921E").s().p("Ag/BkIAAi8IAAgCIAAgDIAAgCIgBgEIApAAIgBASIgBAOIgBANIAAB2IAwAAIANAAIAMgBIAGgBIAMAAIgLAmg");
	this.shape_5.setTransform(-25.3,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D921E").s().p("AgoBeQgUgJgPgQQgNgOgGgSQgIgSABgTQgBgQAGgQQAFgQAKgNQAKgOAOgJQANgIAPgFQAPgFAOAAQAXAAATAJQATAIAPARQANAPAHARQAHASAAASQAAAdgPAXQgNAXgYAOQgYAOgbAAQgUAAgUgJgAgig6QgQAJgIAPQgJAPAAATQgBASAKAQQAJAQAPAJQARAJARAAQATAAAPgJQAQgKAKgPQAJgQAAgSQgBgSgJgPQgJgQgQgJQgQgJgSAAQgSAAgQAJg");
	this.shape_6.setTransform(-45.7,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D921E").s().p("Ag/BmIABgQIABgJIAAisIAQgDIAPgDIAOAAQAOAAAKADQALACAKAFQAQAKAKARQAJASAAAUQAAAVgKAPQgKAQgQAJQgSAKgUAAIgHAAIgIgBIAAAhIABAJIAAAHIABAJgAgZAJIAJABIAGAAQAQAAAKgKQALgKABgQQAAgKgFgHQgEgJgIgGQgGgEgGgCQgHgCgMAAIgFAAg");
	this.shape_7.setTransform(-65.3,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.1,-19.9,152.2,39.9);


(lib.prod_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.prod();
	this.instance.setTransform(-113,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,-81,241,142);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuDXcMAAAgu3IcHAAMAAAAu3g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.hat_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hat();
	this.instance.setTransform(-111,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-62,222,124);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t3
	this.t1 = new lib.Symbol20();
	this.t1.setTransform(0,-24.3);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t12
	this.t3 = new lib.Symbol22();
	this.t3.setTransform(0,33.2);

	this.t2 = new lib.Symbol21();
	this.t2.setTransform(0,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-55,192,101.5);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol4();
	this.t2.setTransform(0,15);

	this.t1 = new lib.Symbol3();
	this.t1.setTransform(0,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.3,-34.9,190.7,69.8);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol2();
	this.t2.setTransform(0,15);

	this.t1 = new lib.Symbol1();
	this.t1.setTransform(0,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.1,-34.9,152.2,69.8);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.w2 = new lib.Symbol35();
	this.w2.setTransform(11.9,-4.6,1,1,0,0,0,49.2,17);

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(1));

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bird, null, new cjs.Matrix2D(1,0,0,1,-79.5,-77.4)).s().p("AsZMBIAAmtQCQgEC0goQEMg9CjhhQBuh5AnhpQAMgiAVhPQAXhYATg8QARgzg4i5Ig7i8ILCAAQgBAIifFFQijFNgQAwQgTA7gbBnQgbBlgPAvQg2ChhvB3QinBkk4BOQkCBBirAAQgvAAgogFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.7,-77.4,173.2,154.9);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.n2 = new lib.Symbol31();

	this.timeline.addTween(cjs.Tween.get(this.n2).wait(1));

	// Layer 1
	this.n1 = new lib.Symbol30();

	this.timeline.addTween(cjs.Tween.get(this.n1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-11.5,81,23);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.setTransform(746.7,0);

	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(736,0);

	this.instance_2 = new lib.Symbol13();
	this.instance_2.setTransform(728,0);

	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(720,0);

	this.instance_4 = new lib.Symbol13();
	this.instance_4.setTransform(712,0);

	this.instance_5 = new lib.Symbol13();
	this.instance_5.setTransform(704,0);

	this.instance_6 = new lib.Symbol13();
	this.instance_6.setTransform(696,0);

	this.instance_7 = new lib.Symbol13();
	this.instance_7.setTransform(688,0);

	this.instance_8 = new lib.Symbol13();
	this.instance_8.setTransform(680,0);

	this.instance_9 = new lib.Symbol13();
	this.instance_9.setTransform(672,0);

	this.instance_10 = new lib.Symbol13();
	this.instance_10.setTransform(664,0);

	this.instance_11 = new lib.Symbol13();
	this.instance_11.setTransform(656,0);

	this.instance_12 = new lib.Symbol13();
	this.instance_12.setTransform(648,0);

	this.instance_13 = new lib.Symbol13();
	this.instance_13.setTransform(640,0);

	this.instance_14 = new lib.Symbol13();
	this.instance_14.setTransform(632,0);

	this.instance_15 = new lib.Symbol13();
	this.instance_15.setTransform(624,0);

	this.instance_16 = new lib.Symbol13();
	this.instance_16.setTransform(616,0);

	this.instance_17 = new lib.Symbol13();
	this.instance_17.setTransform(608,0);

	this.instance_18 = new lib.Symbol13();
	this.instance_18.setTransform(600,0);

	this.instance_19 = new lib.Symbol13();
	this.instance_19.setTransform(592,0);

	this.instance_20 = new lib.Symbol13();
	this.instance_20.setTransform(584,0);

	this.instance_21 = new lib.Symbol13();
	this.instance_21.setTransform(576,0);

	this.instance_22 = new lib.Symbol13();
	this.instance_22.setTransform(568,0);

	this.instance_23 = new lib.Symbol13();
	this.instance_23.setTransform(560,0);

	this.instance_24 = new lib.Symbol13();
	this.instance_24.setTransform(552,0);

	this.instance_25 = new lib.Symbol13();
	this.instance_25.setTransform(544,0);

	this.instance_26 = new lib.Symbol13();
	this.instance_26.setTransform(536,0);

	this.instance_27 = new lib.Symbol13();
	this.instance_27.setTransform(528,0);

	this.instance_28 = new lib.Symbol13();
	this.instance_28.setTransform(520,0);

	this.instance_29 = new lib.Symbol13();
	this.instance_29.setTransform(512,0);

	this.instance_30 = new lib.Symbol13();
	this.instance_30.setTransform(504,0);

	this.instance_31 = new lib.Symbol13();
	this.instance_31.setTransform(496,0);

	this.instance_32 = new lib.Symbol13();
	this.instance_32.setTransform(488,0);

	this.instance_33 = new lib.Symbol13();
	this.instance_33.setTransform(480,0);

	this.instance_34 = new lib.Symbol13();
	this.instance_34.setTransform(472,0);

	this.instance_35 = new lib.Symbol13();
	this.instance_35.setTransform(464,0);

	this.instance_36 = new lib.Symbol13();
	this.instance_36.setTransform(456,0);

	this.instance_37 = new lib.Symbol13();
	this.instance_37.setTransform(448,0);

	this.instance_38 = new lib.Symbol13();
	this.instance_38.setTransform(440,0);

	this.instance_39 = new lib.Symbol13();
	this.instance_39.setTransform(432,0);

	this.instance_40 = new lib.Symbol13();
	this.instance_40.setTransform(424,0);

	this.instance_41 = new lib.Symbol13();
	this.instance_41.setTransform(416,0);

	this.instance_42 = new lib.Symbol13();
	this.instance_42.setTransform(408,0);

	this.instance_43 = new lib.Symbol13();
	this.instance_43.setTransform(400,0);

	this.instance_44 = new lib.Symbol13();
	this.instance_44.setTransform(392,0);

	this.instance_45 = new lib.Symbol13();
	this.instance_45.setTransform(384,0);

	this.instance_46 = new lib.Symbol13();
	this.instance_46.setTransform(376,0);

	this.instance_47 = new lib.Symbol13();
	this.instance_47.setTransform(368,0);

	this.instance_48 = new lib.Symbol13();
	this.instance_48.setTransform(360,0);

	this.instance_49 = new lib.Symbol13();
	this.instance_49.setTransform(352,0);

	this.instance_50 = new lib.Symbol13();
	this.instance_50.setTransform(344,0);

	this.instance_51 = new lib.Symbol13();
	this.instance_51.setTransform(336,0);

	this.instance_52 = new lib.Symbol13();
	this.instance_52.setTransform(328,0);

	this.instance_53 = new lib.Symbol13();
	this.instance_53.setTransform(320,0);

	this.instance_54 = new lib.Symbol13();
	this.instance_54.setTransform(312,0);

	this.instance_55 = new lib.Symbol13();
	this.instance_55.setTransform(304,0);

	this.instance_56 = new lib.Symbol13();
	this.instance_56.setTransform(296,0);

	this.instance_57 = new lib.Symbol13();
	this.instance_57.setTransform(288,0);

	this.instance_58 = new lib.Symbol13();
	this.instance_58.setTransform(280,0);

	this.instance_59 = new lib.Symbol13();
	this.instance_59.setTransform(272,0);

	this.instance_60 = new lib.Symbol13();
	this.instance_60.setTransform(264,0);

	this.instance_61 = new lib.Symbol13();
	this.instance_61.setTransform(256,0);

	this.instance_62 = new lib.Symbol13();
	this.instance_62.setTransform(248,0);

	this.instance_63 = new lib.Symbol13();
	this.instance_63.setTransform(240,0);

	this.instance_64 = new lib.Symbol13();
	this.instance_64.setTransform(232,0);

	this.instance_65 = new lib.Symbol13();
	this.instance_65.setTransform(224,0);

	this.instance_66 = new lib.Symbol13();
	this.instance_66.setTransform(216,0);

	this.instance_67 = new lib.Symbol13();
	this.instance_67.setTransform(208,0);

	this.instance_68 = new lib.Symbol13();
	this.instance_68.setTransform(200,0);

	this.instance_69 = new lib.Symbol13();
	this.instance_69.setTransform(192,0);

	this.instance_70 = new lib.Symbol13();
	this.instance_70.setTransform(184,0);

	this.instance_71 = new lib.Symbol13();
	this.instance_71.setTransform(176,0);

	this.instance_72 = new lib.Symbol13();
	this.instance_72.setTransform(168,0);

	this.instance_73 = new lib.Symbol13();
	this.instance_73.setTransform(160,0);

	this.instance_74 = new lib.Symbol13();
	this.instance_74.setTransform(152,0);

	this.instance_75 = new lib.Symbol13();
	this.instance_75.setTransform(144,0);

	this.instance_76 = new lib.Symbol13();
	this.instance_76.setTransform(136,0);

	this.instance_77 = new lib.Symbol13();
	this.instance_77.setTransform(128,0);

	this.instance_78 = new lib.Symbol13();
	this.instance_78.setTransform(120,0);

	this.instance_79 = new lib.Symbol13();
	this.instance_79.setTransform(112,0);

	this.instance_80 = new lib.Symbol13();
	this.instance_80.setTransform(104,0);

	this.instance_81 = new lib.Symbol13();
	this.instance_81.setTransform(96,0);

	this.instance_82 = new lib.Symbol13();
	this.instance_82.setTransform(88,0);

	this.instance_83 = new lib.Symbol13();
	this.instance_83.setTransform(80,0);

	this.instance_84 = new lib.Symbol13();
	this.instance_84.setTransform(72,0);

	this.instance_85 = new lib.Symbol13();
	this.instance_85.setTransform(64,0);

	this.instance_86 = new lib.Symbol13();
	this.instance_86.setTransform(56,0);

	this.instance_87 = new lib.Symbol13();
	this.instance_87.setTransform(48,0);

	this.instance_88 = new lib.Symbol13();
	this.instance_88.setTransform(40,0);

	this.instance_89 = new lib.Symbol13();
	this.instance_89.setTransform(32,0);

	this.instance_90 = new lib.Symbol13();
	this.instance_90.setTransform(24,0);

	this.instance_91 = new lib.Symbol13();
	this.instance_91.setTransform(16,0);

	this.instance_92 = new lib.Symbol13();
	this.instance_92.setTransform(8,0);

	this.instance_93 = new lib.Symbol13();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-200,750.7,400);


(lib.Symbol11 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol12();
	this.instance.setTransform(0,0,1,1.424,0,45.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204.8,-200,1156.4,400);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.d3 = new lib.Symbol10();
	this.d3.setTransform(99.5,7.5);

	this.d2 = new lib.Symbol9();
	this.d2.setTransform(90.5,7.5);

	this.d1 = new lib.Symbol8();
	this.d1.setTransform(81.5,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.d1},{t:this.d2},{t:this.d3}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D921E").s().p("AAwCFIgCgGIgBgDIgBgDIgCgFIgMgfIg7AAIgMAgIgCAHIgBACIgBADIgBAEIgpAAIAGgLIADgJIAGgQIA9iiIAZAAIA6CgIAGAQIAEAKIAGAMgAASAxIgSgyIgRAyIAjAAgAghhlQgNgMgDgTIAaAAQADAKAFAEQAGAFAJgBQAIABAGgFQAFgEAEgKIAZAAQgDATgNAMQgNALgTAAQgUAAgNgLg");
	this.shape.setTransform(67.7,-3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D921E").s().p("AAdBaIgIgJIgHgHIgsgyIALgYIAEAAIACAAQAPAAALgIQALgJAAgQQAAgRgMgLQgMgKgTAAIgMAAIAACJIAAANIABARIgmAAIABgPIAAgMIAAiLIAAgGIgBgJIAAgGIAAgJIAOgDIAOgCIAQgBQAQAAALADQAMADAKAFQARAKAJAQQAJARAAATQAAANgEAMQgFAKgJAIQgGAFgGAEQgHADgLAEIAaAaIAMALIATARIgbAbIgNgRg");
	this.shape_1.setTransform(50.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D921E").s().p("AgpBcQgTgKgLgTQgKgSAAgZIAAhVIgBgGIgBgMIAAgHIAAgLIAnAAIAAATIAAAOIAABPIAAAQQAAAHACAEIADAIQAGAKALAGQALAFAMAAQANAAAKgEQAKgEAGgJQAEgGABgIQACgIAAgMIAAhXIAAgFIgBgKIAAgGIgBgJIAnAAIgBANIAAAMIAABaQAAASgCAMQgDAMgGAKQgKARgSAKQgTAJgXAAQgYAAgTgKg");
	this.shape_2.setTransform(30.9,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D921E").s().p("AgXBhQgTgHgOgMQgQgOgIgTQgJgUAAgVQABgdANgZQAOgYAXgPQAYgOAbAAQANAAANADQANADALAGIALAHIANAMIgWAcQgJgJgIgFQgIgFgIgDQgIgCgKAAQgRAAgQAKQgPAJgJAQQgJAQAAASQAAAUAJAPQAIAPAPAJQAPAJARAAQAPAAANgGQANgGAPgPIAWAeQgOAMgNAHQgMAHgMADQgMADgOAAQgRAAgTgHg");
	this.shape_3.setTransform(10.2,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D921E").s().p("AgpBeQgTgJgPgQQgNgOgHgSQgGgSgBgTQAAgQAGgQQAGgQAJgNQAKgOANgJQANgIAQgFQAPgFAOAAQAXAAATAJQATAIAPARQANAPAHARQAHASgBASQAAAdgNAXQgPAXgWAOQgZAOgbAAQgUAAgVgJgAgig6QgPAJgKAPQgIAPgBATQAAASAKAQQAJAQAPAJQAQAJASAAQATAAAQgJQAPgKAKgPQAIgQABgSQAAgSgKgPQgKgQgPgJQgQgJgSAAQgSAAgQAJg");
	this.shape_4.setTransform(-17.6,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D921E").s().p("AgpBcQgTgKgLgTQgKgSAAgZIAAhVIgBgGIgBgMIAAgHIAAgLIAnAAIAAATIAAAOIAABPIAAAQQAAAHACAEIADAIQAGAKALAGQALAFAMAAQANAAAKgEQAKgEAGgJQAEgGABgIQACgIAAgMIAAhXIAAgFIgBgKIAAgGIgBgJIAnAAIgBANIAAAMIAABaQAAASgCAMQgDAMgGAKQgKARgSAKQgTAJgXAAQgYAAgTgKg");
	this.shape_5.setTransform(-45.9,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D921E").s().p("AgXBhQgTgHgOgMQgQgOgIgTQgJgUAAgVQABgdANgZQAOgYAXgPQAYgOAbAAQANAAANADQANADALAGIALAHIANAMIgWAcQgJgJgIgFQgIgFgIgDQgIgCgKAAQgRAAgQAKQgPAJgJAQQgJAQAAASQAAAUAJAPQAIAPAPAJQAPAJARAAQAPAAANgGQANgGAPgPIAWAeQgOAMgNAHQgMAHgMADQgMADgOAAQgRAAgTgHg");
	this.shape_6.setTransform(-66.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.9,-19.9,180.6,39.9);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// l0123
	this.l2 = new lib.Symbol18();
	this.l2.setTransform(8.3,6.7,1,1,0,0,0,16.6,0);

	this.l3 = new lib.Symbol17();
	this.l3.setTransform(22.9,0,1,1,0,0,0,19.4,0);

	this.l1 = new lib.Symbol16();
	this.l1.setTransform(-12.5,0,1,1,0,0,0,11.6,0);

	this.l0 = new lib.Symbol14();
	this.l0.setTransform(-35.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l0},{t:this.l1},{t:this.l3},{t:this.l2}]}).wait(1));

	// Layer 2
	this.bg = new lib.Symbol15();
	this.bg.setTransform(-47.4,0);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.4,-13,94.9,26);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.b2 = new lib.Symbol33();

	this.timeline.addTween(cjs.Tween.get(this.b2).wait(1));

	// Layer 1
	this.b1 = new lib.Symbol32();

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-16,144,32);


(lib.bird_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 2
	this.head = new lib.Symbol38();
	this.head.setTransform(1,-24.3,1,1,0,0,0,-7,2);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1));

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bird, null, new cjs.Matrix2D(1,0,0,1,-126.3,-129.3)).s().p("AESFvQgmgbg3gPQgzgNgyABQhpAEhUgNQgxgHhcgSQgQgDgdgVQgjgZACgSQADgoARhAQAVhTAXgNQBvh1A1ihQAMgjAShBQAfAWBXgBQBJgCAjgLQASgFACACIAFAKIANGVICHBsQgFAggCAlQAAAOgXA+QgVA8gEAAIAAAAg");
	this.shape.setTransform(1.3,20.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// tail
	this.tail = new lib.Symbol37();
	this.tail.setTransform(-7.4,47.8,1,1,0,0,0,0.8,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.tail).wait(1));

	// w1
	this.w1 = new lib.Symbol34();
	this.w1.setTransform(-5.6,-17.3,1,1,0,0,0,39.9,14.2);

	this.timeline.addTween(cjs.Tween.get(this.w1).wait(1));

	// w2
	this.w2 = new lib.Symbol34();
	this.w2.setTransform(-5.7,-17.3,1,1,0,0,180,39.9,14.2);

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.2,-109,267.2,218);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.nov = new lib.Symbol29();
	this.nov.setTransform(-119,-9);

	this.timeline.addTween(cjs.Tween.get(this.nov).wait(1));

	// t3
	this.l1 = new lib.Symbol28();
	this.l1.setTransform(159,-56);

	this.t2 = new lib.Symbol27();
	this.t2.setTransform(105.2,-38.6);

	this.t1 = new lib.Symbol26();
	this.t1.setTransform(12.6,-38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.l1}]}).wait(1));

	// t12 copy
	this.t5 = new lib.Symbol25();
	this.t5.setTransform(114.7,23.4);

	this.t4 = new lib.Symbol24();
	this.t4.setTransform(84.3,6.1);

	this.t3 = new lib.Symbol23();
	this.t3.setTransform(65,-11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t3},{t:this.t4},{t:this.t5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.5,-58,321.9,94);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t3
	this.t3 = new lib.Symbol7();
	this.t3.setTransform(0,-35.8);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t12
	this.t2 = new lib.Symbol6();
	this.t2.setTransform(0,15);

	this.t1 = new lib.Symbol5();
	this.t1.setTransform(0,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.1,-159.9,280.3,194.8);


(lib.Symbol36 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// bird2
	this.bird2 = new lib.bird_1();
	this.bird2.setTransform(5.7,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.bird2).wait(1));

	// bird1
	this.bird1 = new lib.bird_1();
	this.bird1.setTransform(5.7,0);

	this.timeline.addTween(cjs.Tween.get(this.bird1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.6,-109,278.5,218);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var r = this;
		var count = 1;
		var repeat = 2;
		var time2 = 11.0;
		var time3 = time2+3.0;
		var time4 = time3+3.0;
		
		TweenMax.to(r.bg, 0.9, {x:"-=8", yoyo:false, repeat:-1, repeatDelay:0.0, ease:Power0.easeNone}, 0.0)
		var dlit = 0.13
		var del = 0.13
		//var ease = Power0.easeNone
		var ease = Sine.easeInOut
		//wings
		TweenMax.to(r.birdCont.bird1.w1, dlit, {rotation:"-=60", scaleY:0.5, yoyo:true, repeat:-1, repeatDelay:0.0, ease:ease}, 0.0)
		TweenMax.to(r.birdCont.bird1.w1.w2, dlit, {rotation:"-=50", scaleY:0.3, yoyo:true, repeat:-1, repeatDelay:0.0, ease:ease}, del)
		TweenMax.to(r.birdCont.bird1.w2, dlit, {rotation:"-=60", scaleY:0.5, yoyo:true, repeat:-1, repeatDelay:0.0, ease:ease}, 0.0)
		TweenMax.to(r.birdCont.bird1.w2.w2, dlit, {rotation:"-=50", scaleY:0.3, yoyo:true, repeat:-1, repeatDelay:0.0, ease:ease}, del)
		//body
		TweenMax.to(r.birdCont.bird1, 0.5, {x:"-=50", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(r.birdCont.bird1, 0.6, {y:"-=80", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		//tail
		//TweenMax.to(r.birdCont.bird1.tail, 0.8, {scaleX:0.9, yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		//TweenMax.to(r.birdCont.bird1.tail, 0.45, {scaleY:0.9, yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		
		//wings
		TweenMax.to(r.birdCont.bird2.w1, dlit, {rotation:"-=60", scaleY:0.5, yoyo:true, repeat:-1, repeatDelay:0.0, ease:ease}, 0.0)
		TweenMax.to(r.birdCont.bird2.w1.w2, dlit, {rotation:"-=50", scaleY:0.3, yoyo:true, repeat:-1, repeatDelay:0.0, ease:ease}, del)
		TweenMax.to(r.birdCont.bird2.w2, dlit, {rotation:"-=60", scaleY:0.5, yoyo:true, repeat:-1, repeatDelay:0.0, ease:ease}, 0.0)
		TweenMax.to(r.birdCont.bird2.w2.w2, dlit, {rotation:"-=50", scaleY:0.3, yoyo:true, repeat:-1, repeatDelay:0.0, ease:ease}, del)
		//body
		TweenMax.to(r.birdCont.bird2, 0.5, {x:"-=50", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(r.birdCont.bird2, 0.6, {y:"-=80", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		//tail
		//TweenMax.to(r.birdCont.bird2.tail, 0.8, {scaleX:0.9, yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		//TweenMax.to(r.birdCont.bird2.tail, 0.45, {scaleY:0.9, yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		
		
		var tl = new TimelineLite();
		tl.fromTo(r.blk, 1.0, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(r.birdCont, 1.5, {x:"-=350", y:"-=550", scaleX:5, scaleY:3, ease:Expo.easeOut}, 1.5)
		  .from(r.birdCont.bird1.tail, 1.5, {scaleY:0.3, ease:Expo.easeOut}, 2.0)
		  
		  //upright corner
		  .to(r.birdCont, 1.0, {x:"+=160", y:"-=90", scaleX:0.5, scaleY:0.5, ease:Sine.easeInOut}, 3.0)
		  .to(r.birdCont, 0.5, {rotation:"+=20", ease:Sine.easeIn}, 3.0)
		  .to(r.birdCont, 0.5, {rotation:"-=20", ease:Sine.easeOut}, 3.5)
		  .to(r.birdCont.bird1, 1.0, {alpha:0, ease:Expo.easeInOut}, 3.0)
		  .from(r.birdCont.bird2, 1.0, {alpha:0, ease:Expo.easeInOut}, 3.0)
		  .to(r.birdCont.bird1.tail, 0.5, {scaleY:0.3, ease:Sine.easeIn}, 3.0)
		  .to(r.birdCont.bird1.tail, 0.5, {scaleY:1.0, ease:Sine.easeOut}, 3.5)
		  .to(r.birdCont.bird2.tail, 0.5, {scaleY:0.3, ease:Sine.easeIn}, 3.0)
		  .to(r.birdCont.bird2.tail, 0.5, {scaleY:1.0, ease:Sine.easeOut}, 3.5)
		  
		  //downright corner
		  .to(r.birdCont, 1.0, {x:"+=40", y:"+=80", scaleX:0.6, scaleY:0.6, ease:Sine.easeInOut}, 5.0)
		  .to(r.birdCont, 0.5, {rotation:"-=10", ease:Sine.easeIn}, 5.0)
		  .to(r.birdCont, 0.5, {rotation:"+=10", ease:Sine.easeOut}, 5.5)
		  .to(r.birdCont.bird2.tail, 0.5, {scaleY:0.3, ease:Sine.easeIn}, 5.0)
		  .to(r.birdCont.bird2.tail, 0.5, {scaleY:1.0, ease:Sine.easeOut}, 5.5)
		  
		  //upleft corner
		  .to(r.birdCont, 2.0, {x:"-=200", y:"-=40", scaleX:0.45, scaleY:0.45, ease:Sine.easeInOut}, 6.0)
		  .to(r.birdCont, 1.0, {rotation:"-=10", ease:Sine.easeIn}, 6.0)
		  .to(r.birdCont, 1.0, {rotation:"+=10", ease:Sine.easeOut}, 7.0)
		  .to(r.birdCont.bird1, 2.0, {alpha:1, ease:Expo.easeInOut}, 6.0)
		  .to(r.birdCont.bird2, 2.0, {alpha:0, ease:Expo.easeInOut}, 6.0)
		  .to(r.birdCont.bird1.tail, 1.0, {scaleY:0.5, ease:Sine.easeIn}, 6.0)
		  .to(r.birdCont.bird1.tail, 1.0, {scaleY:1.0, ease:Sine.easeOut}, 7.0)
		  .to(r.birdCont.bird2.tail, 1.0, {scaleY:0.5, ease:Sine.easeIn}, 6.0)
		  .to(r.birdCont.bird2.tail, 1.0, {scaleY:1.0, ease:Sine.easeOut}, 7.0)
		  
		  //leave
		  .to(r.birdCont, 1.4, {x:160, y:"-=730", scaleX:4, scaleY:4, ease:Expo.easeInOut}, 8.2)
		  .to(r.birdCont.bird1.tail, 1.0, {scaleX:0.2, rotation:"+=40", ease:Expo.easeInOut}, 8.2)
		  
		  ////upright corner
		  //.to(r.birdCont, 1.0, {x:"+=150", y:"-=40", scaleX:0.4, scaleY:0.4, ease:Expo.easeInOut}, 3.0)
		  //.to(r.birdCont, 0.5, {rotation:"+=50", ease:Expo.easeIn}, 3.0)
		  //.to(r.birdCont, 0.5, {rotation:"-=50", ease:Expo.easeOut}, 3.5)
		  //.to(r.birdCont.bird1, 1.0, {alpha:0, ease:Expo.easeInOut}, 3.0)
		  //.from(r.birdCont.bird2, 1.0, {alpha:0, ease:Expo.easeInOut}, 3.0)
		  //
		  ////downright corner
		  //.to(r.birdCont, 1.0, {x:"+=30", y:"+=60", scaleX:0.5, scaleY:0.5, ease:Expo.easeInOut}, 5.0)
		  //.to(r.birdCont, 0.5, {rotation:"+=20", ease:Expo.easeIn}, 5.0)
		  //.to(r.birdCont, 0.5, {rotation:"-=20", ease:Expo.easeOut}, 5.5)
		  //
		  ////upleft corner
		  //.to(r.birdCont, 2.0, {x:"-=190", y:"-=30", scaleX:0.35, scaleY:0.35, ease:Expo.easeInOut}, 6.0)
		  //.to(r.birdCont, 1.0, {rotation:"-=70", ease:Expo.easeIn}, 6.0)
		  //.to(r.birdCont, 1.0, {rotation:"+=70", ease:Expo.easeOut}, 7.0)
		  //.to(r.birdCont.bird1, 2.0, {alpha:1, ease:Expo.easeInOut}, 6.0)
		  //.to(r.birdCont.bird2, 2.0, {alpha:0, ease:Expo.easeInOut}, 6.0)
		  //
		  ////leave
		  //.to(r.birdCont, 1.4, {x:160, y:"-=730", scaleX:4, scaleY:4, ease:Expo.easeInOut}, 8.2)
		  
		  
		  .to(r.birdCont.bird2.head, 0.3, {rotation:"+=30", x:"+=5", ease:Sine.easeInOut}, 3.7)
		  .to(r.birdCont.bird2.head, 0.3, {rotation:"-=30", x:"-=5", ease:Sine.easeInOut}, 4.2)
		  
		  .staggerFrom([r.hat, r.t1.t1, r.t1.t2], 0.8, {y:"+=250", alpha:0, ease:Expo.easeOut}, 0.1, 0.50)
		  .staggerTo([r.t1.t1, r.t1.t2], 0.8, {scaleX:0.0, scaleY:0.0, y:0, ease:Expo.easeIn}, 0.1, 2.50)
		  .staggerFrom([r.t2.t1, r.t2.t2], 0.8, {y:"+=250", ease:Expo.easeOut}, 0.1, 3.50)
		  .staggerTo([r.t2.t1, r.t2.t2], 0.8, {scaleX:0.0, scaleY:0.0, y:0, ease:Expo.easeIn}, 0.1, 5.50)
		  .staggerFrom([r.t3.t1, r.t3.t2], 0.8, {y:"+=250", ease:Expo.easeOut}, 0.1, 6.50)
		  .to(r.hat, 1.2, {y:"-=230", ease:Expo.easeInOut}, 8.40)
		  .staggerTo([r.t3.t1, r.t3.t2], 1.2, {scaleX:0.8, scaleY:0.8, y:"-=130", ease:Expo.easeInOut}, 0.1, 8.50)
		  .staggerFrom([r.t3.t2.d1, r.t3.t2.d2, r.t3.t2.d3], 0.8, {x:"+=250", ease:Expo.easeOut}, 0.1, 9.20)
		  .from(r.t3.t3, 0.8, {scaleX:3.0, scaleY:3.0, alpha:0, ease:Expo.easeOut}, 9.30)
		  
		  
		  //2
		  .staggerTo([r.t3.t3, r.t3.t2, r.t3.t1], 0.8, {y:"+=430", ease:Expo.easeIn}, 0.1, time2)
		  .from(r.logo, 1.6, {y:"-=150", ease:Expo.easeInOut}, time2+0.40)
		  //.from(r.logo.bg, 1.3, {scaleX:0, ease:Expo.easeInOut}, time2+0.00)
		  //.from(r.logo.l0, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut}, time2+0.70)
		  //.staggerFrom([r.logo.l1, r.logo.l2, r.logo.l3], 0.8, {x:"+=150", alpha:0, ease:Expo.easeOut}, 0.1, time2+0.90)
		  .from(r.prod, 0.9, {y:"-=230", ease:Expo.easeOut}, time2+0.70)
		  .from(r.t4.t1, 0.9, {scaleX:3, scaleY:3, alpha:0, ease:Expo.easeOut}, time2+0.90)
		  .staggerFrom([r.t4.t2, r.t4.t3], 0.9, {y:"+=430", alpha:0, ease:Expo.easeOut}, 0.1, time2+0.90)
		  
		  
		  //3
		  .staggerTo([r.t4.t3, r.t4.t2, r.t4.t1], 0.7, {y:"+=430", ease:Expo.easeIn}, 0.1, time3+0.0)
		  .to(r.prod, 0.9, {scaleX:1, scaleY:1, y:27, ease:Expo.easeInOut}, time3+0.3)
		  .from(r.t5.l1, 0.8, {scaleX:0, ease:Expo.easeInOut}, time3+0.60)
		  .staggerFrom([r.t5.nov.n1, r.t5.nov.n2], 0.9, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.2, time3+0.60)
		  .staggerFrom([r.t5.t1, r.t5.t2], 0.9, {x:"+=230", alpha:0, ease:Expo.easeOut}, 0.1, time3+0.60)
		  .staggerFrom([r.t5.t3, r.t5.t4, r.t5.t5], 0.5, {y:"+=30", alpha:0, ease:Expo.easeOut}, 0.1, time3+1.00)
		  .staggerFrom([r.btn.b1, r.btn.b2], 0.5, {scaleX:3, scaleY:3, alpha:0, ease:Back.easeOut}, 0.1, time3+1.00)
		
		  
		  .call(replay)
		  .to(r.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 18)
		  ;
		
		tl.duration(15);
		  
		
		function replay() {
		  if (count == repeat){
		      tl.pause();
			  //console.log(321);
			  TweenMax.killAll();
		  } else {
		  if (count != repeat) {
			  count++;
			  tl.play();
		  }
		  }
		}
		
		
		function restart() {
			tl.play(0);
		}
		
		TweenMax.to(r.allStop, 29.8, {x:1000, onComplete:check})
		function check() {
			//console.log(123);
			//TweenMax.killAll();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 6
	this.allStop = new lib.Symbol19();
	this.allStop.setTransform(312.5,285);

	this.timeline.addTween(cjs.Tween.get(this.allStop).wait(1));

	// blk
	this.blk = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// birdCont
	this.birdCont = new lib.Symbol36();
	this.birdCont.setTransform(-71.6,11,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.birdCont).wait(1));

	// hat
	this.hat = new lib.hat_1();
	this.hat.setTransform(0,-26);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.setTransform(-110.5,-117);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// btn
	this.btn = new lib.btn();
	this.btn.setTransform(0,112);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// prod
	this.prod = new lib.prod_1();
	this.prod.setTransform(-3,-22,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.prod).wait(1));

	// t5
	this.t5 = new lib.t5();
	this.t5.setTransform(0,-72);

	this.timeline.addTween(cjs.Tween.get(this.t5).wait(1));

	// t4
	this.t4 = new lib.t4();
	this.t4.setTransform(0,88.1);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(0,88.1);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(0,88.1);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(0,88.1);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// Layer 4
	this.bg = new lib.Symbol11();
	this.bg.setTransform(-370,0);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// bg_pattern
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1076,-554,1657.6,844);


// stage content:
(lib.yr_336x280 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(window.clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// link
	this.btn = new lib.link();
	this.btn.setTransform(168,140,1.867,0.933);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6PV3MAAAgrtMA0fAAAMAAAArtg");
	mask.setTransform(168,140);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.098)").ss(2,1,1).p("A6P13MA0fAAAMAAAArvMg0fAAAg");
	this.shape.setTransform(168,140);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(168,140);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168,140,336,280);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;