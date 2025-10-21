// import { useState } from "react";

// export default function AddRecipe() {
//   const [recipeForm, setRecipeForm] = useState({
//     recipeName: "",
//     description: "",
//     cookingTime: "",
//   });

//   const [recipeFormErrors, setRecipeFormErrors] = useState({
//     recipeName: "",
//     description: "",
//     cookingTime: "",
//   });

//   const handleFormChange = (e) => {
//     // console.log(e.target.value)
//     if (e.target.id === "recipeName") {
//       setRecipeForm({
//         ...recipeForm,
//         recipeName: e.target.value,
//       });
//       setRecipeFormErrors({
//         ...recipeFormErrors,
//         recipeName:
//           e.target.value.length === 0
//             ? "This field is required"
//             : e.target.value.length < 3
//             ? "Min length is 3"
//             : null,
//       });
//     }

//     if (e.target.id === "description") {
//       setRecipeForm({
//         ...recipeForm,
//         description: e.target.value,
//       });

//       setRecipeFormErrors({
//         ...recipeFormErrors,
//         description:
//           e.target.value.length === 0
//             ? "Required"
//             : e.target.value.length > 200
//             ? "Max is 200 character"
//             : null,
//       });
//     }

//     if (e.target.id === "cookingTime") {
//       setRecipeForm({
//         ...recipeForm,
//         cookingTime: e.target.value,
//       });
//     }

//     // setRecipeForm({
//     //   ...recipeForm,
//     //   [e.target.id]: e.target.value,
//     // });
//   };

//   const handleSubmitForm = (e) => {
//     e.preventDefault();
//     console.log(recipeForm);
//     // API CALLING -> recipeFOrm as body
//   };

//   return (
//     <>
//       <h2>Add Recipe Form</h2>
//       <hr />
//       <form onSubmit={handleSubmitForm}>
//         <div className="form-group mb-3">
//           <label htmlFor="recipeName">Recipe Name</label>
//           <input
//             type="text"
//             className={`form-control ${
//               recipeFormErrors.recipeName ? "border-danger" : ""
//             }`}
//             id="recipeName"
//             aria-describedby="nameHelp"
//             placeholder="Enter name"
//             value={recipeForm.recipeName}
//             // onChange={(e) => setRecipeForm({
//             //   ...recipeForm,
//             //   recipeName: e.target.value
//             // })}
//             onChange={handleFormChange}
//           />
//           {recipeFormErrors.recipeName && (
//             <small id="emailHelp" className="form-text text-danger">
//               {recipeFormErrors.recipeName}
//             </small>
//           )}
//         </div>
//         <div className="form-group mb-3">
//           <label htmlFor="description">Description</label>
//           <textarea
//             className="form-control"
//             id="description"
//             placeholder="Description"
//             rows={5}
//             value={recipeForm.description}
//             onChange={handleFormChange}
//           />
//            {recipeFormErrors.description && (
//             <small id="emailHelp" className="form-text text-danger">
//               {recipeFormErrors.description}
//             </small>
//           )}
//         </div>
//         <div className="form-group mb-3">
//           <label htmlFor="cookingTime">Cooking time</label>
//           <input
//             type="number"
//             className="form-control"
//             id="cookingTime"
//             placeholder="Time in mins"
//             value={recipeForm.cookingTime}
//             onChange={handleFormChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// }


import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddRecipe = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));

    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddRecipe;
