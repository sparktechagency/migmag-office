"use client";
import MaxWidth from "@/components/max-width/MaxWidth";
import { useState } from "react";
import { FaFileAudio, FaFilePdf, FaFolder } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Folder = () => {
  const [showStructure, setShowStructure] = useState(false);

  const folders = [
    {
      name: "WET Vocals",
      files: ["WET Vocals - Full.wav", "WET Vocal - Take 1.wav"],
    },
    {
      name: "DRY Vocals",
      files: [
        "DRY Vocal Take 1.wav",
        "DRY Vocal Take 2.wav",
        "DRY Vocal Take 3.wav",
      ],
    },
    {
      name: "Stems",
      files: ["Kick.wav", "Bass.wav", "Piano.wav"],
    },
    {
      name: "Melody Files",
      files: ["Bass.mid", "Piano.mid"],
    },
  ];

  const getFileIcon = (file: string) => {
    if (file.endsWith(".pdf")) return <FaFilePdf className="text-purple-600" />;
    if (file.endsWith(".mid"))
      return <FaFileAudio className="text-green-500" />;
    return <FaFileAudio className="text-blue-400" />;
  };

  return (
    <MaxWidth>
      <div className=" bg-white p-4 rounded-md shadow-md text-sm font-medium max-w-md  ">
        {/* Toggle Button */}
        <button
          onClick={() => setShowStructure(!showStructure)}
          className="mb-4  text-blue-600 text-sm flex items-center hover:underline cursor-pointer "
        >
          {showStructure ? (
            <>
              <IoIosArrowUp className="mr-1" />
              Hide folder structure
            </>
          ) : (
            <>
              <IoIosArrowDown className="mr-1" />
              Show folder structure
            </>
          )}
        </button>

        {/* Folder Structure */}
        {showStructure && (
          <div className="space-y-3 ">
            {folders.map((folder) => (
              <div key={folder.name}>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <FaFolder />
                  {folder.name}
                </div>
                <div className="ml-6 mt-1 space-y-1">
                  {folder.files.map((file) => (
                    <div
                      className="flex items-center gap-2 text-gray-700"
                      key={file}
                    >
                      {getFileIcon(file)}
                      {file}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* PDF File */}
            <div className="flex items-center gap-2 mt-2 text-purple-600">
              <FaFilePdf />
              Lyrics.pdf
            </div>
          </div>
        )}

        {/* Footer Note */}
        <p className="text-xs text-gray-500 mt-4">
          This is only a demo package. Final package depends on the vocal and
          extra options.
        </p>
      </div>
    </MaxWidth>
  );
};

export default Folder;
