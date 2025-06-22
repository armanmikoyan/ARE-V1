(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		2466: (e, r, t) => {
			'use strict';
			t.r(r), t.d(r, { __N_SSG: () => ed, default: () => eh });
			var n = t(7876),
				i = t(7328),
				o = t.n(i),
				a = t(4232),
				l = t(4587),
				s = t.n(l),
				c = t(2643),
				d = t(6252),
				h = t(8230),
				m = t.n(h),
				u = t(8343);
			let g = d.A.nav(
					(0, u.Ay)({
						display: { _: 'flex', '<sm': 'none' },
						justifyContent: 'space-between',
						alignItems: 'center',
						backgroundColor: 'transparent',
						backdropFilter: 'blur(0.2rem)',
						padding: { _: '0.8rem 3rem', '<md': '0.8rem 2rem' },
						boxShadow: '0 0.1rem 1rem var(--color-primary)',
						fontWeight: 'var(--font-weight-bold)',
						margin: '1.5rem auto',
						marginTop: '0',
						borderRadius: 'var(--radius-xxxl)',
						width: '90%',
						maxWidth: '57rem',
						fontSize: { _: 'var(--font-size-sm)', '<lg': 'var(--font-size-xs)' },
						position: 'sticky',
						top: '1.5rem',
					}),
				),
				x = d.A.div((0, u.Ay)({})),
				f = d.A.ul(
					(0, u.Ay)({
						display: 'flex',
						gap: { _: '2rem', '<lg': '0.5rem' },
						listStyleType: 'none',
					}),
				),
				p = d.A.li(
					(0, u.Ay)({
						position: 'relative',
						cursor: 'pointer',
						padding: { _: '0.5rem 1rem', '<lg': '0.5rem', '<sm': '0.3rem' },
						transition: 'color 0.3s ease',
						'&::after': {
							content: '""',
							position: 'absolute',
							bottom: 0,
							left: '50%',
							width: 0,
							height: '0.05rem',
							backgroundColor: 'var(--color-text-primary)',
							transition: 'width 0.3s ease',
							transformOrigin: 'center',
							transform: 'translateX(-50%)',
						},
						'&:hover::after': { width: '70%' },
					}),
				),
				v = (0, d.A)(m())((0, u.Ay)({})),
				j = d.A.div(
					(0, u.Ay)({ display: 'flex', alignItems: 'center', gap: { _: '1rem', '<lg': '0.5rem' } }),
				),
				A = (0, d.A)(c.A)(
					(0, u.Ay)({
						fontWeight: 'var(--font-weight-semibold)',
						color: 'var(--color-text-secondary)',
						backgroundColor: 'var(--color-primary)',
						transition: 'background-color 0.3s ease, color 0.3s ease',
						'&:hover': { backgroundColor: 'var(--color-secondary)' },
						fontSize: { _: 'var(--font-size-sm)', '<lg': 'var(--font-size-xs)' },
						padding: { _: null, '<lg': '0.2rem 0.8rem' },
					}),
				),
				b = [
					{ label: 'Home', href: '/' },
					{ label: 'About', href: '/about' },
					{ label: 'Services', href: '/services' },
					{ label: 'Contact', href: '/contact' },
				];
			var y = t(7090),
				w = t(7650);
			let _ = (0, t(9136).Ay)(c.A)(
				(0, u.Ay)({
					color: 'var(--color-accent)',
					transition: 'color 0.8s ease, color 0.3s ease',
					'&:hover': { color: 'var(--color-text-primary)' },
					padding: { _: null, '<md': '0' },
					minWidth: 'fit-content',
				}),
			);
			var k = t(5278),
				S = t(2246),
				C = t(2653);
			let E = function () {
				let [e, r] = (0, k.fp)(S.Q),
					t = e === C.l.DARK,
					i = (0, a.useRef)(null);
				return (
					(0, a.useEffect)(() => {
						document.documentElement.classList.toggle(C.l.DARK, t);
					}, [t]),
					(0, a.useEffect)(() => {
						i.current = new Audio('./themeModeSound.mp3');
					}, []),
					(0, n.jsx)(_, {
						onClick: () => {
							r((e) => {
								let r = e === C.l.DARK ? C.l.LIGHT : C.l.DARK;
								return localStorage.setItem('themeMode', r), r;
							}),
								i.current && ((i.current.currentTime = 0), i.current.play());
						},
						children: t ? (0, n.jsx)(w.A, {}) : (0, n.jsx)(y.A, {}),
					})
				);
			};
			function z() {
				let e = (0, k.md)(S.Q);
				return (0, n.jsxs)(g, {
					children: [
						(0, n.jsx)(x, {
							children: (0, n.jsx)(v, {
								href: '/',
								children: (0, n.jsx)(s(), {
									width: 50,
									height: 30,
									alt: 'Logo',
									src: e === C.l.DARK ? './globe.svg' : './next.svg',
								}),
							}),
						}),
						(0, n.jsx)(f, {
							children: b.map((e, r) => {
								let { label: t, href: i } = e;
								return (0, n.jsx)(p, { children: (0, n.jsx)(v, { href: i, children: t }) }, r);
							}),
						}),
						(0, n.jsxs)(j, {
							children: [
								(0, n.jsx)(A, { variant: 'contained', children: 'Join' }),
								(0, n.jsx)(E, {}),
							],
						}),
					],
				});
			}
			var I = t(8888),
				T = t(4527),
				R = t(8993);
			function D() {
				let e = (0, I._)([
					'\n  from {\n    height: 7rem;\n\n  }\n  to {\n    height: 31rem;\n\n  }\n',
				]);
				return (
					(D = function () {
						return e;
					}),
					e
				);
			}
			function N() {
				let e = (0, I._)([
					'\n  from {\n    height: 31rem;\n\n  }\n  to {\n    height: 7rem;\n\n  }\n',
				]);
				return (
					(N = function () {
						return e;
					}),
					e
				);
			}
			let G = (0, R.i7)(D()),
				X = (0, R.i7)(N()),
				K = d.A.nav(
					(0, u.Ay)({
						display: { _: 'flex', 'sm>': 'none', sm: 'none' },
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-between',
						backgroundColor: 'transparent',
						backdropFilter: 'blur(0.2rem)',
						padding: '2rem 0.3rem 0.3rem 0.3rem;',
						boxShadow: '0 0.1rem 1rem var(--color-primary)',
						fontWeight: 'var(--font-weight-bold)',
						margin: '1.5rem ',
						marginTop: '0',
						borderRadius: 'var(--radius-xxxl)',
						fontSize: { _: 'var(--font-size-sm)', '<lg': 'var(--font-size-xs)' },
						position: 'sticky',
						top: '1.5rem',
						width: '5rem',
						height: (e) => {
							let { isExpanded: r } = e;
							return r ? '31rem' : '7rem';
						},
						animation: (e) => {
							let { isExpanded: r } = e;
							return r ? ''.concat(G, ' 0.5s ease forwards') : ''.concat(X, ' 0.5s ease forwards');
						},
					}),
				),
				M = d.A.div((0, u.Ay)({})),
				W = d.A.ul(
					(0, u.Ay)({
						display: (e) => {
							let { isExpanded: r } = e;
							return r ? 'flex' : 'none';
						},
						flexDirection: 'column',
						alignItems: 'center',
						gap: '1.3rem',
						listStyleType: 'none',
					}),
				),
				F = d.A.li(
					(0, u.Ay)({
						position: 'relative',
						cursor: 'pointer',
						padding: '0.3rem',
						transition: 'color 0.3s ease',
						'&::after': {
							content: '""',
							position: 'absolute',
							bottom: 0,
							left: '50%',
							width: 0,
							height: '0.05rem',
							backgroundColor: 'var(--color-text-primary)',
							transition: 'width 0.3s ease',
							transformOrigin: 'center',
							transform: 'translateX(-50%)',
						},
						'&:hover::after': { width: '70%' },
					}),
				),
				H = (0, d.A)(m())((0, u.Ay)({})),
				L = d.A.div(
					(0, u.Ay)({
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '0.5rem',
					}),
				),
				O = (0, d.A)(c.A)(
					(0, u.Ay)({
						fontWeight: 'var(--font-weight-semibold)',
						color: 'var(--color-text-secondary)',
						backgroundColor: 'var(--color-primary)',
						transition: 'background-color 0.3s ease, color 0.3s ease',
						'&:hover': { backgroundColor: 'var(--color-secondary)' },
						fontSize: { _: 'var(--font-size-sm)', '<lg': 'var(--font-size-xs)' },
						padding: { _: null, '<lg': '0.2rem 0.8rem' },
					}),
				),
				P = d.A.div(
					(0, u.Ay)({
						display: (e) => {
							let { isExpanded: r } = e;
							return r ? 'flex' : 'none';
						},
						flexDirection: 'column',
						alignItems: 'center',
						gap: '1rem',
					}),
				),
				Q = (0, d.A)(T.A)((0, u.Ay)({ color: 'var(--color-accent)', padding: '0.5rem' })),
				J = [
					{ label: 'Home', href: '/' },
					{ label: 'About', href: '/about' },
					{ label: 'Services', href: '/services' },
					{ label: 'Contact', href: '/contact' },
				];
			var U = t(7499),
				q = t(5293);
			function B() {
				let e = (0, k.md)(S.Q),
					[r, t] = (0, a.useState)(!0);
				return (0, n.jsxs)(K, {
					isExpanded: r,
					children: [
						(0, n.jsx)(M, {
							children: (0, n.jsx)(H, {
								href: '/',
								children: (0, n.jsx)(s(), {
									width: 50,
									height: 30,
									alt: 'Logo',
									src: e === C.l.DARK ? './globe.svg' : './next.svg',
								}),
							}),
						}),
						(0, n.jsx)(W, {
							isExpanded: r,
							children: J.map((e, t) => {
								let { label: i, href: o } = e;
								return (0, n.jsx)(
									F,
									{ isExpanded: r, children: (0, n.jsx)(H, { href: o, children: i }) },
									t,
								);
							}),
						}),
						(0, n.jsxs)(L, {
							children: [
								(0, n.jsxs)(P, {
									isExpanded: r,
									children: [
										(0, n.jsx)(O, { variant: 'contained', children: 'Join' }),
										(0, n.jsx)(E, {}),
									],
								}),
								(0, n.jsx)(Q, {
									onClick: () => t((e) => !e),
									children: r ? (0, n.jsx)(q.A, {}) : (0, n.jsx)(U.A, {}),
								}),
							],
						}),
					],
				});
			}
			let V = d.A.main((0, u.Ay)({ position: 'relative', minHeight: '100vh' }));
			var Y = t(6780),
				Z = t.n(Y);
			let $ = function (e) {
				let { children: r } = e;
				return (0, n.jsxs)(V, {
					className: Z().className,
					children: [(0, n.jsx)(z, {}), (0, n.jsx)(B, {}), r],
				});
			};
			var ee = (function (e) {
				return (e.TEXT = 'text'), (e.IMG = 'img'), e;
			})({});
			let er = d.A.section(
					(0, u.Ay)({
						margin: '2rem',
						padding: '2rem',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '1rem',
					}),
				),
				et = d.A.div((0, u.Ay)({ display: 'flex', flexDirection: 'column' }));
			function en() {
				let e = (0, I._)([
					'\n  0% { background-position: -',
					'rem 0; }\n  100% { background-position: ',
					'rem 0; }\n',
				]);
				return (
					(en = function () {
						return e;
					}),
					e
				);
			}
			let ei = (e) => (0, R.i7)(en(), e, e),
				eo = (e, r) =>
					'linear-gradient(90deg, '.concat(r, ' 10%, ').concat(e, ' 45%, ').concat(r, ' 90%)'),
				ea = d.A.div(
					(0, u.Ay)({
						background: (e) => {
							let { colorPrimary: r, colorSecondary: t } = e;
							return { _: eo(r, t) };
						},
						backgroundSize: (e) => {
							let { width: r } = e;
							return ''.concat(4 * r, 'rem 100%');
						},
						animation: (e) => {
							let { width: r, timing: t } = e;
							return { _: ''.concat(ei(2 * r), ' ').concat(t) };
						},
						width: (e) => {
							let { width: r } = e;
							return { _: ''.concat(r, 'rem') };
						},
						height: (e) => {
							let { height: r } = e;
							return { _: ''.concat(r, 'rem') };
						},
						margin: '1rem 0 0',
						borderRadius: (e) => {
							let { radius: r } = e;
							return { _: 'number' == typeof r ? ''.concat(r, 'rem') : r };
						},
					}),
				),
				el = d.A.div(
					(0, u.Ay)({
						position: 'relative',
						overflow: 'hidden',
						backgroundImage: (e) => {
							let { imageUrl: r } = e;
							return { _: r ? "url('".concat(r, "')") : 'none' };
						},
						backgroundSize: '30% auto',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						margin: '1rem 0 0',
						width: (e) => {
							let { width: r } = e;
							return { _: ''.concat(r, 'rem') };
						},
						height: (e) => {
							let { height: r } = e;
							return { _: ''.concat(r, 'rem') };
						},
						borderRadius: (e) => {
							let { radius: r } = e;
							return { _: 'number' == typeof r ? ''.concat(r, 'rem') : r };
						},
						'&::after': {
							content: '""',
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							background: (e) => {
								let { colorPrimary: r, colorSecondary: t } = e;
								return { _: eo(r, t) };
							},
							backgroundSize: (e) => {
								let { width: r = 10 } = e;
								return ''.concat(4 * r, 'rem 100%');
							},
							animation: (e) => {
								let { width: r, timing: t } = e;
								return { _: ''.concat(ei(2 * r), ' ').concat(t) };
							},
							opacity: 0.3,
						},
					}),
				);
			function es(e) {
				let {
						width: r = 20,
						height: t = 1.2,
						colorPrimary: i = 'white',
						colorSecondary: o = 'grey',
						timing: a = '1.1s infinite ease-in-out',
						radius: l = 'var(--radius-md)',
						variant: s = ee.TEXT,
						imageUrl: c = './globe.svg',
						...d
					} = e,
					h = s === ee.TEXT ? ea : el;
				return (0, n.jsx)(h, {
					width: r,
					height: t,
					colorPrimary: i,
					colorSecondary: o,
					timing: a,
					radius: l,
					variant: s,
					imageUrl: c,
					...d,
				});
			}
			function ec() {
				return (0, n.jsxs)(n.Fragment, {
					children: [
						(0, n.jsxs)(er, {
							children: [
								(0, n.jsxs)(et, {
									children: [
										(0, n.jsx)(es, { height: 1.7, width: 27 }),
										(0, n.jsx)(es, { height: 1.1, width: 30 }),
										(0, n.jsx)(es, { height: 1.1, width: 19 }),
										(0, n.jsx)(es, { height: 1.1, width: 27 }),
									],
								}),
								(0, n.jsx)(es, { height: 10, width: 15, variant: ee.IMG }),
							],
						}),
						(0, n.jsxs)(er, {
							children: [
								(0, n.jsx)(es, { height: 10, width: 15, variant: ee.IMG }),
								(0, n.jsxs)(et, {
									children: [
										(0, n.jsx)(es, { height: 1.7, width: 27 }),
										(0, n.jsx)(es, { height: 1.1, width: 30 }),
										(0, n.jsx)(es, { height: 1.1, width: 19 }),
										(0, n.jsx)(es, { height: 1.1, width: 27 }),
									],
								}),
							],
						}),
						(0, n.jsxs)(er, {
							children: [
								(0, n.jsxs)(et, {
									children: [
										(0, n.jsx)(es, { height: 1.7, width: 27 }),
										(0, n.jsx)(es, { height: 1.1, width: 30 }),
										(0, n.jsx)(es, { height: 1.1, width: 19 }),
										(0, n.jsx)(es, { height: 1.1, width: 27 }),
									],
								}),
								(0, n.jsx)(es, { height: 10, width: 15, variant: ee.IMG }),
							],
						}),
					],
				});
			}
			var ed = !0;
			function eh(e) {
				let { data: r } = e;
				return (0, n.jsxs)(n.Fragment, {
					children: [
						(0, n.jsxs)(o(), {
							children: [
								(0, n.jsx)('title', { children: 'ARE' }),
								(0, n.jsx)('meta', {
									name: 'description',
									content: 'Generated by create next app',
								}),
								(0, n.jsx)('meta', {
									name: 'viewport',
									content: 'width=device-width, initial-scale=1',
								}),
								(0, n.jsx)('link', { rel: 'icon', href: '/favicon.ico' }),
							],
						}),
						(0, n.jsx)($, { children: (0, n.jsx)(ec, {}) }),
					],
				});
			}
		},
		6760: (e, r, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return t(2466);
				},
			]);
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [998, 636, 593, 792], () => r(6760)), (_N_E = e.O());
	},
]);
