"use client";

interface TestAdProps {
  width?: string;
  height?: string;
}

export default function TestAd({ width = "100%", height = "100px" }: TestAdProps) {
  return (
    <div 
      style={{ 
        width, 
        height, 
        backgroundColor: "#f0f0f0", 
        border: "2px dashed #ccc", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        borderRadius: "8px"
      }}
    >
      <div style={{ textAlign: "center", color: "#666" }}>
        <p style={{ margin: 0, fontSize: "14px" }}>テスト広告エリア</p>
        <p style={{ margin: 0, fontSize: "12px" }}>({width} × {height})</p>
      </div>
    </div>
  );
}
