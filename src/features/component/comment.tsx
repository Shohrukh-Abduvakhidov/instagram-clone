import React, { useState } from 'react'
import { Smile } from 'lucide-react'
import {
	useAddCommentMutation,
	useGetPostsQuery,
} from '../../entities/post/postApi'
import { Popover, PopoverTrigger, PopoverContent } from '@/shared/ui/popover'

interface CommentProps {
	postId: string
	initialComments: string[]
}

const Comment: React.FC<CommentProps> = ({ postId, initialComments }) => {
	const [commentText, setCommentText] = useState('')
	const [addComment] = useAddCommentMutation()
	const { refetch } = useGetPostsQuery(undefined)
	const [comments, setComments] = useState<string[]>(initialComments || [])

	const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCommentText(e.target.value)
	}

	const handleAddComment = async () => {
		if (commentText.trim()) {
			try {
				const comment = {
					postId,
					comment: commentText,
				}
				await addComment(comment)
				refetch()
				setComments(prev => [...prev, commentText])
				setCommentText('')
			} catch (err) {
				console.error('Error adding comment:', err)
			}
		}
	}

	const emojis = [
		'😀',
		'😂',
		'😎',
		'😍',
		'🤔',
		'😜',
		'😇',
		'😢',
		'😡',
		'😏',
		'😊',
		'😆',
		'😅',
		'😳',
		'😱',
		'🥳',
		'🤩',
		'😜',
		'😴',
		'🤯',
		'😈',
		'👻',
		'💀',
		'👹',
		'🧛‍♂️',
		'🧟‍♂️',
		'👀',
		'🦸‍♀️',
		'💪',
		'✌️',
		'🤞',
		'🙏',
		'🦾',
		'🤖',
		'👽',
		'🛸',
		'🚀',
		'🛶',
		'⛷️',
		'🏂',
		'🏌️‍♂️',
		'⛸️',
		'🏇',
		'🚴‍♀️',
		'🚶‍♂️',
		'🤸‍♀️',
		'🏋️‍♂️',
		'🏆',
		'🥇',
		'🥈',
		'🥉',
		'🏅',
		'⚽',
		'🏀',
		'🏈',
		'⚾',
		'🎾',
		'🏐',
		'🏉',
		'🎱',
		'🏓',
		'🏸',
		'🥏',
		'🏒',
		'🏑',
		'🥍',
		'🏹',
		'🎯',
		'🎮',
		'🕹️',
		'🎲',
		'🎰',
		'🎭',
		'🎤',
		'🎧',
		'🎼',
		'🎷',
		'🎺',
		'🎸',
		'🎻',
		'🥁',
		'🎬',
		'📸',
		'📷',
		'📹',
		'📺',
		'📞',
		'📱',
		'📲',
		'💻',
		'🖥️',
		'🖨️',
		'⌨️',
		'🖱️',
		'🖲️',
		'💡',
		'🔦',
		'🏮',
		'🎇',
		'🎆',
		'🧨',
		'🎈',
		'🎉',
		'🎊',
		'🎁',
		'🎗️',
		'🏷️',
		'💌',
		'📨',
		'📩',
		'📪',
		'📫',
		'📬',
		'📯',
		'📜',
		'📃',
		'📄',
		'📰',
		'🗞️',
		'📑',
		'🔖',
		'🏷️',
		'📎',
		'🖇️',
		'📐',
		'📏',
		'📝',
		'✏️',
		'🖊️',
		'🖋️',
		'🖌️',
		'🖍️',
		'🗒️',
		'📓',
		'📔',
		'📕',
		'📖',
		'📗',
		'📘',
		'📙',
		'📚',
		'📒',
		'📃',
		'📄',
		'🗂️',
		'📑',
		'🗃️',
		'🗄️',
		'📦',
		'📬',
		'📥',
		'📤',
		'📪',
		'📫',
		'📬',
		'📧',
		'📨',
		'💼',
		'👜',
		'👝',
		'🍏',
		'🍎',
		'🍐',
		'🍊',
		'🍋',
		'🍌',
		'🍉',
		'🍇',
		'🍓',
		'🍈',
		'🍒',
		'🍑',
		'🍍',
		'🥥',
		'🥝',
		'🍅',
		'🍆',
		'🥒',
		'🌶️',
		'🥬',
		'🥦',
		'🍄',
		'🌰',
		'🥜',
		'🍪',
		'🍩',
		'🍫',
		'🍬',
		'🍭',
		'🍮',
		'🍯',
		'🥧',
		'🍰',
		'🍓',
		'🍪',
		'🍿',
		'🥛',
		'🍹',
		'🍸',
		'🍷',
		'🥂',
		'🍺',
		'🍻',
		'🥃',
		'🍽️',
		'🍴',
		'🥄',
		'🥣',
		'🍚',
		'🍘',
		'🍜',
		'🍲',
		'🍛',
		'🍝',
		'🍠',
		'🥒',
		'🥔',
		'🍠',
		'🥧',
		'🍢',
		'🍙',
		'🥟',
		'🍱',
		'🍛',
		'🍗',
		'🍖',
		'🥩',
		'🍤',
		'🥓',
		'🍕',
		'🌮',
		'🌯',
		'🍔',
		'🍟',
		'🍣',
		'🍤',
		'🥪',
		'🥗',
		'🍛',
		'🍚',
		'🍜',
		'🥠',
		'🍚',
		'🍘',
		'🍡',
		'🍦',
	]

	return (
		<div className='flex flex-col'>
			<div className='flex flex-col space-y-2'>
			<div className='space-y-2 mt-4'>
					{comments.map((comment, index) => (
						<div key={index} className='text-sm text-white'>
							{comment}
						</div>
					))}
				</div>
				<div className='flex items-center gap-2 mt-2'>
					<Popover>
						<PopoverTrigger asChild>
							<button className='text-xl'>
								<Smile className='h-6 w-6' />
							</button>
						</PopoverTrigger>
						<PopoverContent className='p-4 bg-black border rounded-lg shadow-md max-h-[200px] overflow-y-auto'>
							<div className='grid grid-cols-5 gap-2'>
								{emojis.map((emoji, index) => (
									<button
										key={index}
										onClick={() => setCommentText(commentText + emoji)}
										className='text-2xl p-1 hover:bg-gray-800 rounded-md'
									>
										{emoji}
									</button>
								))}
							</div>
						</PopoverContent>
					</Popover>

					<input
						type='text'
						value={commentText}
						onChange={handleCommentChange}
						placeholder='Add a comment...'
						className='p-2 rounded-md w-full lg:w-[400px]'
					/>
					<button
						onClick={handleAddComment}
						disabled={!commentText.trim()}
						className='text-white p-2 rounded-md'
					>
						Post
					</button>
				</div>

				
			</div>
		</div>
	)
}

export default Comment
