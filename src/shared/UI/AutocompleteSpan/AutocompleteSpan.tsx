import styled from "@emotion/styled";
import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import React, {useState} from "react";
import TextField from "@mui/material/TextField/TextField";
import {Chip} from "@mui/material";


type AutocompleteSpanProps = {
    value: any
    options: Array<any>
    getValueLabel: (value: any) => string
    onChange: (value: any) => void
    onDelete: (option: any) => void
    label: string
}

export const AutocompleteSpan: React.FC<AutocompleteSpanProps> = (props) => {
    const [editMode, setEditMode] = useState(false)
    const {
        value,
        getValueLabel,
        options,
        onChange,
        label,
        onDelete
    } = props

    const multiple = Array.isArray(value)

    const spanContent = multiple ? value.length ?value.map(option => <Chip key={getValueLabel(option)}
                                                             label={getValueLabel(option)}
                                            onDelete={(e) => onDelete(option)}/>): 'добавьте значение' : getValueLabel(value)

    return editMode ?
        <Autocomplete multiple={multiple}
                      options={options}
                      getOptionLabel={option => option.value}
                      value={value}
                      onChange={(e, value) => onChange(value)}
                      renderInput={(params) =>
                          <TextField {...params} label={label}
                                     autoFocus={true}
                                     variant="standard"/>
                      }
                      onBlur={() => setEditMode(false)}
        />
        : <StyledSpan onDoubleClick={() => {
            setEditMode(true)
        }}>{spanContent}</StyledSpan>
}


const StyledSpan = styled.span`
  cursor: pointer;
`