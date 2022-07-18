import cv2
from cv2 import VideoWriter
import mediapipe as mp
import numpy as np
import pose_module as pm

def squat_counter(video_path,side,unique_name):
    print("running squat_counter.py")
    cap = cv2.VideoCapture(video_path)
    detector = pm.poseDetector()
    count = 0
    direction = 0
    form = 0
    feedback = "Fix Form"
    frame_width = int(cap.get(3))
    frame_height = int(cap.get(4))
    
    size = (frame_width, frame_height)
    
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
            # print(lmList)
            if len(lmList) != 0:
                if side == 'Left':
                    left_knee = detector.findAngle(img, 23, 25, 27)
                    left_hip = detector.findAngle(img, 11, 23,25)
                if side == 'Right':
                    right_knee = detector.findAngle(img, 24, 26, 28)
                    right_hip = detector.findAngle(img, 12, 24,26)           
                #Percentage of success of squat
                if side == 'Left':
                    per = np.interp(left_hip, (45, 130), (0, 100))
                    bar = np.interp(left_hip, (45, 130), (380, 50))
                    # Bar to show squat progress
                    #Check to ensure right form before starting the program
                    if left_hip > 130 and left_knee > 160:
                        form = 1   
                    #Check for full range of motion for the squat
                    if form == 1:
                        if per == 0:
                            if left_hip < 45 and left_knee < 70:
                                feedback = "Up"
                                if direction == 0:
                                    count += 0.5
                                    direction = 1
                        else:
                            feedback = "Go Lower"
        
                        if per == 100:
                            if left_hip > 120 and left_knee > 140:
                                feedback = "Down"
                                if direction == 1:
                                    count += 0.5
                                    direction = 0

                        else:
                            feedback = "Fix Form"
                                    # form = 0
                    #Draw Bar
                    if form == 1:
                        cv2.rectangle(frame, (580, 50), (600, 380), (0, 255, 0), 3)
                        cv2.rectangle(frame, (580, int(bar)), (600, 380), (0, 255, 0), cv2.FILLED)
                        cv2.putText(frame, f'{int(per)}%', (565, 430), cv2.FONT_HERSHEY_PLAIN, 2,
                                    (255, 0, 0), 2)

                    #Squat counter
                    cv2.rectangle(frame, (0, 380), (100, 480), (0, 255, 0), cv2.FILLED)
                    cv2.putText(frame, str(int(count)), (25, 455), cv2.FONT_HERSHEY_PLAIN, 5,
                                (255, 0, 0), 5)
                    
                    #Feedback 
                    cv2.rectangle(frame, (500, 0), (640, 40), (255, 255, 255), cv2.FILLED)
                    cv2.putText(frame, feedback, (500, 40 ), cv2.FONT_HERSHEY_PLAIN, 2,
                                (0, 255, 0), 2)


                        
                if side == 'Right':
                    per = np.interp(right_hip, (45, 130), (0, 100))
                    bar = np.interp(right_hip, (45, 130), (380, 50))
                    # Bar to show squat progress


                    #Check to ensure right form before starting the program
                    if right_hip > 130 and right_knee > 160:
                        form = 1
                    
                
                    #Check for full range of motion for the squat
                    if form == 1:
                        if per == 0:
                        
                            if right_hip < 45 and right_knee < 70:
                                feedback = "Up"
                                if direction == 0:
                                    count += 0.5
                                    direction = 1

                        else:
                            feedback = "Go Lower"
                                
                        if per == 100:
                            if right_hip > 120 and right_knee > 140:
                                feedback = "Down"
                                if direction == 1:
                                    count += 0.5
                                    direction = 0

                        else:
                            feedback = "Fix Form"
                                    # form = 0            

                
                    #Draw Bar
                    if form == 1:
                        cv2.rectangle(frame, (580, 50), (600, 380), (0, 255, 0), 3)
                        cv2.rectangle(frame, (580, int(bar)), (600, 380), (0, 255, 0), cv2.FILLED)
                        cv2.putText(frame, f'{int(per)}%', (565, 430), cv2.FONT_HERSHEY_PLAIN, 2,
                                    (255, 0, 0), 2)


                    #Pushup counter
                    cv2.rectangle(frame, (0, 380), (100, 480), (0, 255, 0), cv2.FILLED)
                    cv2.putText(frame, str(int(count)), (25, 455), cv2.FONT_HERSHEY_PLAIN, 5,
                                (255, 0, 0), 5)
                    
                    #Feedback 
                    cv2.rectangle(frame, (500, 0), (640, 40), (255, 255, 255), cv2.FILLED)
                    cv2.putText(frame, feedback, (500, 40 ), cv2.FONT_HERSHEY_PLAIN, 2,
                                (0, 255, 0), 2)
                
            #cv2.imshow('Squat counteRight', img)
            out.write(frame)
            #if cv2.waitKey(10) & 0xFF == ord('q'):
                #break
        else:
            break
    cap.release()
    out.release()
    cv2.destroyAllWindows()
#test: place deep.mp4 in api folder and run script
#squat_counter("api/deep.mp4","L")
