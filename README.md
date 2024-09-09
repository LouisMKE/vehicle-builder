# The Vehicle-Builder Command Line Application

The "Vehicle Builder" command line application allows users to enter the data of a vehicle (Car, Truck, or Motorbike) and recall upon that data at a later time.

# Vehicle-Builder Guide
Upon running the application, users will be prompted with the question "Would you like to create a new vehicle or use an existing vehicle?"

    If users have previously submitted vehicles to the app, then a dropdown list will appear with the previously saved vehicles for the user to select from. 
    If the user wishes to create a new vehicle, they must simply select the option "Create New Vehicle", after which, they will be prompted specific questions GEARED towards the type of vehicle they wish to create.

        The questions that will be prompted are as follows in this order:
                Car:
                    Car make
                    Car Model
                    Car Year
                    Fuel Type
                    Number of Doors
                Truck:
                    Truck Make
                    Truck Model
                    Truck Year
                    Load Capacity (in kg)
                    Towing Capacity (in kg)
                    Number of Axels
                Motorbike:
                    Motorbike Make
                    Motorbike Model
                    Motorbike Year
                    Engine Type
                    Does the motorbike have a sidecar?
                    Top Speed
    Note: After the final truck prompt, an option will appear to "Load Cargo". This is a completly optional prompt that is only necessary for those who plan on loading cargo.
        -If a user wants to sleect that option they will be prompted with "How much cargo do you want to load (in kg)?"

After the final prompt of every vehicle type there will be the option to display the data the user has entered in a clear organized fashion, if you wish to do this click on the "Display Info" prompt.
Finally, if a user wishes to comb through the list/data of vehicles previously entered they will select "Use Existing Vehicle" when prompted.

Users can exit any time with the "Exit" button displayed at the bottom of the prompt list.

# Future Improvments
This version of the app only supports those who want to collect data on Cars, Trucks, and motorbikes. Extending the range of vehicle types would be necessary in future updates.
Additionaly the prompts for each vehicle type are limited. More prompts, as well as a place for users to leave self-written notes for each vehicle is an improvment that can be made.

# Sources
Note: This project was completed using the help of Xpert Learning Assistant. Specifically in debugging and applying functions that we haven't previously diuscussed in class such as the "switch" and "case" functions.

# Video Link
Link to Vehicle-Builder Demo: <https://drive.google.com/file/d/1HrlCvSqu2y0S6UsY2q-8OEDuXxLBB4fp/view>