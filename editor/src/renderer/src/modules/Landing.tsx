import React from 'react';

import Editor from './Editor';

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


interface LandingProps {

}

const Landing: React.FC<LandingProps> = () => {
    return (
        <div className="min-h-screen">
            <div className="fixed top-0 left-0 right-0 bottom-0">
                <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                    <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                    <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>View</MenubarTrigger>
                    <MenubarContent>
                    <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                </Menubar>
                <div>
                <ResizablePanelGroup direction="horizontal" className='h-full'>
                    <ResizablePanel>
                        <Table>
                            <TableCaption>A list of your recent invoices.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                <TableHead className="w-[100px]">Files</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                <TableCell className="font-medium">Filename</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell className="font-medium">Filename</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell className="font-medium">Filename</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell className="font-medium">Filename</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell className="font-medium">Filename</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </ResizablePanel>
                    <div className="relative">
                        <div className="absolute inset-y-0 right-0 z-10">
                            <ResizableHandle
                            className="h-full"
                            data-panel-group-direction="horizontal"
                            />
                        </div>
                    </div>
                    <ResizablePanel>
                        <Editor/>
                    </ResizablePanel>
                </ResizablePanelGroup>
                </div>
            </div>
        </div>
    );
};

export default Landing;