import React, { useState } from 'react'
import DeleteConfirmModal from './DeleteConfirmModal';

function ActivityRow({ activity, idx, handleOpenDescriptionModal, descriptionLength, isPublicSection, onAddTemplate }) {
 
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
   
    const buttonStyle = {
        marginRight: '8px', 
      };
   
      const handleDeleteClick = () => {
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };
    
 
    return (
        <>
            <tr key={idx} className="border-b">
                <td className="px-4 py-2 text-gray-700 text-sm">{activity.name}</td>
                <td className="px-4 py-2 text-gray-700 text-sm">by{activity.author}</td>
                <td className="px-4 py-2 text-center">
                    <button onClick={() => handleOpenDescriptionModal(activity.description)} className="text-blue-500 hover:underline text-sm">

                        {activity.description ? (
                            <>
                                {activity.description.length > descriptionLength ? `${activity.description.slice(0, descriptionLength)}...` : activity.description}
                            </>
                        ) : (
                            ''
                        )}
                    </button>
                </td>
                <td className="px-4 py-2 text-center text-gray-700 text-sm">{activity.type}</td>
                <td className="px-4 py-2 text-center">

                  <span className="flex space-x-10 justify-center">
                        <button
                        style={buttonStyle}
                            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm">
                            View More
                        </button>
                        <button onClick={handleDeleteClick} style={buttonStyle} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm">
                            Delete
                        </button>
    
                        {activity.type === 'public' && isPublicSection && onAddTemplate && (
                            <button
                            style={buttonStyle}
                                onClick={() => onAddTemplate(activity)}
                                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 text-sm"
                            >
                                Add Template
                            </button>
                        )}
                  </span>

                </td>
            </tr>
            {isDeleteModalOpen && (
                <DeleteConfirmModal
                    show={isDeleteModalOpen}
                    onClose={handleCloseDeleteModal}
                   // onConfirmDelete={handleConfirmDelete}
                />
            )}
        </>
    )
}

export default ActivityRow

