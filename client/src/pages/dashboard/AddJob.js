import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow, Alert, FormRowSelect } from '../../components';
import { useAppContext } from '../../context/appContext';

const AddJob = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    handleChange,
    clearValues,
    createJob,
    editJob
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob()
      return
    }

    createJob()
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };
  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}

        <div className='form-center'>
          <FormRow
            type='text'
            name='position'
            value={position}
            onChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='company'
            value={company}
            onChange={handleJobInput}
          />
          <FormRow
            type='text'
            labelText='location'
            name='jobLocation'
            value={jobLocation}
            onChange={handleJobInput}
          />
          <FormRowSelect
            name='status'
            value={status}
            onChange={handleJobInput}
            list={statusOptions}
          />
          <FormRowSelect
            name='jobType'
            labelText='job type'
            value={jobType}
            onChange={handleJobInput}
            list={jobTypeOptions}
          />
          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              disabled={isLoading}
              onClick={handleSubmit}
            >
              submit
            </button>
            <button className="btn btn-block clear-btn" onClick={(e) => {
              e.preventDefault()
              clearValues()
            }}>
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
