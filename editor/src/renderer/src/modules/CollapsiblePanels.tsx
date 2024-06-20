import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels"

const CollapsiblePanels = () => {
  return (
    <PanelGroup direction="horizontal">
        <Panel collapsible={true} defaultSize={15} collapsedSize={5} minSize={10} maxSize={30}>
            <div>Panel 1</div>
        </Panel>
        <PanelResizeHandle />
        <Panel>
            <div>Panel 2</div>
        </Panel>
    </PanelGroup>
  )
}

export default CollapsiblePanels