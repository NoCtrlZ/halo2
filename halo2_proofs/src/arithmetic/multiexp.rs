use group::ff::PrimeField;
pub use pasta_curves::arithmetic::*;

#[derive(Clone, Copy)]
pub(crate) enum Bucket<C: CurveAffine> {
    None,
    Affine(C),
    Projective(C::Curve),
}

impl<C: CurveAffine> Bucket<C> {
    pub(crate) fn add_assign(&mut self, other: &C) {
        *self = match *self {
            Bucket::None => Bucket::Affine(*other),
            Bucket::Affine(a) => Bucket::Projective(a + *other),
            Bucket::Projective(mut a) => {
                a += *other;
                Bucket::Projective(a)
            }
        }
    }

    pub(crate) fn add(self, mut other: C::Curve) -> C::Curve {
        match self {
            Bucket::None => other,
            Bucket::Affine(a) => {
                other += a;
                other
            }
            Bucket::Projective(a) => other + &a,
        }
    }
}

pub(crate) fn get_at<F: PrimeField>(segment: usize, c: usize, bytes: &F::Repr) -> usize {
    let skip_bits = segment * c;
    let skip_bytes = skip_bits / 8;

    if skip_bytes >= 32 {
        return 0;
    }

    let mut v = [0; 8];
    for (v, o) in v.iter_mut().zip(bytes.as_ref()[skip_bytes..].iter()) {
        *v = *o;
    }

    let mut tmp = u64::from_le_bytes(v);
    tmp >>= skip_bits - (skip_bytes * 8);
    tmp = tmp % (1 << c);

    tmp as usize
}
