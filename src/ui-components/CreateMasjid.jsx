/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { listMasjids } from "../graphql/queries";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function CreateMasjid(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    background: "",
    generalpolicy: "",
    management: "",
    latitude: "",
    longitude: "",
    address: "",
    phone: "",
    fax: "",
    nikah: "",
    counselling: "",
    janazah: "",
    ruqya: "",
    url1: "",
    url2: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [background, setBackground] = React.useState(initialValues.background);
  const [generalpolicy, setGeneralpolicy] = React.useState(
    initialValues.generalpolicy
  );
  const [management, setManagement] = React.useState(initialValues.management);
  const [latitude, setLatitude] = React.useState(initialValues.latitude);
  const [longitude, setLongitude] = React.useState(initialValues.longitude);
  const [address, setAddress] = React.useState(initialValues.address);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [fax, setFax] = React.useState(initialValues.fax);
  const [nikah, setNikah] = React.useState(initialValues.nikah);
  const [counselling, setCounselling] = React.useState(
    initialValues.counselling
  );
  const [janazah, setJanazah] = React.useState(initialValues.janazah);
  const [ruqya, setRuqya] = React.useState(initialValues.ruqya);
  const [url1, setUrl1] = React.useState(initialValues.url1);
  const [url2, setUrl2] = React.useState(initialValues.url2);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setBackground(initialValues.background);
    setGeneralpolicy(initialValues.generalpolicy);
    setManagement(initialValues.management);
    setLatitude(initialValues.latitude);
    setLongitude(initialValues.longitude);
    setAddress(initialValues.address);
    setPhone(initialValues.phone);
    setFax(initialValues.fax);
    setNikah(initialValues.nikah);
    setCounselling(initialValues.counselling);
    setJanazah(initialValues.janazah);
    setRuqya(initialValues.ruqya);
    setUrl1(initialValues.url1);
    setUrl2(initialValues.url2);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    background: [{ type: "Required" }],
    generalpolicy: [{ type: "Required" }],
    management: [{ type: "Required" }],
    latitude: [],
    longitude: [],
    address: [],
    phone: [{ type: "Required" }],
    fax: [],
    nikah: [],
    counselling: [],
    janazah: [{ type: "Required" }],
    ruqya: [{ type: "Required" }],
    url1: [],
    url2: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          background,
          generalpolicy,
          management,
          latitude,
          longitude,
          address,
          phone,
          fax,
          nikah,
          counselling,
          janazah,
          ruqya,
          url1,
          url2,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new listMasjids(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CreateMasjid")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              background,
              generalpolicy,
              management,
              latitude,
              longitude,
              address,
              phone,
              fax,
              nikah,
              counselling,
              janazah,
              ruqya,
              url1,
              url2,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Background</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={background}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              background: value,
              generalpolicy,
              management,
              latitude,
              longitude,
              address,
              phone,
              fax,
              nikah,
              counselling,
              janazah,
              ruqya,
              url1,
              url2,
            };
            const result = onChange(modelFields);
            value = result?.background ?? value;
          }
          if (errors.background?.hasError) {
            runValidationTasks("background", value);
          }
          setBackground(value);
        }}
        onBlur={() => runValidationTasks("background", background)}
        errorMessage={errors.background?.errorMessage}
        hasError={errors.background?.hasError}
        {...getOverrideProps(overrides, "background")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Generalpolicy</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={generalpolicy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              background,
              generalpolicy: value,
              management,
              latitude,
              longitude,
              address,
              phone,
              fax,
              nikah,
              counselling,
              janazah,
              ruqya,
              url1,
              url2,
            };
            const result = onChange(modelFields);
            value = result?.generalpolicy ?? value;
          }
          if (errors.generalpolicy?.hasError) {
            runValidationTasks("generalpolicy", value);
          }
          setGeneralpolicy(value);
        }}
        onBlur={() => runValidationTasks("generalpolicy", generalpolicy)}
        errorMessage={errors.generalpolicy?.errorMessage}
        hasError={errors.generalpolicy?.hasError}
        {...getOverrideProps(overrides, "generalpolicy")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Management</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={management}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              background,
              generalpolicy,
              management: value,
              latitude,
              longitude,
              address,
              phone,
              fax,
              nikah,
              counselling,
              janazah,
              ruqya,
              url1,
              url2,
            };
            const result = onChange(modelFields);
            value = result?.management ?? value;
          }
          if (errors.management?.hasError) {
            runValidationTasks("management", value);
          }
          setManagement(value);
        }}
        onBlur={() => runValidationTasks("management", management)}
        errorMessage={errors.management?.errorMessage}
        hasError={errors.management?.hasError}
        {...getOverrideProps(overrides, "management")}
      ></TextField>
      <TextField
        label="Latitude"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={latitude}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              background,
              generalpolicy,
              management,
              latitude: value,
              longitude,
              address,
              phone,
              fax,
              nikah,
              counselling,
              janazah,
              ruqya,
              url1,
              url2,
            };
            const result = onChange(modelFields);
            value = result?.latitude ?? value;
          }
          if (errors.latitude?.hasError) {
            runValidationTasks("latitude", value);
          }
          setLatitude(value);
        }}
        onBlur={() => runValidationTasks("latitude", latitude)}
        errorMessage={errors.latitude?.errorMessage}
        hasError={errors.latitude?.hasError}
        {...getOverrideProps(overrides, "latitude")}
      ></TextField>
      <TextField
        label="Longitude"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={longitude}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              background,
              generalpolicy,
              management,
              latitude,
              longitude: value,
              address,
              phone,
              fax,
              nikah,
              counselling,
              janazah,
              ruqya,
              url1,
              url2,
            };
            const result = onChange(modelFields);
            value = result?.longitude ?? value;
          }
          if (errors.longitude?.hasError) {
            runValidationTasks("longitude", value);
          }
          setLongitude(value);
        }}
        onBlur={() => runValidationTasks("longitude", longitude)}
        errorMessage={errors.longitude?.errorMessage}
        hasError={errors.longitude?.hasError}
        {...getOverrideProps(overrides, "longitude")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              background,
              generalpolicy,
              management,
              latitude,
              longitude,
              address: value,
              phone,
              fax,
              nikah,
              counselling,
              janazah,
              ruqya,
              url1,
              url2,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Phone</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              background,
              generalpolicy,
              management,
              latitude,
              longitude,
              address,
              phone: value,
              fax,
              nikah,
              counselling,
              janazah,
              ruqya,
              url1,
              url2,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Fax"
        isRequired={false}
        isReadOnly={false}
        value={fax}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              background,
              generalpolicy,
              management,
              latitude,
              longitude,
              address,
              phone,
              fax: value,
              nikah,
              counselling,
              janazah,
              ruqya,
              url1,
              url2,
            };
            const result = onChange(modelFields);
            value = result?.fax ?? value;
          }
          if (errors.fax?.hasError) {
            runValidationTasks("fax", value);
          }
          setFax(value);
        }}
        onBlur={() => runValidationTasks("fax", fax)}
        errorMessage={errors.fax?.errorMessage}
        hasError={errors.fax?.hasError}
        {...getOverrideProps(overrides, "fax")}
      ></TextField>
      <TextField
        label="Nikah"
        isRequired={false}
        isReadOnly={false}
        value={nikah}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              background,
              generalpolicy,
              management,
              latitude,
              longitude,
              address,
              phone,
              fax,
              nikah: value,
              counselling,
              janazah,
              ruqya,
              url1,
              url2,
            };
            const result = onChange(modelFields);
            value = result?.nikah ?? value;
          }
          if (errors.nikah?.hasError) {
            runValidationTasks("nikah", value);
          }
          setNikah(value);
        }}
        onBlur={() => runValidationTasks("nikah", nikah)}
        errorMessage={errors.nikah?.errorMessage}
        hasError={errors.nikah?.hasError}
        {...getOverrideProps(overrides, "nikah")}
      ></TextField>
      <TextField
        label="Counselling"
        isRequired={false}
        isReadOnly={false}
        value={counselling}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              background,
              generalpolicy,
              management,
              latitude,
              longitude,
              address,
              phone,
              fax,
              nikah,
              counselling: value,
              janazah,
              ruqya,
              url1,
              url2,
            };
            const result = onChange(modelFields);
            value = result?.counselling ?? value;
          }
          if (errors.counselling?.hasError) {
            runValidationTasks("counselling", value);
          }
          setCounselling(value);
        }}
        onBlur={() => runValidationTasks("counselling", counselling)}
        errorMessage={errors.counselling?.errorMessage}
        hasError={errors.counselling?.hasError}
        {...getOverrideProps(overrides, "counselling")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Janazah</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={janazah}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              background,
              generalpolicy,
              management,
              latitude,
              longitude,
              address,
              phone,
              fax,
              nikah,
              counselling,
              janazah: value,
              ruqya,
              url1,
              url2,
            };
            const result = onChange(modelFields);
            value = result?.janazah ?? value;
          }
          if (errors.janazah?.hasError) {
            runValidationTasks("janazah", value);
          }
          setJanazah(value);
        }}
        onBlur={() => runValidationTasks("janazah", janazah)}
        errorMessage={errors.janazah?.errorMessage}
        hasError={errors.janazah?.hasError}
        {...getOverrideProps(overrides, "janazah")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Ruqya</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={ruqya}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              background,
              generalpolicy,
              management,
              latitude,
              longitude,
              address,
              phone,
              fax,
              nikah,
              counselling,
              janazah,
              ruqya: value,
              url1,
              url2,
            };
            const result = onChange(modelFields);
            value = result?.ruqya ?? value;
          }
          if (errors.ruqya?.hasError) {
            runValidationTasks("ruqya", value);
          }
          setRuqya(value);
        }}
        onBlur={() => runValidationTasks("ruqya", ruqya)}
        errorMessage={errors.ruqya?.errorMessage}
        hasError={errors.ruqya?.hasError}
        {...getOverrideProps(overrides, "ruqya")}
      ></TextField>
      <TextField
        label="Url1"
        isRequired={false}
        isReadOnly={false}
        value={url1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              background,
              generalpolicy,
              management,
              latitude,
              longitude,
              address,
              phone,
              fax,
              nikah,
              counselling,
              janazah,
              ruqya,
              url1: value,
              url2,
            };
            const result = onChange(modelFields);
            value = result?.url1 ?? value;
          }
          if (errors.url1?.hasError) {
            runValidationTasks("url1", value);
          }
          setUrl1(value);
        }}
        onBlur={() => runValidationTasks("url1", url1)}
        errorMessage={errors.url1?.errorMessage}
        hasError={errors.url1?.hasError}
        {...getOverrideProps(overrides, "url1")}
      ></TextField>
      <TextField
        label="Url2"
        isRequired={false}
        isReadOnly={false}
        value={url2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              background,
              generalpolicy,
              management,
              latitude,
              longitude,
              address,
              phone,
              fax,
              nikah,
              counselling,
              janazah,
              ruqya,
              url1,
              url2: value,
            };
            const result = onChange(modelFields);
            value = result?.url2 ?? value;
          }
          if (errors.url2?.hasError) {
            runValidationTasks("url2", value);
          }
          setUrl2(value);
        }}
        onBlur={() => runValidationTasks("url2", url2)}
        errorMessage={errors.url2?.errorMessage}
        hasError={errors.url2?.hasError}
        {...getOverrideProps(overrides, "url2")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
