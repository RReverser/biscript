if (typeof exports != "undefined") {
  var test = require("./driver.js").test;
  var testFail = require("./driver.js").testFail;
  var testAssert = require("./driver.js").testAssert;
}

test("uint x <name = 'X', comment = 'variable of x'>, y : 4", {
  type: "Program",
  start: 0,
  end: 53,
  body: [{
    type: "VariableDeclaration",
    start: 0,
    end: 53,
    declarations: [
      {
        type: "VariableDeclarator",
        start: 5,
        end: 46,
        id: {
          type: "Identifier",
          start: 5,
          end: 6,
          name: "x"
        },
        bitLength: null,
        attributes: [
          {
            key: {
              type: "Identifier",
              start: 8,
              end: 12,
              name: "name"
            },
            value: {
              type: "Literal",
              start: 15,
              end: 18,
              value: "X",
              raw: "'X'"
            }
          },
          {
            key: {
              type: "Identifier",
              start: 20,
              end: 27,
              name: "comment"
            },
            value: {
              type: "Literal",
              start: 30,
              end: 45,
              value: "variable of x",
              raw: "'variable of x'"
            }
          }
        ],
        init: null
      },
      {
        type: "VariableDeclarator",
        start: 48,
        end: 53,
        id: {
          type: "Identifier",
          start: 48,
          end: 49,
          name: "y"
        },
        bitLength: {
          type: "Literal",
          start: 52,
          end: 53,
          value: 4,
          raw: "4"
        },
        attributes: [],
        init: null
      }
    ],
    kind: "bind",
    binaryType: {
      type: "Identifier",
      start: 0,
      end: 4,
      name: "uint"
    }
  }]
});

testFail("uint x = 0", "Unexpected token (1:7)");

testFail("uint x : ''", "Unexpected token (1:9)");

testFail("uint x : this", "Unexpected token (1:9)");

test("const int x = 0", {
  type: "Program",
  start: 0,
  end: 15,
  body: [{
    type: "VariableDeclaration",
    start: 0,
    end: 15,
    declarations: [{
      type: "VariableDeclarator",
      start: 10,
      end: 15,
      id: {
        type: "Identifier",
        start: 10,
        end: 11,
        name: "x"
      },
      bitLength: null,
      attributes: [],
      init: {
        type: "Literal",
        start: 14,
        end: 15,
        value: 0,
        raw: "0"
      }
    }],
    kind: "const",
    binaryType: {
      type: "Identifier",
      start: 6,
      end: 9,
      name: "int"
    }
  }]
}, {ecmaVersion: 6});

test("local int x = 0", {
  type: "Program",
  start: 0,
  end: 15,
  body: [{
    type: "VariableDeclaration",
    start: 0,
    end: 15,
    declarations: [{
      type: "VariableDeclarator",
      start: 10,
      end: 15,
      id: {
        type: "Identifier",
        start: 10,
        end: 11,
        name: "x"
      },
      bitLength: null,
      attributes: [],
      init: {
        type: "Literal",
        start: 14,
        end: 15,
        value: 0,
        raw: "0"
      }
    }],
    kind: "local",
    binaryType: {
      type: "Identifier",
      start: 6,
      end: 9,
      name: "int"
    }
  }]
});

testFail("const uint x", "Unexpected token (1:12)", {ecmaVersion: 6});

testFail("local uint int x = 0", "Unexpected token (1:15)");

