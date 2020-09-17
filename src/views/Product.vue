<template>
  <v-container>
    สินค้า
      <template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation>
    <v-row>

</v-row>
<v-row>
  <v-col cols ="3">
    <v-text-field
      v-model="idproduct"
      :counter="6"
      :rules="idproductRules"
      label="รหัสสินค้า"
      required
    ></v-text-field>
  </v-col>
  <v-col cols ="3">
    <v-text-field
      v-model="nameproduct"
      :counter="20"
      :rules="nameproductRules"
      label="ชื่อสินค้า"
      required
    ></v-text-field>
  </v-col>
  <v-col cols ="3">
    <v-text-field
      v-model="type"
      :counter="20"
      :rules="typeRules"
      label="ปรเภทสินค้า"
      required
    ></v-text-field>
  </v-col>
<v-row>
  <v-col cols ="2.5">
    <v-text-field
      v-model="weight"
      :counter="20"
      :rules="weightRules"
      label="น้ำหนักสินค้า"
      required
    ></v-text-field>
  </v-col>
 <v-col cols ="2.5">
    <v-text-field
      v-model="wide"
      :counter="20"
      :rules="wideRules"
      label="ความกว้างของสินค้า"
      required
    ></v-text-field>
  </v-col>
  <v-col cols ="2.5">
    <v-text-field
      v-model="long"
      :counter="20"
      :rules="longRules"
      label="ความยาวของสินค้า"
      required
    ></v-text-field>
  </v-col>
  <v-col cols ="2.5">
    <v-text-field
      v-model="high"
      :counter="20"
      :rules="highRules"
      label="ความสูงของสินค้า"
      required
    ></v-text-field>
  </v-col>
  </v-row>
  <v-col cols ="2">
    <v-text-field
      v-model="number"
      :counter="20"
      :rules="numberRules"
      label="จำนวนสินค้า"
      required
    ></v-text-field>
  </v-col>
  
  <v-row>
 <v-col cols ="4">
    <v-text-field
      v-model="admisdate"
      :counter="20"
      :rules="admisdateRules"
      label="วันรับเข้า"
      required
    ></v-text-field>
  </v-col>
  <v-col cols ="4">
    <v-text-field
      v-model="manufacturedate"
      :counter="20"
      :rules="manufacturedateRules"
      label="วันผลิต"
      required
    ></v-text-field>
  </v-col>
  <v-col cols ="4">
    <v-text-field
      v-model="saledate"
      :counter="20"
      :rules="saledateRules"
      label="วันขายล่าสุด"
      required
    ></v-text-field>
  </v-col>
  </v-row>
</v-row>
  
  <v-col cols ="10">
    <v-text-field
      v-model="detail"
      :counter="20"
      :rules="detailRules"
      label="รายละเอียดสินค้า"
      required
    ></v-text-field>
  </v-col>
    
    <v-checkbox
      v-model="checkbox"
      :rules="checkboxRules"
      label="ยอมรับเงื่อนไข?"
      required
    ></v-checkbox>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      เพิ่มสินค้า
    </v-btn>
    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      เคลียร์
    </v-btn>
 <!--   <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn> -->
  </v-form>
  <v-row>
    <v-col cols="12">
      <v-card>
    <v-card-title>
      ข้อมูลสินค้า
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
    </v-col>
  </v-row>
</template>
  </v-container>
</template>
<script>
export default {data: () => ({
      valid: true,
      name: '',
      lastname: '',
      nameRules: [
        v => !!v || 'กรุณากรอกชื่อ',
        v => (v && v.length <= 20) || 'ชื่อต้องมีขนาดไม่เกิน 20 ตัวอักษร',
      ],
      lastnameRules: [
        v => !!v || 'กรุณากรอกนามสกุล',
        v => (v && v.length <= 20) || 'นามสกุลต้องมีขนาดไม่เกิน 20 ตัวอักษร',
      ],
      email: '',
      emailRules: [
        v => !!v || 'กรุณากรอกอีเมล',
        v => /.+@.+\..+/.test(v) || 'รูปแบบอีเมบไม่ถูกต้อง',
        v => (v && v.length <= 50) || 'อีเมลต้องมีความยาวไม่เกิน 50 ตัวอักษร',
      ],
      tel: '',
      telRules: [
      v => !!v || 'กรุณากรอกเบอร์โทรศัพท์',
        v => (v && v.length <= 10) || 'เบอร์โทรศัพท์ต้องมีความยาวไม่เกิน 10 หลัก',
      ],
      checkboxRules:[v => !!v || 'ต้องกดยอมรับเงื่อนไขก่อนสมัครสมาชิก'],
      select: null,
      items: ['Item 1', 'Item 2','Item 3', 'Item 4',],
      sex: ["ชาย","หญิง"],
      checkbox: false,
      a_number: "",
      a_groub: "",
      a_road: "",
      a_lane: "",
      a_subdis: "",
      a_dis: "",
      a_province: "",
      addressRules: [
        v => !!v || 'กรุณากรอกข้อมูล',
        v => (v && v.length <= 20) || 'ข้อมูลต้องมีขนาดไม่เกิน 20 ตัวอักษร',
      ],
      search: '',
      headers: [
          {text: 'รหัสสินค้า', value: 'idproduct',},
          { text: 'ชื่อสินค้า', value: 'nameproduct' },
          { text: 'ประเภทสินค้า', value: 'type' },
          { text: 'น้ำหนักสินค้า', value: 'weight' },
          { text: 'ความยาวสินค้า', value: 'long' },
          {text: 'ความสูงสินค้า', value: 'high',},
          { text: 'จำนวนสินค้า', value: 'number' },
          { text: 'วันรับเข้า', value: 'admisdate' },
          { text: 'วันผลิต', value: 'manufacturedate' },
          { text: 'วันขายล่าสุด', value: 'saledate' },
          { text: 'รายละเอียดสินค้า', value: 'detail' },
        ],
      desserts: []
    }),
    methods: {
      validate () {
        // this.$refs.form.validate()
    if (this.$refs.form.validate()){
       // console.log(this.name)
      //  console.log(this.lastname)
        //console.log(this.email)
        //console.log(this.tel)
        //console.log(this.select)
        //console.log(this.a_number)
        //console.log(this.a_groub)
        //console.log(this.a_road)
        //console.log(this.a_lane)
        //console.log(this.a_subdis)
        //console.log(this.a_dis)
        //console.log(this.a_province)
        this.desserts.push({
           idproduct: `${this.idproduct}`,
           nameproduct: `${this.nameproduct}`,
           type: `${this.type}`,
           weight: `${this.weight}`,
           long: `${this.long}`,
           high: `${this.high}`,
           number: `${this.number}`,
           admisdate: `${this.admisdate}`,
           manufacturedate: `${this.manufacturedate}`,
           saledate: `${this.saledate}`,
           detail: `${this.detail}`,
           
        }
        )
    }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>
<style>
</style>
