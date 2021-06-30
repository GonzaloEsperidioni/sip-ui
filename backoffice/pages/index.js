import React from "react";
import Router from "next/router";
import Dashboard from "./admin/dashboard";
import Layout from '../layouts/Admin'
export default function Index() {
  // React.useEffect(() => {
  //   Router.push("/admin/dashboard");
  // });

  return <Layout><Dashboard></Dashboard></Layout>;
}
