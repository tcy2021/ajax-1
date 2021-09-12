getCss.onclick = () => {
  const request = new XMLHttpRequest(); //1创建HttpRequest  readyState=0
  request.open("get", "/style.css"); //2创建对象的open方法，专业的，只用这两个参数  1
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log("下载完成");
      console.log(request.status);
      if (request.status >= 200 && request.status < 300) {
        //创建style标签
        const style = document.createElement("style");
        //填写style内容
        style.innerHTML = request.response;
        //插到head
        document.head.appendChild(style); //3.5 处理函数里的文件内容
      } else {
        alert("加载css失败");
      }
    }
  }; //3监听对象的onload事件
  request.send(); //4发送请求  2
};

getJs.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "2.js");
  request.onload = () => {
    console.log("request.response");
    console.log(request.response);
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
    console.log("成功");
  };
  request.onerror = () => {
    console.log("失败");
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/3.html");
  request.onload = () => {
    console.log(request.response);
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("失败");
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/5.json");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      console.log(request.response);
      const object = JSON.parse(request.response); //json.parse 把符合json语法的字符串变成对应的对象或其他 共6种
      console.log(object);
      myName.textContent = object.name;
    }
  };
  request.send();
};
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
