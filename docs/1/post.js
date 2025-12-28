try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: 101,
            userId: 1,
            title: "新しいコンテンツ",
            body: "新しいコンテンツの内容",
        }),
    });
    if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);}
    console.log(await response.json());
} catch (error) {console.error("データの取得中にエラーが発生しました:", error);}
