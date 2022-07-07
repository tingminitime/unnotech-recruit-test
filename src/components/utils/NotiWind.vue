<template>
  <!-- Success notify -->
  <NotificationGroup group="success">
    <div
      class="pointer-events-none fixed inset-x-0 top-0 bottom-4 z-50 flex items-end justify-center py-16 px-4"
    >
      <div class="">
        <Notification
          v-slot="{ notifications }"
          enter="transform ease-out duration-300 transition"
          enter-from="translate-y-4 opacity-0"
          enter-to="translate-y-0 opacity-100 sm:translate-y-0"
          leave="transition ease-in duration-300"
          leave-from="opacity-100 translate-y-0"
          leave-to="opacity-0 translate-y-4"
          move="transition duration-500"
          move-delay="delay-300"
        >
          <div
            v-for="notification in notifications"
            :key="notification.id"
            class="relative mx-auto mt-4 flex rounded-lg bg-white shadow-md"
          >
            <div class="absolute -left-0.5 -top-0.5 h-3 w-3 rounded-full bg-green-500 shadow-md"></div>
            <div class="py-2 px-8">
              <span class="text-myBrown text-center text-base font-medium">{{ notification.title }}</span>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>

  <!-- Failed notify -->
  <NotificationGroup group="error">
    <div
      class="pointer-events-none fixed inset-x-0 top-0 bottom-4 z-50 flex items-end justify-center py-16 px-4"
    >
      <div class="">
        <Notification
          v-slot="{ notifications }"
          enter="transform ease-out duration-300 transition"
          enter-from="translate-y-4 opacity-0"
          enter-to="translate-y-0 opacity-100 sm:translate-y-0"
          leave="transition ease-in duration-300"
          leave-from="opacity-100 translate-y-0"
          leave-to="opacity-0 translate-y-4"
          move="transition duration-500"
          move-delay="delay-300"
        >
          <div
            v-for="notification in notifications"
            :key="notification.id"
            class="relative mx-auto mt-4 flex rounded-lg bg-white shadow-md"
          >
            <div class="absolute -left-0.5 -top-0.5 h-3 w-3 rounded-full bg-red-500 shadow-md"></div>
            <div class="py-2 px-8">
              <span class="text-myBrown text-center text-base font-medium">{{ notification.title }}</span>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>
</template>

<script setup>

</script>