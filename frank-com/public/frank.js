const xml = new XMLHttpRequest()
xml.open("GET", "http://qq.com:8888/friends.json")
xml.onreadystatechange = () => {}
xml.send()