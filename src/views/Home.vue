<template>
  <v-container>
     <v-row>
       <v-col cols="4">
<v-card color="#385F73" dark>
            <v-card-title class="headline">จำนวนลูกค้า</v-card-title>
            <v-card-text ><div class="font-big"> 50 คน</div></v-card-text>
            <v-card-actions>
              <v-btn text>ข้อมูลลูกค้า</v-btn>
            </v-card-actions>
          </v-card>
       </v-col>
       <v-col cols="4">
<v-card color="#385F73" dark>
            <v-card-title class="headline">จำนวนสินค้า</v-card-title>
            <v-card-text ><div class="font-big"> 20 ชิ้น</div></v-card-text>
            <v-card-actions>
              <v-btn text>ข้อมูลสินค้า</v-btn>
            </v-card-actions>
          </v-card>
       </v-col>
       <v-col cols="4">
<v-card color="#385F73" dark>
            <v-card-title class="headline">จำนวนรายงาน</v-card-title>
            <v-card-text ><div class="font-big"> 16 รายการ</div></v-card-text>
            <v-card-actions>
              <v-btn text>ข้อมูลรายงาน</v-btn>
            </v-card-actions>
          </v-card>
       </v-col>
     </v-row>
     
     
  </v-container>
</template>
<script>
export default {
}
</script>
<style scope>
.font-big{

 font-size: 30px;
}
</style>