test("struct MyStruct { int x; char y }", {
  type: "Program",
  start: 0,
  end: 33,
  body: [{
    type: "ExpressionStatement",
    start: 0,
    end: 33,
    expression: {
      type: "BinaryStructure",
      start: 0,
      end: 33,
      kind: "struct",
      id: {
        type: "Identifier",
        start: 7,
        end: 15,
        name: "MyStruct"
      },
      params: [],
      rest: null,
      body: {
        type: "BlockStatement",
        start: 16,
        end: 33,
        body: [
          {
            type: "VariableDeclaration",
            start: 18,
            end: 24,
            declarations: [{
              type: "VariableDeclarator",
              start: 22,
              end: 23,
              id: {
                type: "Identifier",
                start: 22,
                end: 23,
                name: "x"
              },
              bitLength: null,
              attributes: [],
              init: null
            }],
            kind: "bind",
            binaryType: {
              type: "Identifier",
              start: 18,
              end: 21,
              name: "int"
            }
          },
          {
            type: "VariableDeclaration",
            start: 25,
            end: 31,
            declarations: [{
              type: "VariableDeclarator",
              start: 30,
              end: 31,
              id: {
                type: "Identifier",
                start: 30,
                end: 31,
                name: "y"
              },
              bitLength: null,
              attributes: [],
              init: null
            }],
            kind: "bind",
            binaryType: {
              type: "Identifier",
              start: 25,
              end: 29,
              name: "char"
            }
          }
        ]
      },
      attributes: []
    }
  }]
});

test("typedef struct { int x; char y } MyStruct", {
  type: "Program",
  start: 0,
  end: 41,
  body: [{
    type: "BSTypeDefinition",
    start: 0,
    end: 41,
    definition: {
      type: "BSIdentifier",
      start: 8,
      end: 41,
      ref: false,
      id: {
        type: "Identifier",
        start: 33,
        end: 41,
        name: "MyStruct"
      },
      binaryType: {
        type: "BinaryStructure",
        start: 8,
        end: 32,
        kind: "struct",
        id: null,
        params: [],
        rest: null,
        body: {
          type: "BlockStatement",
          start: 15,
          end: 32,
          body: [
            {
              type: "VariableDeclaration",
              start: 17,
              end: 23,
              declarations: [{
                type: "VariableDeclarator",
                start: 21,
                end: 22,
                id: {
                  type: "Identifier",
                  start: 21,
                  end: 22,
                  name: "x"
                },
                bitLength: null,
                attributes: [],
                init: null
              }],
              kind: "bind",
              binaryType: {
                type: "Identifier",
                start: 17,
                end: 20,
                name: "int"
              }
            },
            {
              type: "VariableDeclaration",
              start: 24,
              end: 30,
              declarations: [{
                type: "VariableDeclarator",
                start: 29,
                end: 30,
                id: {
                  type: "Identifier",
                  start: 29,
                  end: 30,
                  name: "y"
                },
                bitLength: null,
                attributes: [],
                init: null
              }],
              kind: "bind",
              binaryType: {
                type: "Identifier",
                start: 24,
                end: 28,
                name: "char"
              }
            }
          ]
        },
        attributes: []
      }
    },
    attributes: []
  }]
});

test("typedef byte kbyte[1024]", {
  type: "Program",
  start: 0,
  end: 24,
  body: [{
    type: "BSTypeDefinition",
    start: 0,
    end: 24,
    definition: {
      type: "BSArray",
      start: 8,
      end: 24,
      base: {
        type: "BSIdentifier",
        start: 8,
        end: 18,
        ref: false,
        id: {
          type: "Identifier",
          start: 13,
          end: 18,
          name: "kbyte"
        },
        binaryType: {
          type: "Identifier",
          start: 8,
          end: 12,
          name: "byte"
        }
      },
      length: {
        type: "Literal",
        start: 19,
        end: 23,
        value: 1024,
        raw: "1024"
      }
    },
    attributes: []
  }]
});

testFail("typedef MyStruct", "Unexpected token (1:8)");

