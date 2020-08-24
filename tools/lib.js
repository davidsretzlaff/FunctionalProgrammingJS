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