window.BENCHMARK_DATA = {
  "lastUpdate": 1653022379196,
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
          "id": "8075b216e850035cde940c96eb93bf285254ee2e",
          "message": "Merge pull request #584 from trel/remove_dsstore\n\nremove .DS_Store",
          "timestamp": "2022-05-13T15:29:23+01:00",
          "tree_id": "2ca8f65dba2529e203e102a07f99bb6ef2fc0a66",
          "url": "https://github.com/NoCtrlZ/halo2/commit/8075b216e850035cde940c96eb93bf285254ee2e"
        },
        "date": 1653022373323,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 88727519,
            "range": "± 5186709",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 3852243,
            "range": "± 110070",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 206020681,
            "range": "± 7718273",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 5864543,
            "range": "± 146779",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 288215552,
            "range": "± 7626532",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 7092658,
            "range": "± 261886",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 41869,
            "range": "± 1708",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 162598,
            "range": "± 4779",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 175178,
            "range": "± 5994",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 291859,
            "range": "± 9581",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 300325,
            "range": "± 5864",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 165784,
            "range": "± 6362",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 178101,
            "range": "± 8074",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 296493,
            "range": "± 10400",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 286737,
            "range": "± 9710",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 354879,
            "range": "± 18371",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 366666,
            "range": "± 12196",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 471474,
            "range": "± 16490",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 465053,
            "range": "± 14690",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3460279,
            "range": "± 109514",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 6572178,
            "range": "± 64450",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 11614975,
            "range": "± 189637",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 24387641,
            "range": "± 914121",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 47571898,
            "range": "± 1423212",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 94531627,
            "range": "± 1013853",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 8453,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 9616,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 18300,
            "range": "± 307",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 22380,
            "range": "± 716",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 32797,
            "range": "± 1176",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 54908,
            "range": "± 2911",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 116185,
            "range": "± 9303",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 221913,
            "range": "± 11073",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 454938,
            "range": "± 19262",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 954481,
            "range": "± 51255",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 2102200,
            "range": "± 60567",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 4553895,
            "range": "± 135987",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 10029041,
            "range": "± 250211",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 19956745,
            "range": "± 836970",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 43970367,
            "range": "± 1712039",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 105734609,
            "range": "± 4743102",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 31921,
            "range": "± 1079",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 33063,
            "range": "± 1049",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 181676305,
            "range": "± 4088002",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 392460296,
            "range": "± 4095660",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 843331851,
            "range": "± 13891467",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1783019004,
            "range": "± 18111483",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3775715389,
            "range": "± 260132836",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 7846706439,
            "range": "± 177772769",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 17131028264,
            "range": "± 216142777",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 36701985426,
            "range": "± 630910577",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 76976720342,
            "range": "± 1059878154",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 112585560,
            "range": "± 2858882",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 191640122,
            "range": "± 4700629",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 339964523,
            "range": "± 3125180",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 615282686,
            "range": "± 10743551",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1159555890,
            "range": "± 13900000",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2179807055,
            "range": "± 75209129",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4148988578,
            "range": "± 58151137",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 8092715767,
            "range": "± 80362537",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 15483725268,
            "range": "± 267649310",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 6221221,
            "range": "± 169277",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 9555377,
            "range": "± 318476",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 15460636,
            "range": "± 360266",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 25943191,
            "range": "± 393661",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 44644036,
            "range": "± 465169",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 78055899,
            "range": "± 1899551",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 138243648,
            "range": "± 2027776",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 258565062,
            "range": "± 4426187",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 463555820,
            "range": "± 7399226",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}