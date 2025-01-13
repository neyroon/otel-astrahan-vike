// vite.config.ts
import preact from "file:///Users/aosipov/Desktop/otel-astrahan/otel-astrahan-vike/node_modules/@preact/preset-vite/dist/esm/index.mjs";
import wyw from "file:///Users/aosipov/Desktop/otel-astrahan/otel-astrahan-vike/node_modules/@wyw-in-js/vite/esm/index.mjs";
import path from "path";
import vike from "file:///Users/aosipov/Desktop/otel-astrahan/otel-astrahan-vike/node_modules/vike/dist/esm/node/plugin/index.js";
import { ViteImageOptimizer } from "file:///Users/aosipov/Desktop/otel-astrahan/otel-astrahan-vike/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/aosipov/Desktop/otel-astrahan/otel-astrahan-vike";
var config = {
  plugins: [
    preact(),
    vike({ prerender: true }),
    wyw({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"]
      }
    }),
    ViteImageOptimizer()
  ],
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks Vike's CI
  optimizeDeps: {
    include: [
      "preact/devtools",
      "preact/debug",
      "preact/jsx-dev-runtime",
      "preact",
      "preact/hooks"
    ]
  },
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__vite_injected_original_dirname, "workspaces/components-kit")
      },
      {
        find: "@foundation",
        replacement: path.resolve(__vite_injected_original_dirname, "workspaces/foundation-kit/index")
      },
      {
        find: "@hooks",
        replacement: path.resolve(__vite_injected_original_dirname, "workspaces/hooks/index")
      },
      {
        find: "@tokens",
        replacement: path.resolve(__vite_injected_original_dirname, "workspaces/tokens/index")
      }
    ]
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYW9zaXBvdi9EZXNrdG9wL290ZWwtYXN0cmFoYW4vb3RlbC1hc3RyYWhhbi12aWtlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYW9zaXBvdi9EZXNrdG9wL290ZWwtYXN0cmFoYW4vb3RlbC1hc3RyYWhhbi12aWtlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hb3NpcG92L0Rlc2t0b3Avb3RlbC1hc3RyYWhhbi9vdGVsLWFzdHJhaGFuLXZpa2Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcHJlYWN0IGZyb20gXCJAcHJlYWN0L3ByZXNldC12aXRlXCI7XG5pbXBvcnQgd3l3IGZyb20gXCJAd3l3LWluLWpzL3ZpdGVcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgdmlrZSBmcm9tIFwidmlrZS9wbHVnaW5cIjtcbmltcG9ydCB7IFZpdGVJbWFnZU9wdGltaXplciB9IGZyb20gXCJ2aXRlLXBsdWdpbi1pbWFnZS1vcHRpbWl6ZXJcIjtcblxuY29uc3QgY29uZmlnID0ge1xuICBwbHVnaW5zOiBbXG4gICAgcHJlYWN0KCksXG4gICAgdmlrZSh7IHByZXJlbmRlcjogdHJ1ZSB9KSxcbiAgICB3eXcoe1xuICAgICAgaW5jbHVkZTogW1wiKiovKi57dHMsdHN4fVwiXSxcblxuICAgICAgYmFiZWxPcHRpb25zOiB7XG4gICAgICAgIHByZXNldHM6IFtcIkBiYWJlbC9wcmVzZXQtdHlwZXNjcmlwdFwiLCBcIkBiYWJlbC9wcmVzZXQtcmVhY3RcIl0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFZpdGVJbWFnZU9wdGltaXplcigpLFxuICBdLFxuICAvLyBXZSBtYW51YWxseSBhZGQgYSBsaXN0IG9mIGRlcGVuZGVuY2llcyB0byBiZSBwcmUtYnVuZGxlZCwgaW4gb3JkZXIgdG8gYXZvaWQgYSBwYWdlIHJlbG9hZCBhdCBkZXYgc3RhcnQgd2hpY2ggYnJlYWtzIFZpa2UncyBDSVxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXG4gICAgICBcInByZWFjdC9kZXZ0b29sc1wiLFxuICAgICAgXCJwcmVhY3QvZGVidWdcIixcbiAgICAgIFwicHJlYWN0L2pzeC1kZXYtcnVudGltZVwiLFxuICAgICAgXCJwcmVhY3RcIixcbiAgICAgIFwicHJlYWN0L2hvb2tzXCIsXG4gICAgXSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IFwiQGNvbXBvbmVudHNcIixcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwid29ya3NwYWNlcy9jb21wb25lbnRzLWtpdFwiKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IFwiQGZvdW5kYXRpb25cIixcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwid29ya3NwYWNlcy9mb3VuZGF0aW9uLWtpdC9pbmRleFwiKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IFwiQGhvb2tzXCIsXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIndvcmtzcGFjZXMvaG9va3MvaW5kZXhcIiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiBcIkB0b2tlbnNcIixcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwid29ya3NwYWNlcy90b2tlbnMvaW5kZXhcIiksXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVWLE9BQU8sWUFBWTtBQUMxVyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sVUFBVTtBQUNqQixTQUFTLDBCQUEwQjtBQUpuQyxJQUFNLG1DQUFtQztBQU16QyxJQUFNLFNBQVM7QUFBQSxFQUNiLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLEtBQUssRUFBRSxXQUFXLEtBQUssQ0FBQztBQUFBLElBQ3hCLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxlQUFlO0FBQUEsTUFFekIsY0FBYztBQUFBLFFBQ1osU0FBUyxDQUFDLDRCQUE0QixxQkFBcUI7QUFBQSxNQUM3RDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsbUJBQW1CO0FBQUEsRUFDckI7QUFBQTtBQUFBLEVBRUEsY0FBYztBQUFBLElBQ1osU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVywyQkFBMkI7QUFBQSxNQUNsRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLGtDQUFXLGlDQUFpQztBQUFBLE1BQ3hFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsd0JBQXdCO0FBQUEsTUFDL0Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyx5QkFBeUI7QUFBQSxNQUNoRTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLHNCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=
