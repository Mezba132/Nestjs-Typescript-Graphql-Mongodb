import { Injectable, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard extends AuthGuard('local'){

  constructor() {
    super();
  }

  getRequest(context : ExecutionContext) : Promise<any> {
    const ctx = GqlExecutionContext.create(context)
    const request = ctx.getContext()
    request.body = ctx.getArgs().loginUser;
    return request;
  }

}