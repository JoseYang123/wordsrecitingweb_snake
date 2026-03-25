import React from "react";
import { Book } from "../types";
import UserProfile from "./UserProfile";
import { useSelector} from "react-redux";
interface HeaderProps {
  books: Book[];
  currentBookIndex: number;
  activeSection: string;
  onSelectBook: (index: number) => void;
  onCreateBook: (name: string) => void;
  onRenameBook: (index: number, newName: string) => void;
  onDeleteBook: (index: number) => void;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  books,
  currentBookIndex,
  activeSection,
  onSelectBook,
  onCreateBook,
  onRenameBook,
  onDeleteBook,
  onNavigate,
}) => {
  //reset user info
  //dispatch(resetUser());

  // const user = useSelector((state: any) => state.userInfo);
  const user = useSelector((state: any) => {
    console.log("🌍 whole state:", state);
    return state.userInfo;
  });

  console.log("UserProfile组件获取的用户数据：", user);

  const handleCreateBook = () => {
    const bookName = prompt("请输入词书名称：");
    if (bookName) {
      onCreateBook(bookName);
    }
  };

  const handleRenameBook = () => {
    const newName = prompt("请输入新的词书名称：");
    if (newName) {
      onRenameBook(currentBookIndex, newName);
    }
  };

  const handleDeleteBook = () => {
    if (confirm("确定要删除这本词书吗？")) {
      onDeleteBook(currentBookIndex);
    }
  };

  return (
    <header>
      <div className="header-main">
        <div className="header-logo">
          <h1>Words Master</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="#flashcards"
                className={activeSection === "flashcards" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("flashcards");
                }}
              >
                闪卡
              </a>
            </li>
            <li>
              <a
                href="#practice"
                className={activeSection === "practice" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("practice");
                }}
              >
                练习
              </a>
            </li>
            <li>
              <a
                href="#word-list"
                className={activeSection === "word-list" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("word-list");
                }}
              >
                单词本
              </a>
            </li>
            <li>
              <a
                href="#settings"
                className={activeSection === "settings" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("settings");
                }}
              >
                设置
              </a>
            </li>
            <li>
              <a
                href="#leaderboard"
                className={activeSection === "leaderboard" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("leaderboard");
                }}
              >
                排行
              </a>
            </li>
          </ul>
        </nav>
        <UserProfile onNavigate={onNavigate} />
      </div>
      <div className="book-bar">
        <div className="book-management">
          <select
            id="book-selector"
            value={currentBookIndex}
            onChange={(e) => onSelectBook(parseInt(e.target.value))}
          >
            {books.map((book, index) => (
              <option key={book.id} value={index}>
                {book.name}
              </option>
            ))}
          </select>
          <button id="create-book-btn" onClick={handleCreateBook}>
            + 创建词书
          </button>
          <button id="rename-book-btn" onClick={handleRenameBook}>
            ✏️ 重命名
          </button>
          <button id="delete-book-btn" onClick={handleDeleteBook}>
            🗑️ 删除
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
