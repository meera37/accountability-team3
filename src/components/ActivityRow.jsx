import React from 'react'

function ActivityRow({ activity, idx, handleOpenDescriptionModal, descriptionLength, isPublicSection, onAddTemplate, typeCol ,  authUser }) {

    const buttonStyle = {
        marginRight: '8px',
      };

    return (
        <>
            <tr key={idx} className="border-b">
                <td className="px-4 py-2 text-gray-700 text-sm">{activity.name}</td>
                <td className="px-4 py-2 text-gray-700 text-sm">{activity.author}</td>
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
                {
                    typeCol && <td className="px-4 py-2 text-center text-gray-700 text-sm">{activity.type}</td>
                }
                <td className="px-4 py-2 text-center">

                  <div className="flex space-x-10 justify-center">
                        <button
                        style={buttonStyle}
                            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm">
                            View More
                        </button>

                        {
                         authUser &&
                            <button style={buttonStyle} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 text-sm">
                                    Archive
                            </button>
                        }

                        {
                          activity.type === 'public' && isPublicSection && onAddTemplate && !authUser && (
                            <button
                            style={buttonStyle}
                                onClick={() => onAddTemplate(activity) }
                                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 text-sm"
                            >
                                Join
                            </button>
                        )
                        }
                  </div>

                </td>
            </tr>
        </>
    )
}

export default ActivityRow