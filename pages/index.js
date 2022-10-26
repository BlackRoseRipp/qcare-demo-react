import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <main>
        <div className="banner bg-blue-primary pb-24">
          <div className="container mx-auto py-16 flex flex-col">
            <h1 className="heading text-white text-6xl font-semibold w-2/3">
              Healthcare when and where you need it.
            </h1>
            <div className="mt-8">
              <a
                className="btn-primary text-white border-2 border-white hover:border-yellow-logo font-medium"
                href="#"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
