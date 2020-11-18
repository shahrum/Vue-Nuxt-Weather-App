<template>
  <div class="input-field">
    <div :class="'input__effect ' + filled">
      <input
        type="text"
        :value="value"
        :placeholder="placeholder"
        :class="'effect ' + hasIcon"
        :disabled="disabled"
        @input="$emit('input', $event.target.value)"
        @focus="show = !show"
        @blur="show = !show"
      />
      <label :style="{ color: color }">{{ label }}</label>
      <span class="focus__border" :style="focusBorder"></span>
    </div>
    <span class="input__hint" v-if="show">{{ hint }}</span>
    <SearchIcon class="input__icon" />
    <!-- <i class="input__icon" v-if="icon">{{ icon }}</i> -->
    <div class="clear"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchIcon from '../../assets/icons/search-icon.vue'
export default Vue.extend({
  name: 'InputFieldComponent',
  components: {
    SearchIcon,
  },
  data() {
    return {
      show: false,
    }
  },
  props: {
    value: String,
    label: String,
    disabled: Boolean,
    hint: String,
    icon: String,
    placeholder: String,
    color: String,
  },
  methods: {
    filled(): string {
      if (!this.show && this.value) {
        return 'has__content'
      }
      return ''
    },
    hasIcon(): string {
      if (this.icon) {
        return 'input__has__icon'
      }
      return ''
    },
    focusBorder(): { [key: string]: string } {
      return {
        'background-color': this.color,
      }
    },
  },
})
</script>

<style lang="scss" scoped>
$primary: #201547;
$primary-lighter: rgba(32, 21, 71, 0.5);
$white: #fff;
.input-field {
  position: relative;
  .clear {
    clear: both;
  }
  ::placeholder {
    // opacity: 0.4;
    color: $primary-lighter;
  }

  input[type='text'] {
    color: $primary;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
    outline: none;
  }

  .input {
    &__container {
      width: 100%;
      padding: 0.5rem 0.5rem 0 0;
    }

    &__effect {
      float: left;
      width: 100%;
      margin: 0 0rem 1.5rem 0;
      position: relative;
    } /* necessary to give position: relative to parent. */

    &__icon {
      position: absolute;
      // left: 0rem;
      top: -3.5rem;
      // opacity: 0.3;
      right: 14px;
      top: 11px;
    }
    &__hint {
      float: left;
      width: 100%;
      margin: -1.2rem 0 0 0;
      position: relative;
      font-size: 0.8rem;
      opacity: 0.6;
    }

    &__has__icon {
      padding-left: 2rem !important;
    }
  }

  .effect {
    border: 0;
    padding: 10px 10px;
    border-bottom: 1px solid #ccc;
    background-color: $white;
    border-radius: 4px;
    font-size: 14px;
    // color: $primary;
    ~ .focus__border {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: $primary-lighter;
      transition: 0.4s;
    }
    ~ label {
      position: absolute;
      left: 0;
      width: 100%;
      top: -1.3rem;
      color: $primary-lighter;
      transition: 0.3s;
      z-index: -1;
      letter-spacing: 0.5px;
    }
  }

  // .effect ~ .focus__border {
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  //   width: 0;
  //   height: 2px;
  //   background-color: indigo;
  //   transition: 0.4s;
  // }

  .effect:focus ~ .focus__border,
  .has-content.effect ~ .focus__border {
    width: 100%;
    transition: 0.4s;
  }

  // .effect ~ label {
  //   position: absolute;
  //   left: 0;
  //   width: 100%;
  //   top: -1.3rem;
  //   color: #aaa;
  //   transition: 0.3s;
  //   z-index: -1;
  //   letter-spacing: 0.5px;
  // }

  .effect:focus ~ label,
  .has__content.effect ~ label {
    top: -1rem;
    font-size: 12px;
    color: indigo;
    transition: 0.3s;
  }
}
</style>
