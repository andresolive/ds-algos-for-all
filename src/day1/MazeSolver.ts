const dir = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
]


// function to take a step
function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  // there's 4 base cases
  // 1. if we are at the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

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
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // 2. recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (walk(
      maze,
      wall,
      {
        x: curr.x + x,
        y: curr.y + y
      },
      end,
      seen,
      path
    )) return true;
  }

  // 3. post
  path.pop();

  return false;
}


export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}