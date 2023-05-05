declare namespace BroadSelectionNS{

    interface Iprops{
         data : IBroadData[]
    }

    interface ICardData{
        totalTime : string;
        text : string;
        keyPoints : string[]
    }

    interface ICourse {
        id : number;
        name : string;
        image : any;
        heading : string,
        author : string;
        rating : string;
        reviewsCount : string;
        offerPrice : string;
        price : string;
        cardData : ICardData,
        cart : boolean;
    }
    interface IBroadData{
        title : string;
        heading : string;
        textContent : string;
        buttonText : string;
        courses : ICourse[]

    }
    interface IPropsForCourseBox{
        object : IBroadData;
    }
    interface IPropsForCard{
        cardDetails : ICourse;
        widthOfCard : number,
        linkNotNeed? : boolean
    }
    interface IPropsForSlider{
        lengthOfArray : number;
        cardNode : React.ReactElement;
        title ?: string,
        idForSlider : string;
        idForSubSlider : string;
        widthOfEachCard : number

    }
    interface IPropsForHoverCard {
        data : ICourse
    }
}