import { CalciteNotice, CalciteLink } from '@esri/calcite-components-react';

function App() {
  return (
    <CalciteNotice>
      <div slot="title">Try this trick next time</div>
      <div slot="message">Level up your skills - Select and take action on multiple layers at once.</div>
        <CalciteLink slot="link" title="my action">
            Read more
        </CalciteLink>
    </CalciteNotice>
  )
}

export default App;
