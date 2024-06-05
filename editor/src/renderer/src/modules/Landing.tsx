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
        <main>
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
            <div className='h-auto'>
            <ResizablePanelGroup direction="horizontal">
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
                        </TableBody>
                    </Table>
                </ResizablePanel>
                <ResizableHandle/>
                <ResizablePanel>
                    <Editor/>
                </ResizablePanel>
            </ResizablePanelGroup>
            </div>
        </main>
    );
};

export default Landing;