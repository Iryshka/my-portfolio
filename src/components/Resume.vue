<template>
  <div class="resume">
    <svg
      width="60"
      height="60"
      viewBox="0 0 128 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M72 4H4V124H96V28H72V4Z" fill="#FF90FF" />
      <path d="M80 4H76V24H96V20H92V16H88V12H84V8H80V4Z" fill="#FF90FF" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40 64H38V62H36V50H38V48H40V46H52V48H54V50H56V62H54V64H52V66H40V64ZM42 54H40V58H42V60H44V62H48V60H50V58H52V54H50V52H48V50H44V52H42V54ZM56 70H58V72H60V82H56V76H54V74H52V72H38V74H36V76H34V82H30V72H32V70H34V68H56V70ZM62 64H64V62H66V50H64V48H62V46H60H58V52H60V54H62V56V58H60V60H58V66H62V64ZM68 70V72H70V82H66V76H64V74H62V68H66V70H68Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0H80V4H76V24H96V20H100V104H112V108H120V112H128V128H0V0ZM96 28H72V4H4V124H96V28Z"
        fill="black"
      />
      <path d="M92 16H96V20H92V16Z" fill="black" />
      <path d="M88 12H92V16H88V12Z" fill="black" />
      <path d="M84 8H88V12H84V8Z" fill="black" />
      <path d="M84 8V4H80V8H84Z" fill="black" />
      <p class="resume__title">About me</p>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.resume {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5px;
  &__title {
    margin-top: -15px;

    font-size: 14px;
    color: black;
    font-weight: bold;
  }
}
</style>
