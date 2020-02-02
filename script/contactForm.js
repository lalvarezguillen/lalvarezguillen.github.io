function submitContactForm(ev, form) {
    ev.preventDefault();
    const data = new FormData(form)
    let urlEncoded = `name=${data.get('name')}`;
    urlEncoded += `&email=${data.get('email')}`;
    urlEncoded += `&subject=${data.get('subject')}`;
    urlEncoded += `&content=${data.get('content')}`;
    if (data.get('phone')) {
        urlEncoded += `&phone=${data.get('phone')}`;
    }
    if (data.get('company_name')) {
        urlEncoded += `&company_name=${data.get('company_name')}`;
    }
    urlEncoded = encodeURI(urlEncoded);
    fetch(form.action,
        {
            method:'post',
            body: urlEncoded,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
        }
    )
        .then(() => {
            // ev.preventDefault();
            form.reset();
            $('#form-success-alert').show();
        })
        .catch((err) => {
            // ev.preventDefault();
            $('#form-error-alert').show();
        })
}