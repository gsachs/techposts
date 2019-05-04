import random

def get_random_item(array):
	return random.choice(array)


def pick_a_marble(bag):
	#print(bag)
	marble = get_random_item(bag)
	bag.append(marble)
	return marble


for j in range(100):
	print('Iteration number: ' + str(j+1))
	bag = ['red','white','green']
	for i in range(100):
		picked = pick_a_marble(bag)
		if i == 0: 
			print('Picked: ' + picked)

	print('Red: ' + str(bag.count('red')))
	print('White: ' + str(bag.count('white')))
	print('Green: ' + str(bag.count('green')))

	print('\n')
