declare namespace LearnersNS{
    interface GoalsData{
        id : number;
        content : string;
        profileName : string;
        name : string;
        videoText : string;
    
    }
    interface IPropsForLearCard{
        widthOfCard : number;
        cardDetails : GoalsData
    }
}