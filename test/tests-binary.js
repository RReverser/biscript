if (typeof exports != "undefined") {
  var test = require("./driver.js").test;
  var testFail = require("./driver.js").testFail;
  var testAssert = require("./driver.js").testAssert;
}

test("uint x, y", {
  type: "Program",
  start: 0,
  end: 9,
  body: [
    {
      type: "BinaryBinding",
      start: 0,
      end: 9,
      binaryType: {
        type: "Identifier",
        start: 0,
        end: 4,
        name: "uint"
      },
      ids: [
        {
          type: "Identifier",
          start: 5,
          end: 6,
          name: "x"
        },
        {
          type: "Identifier",
          start: 8,
          end: 9,
          name: "y"
        }
      ]
    }
  ]
});

testFail("uint x = 0", "Unexpected token (1:7)"); 

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
            type: "BinaryBinding",
            start: 18,
            end: 24,
            binaryType: {
              type: "Identifier",
              start: 18,
              end: 21,
              name: "int"
            },
            ids: [
              {
                type: "Identifier",
                start: 22,
                end: 23,
                name: "x"
              }
            ]
          },
          {
            type: "BinaryBinding",
            start: 25,
            end: 31,
            binaryType: {
              type: "Identifier",
              start: 25,
              end: 29,
              name: "char"
            },
            ids: [
              {
                type: "Identifier",
                start: 30,
                end: 31,
                name: "y"
              }
            ]
          }
        ]
      },
      kind: "struct"
    }
  }]
});

test("typedef struct { int x; char y } MyStruct", {
  type: "Program",
  start: 0,
  end: 41,
  body: [
    {
      type: "BinaryTypeDef",
      start: 0,
      end: 41,
      definition: {
        type: "BinaryIdentifier",
        start: 8,
        end: 41,
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
                type: "BinaryBinding",
                start: 17,
                end: 23,
                ids: [
                  {
                    type: "Identifier",
                    start: 21,
                    end: 22,
                    name: "x"
                  }
                ],
                binaryType: {
                  type: "Identifier",
                  start: 17,
                  end: 20,
                  name: "int"
                }
              },
              {
                type: "BinaryBinding",
                start: 24,
                end: 30,
                ids: [
                  {
                    type: "Identifier",
                    start: 29,
                    end: 30,
                    name: "y"
                  }
                ],
                binaryType: {
                  type: "Identifier",
                  start: 24,
                  end: 28,
                  name: "char"
                }
              }
            ]
          }
        },
        id: {
          type: "Identifier",
          start: 33,
          end: 41,
          name: "MyStruct"
        }
      }
    }
  ]
});

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
      params: [
        {
          type: "BinaryIdentifier",
          start: 21,
          end: 36,
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
        }
      ],
      rest: null,
      body: {
        type: "BlockStatement",
        start: 38,
        end: 77,
        body: [
          {
            type: "BinaryBinding",
            start: 40,
            end: 47,
            ids: [
              {
                type: "Identifier",
                start: 44,
                end: 46,
                name: "id"
              }
            ],
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
              type: "BinaryBinding",
              start: 64,
              end: 75,
              ids: [
                {
                  type: "Identifier",
                  start: 68,
                  end: 75,
                  name: "extraId"
                }
              ],
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
      }
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
            type: "BinaryBinding",
            start: 16,
            end: 25,
            binaryType: {
              type: "Identifier",
              start: 16,
              end: 22,
              name: "ushort"
            },
            ids: [
              {
                type: "Identifier",
                start: 23,
                end: 24,
                name: "s"
              }
            ]
          },
          {
            type: "BinaryBinding",
            start: 26,
            end: 35,
            binaryType: {
              type: "Identifier",
              start: 26,
              end: 32,
              name: "double"
            },
            ids: [
              {
                type: "Identifier",
                start: 33,
                end: 34,
                name: "d"
              }
            ]
          },
          {
            type: "BinaryBinding",
            start: 36,
            end: 41,
            binaryType: {
              type: "Identifier",
              start: 36,
              end: 39,
              name: "int"
            },
            ids: [
              {
                type: "Identifier",
                start: 40,
                end: 41,
                name: "i"
              }
            ]
          }
        ]
      },
      kind: "union"
    }
  }]
});

test("struct { string s } x", {
  type: "Program",
  start: 0,
  end: 21,
  body: [
    {
      type: "BinaryBinding",
      start: 0,
      end: 21,
      binaryType: {
        type: "BinaryStructure",
        start: 0,
        end: 19,
        id: null,
        params: [],
        rest: null,
        body: {
          type: "BlockStatement",
          start: 7,
          end: 19,
          body: [
            {
              type: "BinaryBinding",
              start: 9,
              end: 17,
              binaryType: {
                type: "Identifier",
                start: 9,
                end: 15,
                name: "string"
              },
              ids: [
                {
                  type: "Identifier",
                  start: 16,
                  end: 17,
                  name: "s"
                }
              ]
            }
          ]
        },
        kind: "struct"
      },
      ids: [
        {
          type: "Identifier",
          start: 20,
          end: 21,
          name: "x"
        }
      ]
    }
  ]
});

testFail("struct { string s }", "Unexpected token (1:19)");

test("a\u2028b", {
  type: "Program",
  start: 0,
  end: 3,
  body: [
    {
      type: "BinaryBinding",
      start: 0,
      end: 3,
      binaryType: {
        type: "Identifier",
        start: 0,
        end: 1,
        name: "a"
      },
      ids: [
        {
          type: "Identifier",
          start: 2,
          end: 3,
          name: "b"
        }
      ]
    }
  ]
});

// ES6 keywords can be used as type ids in ES5+binary

testFail("if(true) let a = 1;",
         "Unexpected token (1:15)");

test("const a;", {
  type: "Program",
  start: 0,
  end: 8,
  body: [
    {
      type: "BinaryBinding",
      start: 0,
      end: 8,
      binaryType: {
        type: "Identifier",
        start: 0,
        end: 5,
        name: "const"
      },
      ids: [
        {
          type: "Identifier",
          start: 6,
          end: 7,
          name: "a"
        }
      ]
    }
  ]
});

test("let x;", {
  type: "Program",
  start: 0,
  end: 6,
  body: [
    {
      type: "BinaryBinding",
      start: 0,
      end: 6,
      binaryType: {
        type: "Identifier",
        start: 0,
        end: 3,
        name: "let"
      },
      ids: [
        {
          type: "Identifier",
          start: 4,
          end: 5,
          name: "x"
        }
      ]
    }
  ]
}); 

testFail("const a = 1;", "Unexpected token (1:8)");

testFail("let a = 1;", "Unexpected token (1:6)");

