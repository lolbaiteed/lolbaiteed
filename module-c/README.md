Запуск сервера: ***docker compose up -d --build***
Доступные эндпоинты: {

    POST /api/v1/users/register
    POST /api/v1/users/login
    GET /api/v1/users/me (token required)
    POST /api/v1/users/me/credits (token required)
    GET /api/v1/machines
    GET /api/v1/machines/:id (token required)
    POST /api/v1/machines/:id/start (token required)
    PATCH /api/v1/machines/:id/stop (token required)
    PATCH /api/v1/machines/:id/pause (token required)
    PATCH /api/v1/machines/:id/resume (token required)
    POST /api/v1/users/logout (token required)
    POST /api/v1/machines/add
        ***request**:
        {
            "name": "Sudsy WM-0001",
            "url": "https://M001:4000",
            "id": "M001",
            "locationX": 31,
            "locationY": 31
        }

        ***response**:
        (201):
            {
              message: "machine created",
              machine: {
                id: "M001",
                url: "http://M001:4000",
                name: "Sudsy WM-0001",
                type: "Washing Machine", 
                brand: "Samsung",
                model: "WF10000",
                locationX: 31 
                locationY: 31 
                  }
            }

        (500):
            {
                "message": "Internal server error"
            }
}
