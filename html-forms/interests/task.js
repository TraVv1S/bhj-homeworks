const checkGruops = document.querySelectorAll('.interest'),
        checkboxes = document.querySelectorAll('.interest__check');

checkboxes.forEach(chb => {
    chb.addEventListener('change', function(e) {
        console.log('changed')
        const childGroup = chb.parentElement.nextElementSibling,
              parentOfGroup = chb.closest('.interests').previousElementSibling;

        //checkbox has child checkboxes
        if (childGroup) { 
            const childCheckboxes = childGroup.querySelectorAll('.interest__check')
            if (chb.checked) {
                childCheckboxes.forEach(child => {
                    child.checked = true;
                    child.indeterminate = false;
                })
            } else {
                childCheckboxes.forEach(child => {
                    child.checked = false;
                    child.indeterminate = false;
                })
            }
        } 
        
        //checkbox has parent checkbox
        if (parentOfGroup) {
            const parentCheckbox = parentOfGroup.querySelector('.interest__check'),
                siblingCheckboxes = parentOfGroup.nextElementSibling.querySelectorAll('.interest__check')
            let checkedCounter = 0;
            
            siblingCheckboxes.forEach((sibling) => {
                if (sibling.checked) {
                    checkedCounter++
                }
            })

            if (checkedCounter > 0 && checkedCounter < siblingCheckboxes.length) {
                parentCheckbox.indeterminate = true
                parentCheckbox.checked = false
            } else {
                parentCheckbox.indeterminate = false
                parentCheckbox.checked = (checkedCounter === siblingCheckboxes.length) ? true : false
            }
        }
    })
})