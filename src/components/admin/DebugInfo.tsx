
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

interface DebugInfoProps {
  debugInfo: string;
  showDebug: boolean;
  onToggleDebug: () => void;
}

export const DebugInfo = ({ debugInfo, showDebug, onToggleDebug }: DebugInfoProps) => {
  const [formattedDebugInfo, setFormattedDebugInfo] = useState(debugInfo);
  
  useEffect(() => {
    // Try to format JSON if possible
    if (debugInfo) {
      try {
        const parsed = JSON.parse(debugInfo);
        setFormattedDebugInfo(JSON.stringify(parsed, null, 2));
      } catch {
        setFormattedDebugInfo(debugInfo);
      }
    } else {
      setFormattedDebugInfo("");
    }
  }, [debugInfo]);

  return (
    <div className="mt-4 text-center">
      <button 
        type="button" 
        onClick={onToggleDebug} 
        className="text-xs text-gray-500 underline hover:text-gray-700 transition-colors"
        aria-expanded={showDebug}
      >
        {showDebug ? "إخفاء معلومات التصحيح" : "عرض معلومات التصحيح"}
      </button>
      
      {showDebug && formattedDebugInfo && (
        <div className="mt-2" aria-live="polite">
          <Label htmlFor="debug">معلومات التصحيح</Label>
          <Textarea 
            id="debug"
            value={formattedDebugInfo}
            readOnly
            className="h-40 font-mono text-xs mt-1 bg-gray-50"
            aria-label="Debug information content"
          />
        </div>
      )}
    </div>
  );
};
