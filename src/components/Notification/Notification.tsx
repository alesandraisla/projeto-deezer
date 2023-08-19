
import { ContainerNot, ContentCompletedNotification, Photo, PhotoPost, Separater, SubTitlePhoto, TitlePhoto } from "./NotificationStyles";
import React from 'react';

const notifications = [
  {id: 1, cd: require('../../images/paramore.webp'), name: 'Pressure', 
  singer: 'Paramore', newDate: '20 HORAS ATRÁS - NOVO SINGLE'},
  {id: 2, cd: require('../../images/hikaruUtada.jpeg.jpeg'), name: 'Dont think twice', 
  singer: 'Utada Hikaru', newDate: '10 HORAS ATRÁS - NOVO SINGLE'},
  {id: 2, cd: require('../../images/yui.jpeg'), name: 'Oh My God', 
  singer: 'Yui', newDate: '5 HORAS ATRÁS - NOVO SINGLE'},
]


export function Notification() {
  return(
    <div>
    {notifications.map((notification) => (
      <ContentCompletedNotification>
        <ContainerNot key={notification.id}>
          <Photo src={notification.cd} alt="Notification" />
          <Separater>
          <TitlePhoto>{notification.name}</TitlePhoto>
          <SubTitlePhoto>{notification.singer}</SubTitlePhoto>
          </Separater>
        </ContainerNot>
          <PhotoPost>{notification.newDate}</PhotoPost>
      </ContentCompletedNotification>
    ))}
  </div>
  )
}