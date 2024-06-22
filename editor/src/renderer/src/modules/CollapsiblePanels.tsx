import EditingBlock from "@/components/editingBlock"
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels"

const CollapsiblePanels = () => {
  return (
    <div className=" h-full">
    <PanelGroup direction="horizontal">
        <Panel collapsible={true} defaultSize={15} collapsedSize={5} minSize={10} maxSize={30}>
            <div>Panel 1</div>
        </Panel>
        <PanelResizeHandle />
        <Panel>
            <EditingBlock/>
        </Panel>
    </PanelGroup>
    </div>
  )
}

export default CollapsiblePanels