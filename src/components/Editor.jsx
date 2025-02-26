import dynamic from "next/dynamic";
import React from "react";
import Image from 'next/image'
const QuillEditor = dynamic(
  () => import("./QuillEditor").then((mod) => mod.default),
  { ssr: false, loading: () => <p>Editor loading ...</p> }
);

class Editor extends React.Component {
  render() {
    return <QuillEditor {...this.props} />;
  }
}

export default Editor;