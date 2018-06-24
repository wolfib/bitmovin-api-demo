export const myEncodings = {
  items: [{ id: "id1", name: "name1" }, { id: "id2", name: "name2" }],
  next: "https://api.bitmovin.com/v1/encoding/encodings?offset=10&limit=10",
  previous: "https://api.bitmovin.com/v1/encoding/encodings?offset=0&limit=10",
  totalCount: 45
};

export const myStreams = {
  items: [
    {
      createdAt: "2017-05-10T11:39:34Z",
      id: "0e9b2578-a1dd-4da1-a22b-fb28f65f0196",
      modifiedAt: "2017-05-10T11:39:34Z"
    },
    {
      createdAt: "2017-05-10T11:39:40Z",
      id: "3a2fde5a-495b-42ac-9aa7-848ebe590c35",
      modifiedAt: "2017-05-10T11:39:40Z"
    }
  ],
  next:
    "https://api.bitmovin.com/v1/encoding/encodings/c65e8a08-b3b5-4dc4-82cf-e40be14724e3/streams?offset=5&limit=5",
  previous:
    "https://api.bitmovin.com/v1/encoding/encodings/c65e8a08-b3b5-4dc4-82cf-e40be14724e3/streams?offset=0&limit=5",
  totalCount: 8
};
export const myMuxings = {
  items: [
    {
      id: "044f1a1d-d538-4705-91c5-d1aa95d650a6",
      segmentLength: 4,
      segmentsMuxed: 838,
      type: "FMP4"
    },
    {
      id: "0dfa8a35-3b2c-42c4-b530-60f5c8f7a973",
      segmentLength: 4,
      segmentsMuxed: 838,
      type: "TS"
    }
  ],
  next: "https://api.bitmovin.com/v1/encoding/muxings?offset=5&limit=5",
  previous: "https://api.bitmovin.com/v1/encoding/muxings?offset=0&limit=5",
  totalCount: 16
};

