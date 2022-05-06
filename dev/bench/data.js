window.BENCHMARK_DATA = {
  "lastUpdate": 1651797631852,
  "repoUrl": "https://github.com/NoCtrlZ/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ewillbefull@gmail.com",
            "name": "ebfull",
            "username": "ebfull"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6fb622a1fc788ce27f4aac8566e3eedc6ff5da75",
          "message": "Merge pull request #543 from NoCtrlZ/feat/fft-optimization\n\nOptimize Fft",
          "timestamp": "2022-05-05T14:05:13-06:00",
          "tree_id": "0c6b0825a68d96031db8c23b6e1a363fca3f212c",
          "url": "https://github.com/NoCtrlZ/halo2/commit/6fb622a1fc788ce27f4aac8566e3eedc6ff5da75"
        },
        "date": 1651797627400,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 77044226,
            "range": "± 4716925",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 3491974,
            "range": "± 40795",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 178163889,
            "range": "± 2494530",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 5104115,
            "range": "± 60904",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 244473942,
            "range": "± 2765588",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 6184525,
            "range": "± 51983",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 36974,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 141235,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 153445,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 248999,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 249126,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 144192,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 156493,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 252164,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 252149,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 301729,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 314131,
            "range": "± 1024",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 409698,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 409561,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3142190,
            "range": "± 3130",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 6167802,
            "range": "± 9775",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 11030981,
            "range": "± 46798",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 23810343,
            "range": "± 19983",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 44639795,
            "range": "± 40188",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 86234034,
            "range": "± 79524",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 7664,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 8911,
            "range": "± 660",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 16228,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 19450,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 28370,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 47916,
            "range": "± 1583",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 99707,
            "range": "± 8743",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 193999,
            "range": "± 9233",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 399809,
            "range": "± 14196",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 838099,
            "range": "± 24894",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1767473,
            "range": "± 59006",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3815179,
            "range": "± 50990",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 8511363,
            "range": "± 211422",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 18750973,
            "range": "± 238797",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 44321192,
            "range": "± 619673",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 99473209,
            "range": "± 1476022",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 28433,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 28552,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 156248207,
            "range": "± 4487758",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 333790571,
            "range": "± 946022",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 719235663,
            "range": "± 1549396",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1547284717,
            "range": "± 9868180",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3312630107,
            "range": "± 5698235",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 7075467904,
            "range": "± 9031076",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 15097490208,
            "range": "± 35759889",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 32061371318,
            "range": "± 110885388",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 67805010242,
            "range": "± 50370963",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 99034220,
            "range": "± 289221",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 171202955,
            "range": "± 1095515",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 301871307,
            "range": "± 2934870",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 548866567,
            "range": "± 3171275",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1028650901,
            "range": "± 4394783",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 1943516544,
            "range": "± 12075212",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 3694952341,
            "range": "± 8962050",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 7140546391,
            "range": "± 18232628",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 13778454338,
            "range": "± 29400261",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5350003,
            "range": "± 230169",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 8271608,
            "range": "± 96540",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 13426939,
            "range": "± 128433",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 22700504,
            "range": "± 307898",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 38685366,
            "range": "± 1381775",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 67679567,
            "range": "± 412298",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 122979810,
            "range": "± 2631963",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 225551858,
            "range": "± 5001188",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 411549904,
            "range": "± 2325425",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}