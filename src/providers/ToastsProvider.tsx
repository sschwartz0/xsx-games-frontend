import React, { useReducer } from "react";
import uuid from "uuid/v4";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MessageBar, MessageBarType } from "office-ui-fabric-react";

enum ActionType {
  ADD_TOAST = "ADD_TOAST",
  REMOVE_TOAST = "REMOVE_TOAST"
}

type ToastType = {
  content: string;
  id: string;
  type: keyof typeof MessageBarType;
};

type Action =
  | {
      type: ActionType.ADD_TOAST;
      id: string;
      payload: ToastType;
    }
  | {
      type: ActionType.REMOVE_TOAST;
      id: string;
    };

const ToastContext = React.createContext(undefined as any);

const toastsReducer = (state: { [id: string]: ToastType }, action: Action) => {
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

  const addToast = (toast: ToastType) => {
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
            <Toast key={toast.id} {...toast} onDismiss={removeToast} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ToastContext.Provider>
  );
};

interface ToastProps extends ToastType {
  onDismiss: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ content, id, onDismiss, type }) => {
  return (
    <MessageBar
      messageBarType={type ? MessageBarType[type] : MessageBarType.info}
      onDismiss={() => onDismiss(id)}
    >
      {content}
    </MessageBar>
  );
};

export interface UseToasts {
  addToast: (toast: Pick<ToastType, "content" | "type">) => void;
  removeToast: (id: string) => void;
}

export const useToasts = (): UseToasts => React.useContext(ToastContext);

export const withToasts = (Component: any) => {
  return (props: any) => {
    const { addToast, removeToast } = useToasts();

    return (
      <Component addToast={addToast} removeToast={removeToast} {...props} />
    );
  };
};
