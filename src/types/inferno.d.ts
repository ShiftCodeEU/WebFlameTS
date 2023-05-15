import { InfernoNode } from "inferno";
import { ComponentClass } from "inferno-create-class";

export type Tcomponent = ComponentClass<any, any> | ((props: any, context: any) => InfernoNode) | undefined;
export type routerArray = { fileName: string; pathName: string; Component: Tcomponent }[];
