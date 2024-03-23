import React from "react";
// @ts-expect-error
import {useFormWithValidation} from "@hooks/useFormWithValidation.jsx";
import {useResize} from "@hooks/useResize.tsx";
import {Link} from "react-router-dom";
import {api} from "@utils/Api.tsx";


const ContactForm: React.FC = () => {
    const [success, isSuccess] = React.useState<boolean>(false);
    const [serverError, isServerError ] =React.useState<boolean>(false);
    const [tooManyRequests, isTooManyRequests] = React.useState<boolean>(false);
    const {width} = useResize();
    const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        api.sendInfo(values.email, values.name, values.phone, values.text).then((data) => {
            if (data) {
                isSuccess(true);
                resetForm();
            }
        }).catch((err) => {
            if (err === 429) {
                isTooManyRequests(true);
                isServerError(false);
            } else {
                isServerError(true);
                isTooManyRequests(false);
            }
            isSuccess(false);
        })
    }

    React.useEffect(() => {
        isTooManyRequests(false);
        isServerError(false);

        values.name = "";
        values.email = "";
        values.phone = "";
        values.text = "";
    }, [resetForm])

    return (
        <section className={"contact-form"} id={"contacts"}>
        <div className={"contact-form__title-container"}>
            <div className={"reason__marker reason__marker_contact"}></div>
            <h2 className={"contact-form__title"}>Заинтересовались нашей компанией?</h2>
        </div>
            <form className={"form-container"} noValidate onSubmit={handleSubmit}>
                {width > 576 ? (
                    <h2 className={"contact-form__title form-container__title_g"}>Свяжитесь с нами!</h2>
                ) : (
                    <div className={"form-container__btn-container"}>
                        <h2 className={"contact-form__title form-container__title_g"}>Свяжитесь с нами!</h2>
                        <div className={"form-container__links"}>
                            <Link className={"link form-container__link form-container__link_wu"} to="#"></Link>
                            <Link className={"link form-container__link form-container__link_tg"} to="#"></Link>
                        </div>
                    </div>
                )}
                <div className={"form"}>
                    <div className={"form__input"}>
                        <input className={`form__area ${errors?.phone && 'form__area_error'}`} type={"text"}
                               placeholder={"+ 7 (900) 000-00-00"} name={"phone"} required onChange={handleChange}
                               value={values?.phone ?? ""}/>
                        <span className={"form__error"}>{errors?.phone} </span>

                    </div>
                    <div className={"form__input"}>
                    <input className={`form__area ${errors?.name && 'form__area_error'}`} type={"text"} name={"name"} placeholder={"Имя"} required onChange={handleChange}
                               value={values?.name ?? ""}/>
                        <span className={"form__error"}>{errors?.name} </span>
                    </div>
                    <div className={"form__input"}>
                        <input className={`form__area ${errors?.email && 'form__area_error'}`} type={"email"} name={"email"} placeholder={"E-mail"} required onChange={handleChange}
                               value={values?.email ?? ""}/>
                        <span className={"form__error"}>{errors?.email} </span>
                    </div>
                    <div className={"form__input"}>
                        <textarea className={"form__area form__area_text"} rows={4} autoComplete={"off"} wrap={"soft"} placeholder={"Сообщение"} name={"text"} maxLength={200} required onChange={handleChange}
                               value={values?.text ?? ""}/>
                    </div>
                    {success ? (<p className={"form__error"}>Ваша заявка успешно отправлена!</p>) : tooManyRequests ? (<p className={"form__error"}>Слишком много попыток отправки формы. Попробуйте позже.</p>) : serverError && (<p className={"form__error"}>Произошла ошибка</p>)}
                </div>
                <div className={"form-container__btn-container"}>
                    <button className={"form-container__btn"} type={"submit"} disabled={!isValid}>оставить заявку
                    </button>
                    {width > 576 && (<div className={"form-container__links"}>
                        <Link className={"link form-container__link form-container__link_wu"} to="#"></Link>
                        <Link className={"link form-container__link form-container__link_tg"} to="#"></Link>
                    </div>)}

                </div>
            </form>
        </section>
    )
}

export default ContactForm;