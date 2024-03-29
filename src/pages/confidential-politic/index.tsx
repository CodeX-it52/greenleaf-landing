import React from "react";

const ConfidentialPolitic: React.FC = () => {
    return (
        <>
            <section className={"confidential"} id={"confidential"}>
                <h2 className={"confidential__title"}>Политика конфиденциальности</h2>
                <div className={"confidential__container"}>
                    <div className={"confidential__point"}>
                        <p className={"text_m confidential__item-title"}>1. О политике конфиденциальности</p>
                        <p className={"text_s confidential__description"}>Отправляя данные через форму, вы&nbsp;доверяете свои личные данные компании ООО &laquo;КОДЕКС-ИТ&raquo; (ИНН 5262393380, находящаяся по&nbsp;адресу: 603137, Нижегородская область, г&nbsp;Нижний Новгород, пр-кт Гагарина, д.&nbsp;226, кв.&nbsp;48). Чтобы узнать, какие данные мы&nbsp;собираем, с&nbsp;какой целью и&nbsp;как используем, внимательно прочитайте политику конфиденциальности.
                            Мы&nbsp;храним те&nbsp;данные, которые вы&nbsp;внесли указали при заполнении формы. Это могут быть ваши персональные данные, такие как имя, email, телефон и&nbsp;пр.
                            Наряду с&nbsp;персональными данными, в&nbsp;нашей базе может сохраняться информация о&nbsp;вашем устройстве, IP-адресе, версии операционной системы. Эти данные используются исключительно для аналитики и&nbsp;улучшения сервиса.</p>
                    </div>
                    <div className={"confidential__point"}>
                        <p className={"text_m confidential__item-title"}>2. Как мы используем полученные данные</p>
                        <p className={"text_s confidential__description"}>Данные сохраняются в&nbsp;базе данных и&nbsp;требуются для связи с&nbsp;отправителем этих данных по&nbsp;телефону/email и&nbsp;прочими способами при необходимости.</p>
                    </div>
                    <div className={"confidential__point"}>
                        <p className={"text_m confidential__item-title"}>3. Как найти или изменить персональные данные</p>
                        <p className={"text_s confidential__description"}>При необходимости мы можем удалить ваши персональные данные по запросу на электронную почту codex.ru@mail.ru Должны предупредить, что из-за специфики функционирования облачных сервисов данные могут какое-то время храниться, например, в виде бэкапов (резервных копий).</p>
                    </div>
                    <div className={"confidential__point"}>
                        <p className={"text_m confidential__item-title"}>4. Передача персональных данных третьим лицам</p>
                        <p className={"text_s confidential__description"}>Мы не передаём данные третьим лицам, если это не требуется для функционирования сервиса.
                            По требованиям законодательства персональные данные могут быть предоставлены государственным органам и иным уполномоченным организациям только при наличии веских оснований, которые позволяют предполагать наличие противоправных действий.</p>
                    </div>
                    <div className={"confidential__point"}>
                        <p className={"text_m confidential__item-title"}>5. Защита информации
                        </p>
                        <p className={"text_s confidential__description"}>Мы делаем всё возможное, чтобы защитить все данные пользователей от несанкционированных попыток доступа к ним. В частности, используем SSL-шифрование при передаче данных, постоянно совершенствуем способы хранения и обработки данных, ограничиваем доступ сотрудникам компании или подрядным организациям. При необходимости доступа в обязательном порядке подписываются все необходимые документы, главным из которых является “Соглашение о неразглашении” (NDA).</p>
                    </div>
                    <div className={"confidential__point"}>
                        <p className={"text_m confidential__item-title"}>6. Изменения и дополнения</p>
                        <p className={"text_s confidential__description"}>Данная Политика конфиденциальности может меняться. Однако мы&nbsp;гарантируем, что основные положения по&nbsp;конфиденциальности останутся неизменными.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ConfidentialPolitic;