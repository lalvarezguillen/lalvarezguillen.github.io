function submitContactForm(ev, form) {
    fetch(form.action,{method:'post', body: new FormData(form)})
        .then(() => {
            ev.preventDefault();
            form.reset();
            $('#form-success-alert').show();
        })
        .catch((err) => {
            ev.preventDefault();
            $('#form-error-alert').show();
        })
}