import QRCodeImage from "./assets/image-qr-code.png";
import styles from "./QRCode.module.css";

function QRCode({ children }: React.PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <img src={QRCodeImage} className={styles.image} alt="QR Code" />
      <div className={styles.textWrapper}>{children}</div>
    </div>
  );
}

export default QRCode;
