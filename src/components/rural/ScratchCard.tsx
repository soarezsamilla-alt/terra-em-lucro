import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ScratchCardProps {
  readonly revealed: boolean;
  readonly onStart: () => void;
  readonly onReveal: () => void;
}

const CELL_SIZE = 8;
const BRUSH_RADIUS = 22;
const REVEAL_THRESHOLD = 0.45;

export function ScratchCard({ revealed, onStart, onReveal }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scratchedCellsRef = useRef(new Set<string>());
  const startedRef = useRef(false);
  const drawingRef = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const context = canvas.getContext("2d");
    if (!context) {
      onReveal();
      return;
    }

    const bounds = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(bounds.width * ratio);
    canvas.height = Math.round(bounds.height * ratio);
    context.scale(ratio, ratio);
    const styles = getComputedStyle(canvas);
    const gold = styles.getPropertyValue("--scratch-gold").trim() || "goldenrod";
    const goldLight = styles.getPropertyValue("--scratch-gold-light").trim() || "gold";
    const gradient = context.createLinearGradient(0, 0, bounds.width, bounds.height);
    gradient.addColorStop(0, gold);
    gradient.addColorStop(0.5, goldLight);
    gradient.addColorStop(1, gold);
    context.fillStyle = gradient;
    context.fillRect(0, 0, bounds.width, bounds.height);
    context.fillStyle = styles.getPropertyValue("--earth").trim();
    context.font = "800 17px Archivo, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("RASPE AQUI", bounds.width / 2, bounds.height / 2);
    setReady(true);
  }, [onReveal, revealed]);

  const scratch = useCallback(
    (event: PointerEvent<HTMLCanvasElement>) => {
      if (!drawingRef.current || revealed) return;
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context) return;
      const bounds = canvas.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      context.save();
      context.globalCompositeOperation = "destination-out";
      context.beginPath();
      context.arc(x, y, BRUSH_RADIUS, 0, Math.PI * 2);
      context.fill();
      context.restore();

      if (!startedRef.current) {
        startedRef.current = true;
        onStart();
      }
      const columns = Math.ceil(bounds.width / CELL_SIZE);
      const rows = Math.ceil(bounds.height / CELL_SIZE);
      const radius = Math.ceil(BRUSH_RADIUS / CELL_SIZE);
      const centerX = Math.floor(x / CELL_SIZE);
      const centerY = Math.floor(y / CELL_SIZE);
      for (let row = centerY - radius; row <= centerY + radius; row += 1) {
        for (let column = centerX - radius; column <= centerX + radius; column += 1) {
          if (row >= 0 && row < rows && column >= 0 && column < columns) {
            scratchedCellsRef.current.add(`${column}:${row}`);
          }
        }
      }
      if (scratchedCellsRef.current.size / (columns * rows) >= REVEAL_THRESHOLD) onReveal();
    },
    [onReveal, onStart, revealed],
  );

  return (
    <div className="text-center">
      <div className={cn("relative h-36 overflow-hidden rounded-lg border border-scratch-gold bg-primary/5", revealed && "animate-scratch-shine")}> 
        <div className="absolute inset-0 grid place-items-center px-5">
          <p className="font-display text-2xl font-extrabold text-primary">R$ 5 DE DESCONTO</p>
        </div>
        {!revealed ? (
          <canvas
            ref={canvasRef}
            aria-label="Área para raspar e revelar o presente"
            className={cn("absolute inset-0 size-full touch-none cursor-crosshair transition-opacity duration-500", ready ? "opacity-100" : "opacity-0")}
            onPointerDown={(event) => {
              drawingRef.current = true;
              event.currentTarget.setPointerCapture(event.pointerId);
              scratch(event);
            }}
            onPointerMove={scratch}
            onPointerUp={() => { drawingRef.current = false; }}
            onPointerCancel={() => { drawingRef.current = false; }}
          />
        ) : null}
      </div>
      {!revealed ? (
        <>
          <p className="mt-2 text-xs text-muted-foreground">Toque e deslize o dedo para revelar.</p>
          <Button variant="link" size="sm" className="mt-1 h-auto whitespace-normal px-1 py-1 text-xs" onClick={onReveal}>
            Não consigo raspar — revelar meu presente
          </Button>
        </>
      ) : null}
    </div>
  );
}