export const mockState = {
  apiKey: "0175190e-744d-416c-84e2-ce1ff84c857d",
  bitmovin: {
    encoding: {
      codecConfigurations: {},
      inputs: {},
      outputs: {},
      manifests: {},
      filters: {},
      statistics: {
        vod: {},
        live: {}
      },
      infrastructure: {}
    },
    player: {
      statistics: {
        INTERVAL: {
          DAILY: "DAILY"
        }
      },
      customBuilds: {}
    },
    analytics: {
      statistics: {
        INTERVAL: {
          DAILY: "DAILY"
        }
      }
    },
    account: {
      billing: {
        statements: {
          encoding: {},
          player: {},
          analytics: {}
        },
        invoices: {
          encoding: {},
          player: {},
          analytics: {}
        },
        contactDetails: {}
      }
    }
  },
  encodings: {
    totalCount: 45,
    previous:
      "https://api.bitmovin.com/v1/encoding/encodings?offset=30&limit=10",
    next: "https://api.bitmovin.com/v1/encoding/encodings?offset=50&limit=10",
    items: [
      {
        id: "c70681bb-44b3-4819-9575-6aa7b3387412",
        name: "CRSDBMT3_SftpSintelFullHdMultipleAudioRep",
        description: "CRSDBMT3_SftpSintelFullHdMultipleAudioRep",
        encoderVersion: "BETA",
        createdAt: "2017-03-08T13:40:04Z",
        modifiedAt: "2017-03-08T13:40:16Z",
        cloudRegion: "GOOGLE_EUROPE_WEST_1",
        selectedCloudRegion: "GOOGLE_EUROPE_WEST_1",
        type: "VOD",
        status: "FINISHED",
        startedAt: "2017-03-08T13:40:14Z",
        queuedAt: "2017-03-08T13:40:16Z",
        runningAt: "2017-03-08T13:41:04Z",
        finishedAt: "2017-03-08T13:44:33Z",
        progress: 75
      },
      {
        id: "d20cdcf0-173c-4c4b-9118-2d0fac6f2c91",
        name: "CRSDBMT3_SintelShortS3HlsAes128",
        description: "CRSDBMT3_SintelShortS3HlsAes128",
        encoderVersion: "BETA",
        createdAt: "2017-03-08T13:40:04Z",
        modifiedAt: "2017-03-08T13:40:12Z",
        cloudRegion: "GOOGLE_EUROPE_WEST_1",
        selectedCloudRegion: "GOOGLE_EUROPE_WEST_1",
        type: "VOD",
        status: "FINISHED",
        startedAt: "2017-03-08T13:40:11Z",
        queuedAt: "2017-03-08T13:40:12Z",
        runningAt: "2017-03-08T13:41:09Z",
        finishedAt: "2017-03-08T13:43:10Z",
        progress: 75
      },
      {
        id: "ca1ac346-5753-4985-ab9c-b860e74956d2",
        name: "CRSDBMT4FIN_testRotationMetaDataLeft",
        description: "CRSDBMT4FIN_testRotationMetaDataLeft",
        encoderVersion: "BETA",
        createdAt: "2017-03-08T13:33:49Z",
        modifiedAt: "2017-03-08T13:33:53Z",
        cloudRegion: "GOOGLE_EUROPE_WEST_1",
        selectedCloudRegion: "GOOGLE_EUROPE_WEST_1",
        type: "VOD",
        status: "FINISHED",
        startedAt: "2017-03-08T13:33:52Z",
        queuedAt: "2017-03-08T13:33:53Z",
        runningAt: "2017-03-08T13:34:44Z",
        finishedAt: "2017-03-08T13:35:21Z",
        progress: 75
      },
      {
        id: "c0154844-06c0-4326-8cb1-080f37bc0a39",
        name: "CRSDBMT4FIN_testRotationMetaDataBottom",
        description: "CRSDBMT4FIN_testRotationMetaDataBottom",
        encoderVersion: "BETA",
        createdAt: "2017-03-08T13:31:28Z",
        modifiedAt: "2017-03-08T13:31:31Z",
        cloudRegion: "GOOGLE_EUROPE_WEST_1",
        selectedCloudRegion: "GOOGLE_EUROPE_WEST_1",
        type: "VOD",
        status: "FINISHED",
        startedAt: "2017-03-08T13:31:31Z",
        queuedAt: "2017-03-08T13:31:31Z",
        runningAt: "2017-03-08T13:32:31Z",
        finishedAt: "2017-03-08T13:33:41Z",
        progress: 75
      },
      {
        id: "13a83d35-37dc-4000-b275-4688306e13e9",
        name: "CRSDBMT4FIN_testRotationMetaDataTop",
        description: "CRSDBMT4FIN_testRotationMetaDataTop",
        encoderVersion: "BETA",
        createdAt: "2017-03-08T13:28:36Z",
        modifiedAt: "2017-03-08T13:28:40Z",
        cloudRegion: "GOOGLE_EUROPE_WEST_1",
        selectedCloudRegion: "GOOGLE_EUROPE_WEST_1",
        type: "VOD",
        status: "FINISHED",
        startedAt: "2017-03-08T13:28:39Z",
        queuedAt: "2017-03-08T13:28:40Z",
        runningAt: "2017-03-08T13:30:46Z",
        finishedAt: "2017-03-08T13:31:16Z",
        progress: 75
      }
    ]
  },
  encodingId: "13a83d35-37dc-4000-b275-4688306e13e9",
  streams: {
    totalCount: 2,
    previous:
      "https://api.bitmovin.com/v1/encoding/encodings/13a83d35-37dc-4000-b275-4688306e13e9/streams?offset=0&limit=5",
    next:
      "https://api.bitmovin.com/v1/encoding/encodings/13a83d35-37dc-4000-b275-4688306e13e9/streams?offset=5&limit=5",
    items: [
      {
        id: "0cee1280-49a8-4cf2-9508-20e9ce712a09",
        createdAt: "2017-03-08T13:28:37Z",
        customDataCreatedAt: "2018-07-10T15:14:10Z",
        modifiedAt: "2017-03-08T13:28:37Z",
        inputStreams: [
          {
            inputId: "5779b0f9-0132-4a9a-8d66-087aa10767d4",
            inputPath: "iphone-videos/iphone_portrait_usb_top.MOV",
            selectionMode: "AUTO",
            position: 0
          }
        ],
        createQualityMetaData: false,
        codecConfigId: "dca9998d-9034-4922-8a43-4b4870f98575",
        segmentsEncoded: 3
      },
      {
        id: "0d8e3ee9-cec9-44b6-b8d5-64676435af09",
        createdAt: "2017-03-08T13:28:37Z",
        customDataCreatedAt: "2018-07-10T15:14:10Z",
        modifiedAt: "2017-03-08T13:28:37Z",
        inputStreams: [
          {
            inputId: "5779b0f9-0132-4a9a-8d66-087aa10767d4",
            inputPath: "iphone-videos/iphone_portrait_usb_top.MOV",
            selectionMode: "AUTO",
            position: 1
          }
        ],
        createQualityMetaData: false,
        codecConfigId: "d25a2421-a3d7-4c0f-8dd8-66a4b78578cc",
        segmentsEncoded: 3
      }
    ]
  },
  muxings: {
    totalCount: 2,
    previous: "https://api.bitmovin.com/v1/encoding/muxings?offset=0&limit=5",
    next: "https://api.bitmovin.com/v1/encoding/muxings?offset=5&limit=5",
    items: [
      {
        id: "33d2e28f-8a8f-4e72-9183-6bdfb6e26c14",
        type: "FMP4",
        streams: [
          {
            streamId: "0d8e3ee9-cec9-44b6-b8d5-64676435af09"
          }
        ],
        outputs: [
          {
            outputId: "2931ff5b-6c4a-4f35-942f-79797ba1da52",
            outputPath:
              "encoding_test/CRSDBMT4FIN_testRotationMetaDataTop-Wed_Mar_08_14:29:16_CET_2017/audio",
            acl: [
              {
                permission: "PUBLIC_READ"
              }
            ]
          }
        ],
        segmentLength: 4,
        segmentNaming: "segment_%number%.m4s",
        initSegmentName: "init.mp4",
        segmentsMuxed: 3
      },
      {
        id: "6dbccf53-be66-4462-ac49-d8e2bf15e1ab",
        type: "FMP4",
        streams: [
          {
            streamId: "0cee1280-49a8-4cf2-9508-20e9ce712a09"
          }
        ],
        outputs: [
          {
            outputId: "2931ff5b-6c4a-4f35-942f-79797ba1da52",
            outputPath:
              "encoding_test/CRSDBMT4FIN_testRotationMetaDataTop-Wed_Mar_08_14:29:16_CET_2017/video",
            acl: [
              {
                permission: "PUBLIC_READ"
              }
            ]
          }
        ],
        segmentLength: 4,
        segmentNaming: "segment_%number%.m4s",
        initSegmentName: "init.mp4",
        segmentsMuxed: 3
      }
    ]
  }
};
