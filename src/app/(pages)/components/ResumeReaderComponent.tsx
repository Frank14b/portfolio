"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

export default function ResumeReaderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <>
      <div onClick={handleOpen}>{children}</div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <div className="text-center w-full">Resume</div>
        </DialogHeader>
        <DialogBody className="max-h-[80vh] overflow-y-auto">
          <Document
            file={"/pdf/sample-resume.pdf"}
            onLoadError={console.error}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </DialogBody>
        <DialogFooter>
          <div className="flex justify-between w-full">
            <Button size="sm" className="bg-red-800" onClick={handleOpen}>
              close
            </Button>
            <div className="flex gap-4">
              {pageNumber > 1 && (
                <ArrowLeftCircleIcon
                  onClick={() => setPageNumber(pageNumber - 1)}
                  className="size-5 mt-[0.2em] cursor-pointer"
                />
              )}
              <span>
                {pageNumber} / <b>{numPages}</b>
              </span>
              {pageNumber < numPages && (
                <ArrowRightCircleIcon
                  onClick={() => setPageNumber(pageNumber + 1)}
                  className="size-5 mt-[0.2em] cursor-pointer"
                />
              )}
            </div>
            <Button size="sm">Download</Button>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}