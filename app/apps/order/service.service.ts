export class ServiceService {

    public getServices () : [{}] {
        return [
            {
                name: 'Tutorials Development',
                price: 500,
                isActive:true
            },{
                name: 'Tutorials Design',
                price: 300,
                isActive:false
            },{
                name: 'Code Integration',
                price: 250,
                isActive:false
            },{
                name: 'Training',
                price: 220,
                isActive:false
            }
        ];
    }
}