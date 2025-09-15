import todoModel from "../models/todosModel.js";
import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";

/* --- --- --- --- -CREATE- --- --- --- --- */
const createOne = async (req, res, next) => {
    const { title, status } = req.body;
    const userId = req.id;

    const newTodo = await todoModel.create({ title, status, userId });

    res.status(201).json({
        status: "success",
        data: newTodo,
    });
};

/* --- --- --- --- --READ ALL-- --- --- --- --- */
const readAll = async (req, res, next) => {
    const todos = await todoModel.find({ userId: req.id });

    res.status(200).json({
        status: "success",
        results: todos.length,
        data: todos,
    });
};

/* --- --- --- --- --READ ONE-- --- --- --- --- */
const readOne = async (req, res, next) => {
    const { id } = req.params;
    const todo = await todoModel.findById(id);

    if (!todo) return next(new AppError("❌ Todo doesn't exist", 404));

    res.status(200).json({
        status: "success",
        data: todo,
    });
};

/* --- --- --- --- -UPDATE- --- --- --- --- */
const updateOne = async (req, res, next) => {
    const { id } = req.params;
    const { title, status } = req.body;

    if (!title && !status)
        return next(
            new AppError("⚠️ You must provide title or status to update", 400)
        );

    const updateFields = {};
    if (title) updateFields.title = title;
    if (status) {
        const statusList = ["to-do", "in progress", "done"];
        if (!statusList.includes(status.toLowerCase()))
            return next(
                new AppError(`❌ Status must be one of [${statusList}]`, 400)
            );
        updateFields.status = status.toLowerCase();
    }

    const updated = await todoModel.findByIdAndUpdate(id, updateFields, {
        new: true,
        runValidators: true,
    });

    if (!updated) return next(new AppError("❌ Todo not found", 404));

    res.status(200).json({
        status: "success",
        data: updated,
    });
};

/* --- --- --- --- -DELETE- --- --- --- --- */
const deleteOne = async (req, res, next) => {
    const { id } = req.params;
    const deleted = await todoModel.findByIdAndDelete(id);

    if (!deleted) return next(new AppError("❌ Todo not found", 404));

    res.status(204).json({
        status: "success",
        deleted: deleted,
    });
};

/* --- --- --- --- --- OPERATIONS --- --- --- --- --- */
export const createTodo = catchAsync(createOne);
export const readAllTodos = catchAsync(readAll);
export const readTodo = catchAsync(readOne);
export const updateTodo = catchAsync(updateOne);
export const deleteTodo = catchAsync(deleteOne);
/* --- --- --- --- --- ---------- --- --- --- --- --- */