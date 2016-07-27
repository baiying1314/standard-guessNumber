const AnswerGenerator = require('../src/answer-generator');

describe("Answer generator",()=>{
    it("should generator",()=>{
        const  isUnique = (item, index,array)=>{
            return array.lastIndexOf(item) === index;
        }
        const answer  = AnswerGenerator.generator();
        expect(answer.length).toEqual(4);
        expect(answer.split("").every(isUnique)).toBeTruthy();
        expect(AnswerGenerator.generator()).not.toEqual(AnswerGenerator.generator());
    })
})