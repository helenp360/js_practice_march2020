const { sumDigits, createRange, getScreentimeAlertList, hexToRGB, findWinner } = require("../challenges/week10");

describe("sumDigits", () => {
    test("it throws an error if not passed a number", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");

        expect(() => {
            sumDigits("foo");
        }).toThrow("n must be a number");
    });

    test("returns 15 when passed 12345", () => {
        expect(sumDigits(12345)).toBe(15);
    });
});

describe("createRange", () => {
    test("it throws an error if not passed a value for start", () => {
        expect(() => {
            createRange();
        }).toThrow("start is required");
    });

    test("it throws an error if not passed a value for end", () => {
        expect(() => {
            createRange(2, undefined, 2);
        }).toThrow("end is required");
    });

    test("returns correct array when passed values for start, end and step", () => {
        expect(createRange(1, 9, 2)).toEqual([1, 3, 5, 7, 9]);
        expect(createRange(6, 40, 4)).toEqual([6, 10, 14, 18, 22, 26, 30, 34, 38]);
    });

    test("throws an error if end is less than start", () =>{
        expect(() => {
            createRange(10, 6, 2);
        }).toThrow("end must be greater than start");
    });

    test("returns correct array when passed values for start and end", () => {
        expect(createRange(5, 8)).toEqual([5, 6, 7, 8]);
    });
});

describe("getScreentimeAlertList", () => {
    test("it throws an error if not passed a value for users", () => {
        expect(() =>{
            getScreentimeAlertList(undefined, "2020-06-20");
        }).toThrow("users is required")
    });

    test("it throws an error if not passed a value for date", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} } 
                ]
            },
            {
                username: "helen_9",
                name: "Helen Partington",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 120, instagram: 30, facebook: 10} },
                    { date: "2019-05-02", usage: { twitter: 34, instagram: 0, facebook: 75} },
                    { date: "2019-05-03", usage: { twitter: 34, instagram: 0, facebook: 0} },
                    { date: "2019-05-04", usage: { twitter: 34, instagram: 0, facebook: 0} },
                    { date: "2019-05-05", usage: { twitter: 34, instagram: 0, facebook: 0} }
                ]
            },
            {
                username: "gracie18",
                name: "Grace Gempton",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 10, instagram: 30, facebook: 10} },
                    { date: "2019-05-01", usage: { twitter: 10, instagram: 30, facebook: 10} },
                    { date: "2019-05-01", usage: { twitter: 10, instagram: 30, facebook: 10} },
                    { date: "2019-05-01", usage: { twitter: 10, instagram: 30, facebook: 10} }
                ]
            }
        ]
        
        expect(() =>{
            getScreentimeAlertList(users);
        }).toThrow("date is required")
    })

    test("returns array containing the correct username if one user's screentime is over 100 minutes for the given date", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} } 
                ]
            },
            {
                username: "helen_9",
                name: "Helen Partington",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 120, instagram: 30, facebook: 10} },
                    { date: "2019-05-02", usage: { twitter: 34, instagram: 0, facebook: 75} },
                    { date: "2019-05-03", usage: { twitter: 34, instagram: 0, facebook: 0} },
                    { date: "2019-05-04", usage: { twitter: 34, instagram: 0, facebook: 0} },
                    { date: "2019-05-05", usage: { twitter: 34, instagram: 0, facebook: 98} }
                ]
            },
            {
                username: "gracie18",
                name: "Grace Gempton",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 10, instagram: 30, facebook: 10} },
                    { date: "2019-05-02", usage: { twitter: 10, instagram: 30, facebook: 10} },
                    { date: "2019-05-03", usage: { twitter: 10, instagram: 30, facebook: 10} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 30, facebook: 10} }
                ]
            }
        ]
        expect(getScreentimeAlertList(users, "2019-05-01")).toEqual(["helen_9"])
    })

    test("returns an empty array if none of the users' screentime is over 100 minutes for the given date", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} } 
                ]
            },
            {
                username: "helen_9",
                name: "Helen Partington",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 120, instagram: 30, facebook: 10} },
                    { date: "2019-05-02", usage: { twitter: 34, instagram: 0, facebook: 75} },
                    { date: "2019-05-03", usage: { twitter: 34, instagram: 0, facebook: 0} },
                    { date: "2019-05-04", usage: { twitter: 34, instagram: 0, facebook: 0} },
                    { date: "2019-05-05", usage: { twitter: 34, instagram: 0, facebook: 98} }
                ]
            },
            {
                username: "gracie18",
                name: "Grace Gempton",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 10, instagram: 30, facebook: 10} },
                    { date: "2019-05-02", usage: { twitter: 10, instagram: 30, facebook: 10} },
                    { date: "2019-05-03", usage: { twitter: 10, instagram: 30, facebook: 10} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 30, facebook: 10} }
                ]
            }
        ]
        expect(getScreentimeAlertList(users, "2019-05-03")).toEqual([])
    })
});

describe("hexToRGB", () => {
    test("it throws an error if not passed a hex string", () => {
        expect(() => {
            hexToRGB();
        }).toThrow("hexStr is required")
    })

    test("it throws if passed an invalid hex string", () => {
        expect(() => {
            hexToRGB("hello");
        }).toThrow("invalid hexStr")
    })

    test("returns correct rgb code when passed a hexadecimal colour code", () => {
        expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
        expect(hexToRGB("#F633FF")).toEqual("rgb(246,51,255)");
        expect(hexToRGB("#EDEA1A")).toEqual("rgb(237,234,26)");
    });
}); 

describe("findWinner", () => {
    test("it throws an error if not passed a board", () => {
        expect(() => {
            findWinner();
        }).toThrow("board is required")
    })

    test("it throws an error if board is not an array", () => {
        expect(() => {
            findWinner("hello");
        }).toThrow("board must be an array")
    })

    test("it throws an error if board is invalid", () => {
        const board = [
            ["0", null, "X", "X"],
            ["X", "0", "0"],
            ["X", '0', "0"]
          ]
        expect(() => {
            findWinner(board);
        }).toThrow("board is invalid")
    })

    test("it returns X when X is the winner", () => {
        const board = [
            ["0", null, "X"],
            ["X", "0", "X"],
            ["X", '0', "X"]
          ]
        expect(findWinner(board)).toEqual("X");
    })

    test("it returns 0 when 0 is the winner", () => {
        const board = [
            ["0", null, "0"],
            ["X", "0", "X"],
            ["0", '0', null]
          ]
        expect(findWinner(board)).toEqual("0");
    })

    test("it returns null when no-one is the winner", () => {
        const board = [
            ["0", null, "X"],
            ["X", "0", "0"],
            ["X", '0', "X"]
          ]
        expect(findWinner(board)).toEqual(null);
    })

});
