import { DragIndicator as DragIndicatorIcon } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { UserContext } from "../../context/UserContext";

const EditableList = ({ type }) => {
    const { userLinks, handleLinks } = useContext(UserContext);

    const handleOnDragEnd = ({ result, key }) => {
        if (!result.destination) return;

        const items = Array.from(userLinks[key]);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        handleLinks({ list: items, key });
    };

    return (
        <DragDropContext
            onDragEnd={(result) =>
                handleOnDragEnd({
                    result,
                    key: type,
                })
            }
        >
            <Droppable droppableId="characters">
                {(provided) => (
                    <Box
                        className="list_container"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {userLinks[type].map(({ _id, url, title }, index) => {
                            return (
                                <Draggable
                                    key={`${_id}`}
                                    draggableId={`${_id}`}
                                    index={index}
                                >
                                    {(provided) => (
                                        <Paper
                                            variant="outlined"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                my: 2,
                                            }}
                                            className="list_item"
                                        >
                                            <IconButton
                                                size="large"
                                                edge="start"
                                                color="inherit"
                                                aria-label="drag-list"
                                                sx={{
                                                    mx: 0.5,
                                                    my: 0.5,
                                                }}
                                                {...provided.dragHandleProps}
                                            >
                                                <DragIndicatorIcon />
                                            </IconButton>

                                            <Box
                                                sx={{
                                                    flex: 1,
                                                    py: 2,
                                                }}
                                            >
                                                <Typography>{title}</Typography>
                                            </Box>
                                        </Paper>
                                    )}
                                </Draggable>
                            );
                        })}

                        {provided.placeholder}
                    </Box>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default EditableList;
