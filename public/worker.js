self.onmessage = function (event) {
    const { data } = event;
    if (data === 'fetchTasks') {
      fetch('http://localhost:5000/tasks')
        .then((response) => response.json())
        .then((tasks) => {
          self.postMessage(tasks);
        });
    }
  };
  