import React, { useReducer } from "react";
import uuid from "uuid/v4";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MessageBar, MessageBarType } from "office-ui-fabric-react";

type ToastProps = {
  content: string;
  id: string;
  type?: keyof typeof MessageBarType;
};

const ToastContext = React.createContext(undefined as any);

const toastsReducer = (state: { [id: string]: ToastProps }, action: any) => {
  switch (action.type) {
    case "ADD_TOAST": {
      const newState = { ...state, [action.id]: action.payload };

      return newState;
    }

    case "REMOVE_TOAST": {
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

  const addToast = (toast: Partial<ToastProps>) => {
    const id = uuid();
    toastsDispatch({ type: "ADD_TOAST", id, payload: { ...toast, id } });
    setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id: string) => {
    toastsDispatch({ type: "REMOVE_TOAST", id });
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <TransitionGroup className="toasts-container">
        {Object.values(toasts).map(toast => (
          <CSSTransition classNames="toast" timeout={250} id={toast.id}>
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

export const useToasts = () => React.useContext(ToastContext);
