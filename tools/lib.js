        //unary        
        export function unary(fn){
            return function onlyOneArgument(arg){
                return fn(arg);
            }
        }

        export function identity(v){
            return v;
        }
        
        //identity
        export function soma(a,b, fn = identity){
            return fn(a+b);
        }

        // function array to argument
        export function apply(fn){
            return (argArray) => fn(...argArray)
        }
        // functon argument to array
        export function unapply(fn){
            return (...args) => fn(args)
        }
        
        /* 
            partial application
            
            in a simple way, you have a function that has many arguments but you do not have all the arguments
            in moment, then you feed the function with arguments you have in the moment and then the rest passes.
            the function is only invoked when all arguments are passed
        */
        export function partialApplication(fn, ...args){
            return function(...newArgs){
                return fn(...args,...newArgs)
            }
        }