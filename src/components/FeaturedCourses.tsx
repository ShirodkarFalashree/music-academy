"use client"
import React from 'react';
import courseData from "../data/music_courses.json";
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';

interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
}

function FeaturedCourses() {
    // Filter the featured courses and store them in a variable
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div>
                    <div className='text-center'>
                        <p className='text-teal-600 font-semibold text-xl'>FEATURED COURSES</p>
                        <h2 className='text-5xl font-bold'>Learn with the best</h2>
                    </div>
                </div>
            </div>

            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient>
                                <div className='flex flex-col rounded-[22px] bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                    <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                        <p className='text-lg sm:text-xl mt-4 mb-2 text-neutral-200'>{course.title}</p>
                                        <p className='text-sm text-neutral-400 flex-grow h-24 overflow-hidden'>
                                            {course.description}
                                        </p>
                                        <Link href={`/courses/${course.slug}`} className='text-teal-600 hover:text-teal-800'>
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-20 text-center'>
                <Link href={"/courses"}
                    className='text-teal-600 hover:text-teal-800 font-semibold text-xl'>
                    View all courses
                </Link>
            </div>
        </div>
    );
}

export default FeaturedCourses;
