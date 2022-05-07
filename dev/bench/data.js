window.BENCHMARK_DATA = {
  "lastUpdate": 1651909674101,
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
          "id": "30f92f3f4b785ea2a32392bf65c1b08f0411567c",
          "message": "Merge pull request #522 from zcash/full-width-var-base-mul\n\n[ECC gadget] Distinguish base field element case in variable-base scalar mul.",
          "timestamp": "2022-05-06T19:53:57+01:00",
          "tree_id": "686b30e3081e044b058851c2cf8cdc60f669e071",
          "url": "https://github.com/NoCtrlZ/halo2/commit/30f92f3f4b785ea2a32392bf65c1b08f0411567c"
        },
        "date": 1651909669583,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 75056355,
            "range": "± 4586440",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 9166283,
            "range": "± 3013964",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 175958709,
            "range": "± 3645402",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 4948913,
            "range": "± 69291",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 241533126,
            "range": "± 6191266",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 5982615,
            "range": "± 43258",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 37042,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 141151,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 135351,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 220215,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 220320,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 144106,
            "range": "± 6594",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 156454,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 252526,
            "range": "± 2322",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 252571,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 301434,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 313826,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 410018,
            "range": "± 1473",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 361773,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 2758569,
            "range": "± 9568",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 5836428,
            "range": "± 1904",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10365013,
            "range": "± 37287",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 21485449,
            "range": "± 123874",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 36046704,
            "range": "± 494266",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 71642862,
            "range": "± 358652",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 7091,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 8541,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 16016,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 19725,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 27406,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 44297,
            "range": "± 1125",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 96969,
            "range": "± 10983",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 195582,
            "range": "± 7620",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 385073,
            "range": "± 11844",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 813515,
            "range": "± 45015",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1663450,
            "range": "± 41198",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3584145,
            "range": "± 54160",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 8073637,
            "range": "± 326389",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 17056355,
            "range": "± 522574",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 37641733,
            "range": "± 783858",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 88335082,
            "range": "± 1260844",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 25104,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 25187,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 152322902,
            "range": "± 4161920",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 327083443,
            "range": "± 3358096",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 680545470,
            "range": "± 33910628",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1503619086,
            "range": "± 65367239",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3246299296,
            "range": "± 12245755",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 6938706609,
            "range": "± 10853096",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 14727513420,
            "range": "± 109862666",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 31378276946,
            "range": "± 331352118",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 66413031151,
            "range": "± 248316245",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 95586904,
            "range": "± 226309",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 165212457,
            "range": "± 1909838",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 292215608,
            "range": "± 17512809",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 527459611,
            "range": "± 21065757",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 992323509,
            "range": "± 6196470",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 1891514788,
            "range": "± 12453497",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 3600579351,
            "range": "± 23607340",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 6960129697,
            "range": "± 17415625",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 13400348872,
            "range": "± 58918000",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5177855,
            "range": "± 87785",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 8004769,
            "range": "± 361703",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 13037240,
            "range": "± 155552",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 21960354,
            "range": "± 181133",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 37829524,
            "range": "± 28323966",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 67024782,
            "range": "± 459605",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 120682320,
            "range": "± 435102",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 221350271,
            "range": "± 3896431",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 403599781,
            "range": "± 12097094",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}