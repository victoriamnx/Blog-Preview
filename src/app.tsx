function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#F4D04E] overflow-auto">
      <div id="main" className="rounded-[1.25rem] p-6	bg-white border border-black m-[10px]">
        <img
          src="./src/components/illustration.svg"
          alt="Illustration"
          className="mb-[1.5rem] w-full"
        />
        <div className="flex flex-col gap-3">
          <div className="flex w-[4.56rem] items-center justify-center rounded py-[0.25rem] px-[0.75rem] bg-[#F4D04E]">
            <h1 className="font-figtree font-extrabold text-xs ">Learning</h1>
          </div>
          <div>
            <h1 className="font-figtree font-semibold text-xs leading-[1.125rem]">
              Published 21 Dec 2023
            </h1>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-figtree font-extrabold text-[1.25rem] hover:text-[#F4D04E] min-[700px]:text-[1.5rem] cursor-pointer">
              HTML & CSS foundations
            </h1>
            <p className="font-figtree font-semibold text-sm text-[#7F7F7F] min-[700px]:text-[1rem]">
              These languages are the backbone of every <br></br>website,
              defining structure, content, and<br></br> presentation.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-[0.7rem]">
            <div id="icon">
              <img src="./src/components/userpic.png" alt="User Icon" />
            </div>
            <h1 className="font-figtree font-extrabold text-sm leading-[1.3125rem]">Greg Hooper</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
