window.BENCHMARK_DATA = {
  "lastUpdate": 1653786888284,
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
          "id": "c0db68aa0535cf4071ee58f5b72c8211f888b5a3",
          "message": "Merge pull request #589 from zcash/protocol-rule-links\n\nhalo2_gadgets: Add protocol rule links for the chip constraints",
          "timestamp": "2022-05-27T16:46:56+01:00",
          "tree_id": "8d0b90a255c5518a64b08dd5d78dc4324035c182",
          "url": "https://github.com/NoCtrlZ/halo2/commit/c0db68aa0535cf4071ee58f5b72c8211f888b5a3"
        },
        "date": 1653786882221,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 92094425,
            "range": "± 3311101",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 4004332,
            "range": "± 64949",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 211238898,
            "range": "± 3880463",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 5901856,
            "range": "± 252249",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 288009067,
            "range": "± 4715715",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 7040512,
            "range": "± 104114",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 42936,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 168687,
            "range": "± 2463",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 183775,
            "range": "± 2291",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 296438,
            "range": "± 5090",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 294928,
            "range": "± 4032",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 170069,
            "range": "± 2512",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 186233,
            "range": "± 2449",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 299811,
            "range": "± 4121",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 298048,
            "range": "± 4155",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 355964,
            "range": "± 5556",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 372552,
            "range": "± 4937",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 483445,
            "range": "± 7162",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 488910,
            "range": "± 7106",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3564697,
            "range": "± 42703",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 6872122,
            "range": "± 42555",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 11876246,
            "range": "± 104634",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 25420365,
            "range": "± 420799",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 49198192,
            "range": "± 462212",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 95643468,
            "range": "± 1071823",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 8522,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 9955,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 18290,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 22191,
            "range": "± 501",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 33581,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 55642,
            "range": "± 1359",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 116173,
            "range": "± 10511",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 225885,
            "range": "± 11103",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 462992,
            "range": "± 24322",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 990246,
            "range": "± 55120",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 2113972,
            "range": "± 73939",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 4542878,
            "range": "± 148721",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 9952235,
            "range": "± 365759",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 21632381,
            "range": "± 669944",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 46145966,
            "range": "± 1531900",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 107437961,
            "range": "± 4273489",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 33479,
            "range": "± 560",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 33763,
            "range": "± 419",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 182901883,
            "range": "± 1399983",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 395300502,
            "range": "± 3897918",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 844151953,
            "range": "± 29004861",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1838122256,
            "range": "± 35175159",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3902173949,
            "range": "± 19535481",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 8358504882,
            "range": "± 103296821",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 17807246608,
            "range": "± 70524309",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 37738392695,
            "range": "± 324302366",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 79668548056,
            "range": "± 139389336",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 116586748,
            "range": "± 2226944",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 198811897,
            "range": "± 3703500",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 352257927,
            "range": "± 1636893",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 644777206,
            "range": "± 5627319",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1213341213,
            "range": "± 6064943",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2279360861,
            "range": "± 7111611",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4362295819,
            "range": "± 28849429",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 8360047672,
            "range": "± 41129436",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 16142423363,
            "range": "± 183205134",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 6218106,
            "range": "± 177310",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 9555369,
            "range": "± 231756",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 15999848,
            "range": "± 716640",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 26454699,
            "range": "± 5344605",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 45535818,
            "range": "± 996929",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 80932155,
            "range": "± 4239990",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 144602605,
            "range": "± 1154065",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 267053642,
            "range": "± 5034868",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 483760391,
            "range": "± 5634042",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}