test("struct VarSizeStruct(bool hasExtraId) { int id; if (hasExtraId) int extraId }", {
  type: "Program",
  start: 0,
  end: 77,
  body: [{
    type: "ExpressionStatement",
    start: 0,
    end: 77,
    expression: {
      type: "BinaryStructure",
      start: 0,
      end: 77,
      kind: "struct",
      id: {
        type: "Identifier",
        start: 7,
        end: 20,
        name: "VarSizeStruct"
      },
      params: [{
        type: "BSIdentifier",
        start: 21,
        end: 36,
        ref: false,
        id: {
          type: "Identifier",
          start: 26,
          end: 36,
          name: "hasExtraId"
        },
        binaryType: {
          type: "Identifier",
          start: 21,
          end: 25,
          name: "bool"
        }
      }],
      rest: null,
      body: {
        type: "BlockStatement",
        start: 38,
        end: 77,
        body: [
          {
            type: "VariableDeclaration",
            start: 40,
            end: 47,
            declarations: [{
              type: "VariableDeclarator",
              start: 44,
              end: 46,
              id: {
                type: "Identifier",
                start: 44,
                end: 46,
                name: "id"
              },
              bitLength: null,
              attributes: [],
              init: null
            }],
            kind: "bind",
            binaryType: {
              type: "Identifier",
              start: 40,
              end: 43,
              name: "int"
            }
          },
          {
            type: "IfStatement",
            start: 48,
            end: 75,
            test: {
              type: "Identifier",
              start: 52,
              end: 62,
              name: "hasExtraId"
            },
            consequent: {
              type: "VariableDeclaration",
              start: 64,
              end: 75,
              declarations: [{
                type: "VariableDeclarator",
                start: 68,
                end: 75,
                id: {
                  type: "Identifier",
                  start: 68,
                  end: 75,
                  name: "extraId"
                },
                bitLength: null,
                attributes: [],
                init: null
              }],
              kind: "bind",
              binaryType: {
                type: "Identifier",
                start: 64,
                end: 67,
                name: "int"
              }
            },
            alternate: null
          }
        ]
      },
      attributes: []
    }
  }]
});

test("union MyUnion { ushort s; double d; int i }", {
  type: "Program",
  start: 0,
  end: 43,
  body: [{
    type: "ExpressionStatement",
    start: 0,
    end: 43,
    expression: {
      type: "BinaryStructure",
      start: 0,
      end: 43,
      kind: "union",
      id: {
        type: "Identifier",
        start: 6,
        end: 13,
        name: "MyUnion"
      },
      params: [],
      rest: null,
      body: {
        type: "BlockStatement",
        start: 14,
        end: 43,
        body: [
          {
            type: "VariableDeclaration",
            start: 16,
            end: 25,
            declarations: [{
              type: "VariableDeclarator",
              start: 23,
              end: 24,
              id: {
                type: "Identifier",
                start: 23,
                end: 24,
                name: "s"
              },
              bitLength: null,
              attributes: [],
              init: null
            }],
            kind: "bind",
            binaryType: {
              type: "Identifier",
              start: 16,
              end: 22,
              name: "ushort"
            }
          },
          {
            type: "VariableDeclaration",
            start: 26,
            end: 35,
            declarations: [{
              type: "VariableDeclarator",
              start: 33,
              end: 34,
              id: {
                type: "Identifier",
                start: 33,
                end: 34,
                name: "d"
              },
              bitLength: null,
              attributes: [],
              init: null
            }],
            kind: "bind",
            binaryType: {
              type: "Identifier",
              start: 26,
              end: 32,
              name: "double"
            }
          },
          {
            type: "VariableDeclaration",
            start: 36,
            end: 41,
            declarations: [{
              type: "VariableDeclarator",
              start: 40,
              end: 41,
              id: {
                type: "Identifier",
                start: 40,
                end: 41,
                name: "i"
              },
              bitLength: null,
              attributes: [],
              init: null
            }],
            kind: "bind",
            binaryType: {
              type: "Identifier",
              start: 36,
              end: 39,
              name: "int"
            }
          }
        ]
      },
      attributes: []
    }
  }]
});

