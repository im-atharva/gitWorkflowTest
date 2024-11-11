def process_data(data):
    # Step 1: Remove duplicates
    unique_data = set(data)

    # Step 2: Sort the data
    unique_data = sorted(unique_data, reverse=True)

    # Step 3: Calculate the sum of the sorted data
    total_sum = sum(unique_data)

    # Step 4: Find the average
    average = total_sum / len(unique_data) if len(unique_data) > 0 else 0

    # Step 5: Check for any negative values and replace with zero
    unique_data = [num if num >= 0 else 0 for num in unique_data]

    # Step 6: Convert list to string (without redundancy)
    str_data = ','.join(map(str, unique_data))

    # Final Step: Return results
    return unique_data, total_sum, average, str_data