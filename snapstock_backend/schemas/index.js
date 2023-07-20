import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'
import user from './user'
import comment from './comment'
import postedBy from './postedBy'
import save from './save'
import pin from './pin'

export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,
  user,
  comment,
  postedBy,
  save,
  pin,

  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
