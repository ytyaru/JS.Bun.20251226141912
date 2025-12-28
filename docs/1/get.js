try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);}
    console.log(await response.json());
} catch (error) {console.error("データの取得中にエラーが発生しました:", error);}
