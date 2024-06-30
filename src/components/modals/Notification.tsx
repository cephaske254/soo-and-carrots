import {
  forwardRef,
  memo,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { Modal, ModalProps, StyleSheet, View } from "react-native";
import { IconButton } from "../IconButton";
import { CloseIcon, StarIcon } from "src/icons";
import { PRIMARY, spacing } from "src/theme";
import { Typography } from "../Typography";
import { Button } from "../Button";

export const NotificationModal = forwardRef<
  NotificationModalRef,
  NotificationModalProps & ModalProps
>(function NotificationModal(props, ref) {
  const [open, setOpen] = useState(false);

  const actions = useMemo(
    () => ({
      close() {
        setOpen(false);
      },
      open() {
        setOpen(true);
      },
      set: setOpen,
      toggle() {
        setOpen((prev) => !prev);
      },
    }),
    []
  );

  useImperativeHandle(ref, () => actions, [actions]);

  return (
    <Modal animationType="fade" {...props} visible={open}>
      <NotificationModalContent {...props} {...actions} />
    </Modal>
  );
});

export const NotificationModalContent: React.FC<
  NotificationModalContentProps
> = ({ title, description, close }) => {
  return (
    <View style={styles.backdrop}>
      <View style={styles.container}>
        <View style={styles.header}>
          <IconButton color="primary" disabled>
            <StarIcon />
          </IconButton>

          <IconButton variant="outline" onPress={close}>
            <CloseIcon />
          </IconButton>
        </View>

        <Typography variant="title2" style={styles.title}>
          {title}
        </Typography>

        <Typography variant="body2" style={styles.title}>
          {description}
        </Typography>

        <View style={styles.footer}>
          <Button rounded variant="contained" onPress={close}>
            Got it
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: spacing.md,
  },
  container: {
    backgroundColor: "white",
    borderRadius: spacing.lg,
    padding: 16,
    width: "100%",

    shadowColor: PRIMARY.main,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
  footer: {
    marginTop: spacing.xl,
  },
  title: {
    marginTop: spacing.md,
  },
});

export type NotificationModalProps = {
  title: string;
  description: string;
};

export type NotificationModalRef = {
  open(): void;
  close(): void;
  toggle(): void;
  set: React.Dispatch<React.SetStateAction<boolean>>;
};
type NotificationModalContentProps = NotificationModalProps &
  Partial<NotificationModalRef>;
