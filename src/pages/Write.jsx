// pages/Write.jsx
function Write() {
  return (
    <div className="pt-24">
      <h1>새 일기 작성</h1>
      <form>
        <input type="text" placeholder="제목" />
        <textarea placeholder="내용"></textarea>
        <button>저장</button>
      </form>
    </div>
  );
}

export default Write;
