<template>
  <div class="contact-form">
    <form @submit.prevent>
      <div class="row">
        <div class="col-md-6">
          <Input
            v-model="form.name"
            :error-showing="$v.form.name.$error"
            placeholder="Name"
            label="Name"
            @input="formatInput('name')"
          />
        </div>
        <div class="col-md-6">
          <Input
            v-model="form.email"
            :error-showing="$v.form.email.$error"
            placeholder="Email"
            label="Email"
            @input="formatInput('email')"
          >
            <template #error>
              <span
                v-if="$v.form.email.$dirty && $v.form.email.$invalid"
                class="error-message"
              >
                <span v-if="!$v.form.email.email">Incorrect email</span>
                <span v-if="!$v.form.email.required">Requred filed</span>
              </span>
            </template>
          </Input>
        </div>
      </div>
      <Input
        v-model="form.message"
        placeholder="Your Message"
        label="Your message"
        input-type="textarea"
        :error-showing="$v.form.message.$error"
      />

      <Button
        type="button"
        :title="up_lg ? 'Send Your Message' : 'Send Message'"
        class="btn-dark"
        @click="submitForm"
      />
    </form>

    <modal ref="modal" class="contact-from">
      <template #modal-body>
        <div class="modal-request">
          <h3 class="h3 text-center">PROCESSING</h3>
          <div class="text-holder text-center" :class="request.status">
            <span v-if="request.loading" class="donut"></span>
            <p v-else>
              <template v-if="request.status === 'success'">
                Request from <strong>{{ form.email }}</strong>
                <span class="green">{{ request.message }}</span>
              </template>

              <template v-else>
                {{ request.message }}
              </template>
            </p>
          </div>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import Input from "@/components/Inputs/Input";
import Button from "@/components/Button";
import getterBreakpoints from "@/mixins/getterBreakpoints";

export default {
  name: "ContactForm",
  components: {
    Input,
    Button,
  },
  mixins: [validationMixin, getterBreakpoints],
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      request: {
        loading: true,
        status: "",
        message: "",
      },
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        email: { required, email },
        message: { required },
      },
    };
  },
  methods: {
    formatInput(Vmodel) {
      if (Vmodel === "name") {
        const x = this.form[Vmodel].replace(
          /[&/\\#,+()$~^%@!;№":*?+=<>{}0-9]/g,
          ""
        ).replace(/[^\p{L}\p{N}\p{P}\p{Z}`\n]/gu, "");
        this.form[Vmodel] = x.substring(0, 50);
      } else if (Vmodel === "email") {
        const x = this.form[Vmodel].replace(/[&/\\#,+()$~%^'":*?<>{ }]/g, "");
        this.form[Vmodel] = x.substring(0, 100);
      }
    },
    async submitForm() {
      this.$v.form.$touch();

      if (this.$v.form.$invalid) {
        return console.log("some erorr");
      } else {
        const url = this.$config.apiURL + "/contact-form";
        const formData = {
          name: this.form.name,
          email: this.form.email,
          text: this.form.message,
        };

        try {
          this.requestDataSet("success", "has been sent");
          this.openModal();

          const response = await fetch(url, {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(formData),
          });
          await response.json();
          console.log("form success");
        } catch (error) {
          console.error("error", error);
        }

        setTimeout(() => {
          this.request.loading = false;
        }, 2000);

        setTimeout(() => {
          this.closeModal();
          this.clearForm();
        }, 5000);
      }
    },

    clearForm() {
      this.$v.$reset();
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
    requestDataSet(status, message) {
      this.request.status = status;
      this.request.message = message;
    },

    openModal() {
      this.$refs.modal.handleOpen();
    },
    closeModal() {
      this.$refs.modal.handleClose();
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-form {
  .btn {
    width: 100%;
    max-width: 32.8rem;

    @include media-breakpoint-down(sm) {
      max-width: 100%;
    }
  }

  .donut {
    display: inline-block;
    border: 4px solid rgba($black, 0.5);
    border-left-color: $black;
    border-radius: 50%;
    width: 4.3rem;
    height: 4.3rem;
    animation: donut-spin 1.2s linear infinite;

    @keyframes donut-spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .modal {
    .h3 {
      margin-bottom: 3.6rem;
      font-size: 4.6rem;
    }
  }
}
</style>

<style lang="scss">
.contact-form {
  &.input-label-style-1 {
    .input-group {
      .label {
        background: $wild-sand;
      }
    }
  }
}
</style>
