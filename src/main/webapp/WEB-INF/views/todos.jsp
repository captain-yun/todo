<%@ page import="com.kitri.todo.dto.response.Member" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%
    Member loginMember = (Member) session.getAttribute("loginMember");
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/todos.css" />
    <script defer src="/js/todos.js"></script>
    <title>Todo List</title>
</head>
<body>
<h1>todo-list</h1>
<form id="form">
<%--    <input hidden type="text" value="${loginMember.getEmail()}">--%>
    <input type="text" class="input" id="input" placeholder="Enter your todo" autocomplete="off">

    <ul class="todos" id="todos">
    </ul>
</form>
<small>왼쪽 클릭: 항목 완료 <br> 오른쪽 클릭: 해당 항목 삭제</small>

</body>
</html>