from controller.control import run_robot

while True:
    try:
        run_robot()
    except Exception as e:
        print(f"\x1b[0;31mERROR: {e}\x1b[0m") 