test("struct { string s } x", {
  type: "Program",
  start: 0,
  end: 21,
  body: [{
    type: "VariableDeclaration",
    start: 0,
    end: 21,
    declarations: [{
      type: "VariableDeclarator",
      start: 20,
      end: 21,
      id: {
        type: "Identifier",
        start: 20,
        end: 21,
        name: "x"
      },
      bitLength: null,
      attributes: [],
      init: null
    }],
    kind: "bind",
    binaryType: {
      type: "BinaryStructure",
      start: 0,
      end: 19,
      kind: "struct",
      id: null,
      params: [],
      rest: null,
      body: {
        type: "BlockStatement",
        start: 7,
        end: 19,
        body: [{
          type: "VariableDeclaration",
          start: 9,
          end: 17,
          declarations: [{
            type: "VariableDeclarator",
            start: 16,
            end: 17,
            id: {
              type: "Identifier",
              start: 16,
              end: 17,
              name: "s"
            },
            bitLength: null,
            attributes: [],
            init: null
          }],
          kind: "bind",
          binaryType: {
            type: "Identifier",
            start: 9,
            end: 15,
            name: "string"
          }
        }]
      },
      attributes: []
    }
  }]
});

testFail("struct { string s }", "Unexpected token (1:19)");

test("int sum(int x, int y) { return x + y }", {
  type: "Program",
  start: 0,
  end: 38,
  body: [{
    type: "FunctionExpression",
    start: 0,
    end: 38,
    id: {
      type: "BSIdentifier",
      start: 0,
      end: 38,
      id: {
        type: "Identifier",
        start: 4,
        end: 7,
        name: "sum"
      },
      binaryType: {
        type: "Identifier",
        start: 0,
        end: 3,
        name: "int"
      }
    },
    params: [
      {
        type: "BSIdentifier",
        start: 8,
        end: 13,
        ref: false,
        id: {
          type: "Identifier",
          start: 12,
          end: 13,
          name: "x"
        },
        binaryType: {
          type: "Identifier",
          start: 8,
          end: 11,
          name: "int"
        }
      },
      {
        type: "BSIdentifier",
        start: 15,
        end: 20,
        ref: false,
        id: {
          type: "Identifier",
          start: 19,
          end: 20,
          name: "y"
        },
        binaryType: {
          type: "Identifier",
          start: 15,
          end: 18,
          name: "int"
        }
      }
    ],
    rest: null,
    body: {
      type: "BlockStatement",
      start: 22,
      end: 38,
      body: [{
        type: "ReturnStatement",
        start: 24,
        end: 36,
        argument: {
          type: "BinaryExpression",
          start: 31,
          end: 36,
          left: {
            type: "Identifier",
            start: 31,
            end: 32,
            name: "x"
          },
          operator: "+",
          right: {
            type: "Identifier",
            start: 35,
            end: 36,
            name: "y"
          }
        }
      }]
    }
  }]
});

test("void assignInt(&dest, int &src) { dest = src }", {
  type: "Program",
  start: 0,
  end: 46,
  body: [{
    type: "FunctionDeclaration",
    start: 0,
    end: 46,
    id: {
      type: "Identifier",
      start: 5,
      end: 14,
      name: "assignInt"
    },
    params: [
      {
        type: "BSIdentifier",
        start: 15,
        end: 20,
        ref: true,
        id: {
          type: "Identifier",
          start: 16,
          end: 20,
          name: "dest"
        },
        binaryType: null
      },
      {
        type: "BSIdentifier",
        start: 22,
        end: 30,
        ref: true,
        id: {
          type: "Identifier",
          start: 27,
          end: 30,
          name: "src"
        },
        binaryType: {
          type: "Identifier",
          start: 22,
          end: 25,
          name: "int"
        }
      }
    ],
    rest: null,
    body: {
      type: "BlockStatement",
      start: 32,
      end: 46,
      body: [{
        type: "ExpressionStatement",
        start: 34,
        end: 44,
        expression: {
          type: "AssignmentExpression",
          start: 34,
          end: 44,
          operator: "=",
          left: {
            type: "Identifier",
            start: 34,
            end: 38,
            name: "dest"
          },
          right: {
            type: "Identifier",
            start: 41,
            end: 44,
            name: "src"
          }
        }
      }]
    }
  }]
});

