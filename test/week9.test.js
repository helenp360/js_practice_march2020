const { sumMultiples, isValidDNA, getComplementaryDNA, isItPrime, areWeCovered, createMatrix } = require("../challenges/week9");

describe("sumMultiples", () => {
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("arr is required");
    });

    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });

    test("it works ok with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    });

    test("returns 0 if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("it throws an error if not passed a string", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");

        expect(() => {
            isValidDNA([1, 2, 3]);
        }).toThrow("str is required");
    });

    test("returns false if not passed a valid DNA string", () => {
        expect(isValidDNA("CGTA123")).toBe(false);
    });

    test("is not case sensitive", () => {
        expect(isValidDNA("actg")).toBe(true);
    });
});

describe("getComplementaryDNA", () => {
    test("it throws an error if not passed a string", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required")
    });

    test("it throws an error if not passed a string", () => {    
        expect(() => {
            getComplementaryDNA([1, 2, 3]);
        }).toThrow("str is required")
    });

    // test("throws an error if passed a string that is not valid DNA", () => {
    //     expect(getComplementaryDNA("BFDR")).toThrow("str must be a valid DNA string");
    // });

    test("returns complementary DNA if passed a valid DNA string", () => {
        expect(getComplementaryDNA("TGAC")).toBe("ACTG");
    });
});

describe.only("isItPrime", () => {
    test("throws an error if not passed a number", () => {
        expect(() => {
            isItPrime();
        }).toThrow("n is required");

        expect(() => {
            isItPrime("hello");
        }).toThrow("n must be a number");
    });

    test("returns true if passed a prime number", () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(199)).toBe(true);
        expect(isItPrime(4363)).toBe(true);
    })

    test("returns false if passed a number that isn't prime", () => {
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(63)).toBe(false);
        expect(isItPrime(4000)).toBe(false);
    })
});

// describe("createMatrix", () => {
//     test("returns a matrix of 1 x 1 when passed 1", () => {
//         const result = createMatrix(1, "foo");
//         const expected = [ ["foo"] ];
//         expect(result).toEqual(expected);
//     }); 
// });

// describe("areWeCovered", () => {
//     test("it returns false if there are no staff at all", () => {
//         expect(areWeCovered([], "Monday")).toBe(false);
//         expect(areWeCovered([], "Tuesday")).toBe(false);
//         expect(areWeCovered([], "Wednesday")).toBe(false);
//         expect(areWeCovered([], "Thursday")).toBe(false);
//         expect(areWeCovered([], "Friday")).toBe(false);
//         expect(areWeCovered([], "Saturday")).toBe(false);
//         expect(areWeCovered([], "Sunday")).toBe(false);
//     });

//     test("returns false if there are staff but < 3 are scheduled to work", () => {
//         const staff = [
//             {name: "gary", rota: ["Monday", "Tuesday"]},
//             {name: "steve", rota: ["Wednesday", "Thursday"]},
//             {name: "jenny", rota: ["Monday", "Tuesday", "Wednesday", "Thursday"]},
//             {name: "rose", rota: ["Monday", "Tuesday"]},
//         ]
//     })
// });