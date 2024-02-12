package com.kitri.todo.dto.request;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class RequestTodo {
    String id;
    String content;
    Boolean done;
    Long memberId;
}