test("int a[10][6]", {
  type: "Program",
  start: 0,
  end: 12,
  body: [{
    type: "VariableDeclaration",
    start: 0,
    end: 12,
    declarations: [{
      type: "VariableDeclarator",
      start: 4,
      end: 12,
      id: {
        type: "BSArray",
        start: 4,
        end: 12,
        base: {
          type: "BSArray",
          start: 4,
          end: 9,
          base: {
            type: "Identifier",
            start: 4,
            end: 5,
            name: "a"
          },
          length: {
            type: "Literal",
            start: 6,
            end: 8,
            value: 10,
            raw: "10"
          }
        },
        length: {
          type: "Literal",
          start: 10,
          end: 11,
          value: 6,
          raw: "6"
        }
      },
      bitLength: null,
      attributes: [],
      init: null
    }],
    kind: "bind",
    binaryType: {
      type: "Identifier",
      start: 0,
      end: 3,
      name: "int"
    }
  }]
});

test("int first(int a[]) { return a[0] }", {
  type: "Program",
  start: 0,
  end: 34,
  body: [{
    type: "FunctionExpression",
    start: 0,
    end: 34,
    id: {
      type: "BSIdentifier",
      start: 0,
      end: 34,
      id: {
        type: "Identifier",
        start: 4,
        end: 9,
        name: "first"
      },
      binaryType: {
        type: "Identifier",
        start: 0,
        end: 3,
        name: "int"
      }
    },
    params: [{
      type: "BSArray",
      start: 10,
      end: 17,
      base: {
        type: "BSIdentifier",
        start: 10,
        end: 15,
        ref: false,
        id: {
          type: "Identifier",
          start: 14,
          end: 15,
          name: "a"
        },
        binaryType: {
          type: "Identifier",
          start: 10,
          end: 13,
          name: "int"
        }
      },
      length: null
    }],
    rest: null,
    body: {
      type: "BlockStatement",
      start: 19,
      end: 34,
      body: [{
        type: "ReturnStatement",
        start: 21,
        end: 32,
        argument: {
          type: "MemberExpression",
          start: 28,
          end: 32,
          object: {
            type: "Identifier",
            start: 28,
            end: 29,
            name: "a"
          },
          property: {
            type: "Literal",
            start: 30,
            end: 31,
            value: 0,
            raw: "0"
          },
          computed: true
        }
      }]
    }
  }]
});

test("enum MYENUM { COMP_1, COMP_2 = 5, COMP_3 }", {
  type: "Program",
  start: 0,
  end: 42,
  body: [{
    type: "ExpressionStatement",
    start: 0,
    end: 42,
    expression: {
      type: "BSEnumeration",
      start: 0,
      end: 42,
      baseType: null,
      id: {
        type: "Identifier",
        start: 5,
        end: 11,
        name: "MYENUM"
      },
      declarations: [
        {
          type: "VariableDeclarator",
          start: 14,
          end: 20,
          id: {
            type: "Identifier",
            start: 14,
            end: 20,
            name: "COMP_1"
          },
          init: null
        },
        {
          type: "VariableDeclarator",
          start: 22,
          end: 32,
          id: {
            type: "Identifier",
            start: 22,
            end: 28,
            name: "COMP_2"
          },
          init: {
            type: "Literal",
            start: 31,
            end: 32,
            value: 5,
            raw: "5"
          }
        },
        {
          type: "VariableDeclarator",
          start: 34,
          end: 40,
          id: {
            type: "Identifier",
            start: 34,
            end: 40,
            name: "COMP_3"
          },
          init: null
        }
      ]
    }
  }]
});

