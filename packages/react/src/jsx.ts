import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols"
import {
  ElementType,
  Key,
  Props,
  ReactELementType,
  Ref,
  Type,
} from "shared/ReactType"

const ReactELement = function (
  type: Type,
  key: Key,
  ref: Ref,
  props: Props
): ReactELementType {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
    _mark: "KaSong",
  }
  return element
}

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
  let key: Key = null
  const props: Props = {}
  let ref: Ref = null

  for (const prop in config) {
    const val = config[prop]
    if (prop === "key") {
      if (val !== undefined) {
        key = "" + val
        continue
      }
    }

    if (prop === "ref") {
      if (val !== undefined) {
        ref = val
        continue
      }
    }

    if (Object.hasOwnProperty.call(config, prop)) {
      props[prop] = val
    }

    const maybeChildrenLnegth = maybeChildren.length
    if (maybeChildrenLnegth) {
      if (maybeChildrenLnegth === 1) {
        props.children = maybeChildren[0]
      } else {
        props.children = maybeChildren
      }
    }
  }
  return ReactELement(type, key, ref, props)
}

export const jsxDev = jsx
