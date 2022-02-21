export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
        },

        sizeSmall: {
          height: 40,
        },
        sizeLarge: {
          height: 48,
        },

        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          backgroundImage: theme.palette.gradients.primaryAndSecondary.horizontal.dark,
          "&:hover": {
            backgroundImage: theme.palette.gradients.primaryAndSecondary.horizontal.main,
          },
          "&:disabled": {
            color: theme.palette.grey[200],
          },
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        containedInfo: {
          boxShadow: theme.customShadows.info,
        },
        containedSuccess: {
          boxShadow: theme.customShadows.success,
        },
        containedWarning: {
          boxShadow: theme.customShadows.warning,
        },
        containedError: {
          boxShadow: theme.customShadows.error,
        },
        // outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
