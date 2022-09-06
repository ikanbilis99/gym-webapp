import cv2
from cv2 import VideoWriter
import mediapipe as mp
import numpy as np
import pose_module as pm
import Squat as sq
import matplotlib.pyplot as plt

def squat_counter(video_path,exercise,side,unique_name):
    print("running squat_counter.py")
    cap = cv2.VideoCapture(video_path)
    detector = pm.poseDetector()
    count = 0
    direction = 0
    form = 0
    feedback = "Fix Form"
    frame_width = int(cap.get(3))
    frame_height = int(cap.get(4))

    frame_count = 1
    angles = []
    
    size = (frame_width, frame_height)
    
    # hip & knee angles based on user selection of side
    hip_angles = sq.angle_ref[side]['hip']
    # knee_angles = sq.angle_ref[side]['knee']

    # min depth based on user selection of squat type
    min_depth = sq.sq_type[exercise][0]
    max_depth = sq.sq_type[exercise][1]
    
    # Below VideoWriter object will create
    # a frame of above defined The output 
    # is stored in 'filename.avi' file.
    output_name = unique_name + "_output.mp4"
    out = cv2.VideoWriter(output_name, 
                         cv2.VideoWriter_fourcc(*'h264'),
                         25, size)
    
    while True:
        ret, img = cap.read() #640 x 480
        if ret == True:
            #Determine dimensions of video - Help with creation of box in Line 43
            #width  = cap.get(3)  # float `width`
            #height = cap.get(4)  # float `height`
            # print(width, height)
            frame = img
            img = detector.findPose(frame, False)
            lmList = detector.findPosition(img, False)
            
            if len(lmList) != 0:
                hip = detector.findAngle(img, hip_angles[0], hip_angles[1], hip_angles[2] )
                # knee = detector.findAngle(img, knee_angles[0], knee_angles[1], knee_angles[2] )

                angles.append(hip)

                #Percentage of success of squat
                per = np.interp(hip, (min_depth, 130), (0, 100))

                # Bar to show squat progress
                bar = np.interp(hip, (min_depth, 130), (380, 50))

                reverse_per = np.interp(hip, (0, max_depth), (0, 100))
                reverse_bar = np.interp(hip, (0, max_depth), (500, 380))

                # Bar to show squat progress
                #Check to ensure right form before starting the program
                if hip > 130 :     # and knee > 160
                    form = 1   

                #Check for full range of motion for the squat
                if form == 1:
                    if per == 0:
                        
                        if hip < max_depth:
                            feedback = "Too low!"
                
                        if max_depth < hip < min_depth:
                            feedback = "Just nice"

                        
                        
                        if direction == 0:
                            count += 0.5
                            direction = 1

                    if per == 100:
                        if hip > 120 :         # and knee > 140
                            feedback = "Down"
                        if direction == 1:
                            count += 0.5
                            direction = 0    

                    if 100 > per > 0:
                        feedback = "Go Lower"

                    #Draw Bar
                    if form == 1:
                        cv2.rectangle(frame, (600, 50), (620, 380), (0, 255, 0), 3)
                        cv2.rectangle(frame, (600, int(bar)), (620, 380), (0, 255, 0), cv2.FILLED)
                        cv2.rectangle(frame, (630, 400), (750, 450), (0, 0, 0), cv2.FILLED)
                        cv2.putText(frame, f'{int(per)}%', (630, 430), cv2.FONT_HERSHEY_PLAIN, 2,
                                    (0, 235, 0), 2)

                        
                        cv2.rectangle(frame, (600, 380), (620, 500), (0, 0, 255), 3)
                        cv2.rectangle(frame, (600, int(reverse_bar)), (620, 500), (0, 0, 255), cv2.FILLED)
                        cv2.rectangle(frame, (630, 450), (750, 500), (0, 0, 0), cv2.FILLED)
                        cv2.putText(frame, f'{int(100-reverse_per)}%', (630, 480), cv2.FONT_HERSHEY_PLAIN, 2,
                                        (0, 0, 255), 2)

                    #Squat counter
                    cv2.rectangle(frame, (0, 380), (100, 480), (0, 0, 0), cv2.FILLED)
                    cv2.putText(frame, str(int(count)), (25, 455), cv2.FONT_HERSHEY_PLAIN, 5,
                                (0, 255, 0), 5)
                    
                    #Feedback 
                    cv2.rectangle(frame, (520, 0), (750, 40), (0, 0, 0), cv2.FILLED)
                    cv2.putText(frame, feedback, (520, 40 ), cv2.FONT_HERSHEY_PLAIN, 2,
                                (0, 255, 0), 2)
     
       
                
            cv2.imshow('Squat counteRight', img)
            out.write(frame)
            #if cv2.waitKey(10) & 0xFF == ord('q'):
                #break
        else:
            break
    
    cap.release()
    out.release()
    cv2.destroyAllWindows()

    index = [i for i in range(len(angles))]
    angle_list = [round(i) for i in angles]

    plt.plot(index, angle_list)
    plt.title('Rate of squat')
    plt.xlabel('Interval')
    plt.ylabel('Angle')
    plt.show()
    
#test: place deep.mp4 in api folder and run script
#squat_counter("api/deep.mp4","L")
