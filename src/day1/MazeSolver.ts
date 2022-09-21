
// function to take a step
function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][]): boolean {
  // there's 4 base cases
  // 1. if we are at the end
  if (curr.x === end.x && curr.y === end.y) return true;

  // 2. if we are off the board
  // maze[0] is the first row of the board --> maze[0].length is the number of columns
  // each element in maze represents a row --> maze.length is the number of rows
  // maze[0].length === maze.length because the board is squared
  if (curr.x < 0 || curr.x >= maze[0].length ||
    curr.y < 0 || curr.y >= maze.length) return false;

  // 3. if we are at a wall
  if (maze[curr.y][curr.x] === wall) return false;

  // 4. if we have previously visited this spot
  if (seen[curr.y][curr.x]) return false;

  // ----
  // The 3 steps in a recursive call:
  // 1. pre
  // 2. recurse
  // 3. post


}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {


}