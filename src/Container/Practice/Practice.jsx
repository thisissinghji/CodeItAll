// Practice.js
import React, {useState} from 'react';
import { Navbar } from '../../Components';
import './practice.css';
const Practice = () => {
  const [doneQuestion, setDoneQuestion] = useState(0);
  const totalQuestion = 550;

  const data = [
    { Serial_no: '1', title: 'Subarray with given sum', questionLink: 'https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1?page=1&status[]=solved&sortBy=submissions' },
    { Serial_no: '2', title: 'Missing number in array', questionLink: 'https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1?page=1&status[]=solved&sortBy=submissions' },
    { Serial_no: '3', title: 'Kadanes Algorithm', questionLink: 'https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1?page=1&status[]=solved&sortBy=submissions' },
    { Serial_no: '4', title: 'Two Sum', questionLink: 'https://leetcode.com/problems/two-sum/' },
    { Serial_no: '5', title: 'Minimum number of jumps', questionLink: 'https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1?page=1&status[]=solved&sortBy=submissions' },
    { Serial_no: '6', title: 'Leaders in an array', questionLink: 'https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1?page=1&status[]=solved&sortBy=submissions' },
    { Serial_no: '7', title: 'Palindrome Number', questionLink: 'https://leetcode.com/problems/palindrome-number/' },
    { Serial_no: '8', title: 'Young Physicist', questionLink: 'https://codeforces.com/problemset/problem/69/A' },
    { Serial_no: '9', title: 'Beautiful Matrix', questionLink: 'https://codeforces.com/problemset/problem/263/A' },
    { Serial_no: '10', title: 'Beautiful Year', questionLink: 'https://codeforces.com/problemset/problem/271/A' },
    { Serial_no: '11', title: 'Majority Element', questionLink: 'https://practice.geeksforgeeks.org/problems/majority-element-1587115620/1?page=1&status[]=solved&sortBy=submissions' },
    { Serial_no: '12', title: 'Queue at the School', questionLink: 'https://codeforces.com/problemset/problem/266/B' },
    { Serial_no: '13', title: 'Borze', questionLink: 'https://codeforces.com/problemset/problem/32/B' },
    { Serial_no: '14', title: 'Longest Common Prefix', questionLink: 'https://leetcode.com/problems/longest-common-prefix/' },
    { Serial_no: '15', title: 'Next Permutation', questionLink: 'https://leetcode.com/problems/next-permutation/' },
    { Serial_no: '16', title: 'String Permutations', questionLink: 'https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string-1587115620/1' },
    { Serial_no: '17', title: 'Left View of Binary Tree', questionLink: 'https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1?page=1&sortBy=submissions' },
    { Serial_no: '18', title: 'Drinks', questionLink: 'https://codeforces.com/problemset/problem/200/B' },
    { Serial_no: '19', title: '0 - 1 Knapsack Problem', questionLink: 'https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1?page=2&sortBy=submissions' },
    { Serial_no: '20', title: 'Smallest Positive missing number', questionLink: 'https://practice.geeksforgeeks.org/problems/smallest-positive-missing-number-1587115621/1?page=2&sortBy=submissions' },
  ];

  const handleCheckboxChange = (event, index) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setDoneQuestion((prevDone) => prevDone + 1);
    } else {
      setDoneQuestion((prevDone) => prevDone - 1);
    }
  };
  return (
    <div>
      <Navbar/>
      <div className='section__padding code_practice'>
      <h2 className='gradient__text code_heading'>Practice</h2>
      <table className="code__table">
        <thead>
          <tr className='code__table_content'>
            <th className='code__table_heading'>Serial_no</th>
            <th className='code__table_heading'>Title</th>
            <th className='code__table_heading'>Question</th>
            <th className='code__table_heading'>Done <span>({doneQuestion}/{totalQuestion})</span></th>
          </tr>
        </thead>
        <tbody className='code__table_data'>
          {data.map((item, index) => (
            <tr key={item.day}>
              <td >{item.Serial_no}</td>
              <td>
                {item.title}
              </td>
              <td className='code__table_link'>
                <a href={item.questionLink} target='_blank' rel='noopener noreferrer'>
                  Link to question
                </a>
              </td>
              <td>
              <input
                  type='checkbox'
                  id={`checkbox-${index}`}
                  className='checkbox-input' // Add class name for the checkbox
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
                <label htmlFor={`checkbox-${index}`} className='checkbox-label'></label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Practice;

