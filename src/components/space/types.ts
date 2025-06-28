export type Point = {
	x: number;
	y: number;
	vx: number;
	vy: number;
};

export type Particle = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	opacity: number;
};

export type Explosion = {
	particles: Particle[];
};
