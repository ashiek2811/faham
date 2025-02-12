import turtle

t = turtle.Turtle()
t.screen.bgcolor("black")
t.pensize(3)
t.color("brown")
t.left(90)
t.backward(80)
t.speed(0)
t.shape("triangle")

def tree(i):
    if  i< 13:
        return
    else:
        t.forward(i)
        t.color("hotpink")
        t.circle(4)  # Draw a small circle at the end of the branch
        t.color("brown")  # Change color back to brown for the branch
        t.left(30)
        tree(2 * i / 3)  # Recursive call for the left branch
        t.right(60)
        tree(2 * i / 3)  # Recursive call for the right branch
        t.left(30)  # Correcting the left turn back
        t.backward(i)  # Move back to the previous position

tree(90)  # Start the tree with an initial length of 90
turtle.done()
