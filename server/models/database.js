exports.tb_users = 
    [{
        "id": 1,
        "name": "Fulano de tal",
        "pass": 1234,
        "avatar_url": "img"
    }]

exports.tb_tasks = 
    [{
        "user_id": 1,
        "group_task_id": 1,
        "title_group_task": "Nome do grupo de tarefas",
        "tasks": [
            {
                "title_task": "Nome da tarefa 1",
                "desc_task": "descrição da tarefa",
                "tags": ["importante", "muito importante"],
                "date": "01/01/2020"
            },
            {
                "title_task": "Nome da tarefa 2",
                "desc_task": "descrição da tarefa",
                "tags": ["importante", "muito importante"],
                "date": "01/01/2020"
            }
        ]
    }]