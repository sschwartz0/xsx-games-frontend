import React, { useReducer } from "react";
import uuid from "uuid/v4";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MessageBar, MessageBarType } from "office-ui-fabric-react";

enum ActionType {
  ADD_TOAST = "ADD_TOAST",
  REMOVE_TOAST = "REMOVE_TOAST"
}

type ToastProps = {
  content: string;
  id: string;
  type: keyof typeof MessageBarType;
};

type Action =
  | {
      type: ActionType.ADD_TOAST;
      id: string;
      payload: ToastProps;
    }
  | {
      type: ActionType.REMOVE_TOAST;
      id: string;
    };

const ToastContext = React.createContext(undefined as any);

const toastsReducer = (state: { [id: string]: ToastProps }, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TOAST: {
      const newState = { ...state, [action.id]: action.payload };

      return newState;
    }

    case ActionType.REMOVE_TOAST: {
      const newState = { ...state };
      delete newState[action.id];

      return newState;
    }

    default:
      return state;
  }
};

export const ToastProvider: React.FC<{}> = ({ children }) => {
  const [toasts, toastsDispatch] = useReducer(toastsReducer, {});

  const addToast = (toast: ToastProps) => {
    const id = uuid();
    toastsDispatch({
      type: ActionType.ADD_TOAST,
      id,
      payload: { ...toast, id }
    });
    setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id: string) => {
    toastsDispatch({ type: ActionType.REMOVE_TOAST, id });
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <TransitionGroup className="toasts-container">
        {Object.values(toasts).map(toast => (
          <CSSTransition classNames="toast" timeout={250} key={toast.id}>
            <Toast key={toast.id} {...toast} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ToastContext.Provider>
  );
};

const Toast: React.FC<ToastProps> = ({ content, type }) => {
  return (
    <MessageBar
      messageBarType={type ? MessageBarType[type] : MessageBarType.info}
    >
      {content}
    </MessageBar>
  );
};

interface UseToasts {
  addToast: (toast: Pick<ToastProps, "content" | "type">) => void;
  removeToast: (id: string) => void;
}

export const useToasts = (): UseToasts => React.useContext(ToastContext);
