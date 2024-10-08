<script>
  export let label = "";
  export let value = "";
  export let placeholder = "";
  export let inputType = "text";
  export let error = "";
  export let extraDetails = "";
  export let submitCallback = null;
  export let required = false;
  export let hideLabel = false;
  export let withIcon = false;

  let activatePasswordMasking = false;



  function formatLabel(label) {
    return label.split(" ").join("_").toLowerCase();
  }

  function setValue(field) {
  }

  let originalPlaceholder = placeholder;
  function clearPlaceholder() {
    placeholder = "";
  }
  function resetToPlaceholder() {
    placeholder = originalPlaceholder;
  }
</script>

<div class="text-input">
  {#if !hideLabel}
    <span>{label}{required ? "*" : ""}</span>
  {/if}
  <div class="input-set">
    {#if withIcon}
      <img src="/icons/calendar.svg" class="input-icon" alt="" />
    {/if}
    <input
      class={`textbox ${error !== "" ? "error" : ""} ${
        withIcon ? "iconSpacing" : ""
      }`}
      {placeholder}
      bind:value={value}
      id={formatLabel(label)}
      on:click={() => {
        clearPlaceholder();
        error = "";
      }}
      on:keyup={(e) => {
        setValue(label);
      }}
      on:keydown={(e) => {
        setValue(label);
        if (e.key === "Enter") {
          submitCallback();
        }
      }}
      on:blur={() => {
        setValue(label);
        if (value === "") {
          resetToPlaceholder();
        }
      }}
    />
    <!-- {#if error !== ""}
      <i class="la la-exclamation-circle input-icon alert fade-in" />
    {/if} -->
  </div>
  {#if extraDetails !== ""}
    <div class="detail-container">
      <span>{extraDetails}</span>
    </div>
  {/if}
  <span class="text-red">{error}</span>
</div>

<style lang="scss">
  // div {
  //   border: 1px solid red;
  // }
  .text-input {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    gap: 8px;

    span {
      font-size: 14px;
    }

    .input-set {
      position: relative;
    }

    .toggle-masking-icon {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);

      img {
        height: 16px;
        width: 16px;
      }
    }

    button {
      padding: 0;
      margin: 0;
      display: flex;
      background-color: transparent;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }

    .input-icon {
      position: absolute;
      padding: 5px;
      background: #fff;
      border-radius: 3px;
      top: 13%;
      right: 8px;
      font-size: 20px;

      &.alert {
        color: #f04438;
      }
    }

    .textbox {
      padding: 10px 14px;
      border-radius: 8px;
      width: 100%;
      width: 320px;
      border: 1px solid #ddd;
      font-size: 16px;
      outline: 2px solid transparent;
      transition: 0.3s;

      &.iconSpacing {
        padding-left: 40px;
        width: 156px;
      }

      &:focus {
        border: 1px solid #d6bbfb;
        outline: 3px solid #f4ebff;
        transition: 0.3s;
      }

      &.error {
        border: 1px solid #fbbbbb;
        outline: 3px solid #ffebeb;
      }
    }

    .detail-container {
      width: 448px;
      span {
        color: var(--gray-500, #667085);
        font-size: 14px;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
      }
    }
  }
  .input-icon {
    position: absolute;
    padding: 5px;
    background: #fff;
    border-radius: 3px;
    top: 13%;
    left: 8px; /* Adjust the left value to position the icon */
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
  }
</style>
