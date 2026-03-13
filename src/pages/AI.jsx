"use client";

import { useEffect, useRef, useCallback } from "react";
import { useState } from "react";
import { Textarea } from "../components/textarea";
import { cn } from "../lib/utils";
import {
    ImageIcon,
    FileUp,
    Figma,
    MonitorIcon,
    CircleUserRound,
    ArrowUpIcon,
    Paperclip,
    PlusIcon,
    ChevronDown,
    Globe,
    Lock,
    X,
} from "lucide-react";

function useAutoResizeTextarea({ minHeight, maxHeight }) {
    const textareaRef = useRef(null);

    const adjustHeight = useCallback(
        (reset) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            textarea.style.height = `${minHeight}px`;
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );
            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

export function VercelV0Chat() {
    const [value, setValue] = useState("");
    const [showAttachOptions, setShowAttachOptions] = useState(false);
    const [attachedItem, setAttachedItem] = useState(null);
    
    // Refs for functional file trigger
    const fileInputRef = useRef(null);
    const [currentMode, setCurrentMode] = useState(null);

    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (value.trim() || attachedItem) {
                setValue("");
                setAttachedItem(null);
                adjustHeight(true);
            }
        }
    };

    // This triggers the native file picker/camera
    const triggerFilePicker = (mode) => {
        setCurrentMode(mode);
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const label = currentMode === 'public' ? "Public Document" : "Private Document";
            const icon = currentMode === 'public' 
                ? <Globe className="w-5 h-5 text-blue-400" /> 
                : <Lock className="w-5 h-5 text-green-400" />;
            
            setAttachedItem({ label: `${label}: ${file.name}`, icon });
            setShowAttachOptions(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 p-4 overflow-hidden">
            
            {/* Hidden native input to handle "Upload/Take Photo" */}
            <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                onChange={handleFileChange}
                accept="image/*, .pdf, .doc, .docx, .txt"
            />

            <div className={cn(
                "w-full max-w-2xl transition-all duration-500 ease-in-out flex flex-col items-center",
                showAttachOptions ? "-translate-y-20" : "translate-y-0"
            )}>
                
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-white tracking-tight">
                        What can I help you ship?
                    </h1>
                </div>

                <div className="w-full relative">
                    {showAttachOptions && (
                        <div className="absolute top-[calc(100%+12px)] left-0 w-full flex gap-3 animate-in fade-in slide-in-from-top-4 duration-300 z-50">
                            <button
                                onClick={() => triggerFilePicker('public')}
                                className="flex-1 bg-neutral-900 border border-neutral-800 p-4 rounded-xl hover:bg-neutral-800 transition-all hover:scale-[1.02] text-left group"
                            >
                                <Globe className="w-6 h-6 text-blue-400 mb-2" />
                                <div className="text-sm font-medium text-white">Public Document</div>
                                <div className="text-xs text-neutral-500 mt-1">Share with everyone</div>
                            </button>

                            <button
                                onClick={() => triggerFilePicker('private')}
                                className="flex-1 bg-neutral-900 border border-neutral-800 p-4 rounded-xl hover:bg-neutral-800 transition-all hover:scale-[1.02] text-left group"
                            >
                                <Lock className="w-6 h-6 text-green-400 mb-2" />
                                <div className="text-sm font-medium text-white">Private Document</div>
                                <div className="text-xs text-neutral-500 mt-1">Only you can see this</div>
                            </button>
                        </div>
                    )}

                    <div className="relative bg-neutral-900 rounded-xl border border-neutral-800 shadow-2xl overflow-hidden z-20">
                        {attachedItem && (
                            <div className="px-4 pt-4">
                                <div className="inline-flex items-center gap-2 bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded-lg max-w-[90%]">
                                    {attachedItem.icon}
                                    <span className="text-sm text-white font-medium truncate">{attachedItem.label}</span>
                                    <button onClick={() => setAttachedItem(null)} className="ml-1 p-0.5 hover:bg-neutral-700 rounded-md shrink-0">
                                        <X className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="overflow-y-auto">
                            <Textarea
                                ref={textareaRef}
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                    adjustHeight();
                                }}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask Condo a question..."
                                className={cn(
                                    "w-full px-4 py-3 resize-none bg-transparent border-none text-white text-base focus:outline-none focus-visible:ring-0 placeholder:text-neutral-500",
                                    attachedItem ? "min-h-[50px]" : "min-h-[60px]"
                                )}
                                style={{ overflow: "hidden" }}
                            />
                        </div>

                        <div className="flex items-center justify-between p-3 border-neutral-800/50">
                            <button
                                type="button"
                                onClick={() => setShowAttachOptions(!showAttachOptions)}
                                className={cn(
                                    "group p-2 rounded-lg transition-colors flex items-center gap-1",
                                    showAttachOptions ? "bg-white text-black" : "hover:bg-neutral-800 text-white"
                                )}
                            >
                                <Paperclip className="w-4 h-4" />
                                <ChevronDown className={cn("w-3 h-3 transition-transform", showAttachOptions && "rotate-180")} />
                                <span className="text-xs ml-1">Attach</span>
                            </button>

                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    className={cn(
                                        "p-2 rounded-lg transition-all",
                                        (value.trim() || attachedItem) ? "bg-white text-black" : "text-zinc-500 bg-neutral-800"
                                    )}
                                >
                                    <ArrowUpIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={cn(
                        "flex flex-wrap items-center justify-center gap-2 mt-6 transition-opacity duration-300",
                        showAttachOptions ? "opacity-20 pointer-events-none" : "opacity-100"
                    )}>
                        <ActionButton icon={<ImageIcon className="w-3.5 h-3.5" />} label="Clone Screenshot" />
                        <ActionButton icon={<Figma className="w-3.5 h-3.5" />} label="Figma" />
                        <ActionButton icon={<FileUp className="w-3.5 h-3.5" />} label="Upload" />
                        <ActionButton icon={<MonitorIcon className="w-3.5 h-3.5" />} label="Landing Page" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ActionButton({ icon, label }) {
    return (
        <button className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 rounded-full border border-neutral-800 text-neutral-400 hover:text-white transition-colors text-xs">
            {icon}
            {label}
        </button>
    );
}

export default VercelV0Chat;