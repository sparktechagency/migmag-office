"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useArtistListApiQuery } from "@/app/api/websiteApi/websiteApi";
import ArtistCard from "./ArtistCard";
import { AllArtistType } from "@/utility/type/websiteApiType";
import { ChevronDown, ChevronUp, XCircle } from "lucide-react";
import { MusickPlayer } from "@/components/musick-player/MusickPlayer";

export default function ArtistList() {
  const { data, isLoading } = useArtistListApiQuery(undefined);

  const artistData: AllArtistType[] = useMemo(
    () => data?.data?.data || [],
    [data?.data?.data]
  );

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState("all");
  const [language, setLanguage] = useState("all");

  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const genderRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  // Load More Pagination
  const [visibleCount, setVisibleCount] = useState(5);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 5);
      setLoadingMore(false);
    }, 600);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (genderRef.current && !genderRef.current.contains(event.target as Node))
        setShowGenderDropdown(false);
      if (languageRef.current && !languageRef.current.contains(event.target as Node))
        setShowLanguageDropdown(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Unique languages
  const languageOptions = useMemo(() => {
    const allLanguages = artistData
      .map((artist: AllArtistType) => artist.language)
      .filter((lang): lang is string => !!lang);

    return ["all", ...Array.from(new Set(allLanguages))];
  }, [artistData]);

  // Clear filters
  const clearFilters = () => {
    setSearchTerm("");
    setGender("all");
    setLanguage("all");
    setVisibleCount(5);
  };

  // Filtered Data
  const filteredArtists = useMemo(() => {
    return artistData.filter((artist: AllArtistType) => {
      const matchesSearch = artist.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesGender =
        gender === "all" ||
        artist.gender?.toLowerCase() === gender.toLowerCase();

      const matchesLanguage =
        language === "all" || artist.language === language;

      return matchesSearch && matchesGender && matchesLanguage;
    });
  }, [artistData, searchTerm, gender, language]);

  return (
    <>
      <div className="w-full max-w-6xl mx-auto my-14 rounded-lg shadow-sm">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 px-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search artist..."
            className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/3 focus:outline-none focus:ring-0 text-white bg-gray-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="flex gap-4 w-full md:w-auto">
            {/* Gender Dropdown */}
            <div className="relative w-full md:w-40" ref={genderRef}>
              <button
                onClick={() => {
                  setShowGenderDropdown(!showGenderDropdown);
                  setShowLanguageDropdown(false);
                }}
                className="flex justify-between items-center w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-800 text-white"
              >
                {gender === "all"
                  ? "Gender"
                  : gender.charAt(0).toUpperCase() + gender.slice(1)}
                {showGenderDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {showGenderDropdown && (
                <ul className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-md shadow-lg text-white">
                  {["all", "male", "female"].map((g) => (
                    <li
                      key={g}
                      className={`px-3 py-2 cursor-pointer hover:bg-gray-700 ${
                        gender === g ? "bg-gray-700" : ""
                      }`}
                      onClick={() => {
                        setGender(g);
                        setVisibleCount(5);
                        setShowGenderDropdown(false);
                      }}
                    >
                      {g === "all"
                        ? "All Genders"
                        : g.charAt(0).toUpperCase() + g.slice(1)}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Language Dropdown */}
            <div className="relative w-full md:w-40" ref={languageRef}>
              <button
                onClick={() => {
                  setShowLanguageDropdown(!showLanguageDropdown);
                  setShowGenderDropdown(false);
                }}
                className="flex justify-between items-center w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-800 text-white"
              >
                {language === "all"
                  ? "Languages"
                  : language.charAt(0).toUpperCase() + language.slice(1)}
                {showLanguageDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {showLanguageDropdown && (
                <ul className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-md shadow-lg max-h-52 text-white overflow-y-auto">
                  {languageOptions.map((lang) => (
                    <li
                      key={lang}
                      className={`px-3 py-2 cursor-pointer hover:bg-gray-700 ${
                        language === lang ? "bg-gray-700" : ""
                      }`}
                      onClick={() => {
                        setLanguage(lang);
                        setVisibleCount(5);
                        setShowLanguageDropdown(false);
                      }}
                    >
                      {lang === "all"
                        ? "Languages"
                        : lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Clear Button */}
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-md bg-gray-700 text-white hover:bg-gray-600"
            >
              <XCircle size={16} /> Clear
            </button>
          </div>
        </div>

        {/* Artist List */}
        <div className="space-y-4 px-4 md:px-0 cursor-pointer ">
          {isLoading ? (
            <div className="text-center py-10 text-gray-500">Loading...</div>
          ) : filteredArtists.length > 0 ? (
            filteredArtists.slice(0, visibleCount).map((artist: AllArtistType,index:number) => (
              <ArtistCard key={index} artist={artist} index = {index} />
            ))
          ) : (
            <div className="text-center py-10 text-gray-500">No artists found</div>
          )}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredArtists.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2  text-black rounded btnColor cursor-pointer "
            >
              {loadingMore ? "Loading..." : "See More"}
            </button>
          </div>
        )}
      </div>

      <MusickPlayer />
    </>
  );
}
