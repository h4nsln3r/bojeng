import './testpage.scss';

const TestPage = () => {

    function convert(number: any) {
        if (((number % 3 === 0) && (number % 5 === 0)))
        {
            return 'FizzBuzz';
        } else if (number % 5 === 0)
        {
            return 'Buzz';
        } else if (number % 3 === 0)
        {
            return 'Fizz';
        } else
        {
            return number;
        }
    }

    convert(3)

    return (<>Test</>);
}

export default TestPage;


// Implementera en ”convert” metod som tar emot ett numeriskt värde och returnerar ett av följande:

// Om värdet är jämnt delbart med 3 returneras ”Fizz”
// Om värdet är jämnt delbart med 5 returneras ”Buzz”
// Om värdet är jämnt delbart med 3 OCH 5 returneras ”FizzBuzz”
// I annat fall returneras det nummer som skickats in. Endast nummer mellan 1 och 100 är tillåtna i metoden.