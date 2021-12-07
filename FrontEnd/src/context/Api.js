const server = "http://localhost:3000";
const apiRegister = `${server}/user`;
const apiLogin = `${apiRegister}/auth`;
const apiFile = `${server}/file`;
const apiFiletitulo = `${apiFile}/titulo`;
const apiFileautor = `${apiFile}/autor`;
const apiFilecategoria = `${apiFile}/categoria`;
const apiFileuser = `${apiFile}/user`
const apiCat = `${server}/cat`;
const apiCatnombre = `${apiCat}/nombre`;
const apiSubcat = `${apiCat}/subcat`;


export {apiRegister, apiLogin, apiFile, apiFiletitulo, apiFileautor, apiFilecategoria, apiFileuser, apiCat, apiCatnombre, apiSubcat};