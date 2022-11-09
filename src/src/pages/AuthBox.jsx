import "@fontsource/roboto";
import { Input } from "../components/Input";
import { useEffect, useState, useContext } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { FirebaseContext } from "../firebase";
import { LoadingError } from "../components/LoadingError";
import { LoadingElement } from "../components/LoadingElement";
import { useAuthState } from "react-firebase-hooks/auth";
import { ErrorElement } from "../components/ErrorElement";
import { MessagingArea } from "./MessagingArea";

export function AuthBox() {

  const [auth, firestore] = useContext(FirebaseContext);
  const [user_, loading_, error_] = useAuthState(auth);

  const [mode, setMode] = useState(true);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signUserWithEmailAndPassword, userS, loadingS, errorS] =
    useSignInWithEmailAndPassword(auth);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();


  const onLogIn = () => {
    if (mode === false) createUserWithEmailAndPassword(email, password);
    signUserWithEmailAndPassword(email, password);
    navigate("/welcome");

    signUserWithEmailAndPassword(email, password);
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col gap-10 dark:bg-[var(--color-surface-dark)] bg-[var(--color-surface-light)]">
      <LoadingError
        loading={loading_}
        error={error_}
        loadingElement={<LoadingElement></LoadingElement>}
        errorElement={<ErrorElement></ErrorElement>}
      >
        {user ? (
          <MessagingArea></MessagingArea>
        ) : (
          <LoadingError
            loading={loading}
            error={error}
            loadingElement={<LoadingElement></LoadingElement>}
            errorElement={<ErrorElement></ErrorElement>}
          >
            <form className="flex justify-center items-center h-screen w-screen gap-10 flex-col">
              <h1 className="text-6xl p-10 rounded-lg dark:text-[var(--color-primary-dark)] text-[var(--color-primary-light)]">
                {mode ? "Login" : "Signup"}
              </h1>
              <Input
                placeholder="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={onLogIn}>{mode ? "Log In" : "Signup"}</Button>
              <div className="flex flex-row items-center justify-start">
                <Button>{}</Button>
              </div>
              <a
                href="#"
                className="dark:text-[var(--color-primary-dark)] text-[var(--color-primary-light)]"
                onClick={() => setMode(!mode)}
              >
                {mode ? "Signup" : "Login"}
              </a>
            </form>
          </LoadingError>
        )}
      </LoadingError>
    </main>
  );
}
