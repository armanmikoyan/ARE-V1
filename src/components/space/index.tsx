import { useEffect, useRef } from 'react';
import { SpaceWrapper } from './styles';
import {
	CONNECTION_DISTANCE,
	COLLISION_DISTANCE,
	PULL_RADIUS,
	PULL_STRENGTH,
	MAX_PULL_VELOCITY_CHANGE,
	MIN_DOTS,
	INITIAL_DOTS,
} from './constants';
import { Point, Particle, Explosion } from './types';

export default function Space() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const width = (canvas.width = window.innerWidth);
		const height = (canvas.height = window.innerHeight);

		const points: Point[] = Array.from({ length: INITIAL_DOTS }).map(() => ({
			x: Math.random() * width,
			y: Math.random() * height,
			vx: (Math.random() - 0.5) * 0.3,
			vy: (Math.random() - 0.5) * 0.3,
		}));

		const explosions: Explosion[] = [];

		const distance = (p1: Point, p2: Point) => Math.hypot(p1.x - p2.x, p1.y - p2.y);

		const createExplosion = (x: number, y: number): Explosion => {
			const particleCount = 20;
			const particles: Particle[] = [];

			for (let i = 0; i < particleCount; i++) {
				const angle = (Math.PI * 2 * i) / particleCount;
				const speed = 0.5 + Math.random() * 1;
				particles.push({
					x,
					y,
					vx: Math.cos(angle) * speed,
					vy: Math.sin(angle) * speed,
					opacity: 1,
				});
			}

			return { particles };
		};

		const addDot = () => {
			points.push({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - 0.5) * 0.3,
				vy: (Math.random() - 0.5) * 0.3,
			});
		};

		const draw = () => {
			ctx.clearRect(0, 0, width, height);

			for (let i = 0; i < points.length; i++) {
				for (let j = i + 1; j < points.length; j++) {
					const p1 = points[i];
					const p2 = points[j];
					const dist = distance(p1, p2);

					if (dist < CONNECTION_DISTANCE) {
						const opacity = 1 - dist / CONNECTION_DISTANCE;
						ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
						ctx.lineWidth = 0.3;
						ctx.beginPath();
						ctx.moveTo(p1.x, p1.y);
						ctx.lineTo(p2.x, p2.y);
						ctx.stroke();
					}

					if (dist > 0 && dist < PULL_RADIUS) {
						const dx = p2.x - p1.x;
						const dy = p2.y - p1.y;
						const force = PULL_STRENGTH * (1 - dist / PULL_RADIUS);

						let vxChange = dx * force;
						let vyChange = dy * force;

						const speedChange = Math.hypot(vxChange, vyChange);
						if (speedChange > MAX_PULL_VELOCITY_CHANGE) {
							const scale = MAX_PULL_VELOCITY_CHANGE / speedChange;
							vxChange *= scale;
							vyChange *= scale;
						}

						p1.vx += vxChange;
						p1.vy += vyChange;
						p2.vx -= vxChange;
						p2.vy -= vyChange;
					}
				}
			}

			points.forEach((p) => {
				ctx.beginPath();
				ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
				ctx.fillStyle = 'white';
				ctx.fill();
			});

			const toRemove = new Set<number>();

			for (let i = 0; i < points.length; i++) {
				const p1 = points[i];

				p1.x += p1.vx;
				p1.y += p1.vy;

				if (p1.x < 0) {
					p1.x = 0;
					p1.vx *= -1;
				} else if (p1.x > width) {
					p1.x = width;
					p1.vx *= -1;
				}
				if (p1.y < 0) {
					p1.y = 0;
					p1.vy *= -1;
				} else if (p1.y > height) {
					p1.y = height;
					p1.vy *= -1;
				}

				for (let j = i + 1; j < points.length; j++) {
					if (toRemove.has(i) || toRemove.has(j)) continue;

					const p2 = points[j];
					const dist = distance(p1, p2);

					if (dist < COLLISION_DISTANCE && dist > 0) {
						toRemove.add(i);
						toRemove.add(j);

						const explosionX = (p1.x + p2.x) / 2;
						const explosionY = (p1.y + p2.y) / 2;
						explosions.push(createExplosion(explosionX, explosionY));
					}
				}
			}

			if (toRemove.size > 0) {
				const sortedIndices = Array.from(toRemove).sort((a, b) => b - a);
				for (const idx of sortedIndices) {
					points.splice(idx, 1);
				}
			}

			while (points.length < MIN_DOTS) {
				addDot();
			}

			for (let k = explosions.length - 1; k >= 0; k--) {
				const explosion = explosions[k];
				let allFaded = true;

				explosion.particles.forEach((particle) => {
					particle.x += particle.vx;
					particle.y += particle.vy;
					particle.opacity -= 0.02;

					if (particle.opacity > 0) allFaded = false;

					ctx.beginPath();
					ctx.arc(particle.x, particle.y, 0.7, 0, Math.PI * 2);
					ctx.fillStyle = `rgba(255,255,255,${particle.opacity})`;
					ctx.fill();
				});

				if (allFaded) explosions.splice(k, 1);
			}

			requestAnimationFrame(draw);
		};

		draw();
	}, []);

	return (
		<SpaceWrapper>
			<canvas ref={canvasRef} />
		</SpaceWrapper>
	);
}
