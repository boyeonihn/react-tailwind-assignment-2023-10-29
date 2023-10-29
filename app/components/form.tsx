export default function Form() {
  return (
    <section>
      <h1 className="font-bold text-6xl">Job Application Form</h1>
      <form>
        <fieldset>
          <legend>What department do you want to work for?</legend>
          <div>
            <input type="radio" name="department" id="sales" value="sales" />
            <label htmlFor="sales">Sales</label>
          </div>
          <div>
            <input
              type="radio"
              name="department"
              id="marketing"
              value="marketing"
            />
            <label htmlFor="marketing">Marketing</label>
          </div>
          <div>
            <input
              type="radio"
              name="department"
              id="accounting"
              value="accounting"
            />
            <label htmlFor="accounting">Accounting</label>
          </div>
          <div>
            <input
              type="radio"
              name="department"
              id="customer"
              value="customer"
            />
            <label htmlFor="customer">Customer Service</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Why do you want to join this company?</legend>
          <div>
            <input type="radio" name="reason" value="money" id="money" />
            <label htmlFor="money">I want money!</label>
          </div>
          <div>
            <input type="radio" name="reason" value="love" id="love" />
            <label htmlFor="love">I love this company</label>
          </div>
          <div>
            <input type="radio" name="reason" value="learn" id="learn" />
            <label htmlFor="learn">I want to learn</label>
          </div>
          <div>
            <input type="radio" name="reason" value="noReason" id="noReason" />
            <label htmlFor="noReason">I don't know why</label>
          </div>
        </fieldset>
        <label htmlFor="salary">Salary</label>
        <select name="salary" id="salary">
          <option value="50k">50k</option>
          <option value="100k">100k</option>
          <option value="150k">150k</option>
          <option value="200k">200k</option>
        </select>
        <label htmlFor="intro">Introduce yourself</label>
        <input type="text" id="intro" />
        <label htmlFor="dream">Tell us what your dreams are</label>
        <textarea id="dream" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <button>Give me this job</button>
      </form>
    </section>
  );
}
