import {NextRequest, NextResponse} from 'next/server'
import {revalidatePath} from 'next/cache'

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret')

  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      {message: 'Invalid secret'},
      {status: 401},
    )
  }

  revalidatePath('/')
  revalidatePath('/projects')
  revalidatePath('/projects/[slug]', 'page')

  return NextResponse.json({
    revalidated: true,
    message: 'Cache revalidated successfully',
  })
}