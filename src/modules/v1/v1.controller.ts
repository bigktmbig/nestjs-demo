import { 
	Controller,
	Get 
} from '@nestjs/common';

@Controller()
export class V1Controller {
	@Get('test')
	findTest() {
		return 'V1 test router!!!';
	}
}
