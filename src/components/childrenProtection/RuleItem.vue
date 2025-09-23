<template>
  <div :class="{'mb-6': isTopLevel}">
    <p :class="{'font-medium': isTopLevel}" v-html="text" class="text-black80/80"></p>
    
    <template v-if="rule.rules && rule.rules.length > 0">
      <RuleItem
        v-for="(nestedRule, nestedIndex) in rule.rules"
        :key="nestedIndex"
        :rule="nestedRule"
        :index="nestedIndex + 1"
        :parent-indices="[...parentIndices, index]"
        :order-style="rule.orderStyle ?? 'numbered_parenthesis'"
        :is-top-level="false"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { OrderStyle, Rule } from './standards';


const props = defineProps<{
  rule: Rule
  index: number
  parentIndices: number[]
  orderStyle: OrderStyle
  isTopLevel: boolean
}>()

const getOrderLabel = computed(() => {
  
    if (props.isTopLevel) {
      return `${props.index}.`
    }
    
    switch (props.orderStyle) {
      case 'numbered_dot':
        const parentNumber = props.parentIndices[props.parentIndices.length - 1]
        return `${parentNumber}.${props.index}.`
      
      case 'numbered_parenthesis': return `${props.index})`
      
      case 'dot': return '•'
      
      default:
        return `${props.index}.`
    }
  
})

const text = computed((): string => `${getOrderLabel.value} ${props.rule.text}`)
</script>