window.BENCHMARK_DATA = {
  "lastUpdate": 1656646104302,
  "repoUrl": "https://github.com/NoCtrlZ/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jack@electriccoin.co",
            "name": "str4d",
            "username": "str4d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96d9bde905a20117b4350ffba0b0a6479aa63f0a",
          "message": "Merge pull request #612 from zcash/batch-crate-feature\n\nPlace `halo2_proofs::plonk::BatchVerifier` behind a (default enabled) crate feature called `batch`.",
          "timestamp": "2022-06-23T20:16:37+01:00",
          "tree_id": "d7405628dd103edb941d0d31fd9d0c39a92f50d8",
          "url": "https://github.com/NoCtrlZ/halo2/commit/96d9bde905a20117b4350ffba0b0a6479aa63f0a"
        },
        "date": 1656646100766,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 74120341,
            "range": "± 4530978",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 2943526,
            "range": "± 99286",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 172919690,
            "range": "± 1144589",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 3640086,
            "range": "± 38046",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 238177681,
            "range": "± 2956873",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 4003394,
            "range": "± 51192",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 38579,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 141475,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 153628,
            "range": "± 909",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 247038,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 247031,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 144409,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 155456,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 249962,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 249999,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 302140,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 314474,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 407676,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 407829,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3155080,
            "range": "± 3206",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 5980753,
            "range": "± 1959",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10750878,
            "range": "± 23433",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 22133907,
            "range": "± 70988",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 41679431,
            "range": "± 237430",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 85302241,
            "range": "± 224956",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 7506,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 12043,
            "range": "± 812",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 16105,
            "range": "± 307",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 18361,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 27119,
            "range": "± 846",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 47199,
            "range": "± 960",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 97607,
            "range": "± 8453",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 188154,
            "range": "± 9947",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 385170,
            "range": "± 12276",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 811500,
            "range": "± 21898",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1720336,
            "range": "± 56497",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3676897,
            "range": "± 49168",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 8118533,
            "range": "± 129467",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 17665265,
            "range": "± 182478",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 38459531,
            "range": "± 302014",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 86126579,
            "range": "± 823136",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 28439,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 28505,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 152817530,
            "range": "± 4597373",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 328095283,
            "range": "± 387264",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 707894127,
            "range": "± 1614497",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1520596923,
            "range": "± 9501312",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3254025756,
            "range": "± 3199471",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 6958048455,
            "range": "± 15262839",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 14812875906,
            "range": "± 8159115",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 31470643662,
            "range": "± 33476801",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 66538991754,
            "range": "± 117434007",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 95764676,
            "range": "± 4132058",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 166062360,
            "range": "± 580880",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 293046717,
            "range": "± 807643",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 535651414,
            "range": "± 2313463",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1003394890,
            "range": "± 10522927",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 1896834461,
            "range": "± 3843348",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 3610983960,
            "range": "± 7427967",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 6973843935,
            "range": "± 13124128",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 13422344558,
            "range": "± 58733636",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5108261,
            "range": "± 44039",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 7864173,
            "range": "± 177560",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 12779115,
            "range": "± 180132",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 21696193,
            "range": "± 702124",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 37321398,
            "range": "± 515134",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 66684902,
            "range": "± 1598473",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 118585876,
            "range": "± 726844",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 222045310,
            "range": "± 3924680",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 403475182,
            "range": "± 5973404",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}