test("enum <ushort> MYENUM { COMP_1, COMP_2 = 5, COMP_3 } var1", {
  type: "Program",
  start: 0,
  end: 56,
  body: [{
    type: "VariableDeclaration",
    start: 0,
    end: 56,
    declarations: [{
      type: "VariableDeclarator",
      start: 52,
      end: 56,
      id: {
        type: "Identifier",
        start: 52,
        end: 56,
        name: "var1"
      },
      bitLength: null,
      attributes: [],
      init: null
    }],
    kind: "bind",
    binaryType: {
      type: "BSEnumeration",
      start: 0,
      end: 51,
      baseType: {
        type: "Identifier",
        start: 6,
        end: 12,
        name: "ushort"
      },
      id: {
        type: "Identifier",
        start: 14,
        end: 20,
        name: "MYENUM"
      },
      declarations: [
        {
          type: "VariableDeclarator",
          start: 23,
          end: 29,
          id: {
            type: "Identifier",
            start: 23,
            end: 29,
            name: "COMP_1"
          },
          init: null
        },
        {
          type: "VariableDeclarator",
          start: 31,
          end: 41,
          id: {
            type: "Identifier",
            start: 31,
            end: 37,
            name: "COMP_2"
          },
          init: {
            type: "Literal",
            start: 40,
            end: 41,
            value: 5,
            raw: "5"
          }
        },
        {
          type: "VariableDeclarator",
          start: 43,
          end: 49,
          id: {
            type: "Identifier",
            start: 43,
            end: 49,
            name: "COMP_3"
          },
          init: null
        }
      ]
    }
  }]
});

test("typedef float VEC3F[3] <read=Vec3FRead, write=Vec3FWrite>", {
  type: "Program",
  start: 0,
  end: 57,
  body: [{
    type: "BSTypeDefinition",
    start: 0,
    end: 57,
    definition: {
      type: "BSArray",
      start: 8,
      end: 22,
      base: {
        type: "BSIdentifier",
        start: 8,
        end: 19,
        ref: false,
        id: {
          type: "Identifier",
          start: 14,
          end: 19,
          name: "VEC3F"
        },
        binaryType: {
          type: "Identifier",
          start: 8,
          end: 13,
          name: "float"
        }
      },
      length: {
        type: "Literal",
        start: 20,
        end: 21,
        value: 3,
        raw: "3"
      }
    },
    attributes: [
      {
        key: {
          type: "Identifier",
          start: 24,
          end: 28,
          name: "read"
        },
        value: {
          type: "Identifier",
          start: 29,
          end: 38,
          name: "Vec3FRead"
        }
      },
      {
        key: {
          type: "Identifier",
          start: 40,
          end: 45,
          name: "write"
        },
        value: {
          type: "Identifier",
          start: 46,
          end: 56,
          name: "Vec3FWrite"
        }
      }
    ]
  }]
});

