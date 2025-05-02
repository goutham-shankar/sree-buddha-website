import React from 'react';

const AlumniReportsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <nav className="text-sm">
          <ol className="list-none p-0 flex text-gray-500">
            <li className="flex items-center">
              <a href="#" className="hover:text-amber-700">Home</a>
              <svg className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-amber-700">About</a>
              <svg className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-amber-800 font-medium">Alumni Reports</li>
          </ol>
        </nav>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          {/* Hero section */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img 
              src="/assets/images/alumni/Collage-1.jpg"
              alt="Alumni Meet 2024" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">Alumni Gatherings</h2>
              <p className="text-sm md:text-base">Creating connections that last a lifetime</p>
            </div>
          </div>

          {/* Content section */}
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">ALUMNI REPORTS</h1>
            <div className="w-16 h-1 bg-amber-800 mb-6"></div>

            {/* Latest Alumni Meet Section */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-amber-700 mb-4">ALUMNI MEET 2024</h2>
                  <div className="bg-amber-50 p-4 inline-block rounded-lg mb-4">
                    <p className="text-amber-800">
                      <span className="font-semibold">Date:</span> February 10th, 2024<br />
                      <span className="font-semibold">Time:</span> 10:00 AM
                    </p>
                  </div>
                  
                  <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">
                      Alumni Association, Sree Buddha College of Engineering, conducted an
                      alumni meet for the year 2024. Alumnus who is working in different
                      organization attended the meet with high enthusiasm. Secretary, Alumni
                      Association, Ms Rincy Susan Raju welcomed all the dignitaries.
                    </p>
                    
                    <p className="mb-4">
                      The meeting was presided by Dr. K Krishnakumar, Principal, Sree Buddha
                      College of Engineering and officially inaugurated by our Secretary, Sree
                      Buddha Educational Society, Prof. V Prasad. Sri K. Sunil Kumar,
                      Treasurer, Sree Buddha Educational Society felicitated the meeting and
                      Sri Vishnu VS, Alumni member delivered the vote of thanks.
                    </p>

                    <p className="mb-4">
                      After the official inauguration, Alumni interactions were carried out. Alumni from
                      different batches interacted with the audience and shared their
                      experiences, followed by the cultural events led by the students of
                      different semesters. All the programs performed revitalized the
                      audiences and they appreciated the talents of students. It was followed
                      by a delicious lunch and meeting ended by 1:30 PM with greater
                      expectations for the next year.
                    </p>
                    
                    <p className="text-right font-medium text-amber-800">
                      Secretary<br />
                      Alumni Association
                    </p>
                  </div>
                </div>
                
                <div className="md:w-1/3 mt-8 md:mt-0 md:pl-10">
                  <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
                    <img 
                      src="/assets/images/alumni/Collage-1.jpg" 
                      alt="Alumni Meet 2024 Photos" 
                      className="w-full h-auto rounded"
                    />
                    <p className="text-sm text-center text-gray-500 mt-2">Moments from Alumni Meet 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Events */}
            <div className="border-t border-gray-200 pt-10 mb-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">Department Alumni Events</h2>
              
              {/* EEE Department */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-700 mb-2">EEE Department Virtual Alumni Meet 2022</h3>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3">
                      <div className="prose text-gray-600">
                        <p className="mb-4">
                          Department of Electrical and Electronics, Sree Buddha College of
                          Engineering, organized the second Online Alumni Meet on Saturday 23rd
                          July 2022 at 8:00 PM. The online alumni meet was conducted through
                          Google Meet Platform.
                        </p>
                        <p className="mb-4">
                          Mrs. Gayathri Vijayachandran, Assistant
                          Professor, EEE Department & Department Alumni coordinator welcomed the
                          gathering. The inaugural address was delivered by Dr. Vinod V P, HoD,
                          EEE Department.
                        </p>
                        <p>
                          Around 73 students of various passed out batches (2008-2021) attended the
                          function. The active participation of alumni made the event not only
                          joyous and memorable one but also nostalgic.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/3 mt-4 md:mt-0 md:pl-6">
                      <img 
                        src="/assets/images/alumni/Collage4.jpg" 
                        alt="EEE Department Virtual Alumni Meet" 
                        className="w-full h-auto rounded-lg shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CSE Department */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-700 mb-2">SANGAMAM 2018 - CSE Department</h3>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3">
                      <div className="prose text-gray-600">
                        <p className="mb-4">
                          The Department of Computer Science & Engineering had organized an alumni
                          meeting Sangamam 2018 for all batches (2006 – 2018) on 1st December
                          2018 at the Seminar Hall, CS block.
                        </p>
                        <p className="mb-4">
                          The meeting started at 10.00 a.m.
                          with a prayer. Dr S.V.Annlin Jeba, HOD, Department of CSE welcomed the
                          gathering. Presidential address was delivered by Dr S. Suresh Babu,
                          Principal, SBCE.
                        </p>
                        <p>
                          46 alumni from all batches
                          and teachers who had worked here participated in the function.
                          Students and staff shared the memories, most of them volunteered to
                          render services for the benefit of the current students of SBCE.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/3 mt-4 md:mt-0 md:pl-6">
                      <div className="flex justify-center">
                        <img 
                          src="/assets/images/alumni/11-1-300x225.jpg" 
                          alt="Sangamam 2018" 
                          className="h-auto rounded-lg shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* EEE Alumni Meet 2018 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-700 mb-2">Electrical and Electronics Alumni Meet 2018</h3>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-3/5">
                      <div className="prose text-gray-600">
                        <p className="mb-4">
                          Department of Electrical and Electronics, Sree Buddha College of
                          Engineering, organized an Alumni Meet 2018 on 29 December 2018 at
                          Electrical seminar hall.
                        </p>
                        <p className="mb-4">
                          The function was presided over
                          by Prof. Vinod V P, HOD of EEE Department. Dr. Saji Varghese, HOD of
                          Mechanical Engineering Department was the chief guest of the event and
                          he inaugurated the Function and also gave a talk on The Importance of
                          Alumni Meet.
                        </p>
                        <p>
                          Around 40 students of various Passed out batches attended the function. The
                          students also shared their memories during the meet.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-2/5 mt-4 md:mt-0 md:pl-6">
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <img 
                            src="/assets/images/alumni/light.png" 
                            alt="Lamp Lighting Ceremony" 
                            className="w-full h-auto rounded-lg shadow-sm"
                          />
                          <p className="text-xs text-center text-gray-500 mt-1">Dr. Saji Varghese lighting the lamp</p>
                        </div>
                        <div>
                          <img 
                            src="/assets/images/alumni/group.jpg" 
                            alt="Group Photo" 
                            className="w-full h-auto rounded-lg shadow-sm"
                          />
                          <p className="text-xs text-center text-gray-500 mt-1">Group Photo, Members Attended</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Past Alumni Events Section */}
            <div className="border-t border-gray-200 pt-10">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">Other Department Alumni Events</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mechanical Department */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-amber-700 mb-2">Mechanical Engineering Alumni Meet</h3>
                    <p className="text-gray-500 text-sm mb-4">December 22, 2018</p>
                    
                    <div className="prose prose-sm text-gray-600 mb-4">
                      <p>
                        Department of Mechanical Engineering organized an Alumni Meet on 22nd
                        December 2018. The meeting started at 10 am in the Ashoka Auditorium.
                        Alumni shared their experiences during and after their campus life.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <img 
                        src="/assets/images/alumni/IMG_9463.jpg" 
                        alt="Mechanical Alumni Meet" 
                        className="w-full h-24 object-cover rounded"
                      />
                      <img 
                        src="/assets/images/alumni/IMG_9488.jpg" 
                        alt="Mechanical Alumni Meet" 
                        className="w-full h-24 object-cover rounded"
                      />
                      <img 
                        src="/assets/images/alumni/IMG_9522.jpg" 
                        alt="Mechanical Alumni Meet" 
                        className="w-full h-24 object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Biotechnology Department */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-amber-700 mb-2">Biotechnology Alumni Meet</h3>
                    <p className="text-gray-500 text-sm mb-4">October 20, 2018</p>
                    
                    <div className="prose prose-sm text-gray-600 mb-4">
                      <p>
                        The Alumni Meet 2018 organised by the Department of Biotechnology &
                        Biochemical Engineering was conducted on 20th October 2018. 20 Alumni from various 
                        batches from 2005 to 2013 were present for this meet.
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <img 
                        src="/assets/images/alumni/alumni2.jpg" 
                        alt="Biotechnology Alumni Meet" 
                        className="w-full h-auto max-h-32 object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Civil Department */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-amber-700 mb-2">Civil Engineering Alumni Meet</h3>
                    <p className="text-gray-500 text-sm mb-4">September 22, 2018</p>
                    
                    <div className="prose prose-sm text-gray-600 mb-4">
                      <p>
                        Third Alumni meet conducted by the department was inaugurated by Mr. K K
                        Sivadasan, Treasurer, SBCE. A total of 24 alumni were present for the function.
                        The group decided to create a WhatsApp group and December 22nd was fixed as Alumni Day.
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <img 
                        src="/assets/images/alumni/alumni4.jpg" 
                        alt="Civil Alumni Meet" 
                        className="w-full h-auto max-h-32 object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
                
                {/* CSE Department (second mention) */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-amber-700 mb-2">CSE Department SANGAMAM 2018</h3>
                    <p className="text-gray-500 text-sm mb-4">December 1, 2018</p>
                    
                    <div className="prose prose-sm text-gray-600 mb-4">
                      <p>
                        The Dept. of Computer Science & Engineering had organized an alumni
                        meeting Sangamam 2018 for all batches. 46 alumni from all batches
                        and teachers participated in the function.
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <img 
                        src="/assets/images/alumni/CSE-Alu-768x425.jpg" 
                        alt="CSE Alumni Meet" 
                        className="w-full h-auto max-h-32 object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
     
      
      {/* Footer would go here */}
    </div>
  );
};

export default AlumniReportsPage;