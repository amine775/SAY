<template>
<div>
    <v-list>
         <v-list-group
        prepend-icon="account_circle"
        value="true"
        >
        <template v-slot:activator>
          <v-list-item-title>Selectionner un model</v-list-item-title>
        </template>
        <v-list-group sub-group>
          <v-list-item
            v-for="marque in marques" :key="marque.code">
            <v-list-item-title v-text="marque.libelle" tokCode="marque.code" ></v-list-item-title>
                <v-list-group sub-group>
                    <div v-for="model in models" :key="model.libelle">
                    <v-list-item v-if="marque.code===model.code"  >
                        <v-list-item-title v-text="model.libelle"></v-list-item-title>
                     </v-list-item>
                     </div>
                 </v-list-group>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
</div>
</template>

<script>
export default {    
  data() {
    return {
    
    marques: [
        {libelle: 'Peugeot', code: '1'},
        {libelle: 'Audi', code:'2'}, 
        {libelle: 'BMW', code:'3'}
    ],
    models: [
        {code:'2', libelle:'A1'},
        {code:'2', libelle:'A3'},
        {code:'2', libelle:'A4'},
        {code:'1', libelle:'208'},
        {code:'1', libelle:'3008'},
        {code:'3', libelle:'Serie 1'},
        {code:'3', libelle:'Serie 3'},
        {code:'3', libelle:'Serie 5'},
    ],
      tokCode:null,
       cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete'],
      ],
    }
  }
}
</script>