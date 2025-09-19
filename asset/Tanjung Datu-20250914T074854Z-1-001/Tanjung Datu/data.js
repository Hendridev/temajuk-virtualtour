var APP_DATA = {
  "scenes": [
    {
      "id": "0-tanjung-datu-1",
      "name": "Tanjung Datu 1",
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
          "yaw": -1.9556334653899423,
          "pitch": -0.004965970599053904,
          "rotation": 0,
          "target": "1-tanjung-datu-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-tanjung-datu-2",
      "name": "Tanjung Datu 2",
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
          "yaw": -1.664320845582182,
          "pitch": 0.09053826950436594,
          "rotation": 0,
          "target": "0-tanjung-datu-1"
        }
      ],
      "infoHotspots": []
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
