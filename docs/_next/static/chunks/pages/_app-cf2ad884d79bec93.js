(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[636],
	{
		92: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_app',
				function () {
					return r(8662);
				},
			]);
		},
		2246: (e, t, r) => {
			'use strict';
			r.d(t, { Q: () => n });
			let n = (0, r(9542).eU)(null);
		},
		2653: (e, t, r) => {
			'use strict';
			r.d(t, { l: () => n });
			var n = (function (e) {
				return (e.LIGHT = 'light'), (e.DARK = 'dark'), e;
			})({});
		},
		4603: () => {},
		4953: (e, t, r) => {
			'use strict';
			r.d(t, { MO: () => b, _w: () => y, eE: () => _ });
			let n = (e, t) => (e.unstable_is ? e.unstable_is(t) : t === e),
				l = (e) => 'init' in e,
				i = (e) => !!e.write,
				o = (e) => 'v' in e || 'e' in e,
				a = (e) => {
					if ('e' in e) throw e.e;
					if (!('v' in e)) throw Error('[Bug] atom state is not initialized');
					return e.v;
				},
				u = new WeakMap(),
				d = (e) => {
					var t;
					return c(e) && !!(null == (t = u.get(e)) ? void 0 : t[0]);
				},
				s = (e) => {
					let t = u.get(e);
					(null == t ? void 0 : t[0]) && ((t[0] = !1), t[1].forEach((e) => e()));
				},
				f = (e, t) => {
					let r = u.get(e);
					if (!r) {
						(r = [!0, new Set()]), u.set(e, r);
						let t = () => {
							r[0] = !1;
						};
						e.then(t, t);
					}
					r[1].add(t);
				},
				c = (e) => 'function' == typeof (null == e ? void 0 : e.then),
				h = (e, t, r) => {
					r.p.has(e) ||
						(r.p.add(e),
						t.then(
							() => {
								r.p.delete(e);
							},
							() => {
								r.p.delete(e);
							},
						));
				},
				v = (e, t, r) => {
					let n = r(e),
						l = 'v' in n,
						i = n.v;
					if (c(t)) for (let l of n.d.keys()) h(e, t, r(l));
					(n.v = t), delete n.e, (l && Object.is(i, n.v)) || (++n.n, c(i) && s(i));
				},
				w = (e, t, r) => {
					var n;
					let l = new Set();
					for (let t of (null == (n = r.get(e)) ? void 0 : n.t) || []) r.has(t) && l.add(t);
					for (let e of t.p) l.add(e);
					return l;
				},
				g = () => {
					let e = new Set(),
						t = () => {
							e.forEach((e) => e());
						};
					return (
						(t.add = (t) => (
							e.add(t),
							() => {
								e.delete(t);
							}
						)),
						t
					);
				},
				p = () => {
					let e = {},
						t = new WeakMap(),
						r = (r) => {
							var n, l;
							null == (n = t.get(e)) || n.forEach((e) => e(r)),
								null == (l = t.get(r)) || l.forEach((e) => e());
						};
					return (
						(r.add = (r, n) => {
							let l = r || e,
								i = (t.has(l) ? t : t.set(l, new Set())).get(l);
							return (
								i.add(n),
								() => {
									null == i || i.delete(n), i.size || t.delete(l);
								}
							);
						}),
						r
					);
				},
				m = Symbol(),
				y = (
					e = new WeakMap(),
					t = new WeakMap(),
					r = new WeakMap(),
					u = new Set(),
					s = new Set(),
					g = new Set(),
					p = {},
					y = (e, ...t) => e.read(...t),
					_ = (e, ...t) => e.write(...t),
					b = (e, t) => {
						var r;
						return null == (r = e.unstable_onInit) ? void 0 : r.call(e, t);
					},
					E = (e, t) => {
						var r;
						return null == (r = e.onMount) ? void 0 : r.call(e, t);
					},
					...k
				) => {
					let S =
							k[0] ||
							((t) => {
								if (!t) throw Error('Atom is undefined or null');
								let r = e.get(t);
								return (
									r ||
										((r = { d: new Map(), p: new Set(), n: 0 }), e.set(t, r), null == b || b(t, D)),
									r
								);
							}),
						x =
							k[1] ||
							(() => {
								let e = [],
									r = (t) => {
										try {
											t();
										} catch (t) {
											e.push(t);
										}
									};
								do {
									p.f && r(p.f);
									let e = new Set(),
										n = e.add.bind(e);
									u.forEach((e) => {
										var r;
										return null == (r = t.get(e)) ? void 0 : r.l.forEach(n);
									}),
										u.clear(),
										g.forEach(n),
										g.clear(),
										s.forEach(n),
										s.clear(),
										e.forEach(r),
										u.size && A();
								} while (u.size || g.size || s.size);
								if (e.length) throw AggregateError(e);
							}),
						A =
							k[2] ||
							(() => {
								let e = [],
									n = new WeakSet(),
									l = new WeakSet(),
									i = Array.from(u);
								for (; i.length; ) {
									let o = i[i.length - 1],
										a = S(o);
									if (l.has(o)) {
										i.pop();
										continue;
									}
									if (n.has(o)) {
										if (r.get(o) === a.n) e.push([o, a]);
										else if (r.has(o)) throw Error('[Bug] invalidated atom exists');
										l.add(o), i.pop();
										continue;
									}
									for (let e of (n.add(o), w(o, a, t))) n.has(e) || i.push(e);
								}
								for (let t = e.length - 1; t >= 0; --t) {
									let [n, l] = e[t],
										i = !1;
									for (let e of l.d.keys())
										if (e !== n && u.has(e)) {
											i = !0;
											break;
										}
									i && (O(n), M(n)), r.delete(n);
								}
							}),
						O =
							k[3] ||
							((e) => {
								var s;
								let w,
									g,
									m = S(e);
								if (
									o(m) &&
									((t.has(e) && r.get(e) !== m.n) ||
										Array.from(m.d).every(([e, t]) => O(e).n === t))
								)
									return m;
								m.d.clear();
								let _ = !0,
									b = () => {
										t.has(e) && (M(e), A(), x());
									},
									E = m.n;
								try {
									let r = y(
										e,
										(r) => {
											var i;
											if (n(e, r)) {
												let e = S(r);
												if (!o(e))
													if (l(r)) v(r, r.init, S);
													else throw Error('no atom init');
												return a(e);
											}
											let u = O(r);
											try {
												return a(u);
											} finally {
												m.d.set(r, u.n),
													d(m.v) && h(e, m.v, u),
													null == (i = t.get(r)) || i.t.add(e),
													_ || b();
											}
										},
										{
											get signal() {
												return w || (w = new AbortController()), w.signal;
											},
											get setSelf() {
												return (
													i(e) ||
														console.warn('setSelf function cannot be used with read-only atom'),
													!g &&
														i(e) &&
														(g = (...t) => {
															if (
																(_ && console.warn('setSelf function cannot be called in sync'), !_)
															)
																try {
																	return W(e, ...t);
																} finally {
																	A(), x();
																}
														}),
													g
												);
											},
										},
									);
									return (
										v(e, r, S),
										c(r) && (f(r, () => (null == w ? void 0 : w.abort())), r.then(b, b)),
										m
									);
								} catch (e) {
									return delete m.v, (m.e = e), ++m.n, m;
								} finally {
									(_ = !1),
										E !== m.n &&
											r.get(e) === E &&
											(r.set(e, m.n), u.add(e), null == (s = p.c) || s.call(p, e));
								}
							}),
						T =
							k[4] ||
							((e) => {
								let n = [e];
								for (; n.length; ) {
									let e = n.pop(),
										l = S(e);
									for (let i of w(e, l, t)) {
										let e = S(i);
										r.set(i, e.n), n.push(i);
									}
								}
							}),
						W =
							k[5] ||
							((e, ...t) => {
								let r = !0;
								try {
									return _(
										e,
										(e) => a(O(e)),
										(t, ...i) => {
											var o;
											let a = S(t);
											try {
												if (!n(e, t)) return W(t, ...i);
												{
													if (!l(t)) throw Error('atom not writable');
													let e = a.n,
														r = i[0];
													v(t, r, S),
														M(t),
														e !== a.n && (u.add(t), null == (o = p.c) || o.call(p, t), T(t));
													return;
												}
											} finally {
												r || (A(), x());
											}
										},
										...t,
									);
								} finally {
									r = !1;
								}
							}),
						M =
							k[6] ||
							((e) => {
								var r;
								let n = S(e),
									l = t.get(e);
								if (l && !d(n.v)) {
									for (let [t, i] of n.d)
										if (!l.d.has(t)) {
											let n = S(t);
											j(t).t.add(e),
												l.d.add(t),
												i !== n.n && (u.add(t), null == (r = p.c) || r.call(p, t), T(t));
										}
									for (let t of l.d || [])
										if (!n.d.has(t)) {
											l.d.delete(t);
											let r = z(t);
											null == r || r.t.delete(e);
										}
								}
							}),
						j =
							k[7] ||
							((e) => {
								var r;
								let n = S(e),
									l = t.get(e);
								if (!l) {
									for (let t of (O(e), n.d.keys())) j(t).t.add(e);
									(l = { l: new Set(), d: new Set(n.d.keys()), t: new Set() }),
										t.set(e, l),
										null == (r = p.m) || r.call(p, e),
										i(e) &&
											s.add(() => {
												let t = !0;
												try {
													let r = E(e, (...r) => {
														try {
															return W(e, ...r);
														} finally {
															t || (A(), x());
														}
													});
													r &&
														(l.u = () => {
															t = !0;
															try {
																r();
															} finally {
																t = !1;
															}
														});
												} finally {
													t = !1;
												}
											});
								}
								return l;
							}),
						z =
							k[8] ||
							((e) => {
								var r;
								let n = S(e),
									l = t.get(e);
								if (
									l &&
									!l.l.size &&
									!Array.from(l.t).some((r) => {
										var n;
										return null == (n = t.get(r)) ? void 0 : n.d.has(e);
									})
								) {
									for (let i of (l.u && g.add(l.u),
									(l = void 0),
									t.delete(e),
									null == (r = p.u) || r.call(p, e),
									n.d.keys())) {
										let t = z(i);
										null == t || t.t.delete(e);
									}
									return;
								}
								return l;
							}),
						D = {
							get: (e) => a(O(e)),
							set: (e, ...t) => {
								try {
									return W(e, ...t);
								} finally {
									A(), x();
								}
							},
							sub: (e, t) => {
								let r = j(e).l;
								return (
									r.add(t),
									x(),
									() => {
										r.delete(t), z(e), x();
									}
								);
							},
						};
					return (
						Object.defineProperty(D, m, {
							value: [e, t, r, u, s, g, p, y, _, b, E, S, x, A, O, T, W, M, j, z],
						}),
						D
					);
				},
				_ = (e) => (
					e.c || (e.c = p()), e.m || (e.m = p()), e.u || (e.u = p()), e.f || (e.f = g()), e
				),
				b = f;
		},
		5278: (e, t, r) => {
			'use strict';
			r.d(t, { Xr: () => v, fp: () => w, md: () => h });
			var n = r(4232),
				l = r(9542),
				i = r(4953);
			let o = (0, n.createContext)(void 0);
			function a(e) {
				let t = (0, n.useContext)(o);
				return (null == e ? void 0 : e.store) || t || (0, l.zp)();
			}
			let u = (e) => 'function' == typeof (null == e ? void 0 : e.then),
				d = (e) => {
					e.status ||
						((e.status = 'pending'),
						e.then(
							(t) => {
								(e.status = 'fulfilled'), (e.value = t);
							},
							(t) => {
								(e.status = 'rejected'), (e.reason = t);
							},
						));
				},
				s =
					n.use ||
					((e) => {
						if ('pending' === e.status) throw e;
						if ('fulfilled' === e.status) return e.value;
						if ('rejected' === e.status) throw e.reason;
						throw (d(e), e);
					}),
				f = new WeakMap(),
				c = (e, t) => {
					let r = f.get(e);
					return (
						r ||
							((r = new Promise((n, l) => {
								let o = e,
									a = (e) => (t) => {
										o === e && n(t);
									},
									d = (e) => (t) => {
										o === e && l(t);
									},
									s = () => {
										try {
											let e = t();
											u(e) ? (f.set(e, r), (o = e), e.then(a(e), d(e)), (0, i.MO)(e, s)) : n(e);
										} catch (e) {
											l(e);
										}
									};
								e.then(a(e), d(e)), (0, i.MO)(e, s);
							})),
							f.set(e, r)),
						r
					);
				};
			function h(e, t) {
				let { delay: r, unstable_promiseStatus: l = !n.use } = t || {},
					i = a(t),
					[[o, f, h], v] = (0, n.useReducer)(
						(t) => {
							let r = i.get(e);
							return Object.is(t[0], r) && t[1] === i && t[2] === e ? t : [r, i, e];
						},
						void 0,
						() => [i.get(e), i, e],
					),
					w = o;
				if (
					((f !== i || h !== e) && (v(), (w = i.get(e))),
					(0, n.useEffect)(() => {
						let t = i.sub(e, () => {
							if (l)
								try {
									let t = i.get(e);
									u(t) && d(c(t, () => i.get(e)));
								} catch (e) {}
							if ('number' == typeof r) return void setTimeout(v, r);
							v();
						});
						return v(), t;
					}, [i, e, r, l]),
					(0, n.useDebugValue)(w),
					u(w))
				) {
					let t = c(w, () => i.get(e));
					return l && d(t), s(t);
				}
				return w;
			}
			function v(e, t) {
				let r = a(t);
				return (0, n.useCallback)(
					(...t) => {
						if (!('write' in e)) throw Error('not writable atom');
						return r.set(e, ...t);
					},
					[r, e],
				);
			}
			function w(e, t) {
				return [h(e, t), v(e, t)];
			}
		},
		8343: (e, t, r) => {
			'use strict';
			r.d(t, { Ay: () => o });
			let n = {
				xxs: [20, 30],
				xs: [30, 40.625],
				sm: [40.625, 48],
				smd: [61.25, 61.25],
				md: [48, 64],
				lg: [64, 73.75],
				xlg: [73.75, 75],
				xxlg: [75, 90],
				xxxlg: [90, 100],
				xxxxlg: [100],
			};
			function l(e, t, r) {
				let [n, l] = e,
					i = ''.concat(n, 'rem'),
					o = void 0 !== l ? ''.concat(l, 'rem') : null;
				if ('<' === t) {
					if (void 0 !== n) {
						let e = (n - 0.01).toFixed(2) + 'rem';
						return '@media (max-width: '.concat(e, ')');
					}
				} else {
					if ('>' !== t)
						return void 0 !== r
							? '@media (min-width: '.concat(i, ') and (max-width: ').concat(r, 'rem)')
							: o && l !== n
								? '@media (min-width: '.concat(i, ') and (max-width: ').concat(o, ')')
								: '@media (min-width: '.concat(i, ')');
					let e = void 0 !== l ? l : n;
					if (void 0 !== e) {
						let t = (e + 0.01).toFixed(2) + 'rem';
						return '@media (min-width: '.concat(t, ')');
					}
				}
				return '';
			}
			function i(e) {
				if ('_' === e) return { operator: null, key: '_' };
				if (e.startsWith('<')) return { operator: '<', key: e.slice(1) };
				if (e.endsWith('>')) return { operator: '>', key: e.slice(0, -1) };
				if (e.includes(':')) {
					let [t, r] = e.split(':');
					return { operator: null, key: t, rangeEnd: r };
				}
				return { operator: null, key: e };
			}
			function o(e) {
				return function (t) {
					let r = {},
						o = { 1: {}, 2: {}, 3: {} };
					for (let a in e) {
						let u = e[a];
						if (
							(u = (function e(t, r) {
								if ('function' == typeof t) return t(r);
								if (t && 'object' == typeof t && !Array.isArray(t)) {
									let n = {};
									for (let l in t) n[l] = e(t[l], r);
									return n;
								}
								return t;
							})(u, t)) &&
							'object' == typeof u &&
							'_' in u
						) {
							r[a] = u._;
							let e = Object.keys(u).filter((e) => '_' !== e),
								t = e.filter((e) => e.startsWith('<') || e.endsWith('>')),
								d = e.filter((e) => e.includes(':')),
								s = e.filter((e) => !e.startsWith('<') && !e.endsWith('>') && !e.includes(':'));
							for (let e of t) {
								let { operator: t, key: r } = i(e);
								if ('_' === r) continue;
								let d = n[r];
								if (!d) continue;
								let s = l(d, t);
								s && (o[1][s] || (o[1][s] = {}), (o[1][s][a] = u[e]));
							}
							for (let e of d) {
								let { key: t, rangeEnd: r } = i(e);
								if (!r) continue;
								let d = n[t],
									s = n[r];
								if (!d || !s) continue;
								let f = l(d, null, void 0 !== s[1] ? s[1] : s[0]);
								f && (o[2][f] || (o[2][f] = {}), (o[2][f][a] = u[e]));
							}
							for (let e of s) {
								let t = n[e];
								if (!t) continue;
								let r = l(t);
								r && (o[3][r] || (o[3][r] = {}), (o[3][r][a] = u[e]));
							}
						} else r[a] = u;
					}
					let a = {};
					for (let e of [1, 2, 3])
						for (let t in o[e]) a[t] || (a[t] = {}), Object.assign(a[t], o[e][t]);
					return { ...r, ...a };
				};
			}
		},
		8662: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, { default: () => u });
			var n = r(7876);
			r(4603);
			var l = r(4232),
				i = r(5278),
				o = r(2246),
				a = r(2653);
			function u(e) {
				let { Component: t, pageProps: r } = e,
					u = (0, i.Xr)(o.Q);
				return (
					(0, l.useEffect)(() => {
						{
							let e = localStorage.getItem('themeMode');
							e === a.l.DARK || e === a.l.LIGHT ? u(e) : u(a.l.DARK);
						}
					}, [u]),
					(0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(t, { ...r }), ';'] })
				);
			}
			r(8343);
		},
		9542: (e, t, r) => {
			'use strict';
			let n, l;
			r.d(t, { eU: () => a, zp: () => f });
			var i = r(4953);
			let o = 0;
			function a(e, t) {
				let r = `atom${++o}`,
					n = {
						toString() {
							return this.debugLabel ? r + ':' + this.debugLabel : r;
						},
					};
				return (
					'function' == typeof e ? (n.read = e) : ((n.init = e), (n.read = u), (n.write = d)),
					t && (n.write = t),
					n
				);
			}
			function u(e) {
				return e(this);
			}
			function d(e, t, r) {
				return t(this, 'function' == typeof r ? r(e(this)) : r);
			}
			let s = () => {
				let e = 0,
					t = (0, i.eE)({}),
					r = new WeakMap(),
					n = new WeakMap(),
					l = (0, i._w)(r, n, void 0, void 0, void 0, void 0, t, void 0, (t, r, n, ...l) =>
						e ? n(t, ...l) : t.write(r, n, ...l),
					),
					o = new Set();
				return (
					t.m.add(void 0, (e) => {
						o.add(e), (r.get(e).m = n.get(e));
					}),
					t.u.add(void 0, (e) => {
						o.delete(e);
						let t = r.get(e);
						delete t.m;
					}),
					Object.assign(l, {
						dev4_get_internal_weak_map: () => (
							console.log('Deprecated: Use devstore from the devtools library'), r
						),
						dev4_get_mounted_atoms: () => o,
						dev4_restore_atoms: (t) => {
							l.set({
								read: () => null,
								write: (r, n) => {
									++e;
									try {
										for (let [e, r] of t) 'init' in e && n(e, r);
									} finally {
										--e;
									}
								},
							});
						},
					})
				);
			};
			function f() {
				return (
					l ||
						((l = n ? n() : s()),
						globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = l),
						globalThis.__JOTAI_DEFAULT_STORE__ !== l &&
							console.warn(
								'Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044',
							)),
					l
				);
			}
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [593, 792], () => (t(92), t(8253))), (_N_E = e.O());
	},
]);
