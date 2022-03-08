import { serverHttp } from './app';

const port = process.env.PORT || 4004;
serverHttp.listen(port, () => console.log(`Server is running on PORT ${port}`));
