export interface MovieData {
    entries: number
    results: Result[]
    next: string
    page?: number
  }
  
  export interface Result {
    _id: string
    id: string
    primaryImage: PrimaryImage
    titleType: TitleType
    titleText: TitleText
    originalTitleText: OriginalTitleText
    releaseYear: ReleaseYear
    releaseDate: ReleaseDate
    position: number
  }
  
  export interface PrimaryImage {
    id: string
    width: number
    height: number
    url: string
    caption: Caption
    __typename: string
  }
  
  export interface Caption {
    plainText: string
    __typename: string
  }
  
  export interface TitleType {
    text: string
    id: string
    isSeries: boolean
    isEpisode: boolean
    __typename: string
  }
  
  export interface TitleText {
    text: string
    __typename: string
  }
  
  export interface OriginalTitleText {
    text: string
    __typename: string
  }
  
  export interface ReleaseYear {
    year: number
    endYear: any
    __typename: string
  }
  
  export interface ReleaseDate {
    day: number
    month: number
    year: number
    __typename: string
  }
  