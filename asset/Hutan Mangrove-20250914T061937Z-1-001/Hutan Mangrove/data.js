var APP_DATA = {
  "scenes": [
    {
      "id": "0-hutan-mangrove-1",
      "name": "Hutan Mangrove 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9699609027123284,
          "pitch": 0.006397205865404487,
          "rotation": 0,
          "target": "1-hutan-mangrove-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hutan-mangrove-2",
      "name": "Hutan Mangrove 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0958917217975834,
          "pitch": 0.03850234503968153,
          "rotation": 0,
          "target": "0-hutan-mangrove-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.22110999430203293,
          "pitch": -0.0808528302864282,
          "title": "Hutan Mangrove",
          "text": "Hutan mangrove merupakan hutan lindung yang berada di desa Temajuk sebagai cagar wisata"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
