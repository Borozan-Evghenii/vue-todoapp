import type { InjectionKey } from "vue";

export const todoManageKey = Symbol('todoManage') as InjectionKey<{ removeItem: (id: number) => void }>