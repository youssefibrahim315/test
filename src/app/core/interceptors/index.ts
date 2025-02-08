import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderInterceptor } from "./header.interceptor";

export const INTERCEPTORS_PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true,
  },
];
