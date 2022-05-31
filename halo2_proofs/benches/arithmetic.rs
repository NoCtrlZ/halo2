#[macro_use]
extern crate criterion;

use crate::arithmetic::{best_multiexp, serial_multiexp};
use crate::pasta::{EqAffine, Fp};
use crate::poly::commitment::Params;
use group::ff::Field;
use halo2_proofs::*;

use criterion::{black_box, BenchmarkId, Criterion};
use rand_core::OsRng;

fn criterion_benchmark(c: &mut Criterion) {
    let rng = OsRng;

    // small multiexp
    {
        let mut small_group = c.benchmark_group("arithmetic-small_multiexp");
        for k in 3..10 {
            small_group.bench_function(BenchmarkId::new("k", k), |b| {
                let params: Params<EqAffine> = Params::new(k);
                let g = &mut params.get_g();
                let len = g.len() / 2;
                let (g_lo, g_hi) = g.split_at_mut(len);

                let coeff_1 = Fp::random(rng);
                let coeff_2 = Fp::random(rng);

                b.iter(|| {
                    for (g_lo, g_hi) in g_lo.iter().zip(g_hi.iter()) {
                        serial_multiexp(&[black_box(coeff_1), black_box(coeff_2)], &[*g_lo, *g_hi]);
                    }
                })
            });
        }
        small_group.finish();

        let mut best_group = c.benchmark_group("arithmetic-best_multiexp");
        for k in 3..10 {
            let params: Params<EqAffine> = Params::new(k);
            let g = &mut params.get_g();
            let len = g.len() / 2;
            let (g_lo, g_hi) = g.split_at_mut(len);

            let coeff_1 = Fp::random(rng);
            let coeff_2 = Fp::random(rng);

            best_group.bench_function(BenchmarkId::new("k", k), |b| {
                b.iter(|| {
                    for (g_lo, g_hi) in g_lo.iter().zip(g_hi.iter()) {
                        best_multiexp(&[black_box(coeff_1), black_box(coeff_2)], &[*g_lo, *g_hi]);
                    }
                })
            });
        }
        best_group.finish();
    }
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);
