class Node {
  children: any;
  isLeaf: boolean;

  constructor() {
    this.children = new Map<string, string>();
    this.isLeaf = false;
  }
}

class Trie {
  root: Node;
  suggestions: string[];

  constructor() {
    this.root = new Node();
    this.suggestions = [];
  }

  public clearWordList() {
    this.suggestions = [];
  }

  public formTrie(words: string[]): void {
    for (const word of words) {
      this.insert(word);
    }
  }

  public insert(word: string): void {
    let node = this.root;

    for (const char of word) {
      if (!node.children.get(char)) {
        node.children.set(char, new Node());
      }

      node = node.children.get(char);
    }

    node.isLeaf = true;
  }

  public makeSuggestionList(node: Node, word: string): void {
    if (this.suggestions.length === 5) return;

    if (node.isLeaf) {
      this.suggestions.push(word);
    }

    for (const [char, n] of node.children) {
      this.makeSuggestionList(n, word + char);
    }
  }

  public getSuggestions(key: string): string[] {
    this.clearWordList();

    let node: Node = this.root;
    let notFound: boolean = false;
    let tempWord: string = "";

    for (const char of key) {
      if (!node.children.get(char)) {
        notFound = true;
        break;
      }

      tempWord += char;
      node = node.children.get(char);
    }

    // No string found with this prefix
    if (notFound) {
      return [];
    } else if (node.isLeaf && node.children.size === 0) {
      // No other strings found with this prefix
      return [];
    }

    this.makeSuggestionList(node, tempWord);

    return this.suggestions;
  }
}

const WORDS = [
  "test",
  "te",
  "tetera",
  "terremoto",
  "techo",
  "tenebroso",
  "tarea",
  "tula",
  "tinta",
  "techno",
  "techumbre",
  "world",
  "wolf",
];

const trie = new Trie();
trie.formTrie(WORDS);

export default trie;
