export var dbUrl=''

export function getDbData():any[]{
    console.log('get data from DB');
    return[
        {title:'123'},
        {type:'345'}
    ]
}
export function save(){
    console.log('save successfully');
}