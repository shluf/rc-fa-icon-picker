import React from 'react';
import { cn } from '../../lib/utils';

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Modal({ open, onOpenChange, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={() => onOpenChange(false)}
      />
      <div className="relative p-4 z-50 max-h-[90vh] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export interface ModalContentProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties; 
}

export function ModalContent({ className, children, style }: ModalContentProps) {
  return (
    <div 
      className={cn(
        'bg-white rounded-lg shadow-lg border p-6 max-w-lg w-full z-9999',
        className
      )}
      style={style} 
    >
      {children}
    </div>
  );
}

export function ModalHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4">{children}</div>;
}

export function ModalTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}

export function ModalFooter({ children, style }: { children: React.ReactNode, style?: React.CSSProperties }) {
  return <div className="flex justify-end gap-2 mt-3 py-3" style={style}>{children}</div>;
}