test("typedef struct { int id; int length; uchar data[length] } RECORD <optimize=false>", {
  type: "Program",
  start: 0,
  end: 81,
  body: [{
    type: "BSTypeDefinition",
    start: 0,
    end: 81,
    definition: {
      type: "BSIdentifier",
      start: 8,
      end: 64,
      ref: false,
      id: {
        type: "Identifier",
        start: 58,
        end: 64,
        name: "RECORD"
      },
      binaryType: {
        type: "BinaryStructure",
        start: 8,
        end: 57,
        kind: "struct",
        id: null,
        params: [],
        rest: null,
        body: {
          type: "BlockStatement",
          start: 15,
          end: 57,
          body: [
            {
              type: "VariableDeclaration",
              start: 17,
              end: 24,
              declarations: [{
                type: "VariableDeclarator",
                start: 21,
                end: 23,
                id: {
                  type: "Identifier",
                  start: 21,
                  end: 23,
                  name: "id"
                },
                bitLength: null,
                attributes: [],
                init: null
              }],
              kind: "bind",
              binaryType: {
                type: "Identifier",
                start: 17,
                end: 20,
                name: "int"
              }
            },
            {
              type: "VariableDeclaration",
              start: 25,
              end: 36,
              declarations: [{
                type: "VariableDeclarator",
                start: 29,
                end: 35,
                id: {
                  type: "Identifier",
                  start: 29,
                  end: 35,
                  name: "length"
                },
                bitLength: null,
                attributes: [],
                init: null
              }],
              kind: "bind",
              binaryType: {
                type: "Identifier",
                start: 25,
                end: 28,
                name: "int"
              }
            },
            {
              type: "VariableDeclaration",
              start: 37,
              end: 55,
              declarations: [{
                type: "VariableDeclarator",
                start: 43,
                end: 55,
                id: {
                  type: "BSArray",
                  start: 43,
                  end: 55,
                  base: {
                    type: "Identifier",
                    start: 43,
                    end: 47,
                    name: "data"
                  },
                  length: {
                    type: "Identifier",
                    start: 48,
                    end: 54,
                    name: "length"
                  }
                },
                bitLength: null,
                attributes: [],
                init: null
              }],
              kind: "bind",
              binaryType: {
                type: "Identifier",
                start: 37,
                end: 42,
                name: "uchar"
              }
            }
          ]
        },
        attributes: []
      }
    },
    attributes: [{
      key: {
        type: "Identifier",
        start: 66,
        end: 74,
        name: "optimize"
      },
      value: {
        type: "Literal",
        start: 75,
        end: 80,
        value: false,
        raw: "false"
      }
    }]
  }]
});

test("RECORD record[5] <optimize=false>", {
  type: "Program",
  start: 0,
  end: 33,
  body: [{
    type: "VariableDeclaration",
    start: 0,
    end: 33,
    declarations: [{
      type: "VariableDeclarator",
      start: 7,
      end: 33,
      id: {
        type: "BSArray",
        start: 7,
        end: 16,
        base: {
          type: "Identifier",
          start: 7,
          end: 13,
          name: "record"
        },
        length: {
          type: "Literal",
          start: 14,
          end: 15,
          value: 5,
          raw: "5"
        }
      },
      bitLength: null,
      attributes: [{
        key: {
          type: "Identifier",
          start: 18,
          end: 26,
          name: "optimize"
        },
        value: {
          type: "Literal",
          start: 27,
          end: 32,
          value: false,
          raw: "false"
        }
      }],
      init: null
    }],
    kind: "bind",
    binaryType: {
      type: "Identifier",
      start: 0,
      end: 6,
      name: "RECORD"
    }
  }]
});

testFail("if(true) let a = 1;", "Unexpected token (1:15)");

test("const a;", {
  type: "Program",
  start: 0,
  end: 8,
  body: [{
    type: "VariableDeclaration",
    start: 0,
    end: 8,
    declarations: [{
      type: "VariableDeclarator",
      start: 6,
      end: 7,
      id: {
        type: "Identifier",
        start: 6,
        end: 7,
        name: "a"
      },
      bitLength: null,
      attributes: [],
      init: null
    }],
    kind: "bind",
    binaryType: {
      type: "Identifier",
      start: 0,
      end: 5,
      name: "const"
    }
  }]
});

test("let x;", {
  type: "Program",
  start: 0,
  end: 6,
  body: [{
    type: "VariableDeclaration",
    start: 0,
    end: 6,
    declarations: [{
      type: "VariableDeclarator",
      start: 4,
      end: 5,
      id: {
        type: "Identifier",
        start: 4,
        end: 5,
        name: "x"
      },
      bitLength: null,
      attributes: [],
      init: null
    }],
    kind: "bind",
    binaryType: {
      type: "Identifier",
      start: 0,
      end: 3,
      name: "let"
    }
  }]
});

testFail("const a = 1;", "Unexpected token (1:8)");

testFail("let a = 1;", "Unexpected token (1:6)");