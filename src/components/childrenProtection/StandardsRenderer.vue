<template>
    <div class="text-black80">
        <div v-for="(standard, standardIndex) in standards" :key="standardIndex" class="grid gap-9">
            <div class="text-center">
                <h3 class="text-[28px] max-lg:text-[20px]">§ {{ standardIndex + 1 }}</h3>
            </div>
            <h2 class="text-center leading-8 text-balance text-[28px] max-lg:text-[20px]">{{ standard.title }}</h2>
            <div>
                <RuleItem
                    v-for="(rule, ruleIndex) in standard.rules"
                    :key="ruleIndex"
                    :rule="rule"
                    :index="ruleIndex + 1"
                    :parent-indices="[]"
                    order-style="numbered_dot"
                    :is-top-level="true"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Standard } from './standards';
import RuleItem from './RuleItem.vue';


defineProps<{
    standards: Standard[]
}>();

</script>
