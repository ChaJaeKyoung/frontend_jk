function Layout(props) {
  console.log(props);
  return (
    <>
      {props.header}
      레이아웃 크기는 가로 {props.width}, 세로 {props.height}
      {props.footer}
    </>
  );
}

export default Layout;

// 확장판에 리엑트 스니팻(?) Snippets 다운받거나 VSCode 자체 내부에 Snippets 만들 수 있음