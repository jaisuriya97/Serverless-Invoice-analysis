import { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventInput, DateSelectArg, EventClickArg } from "@fullcalendar/core";
import { Modal } from "../components/ui/modal";
import { useModal } from "../hooks/useModal";
import PageMeta from "../components/common/PageMeta";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import DropzoneComponent from "../components/form/form-elements/DropZone";
import ComponentCard from "../components/common/ComponentCard";

interface CalendarEvent extends EventInput {
  extendedProps: {
    calendar: string;
  };
}

const AddInvoice: React.FC = () => {

  return (
    <>
      <PageMeta
        title="React.js Calendar Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Calendar Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Invoices" />
      <div className="rounded-2xl border  border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] flex flex-col gap-4 p-5 md:p-6">
    
          <DropzoneComponent />
          <ComponentCard title="Previous Invoices">
            <div className="transition  cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500">
            </div>
          </ComponentCard>

      </div>
    </>
  );
};

export default AddInvoice;
