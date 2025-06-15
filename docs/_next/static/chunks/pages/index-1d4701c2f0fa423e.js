(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		3352: (e, r, n) => {
			'use strict';
			n.r(r), n.d(r, { __N_SSG: () => ee, default: () => er });
			var t = n(7876),
				o = n(7328),
				i = n.n(o),
				a = n(4232),
				l = n(2643),
				s = n(6252),
				c = n(8230),
				d = n.n(c),
				m = n(8343);
			let h = s.A.nav(
					(0, m.Ay)({
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
				u = s.A.div((0, m.Ay)({})),
				f = s.A.ul(
					(0, m.Ay)({
						display: 'flex',
						gap: { _: '2rem', '<lg': '0.5rem' },
						listStyleType: 'none',
					}),
				),
				g = s.A.li(
					(0, m.Ay)({
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
				x = (0, s.A)(d())((0, m.Ay)({})),
				p = s.A.div(
					(0, m.Ay)({ display: 'flex', alignItems: 'center', gap: { _: '1rem', '<lg': '0.5rem' } }),
				),
				v = (0, s.A)(l.A)(
					(0, m.Ay)({
						fontWeight: 'var(--font-weight-semibold)',
						color: 'var(--color-text-secondary)',
						backgroundColor: 'var(--color-primary)',
						transition: 'background-color 0.3s ease, color 0.3s ease',
						'&:hover': { backgroundColor: 'var(--color-secondary)' },
						fontSize: { _: 'var(--font-size-sm)', '<lg': 'var(--font-size-xs)' },
						padding: { _: null, '<lg': '0.2rem 0.8rem' },
					}),
				),
				A = [
					{ label: 'Home', href: '/' },
					{ label: 'About', href: '/about' },
					{ label: 'Services', href: '/services' },
					{ label: 'Contact', href: '/contact' },
				];
			var y = n(4587),
				b = n.n(y),
				j = n(7090),
				w = n(7650);
			let _ = (0, n(9136).Ay)(l.A)(
				(0, m.Ay)({
					color: 'var(--color-accent)',
					transition: 'color 0.8s ease, color 0.3s ease',
					'&:hover': { color: 'var(--color-text-primary)' },
					padding: { _: null, '<md': '0' },
					minWidth: 'fit-content',
				}),
			);
			var k = n(5278),
				C = n(2246),
				S = n(2653);
			let E = function () {
				let [e, r] = (0, k.fp)(C.Q),
					n = e === S.l.DARK,
					o = (0, a.useRef)(null);
				return (
					(0, a.useEffect)(() => {
						document.documentElement.classList.toggle(S.l.DARK, n);
					}, [n]),
					(0, a.useEffect)(() => {
						o.current = new Audio('./themeModeSound.mp3');
					}, []),
					(0, t.jsx)(_, {
						onClick: () => {
							r((e) => {
								let r = e === S.l.DARK ? S.l.LIGHT : S.l.DARK;
								return localStorage.setItem('themeMode', r), r;
							}),
								o.current && ((o.current.currentTime = 0), o.current.play());
						},
						children: n ? (0, t.jsx)(w.A, {}) : (0, t.jsx)(j.A, {}),
					})
				);
			};
			function z() {
				let e = (0, k.md)(C.Q);
				return (0, t.jsxs)(h, {
					children: [
						(0, t.jsx)(u, {
							children: (0, t.jsx)(x, {
								href: '/',
								children: (0, t.jsx)(b(), {
									width: 50,
									height: 30,
									alt: 'Logo',
									src: e === S.l.DARK ? './globe.svg' : './next.svg',
								}),
							}),
						}),
						(0, t.jsx)(f, {
							children: A.map((e, r) => {
								let { label: n, href: o } = e;
								return (0, t.jsx)(g, { children: (0, t.jsx)(x, { href: o, children: n }) }, r);
							}),
						}),
						(0, t.jsxs)(p, {
							children: [
								(0, t.jsx)(v, { variant: 'contained', children: 'Join' }),
								(0, t.jsx)(E, {}),
							],
						}),
					],
				});
			}
			var D = n(8888),
				R = n(4527),
				I = n(8993);
			function N() {
				let e = (0, D._)([
					'\n  from {\n    height: 7rem;\n\n  }\n  to {\n    height: 31rem;\n\n  }\n',
				]);
				return (
					(N = function () {
						return e;
					}),
					e
				);
			}
			function T() {
				let e = (0, D._)([
					'\n  from {\n    height: 31rem;\n\n  }\n  to {\n    height: 7rem;\n\n  }\n',
				]);
				return (
					(T = function () {
						return e;
					}),
					e
				);
			}
			let K = (0, I.i7)(N()),
				W = (0, I.i7)(T()),
				H = s.A.nav(
					(0, m.Ay)({
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
							return r ? ''.concat(K, ' 0.5s ease forwards') : ''.concat(W, ' 0.5s ease forwards');
						},
					}),
				),
				L = s.A.div((0, m.Ay)({})),
				O = s.A.ul(
					(0, m.Ay)({
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
				X = s.A.li(
					(0, m.Ay)({
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
				F = (0, s.A)(d())((0, m.Ay)({})),
				G = s.A.div(
					(0, m.Ay)({
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '0.5rem',
					}),
				),
				Q = (0, s.A)(l.A)(
					(0, m.Ay)({
						fontWeight: 'var(--font-weight-semibold)',
						color: 'var(--color-text-secondary)',
						backgroundColor: 'var(--color-primary)',
						transition: 'background-color 0.3s ease, color 0.3s ease',
						'&:hover': { backgroundColor: 'var(--color-secondary)' },
						fontSize: { _: 'var(--font-size-sm)', '<lg': 'var(--font-size-xs)' },
						padding: { _: null, '<lg': '0.2rem 0.8rem' },
					}),
				),
				J = s.A.div(
					(0, m.Ay)({
						display: (e) => {
							let { isExpanded: r } = e;
							return r ? 'flex' : 'none';
						},
						flexDirection: 'column',
						alignItems: 'center',
						gap: '1rem',
					}),
				),
				M = (0, s.A)(R.A)((0, m.Ay)({ color: 'var(--color-accent)', padding: '0.5rem' })),
				P = [
					{ label: 'Home', href: '/' },
					{ label: 'About', href: '/about' },
					{ label: 'Services', href: '/services' },
					{ label: 'Contact', href: '/contact' },
				];
			var q = n(7499),
				B = n(5293);
			function U() {
				let e = (0, k.md)(C.Q),
					[r, n] = (0, a.useState)(!0);
				return (0, t.jsxs)(H, {
					isExpanded: r,
					children: [
						(0, t.jsx)(L, {
							children: (0, t.jsx)(F, {
								href: '/',
								children: (0, t.jsx)(b(), {
									width: 50,
									height: 30,
									alt: 'Logo',
									src: e === S.l.DARK ? './globe.svg' : './next.svg',
								}),
							}),
						}),
						(0, t.jsx)(O, {
							isExpanded: r,
							children: P.map((e, n) => {
								let { label: o, href: i } = e;
								return (0, t.jsx)(
									X,
									{ isExpanded: r, children: (0, t.jsx)(F, { href: i, children: o }) },
									n,
								);
							}),
						}),
						(0, t.jsxs)(G, {
							children: [
								(0, t.jsxs)(J, {
									isExpanded: r,
									children: [
										(0, t.jsx)(Q, { variant: 'contained', children: 'Join' }),
										(0, t.jsx)(E, {}),
									],
								}),
								(0, t.jsx)(M, {
									onClick: () => n((e) => !e),
									children: r ? (0, t.jsx)(B.A, {}) : (0, t.jsx)(q.A, {}),
								}),
							],
						}),
					],
				});
			}
			let V = s.A.main((0, m.Ay)({ position: 'relative', minHeight: '100vh' }));
			var Y = n(6780),
				Z = n.n(Y);
			let $ = function (e) {
				let { children: r } = e;
				return (0, t.jsxs)(V, {
					className: Z().className,
					children: [(0, t.jsx)(z, {}), (0, t.jsx)(U, {}), r],
				});
			};
			var ee = !0;
			function er(e) {
				let { data: r } = e;
				return (0, t.jsxs)(t.Fragment, {
					children: [
						(0, t.jsxs)(i(), {
							children: [
								(0, t.jsx)('title', { children: 'ARE' }),
								(0, t.jsx)('meta', {
									name: 'description',
									content: 'Generated by create next app',
								}),
								(0, t.jsx)('meta', {
									name: 'viewport',
									content: 'width=device-width, initial-scale=1',
								}),
								(0, t.jsx)('link', { rel: 'icon', href: '/favicon.ico' }),
							],
						}),
						(0, t.jsx)($, { children: null }),
					],
				});
			}
		},
		6760: (e, r, n) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return n(3352);
				},
			]);
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [998, 636, 593, 792], () => r(6760)), (_N_E = e.O());
	},
]);
